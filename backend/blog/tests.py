from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.utils import timezone
from .models import Post

User = get_user_model()

class PostAPITests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        # Create users
        cls.staff_user = User.objects.create_user(username='staffuser', password='testpass', is_staff=True)
        cls.normal_user = User.objects.create_user(username='normaluser', password='testpass')

        # Create posts
        cls.post1 = Post.objects.create(
            title='Published Post 1',
            slug='published-post-1',
            excerpt='Excerpt for published post 1',
            content='Content for published post 1',
            published=True,
        )
        cls.post1.tags.add('django', 'python')

        cls.post2 = Post.objects.create(
            title='Published Post 2',
            slug='published-post-2',
            excerpt='Excerpt for published post 2',
            content='Content for published post 2',
            published=True,
        )
        cls.post2.tags.add('react', 'javascript')

        cls.post3 = Post.objects.create(
            title='Draft Post 3',
            slug='draft-post-3',
            excerpt='Excerpt for draft post 3',
            content='Content for draft post 3',
            published=False,
        )
        cls.post3.tags.add('draft', 'test')

    def test_list_posts_anonymous_user(self):
        """
        Anonymous user should only see published posts.
        """
        url = reverse('blog-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 2) # Only post1 and post2 are published
        self.assertEqual(len(response.data['results']), 2)
        self.assertIn(self.post1.title, [p['title'] for p in response.data['results']])
        self.assertIn(self.post2.title, [p['title'] for p in response.data['results']])
        self.assertNotIn(self.post3.title, [p['title'] for p in response.data['results']])

    def test_list_posts_staff_user(self):
        """
        Staff user should see all posts, including drafts.
        """
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 3) # All posts
        self.assertEqual(len(response.data['results']), 3)
        self.assertIn(self.post3.title, [p['title'] for p in response.data['results']])

    def test_retrieve_post_anonymous_user(self):
        """
        Anonymous user can retrieve a published post.
        """
        url = reverse('blog-detail', kwargs={'slug': self.post1.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.post1.title)

    def test_retrieve_draft_post_anonymous_user(self):
        """
        Anonymous user cannot retrieve a draft post.
        """
        url = reverse('blog-detail', kwargs={'slug': self.post3.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_retrieve_draft_post_staff_user(self):
        """
        Staff user can retrieve a draft post.
        """
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-detail', kwargs={'slug': self.post3.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.post3.title)

    def test_filter_posts_by_published_anonymous(self):
        """
        Anonymous user can filter by published status.
        """
        url = reverse('blog-list')
        response = self.client.get(url, {'published': 'True'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 2)

        response = self.client.get(url, {'published': 'False'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 0) # Anonymous user cannot see drafts

    def test_filter_posts_by_published_staff(self):
        """
        Staff user can filter by published status.
        """
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-list')
        response = self.client.get(url, {'published': 'True'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 2)

        response = self.client.get(url, {'published': 'False'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1) # Staff user can see drafts
        self.assertIn(self.post3.title, [p['title'] for p in response.data['results']])

    def test_filter_posts_by_tag(self):
        """
        Posts can be filtered by tag.
        """
        url = reverse('blog-list')
        response = self.client.get(url, {'tags__name': 'python'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.post1.title)

        response = self.client.get(url, {'tags__name': 'javascript'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.post2.title)

        # Draft post tag should not be visible to anonymous user
        response = self.client.get(url, {'tags__name': 'draft'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 0)

    def test_search_posts(self):
        """
        Posts can be searched by title or content.
        """
        url = reverse('blog-list')
        response = self.client.get(url, {'search': 'published post 1'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.post1.title)

        response = self.client.get(url, {'search': 'Content for published post 2'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.post2.title)

        # Search for draft post content should not be visible to anonymous user
        response = self.client.get(url, {'search': 'Content for draft post 3'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 0)

    def test_create_post_anonymous_user(self):
        """
        Anonymous user cannot create a post.
        """
        url = reverse('blog-list')
        data = {'title': 'New Post', 'slug': 'new-post', 'content': 'New content', 'published': True}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(Post.objects.count(), 3) # No new post created

    def test_create_post_staff_user(self):
        """
        Staff user can create a post.
        """
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-list')
        data = {'title': 'New Staff Post', 'slug': 'new-staff-post', 'content': 'New staff content', 'published': True, 'tags': [], 'published_at': timezone.now()}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 4)
        self.assertEqual(Post.objects.get(slug='new-staff-post').title, 'New Staff Post')

    def test_update_post_anonymous_user(self):
        """
        Anonymous user cannot update a post.
        """
        url = reverse('blog-detail', kwargs={'slug': self.post1.slug})
        data = {'title': 'Updated Title'}
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.post1.refresh_from_db()
        self.assertNotEqual(self.post1.title, 'Updated Title')

    def test_update_post_staff_user(self):
        """
        Staff user can update a post.
        """
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-detail', kwargs={'slug': self.post1.slug})
        data = {'title': 'Updated Title', 'slug': 'updated-title', 'content': 'Updated content.', 'tags': [], 'published_at': self.post1.published_at}
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.post1.refresh_from_db()
        self.assertEqual(self.post1.title, 'Updated Title')
        self.assertEqual(self.post1.slug, 'updated-title')

    def test_delete_post_anonymous_user(self):
        """
        Anonymous user cannot delete a post.
        """
        url = reverse('blog-detail', kwargs={'slug': self.post1.slug})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(Post.objects.count(), 3)

    def test_delete_post_staff_user(self):
        """
        Staff user can delete a post.
        """
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-detail', kwargs={'slug': self.post1.slug})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Post.objects.count(), 2)

class PostModelTests(APITestCase):
    def test_published_at_set_on_publish(self):
        """
        published_at should be set when a draft post is published.
        """
        post = Post.objects.create(
            title='Test Post',
            slug='test-post',
            content='Content',
            published=False
        )
        self.assertIsNone(post.published_at)

        post.published = True
        post.save()
        self.assertIsNotNone(post.published_at)
        self.assertLessEqual(post.published_at, timezone.now())

    def test_published_at_not_changed_on_republish(self):
        """
        published_at should not change if a published post is saved again.
        """
        initial_published_at = timezone.now() - timezone.timedelta(days=1)
        post = Post.objects.create(
            title='Test Post',
            slug='test-post',
            content='Content',
            published=True,
            published_at=initial_published_at
        )
        
        # Save again without changing published status
        post.content = "Updated content"
        post.save()
        self.assertEqual(post.published_at, initial_published_at)

    def test_published_at_set_to_none_on_unpublish(self):
        """
        published_at should be set to None when a published post is unpublished.
        """
        post = Post.objects.create(
            title='Test Post',
            slug='test-post',
            content='Content',
            published=True,
            published_at=timezone.now()
        )
        self.assertIsNotNone(post.published_at)

        post.published = False
        post.save()
        self.assertIsNone(post.published_at)

    def test_published_at_none_for_new_draft(self):
        """
        published_at should be None for a newly created draft post.
        """
        post = Post.objects.create(
            title='Draft Post',
            slug='draft-post',
            content='Draft Content',
            published=False
        )
        self.assertIsNone(post.published_at)