from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.utils.text import slugify
from .models import Post
from taggit.models import Tag

User = get_user_model()

class PostAPITests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        """Set up data for the whole test case."""
        cls.staff_user = User.objects.create_user(username='staff', password='password', is_staff=True)
        cls.user = User.objects.create_user(username='user', password='password')

        # Published Post
        cls.published_post = Post.objects.create(
            title='A Published Post',
            content='Some content for the published post.',
            published=True,
            author=cls.staff_user
        )
        cls.published_post.tags.add('django', 'api')

        # Draft Post
        cls.draft_post = Post.objects.create(
            title='A Draft Post',
            content='Some content for the draft post.',
            published=False,
            author=cls.staff_user
        )
        cls.draft_post.tags.add('draft')

    # --- List View Tests --- #

    def test_anonymous_user_can_list_only_published_posts(self):
        response = self.client.get(reverse('blog-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.published_post.title)

    def test_staff_user_can_list_all_posts(self):
        self.client.force_authenticate(user=self.staff_user)
        response = self.client.get(reverse('blog-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 2)

    # --- Detail View Tests --- #

    def test_anonymous_user_can_view_published_post(self):
        url = reverse('blog-detail', kwargs={'slug': self.published_post.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.published_post.title)

    def test_anonymous_user_cannot_view_draft_post(self):
        url = reverse('blog-detail', kwargs={'slug': self.draft_post.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_staff_user_can_view_draft_post(self):
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-detail', kwargs={'slug': self.draft_post.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # --- Create View Tests --- #

    def test_staff_user_can_create_post(self):
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-list')
        data = {
            'title': 'A New Post by Staff',
            'content': 'Some great new content.',
            'published': True,
            'tags': ['new', 'testing']
        }
        response = self.client.post(url, data, format='json')
        if response.status_code != status.HTTP_201_CREATED:
            print(f"CREATE POST ERROR: {response.status_code}")
            print(f"Response data: {response.data}")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 3)
        new_post = Post.objects.get(slug=slugify(data['title']))
        self.assertEqual(new_post.author, self.staff_user)
        self.assertEqual(new_post.tags.count(), 2)

    def test_non_staff_user_cannot_create_post(self):
        self.client.force_authenticate(user=self.user)
        url = reverse('blog-list')
        data = {'title': 'Title', 'content': 'Content'}
        response = self.client.post(url, data, format='json')
        # Based on IsAdminUser permission, this should be 403 Forbidden
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # --- Update View Tests --- #

    def test_staff_user_can_update_post(self):
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-detail', kwargs={'slug': self.published_post.slug})
        data = {
            'title': 'An Updated Title',
            'published': False,
            'tags': ['updated'],
            'content': self.published_post.content,  # Ajouté pour éviter un 400 si content est requis
        }
        response = self.client.patch(url, data, format='json')
        if response.status_code != status.HTTP_200_OK:
            print(f"UPDATE POST ERROR: {response.status_code}")
            print(f"Response data: {response.data}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.published_post.refresh_from_db()
        self.assertEqual(self.published_post.title, data['title'])
        self.assertFalse(self.published_post.published)
        self.assertEqual(self.published_post.tags.count(), 1)
        self.assertEqual(self.published_post.tags.first().name, 'updated')

    # --- Delete View Tests --- #

    def test_staff_user_can_delete_post(self):
        self.client.force_authenticate(user=self.staff_user)
        url = reverse('blog-detail', kwargs={'slug': self.published_post.slug})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Post.objects.count(), 1)

    # --- Filtering and Searching --- #

    def test_filter_by_tag(self):
        url = f"{reverse('blog-list')}?tags__name=django"
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.published_post.title)

    def test_search_by_term(self):
        url = f"{reverse('blog-list')}?search=published"
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['title'], self.published_post.title)


class TagCloudAPITests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        author_user = User.objects.create_user(username='tag_author', password='password')
        post1 = Post.objects.create(title='Post 1', content='c1', published=True, author=author_user)
        post1.tags.add('tag1', 'tag2')

        post2 = Post.objects.create(title='Post 2', content='c2', published=False, author=author_user)
        post2.tags.add('tag1', 'tag3') # tag3 is on a draft post

    def test_tag_cloud_returns_only_tags_from_published_posts(self):
        response = self.client.get(reverse('blog-tags'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        tag_names = [tag['name'] for tag in response.data]
        self.assertEqual(len(tag_names), 2)
        self.assertIn('tag1', tag_names)
        self.assertIn('tag2', tag_names)
        self.assertNotIn('tag3', tag_names)
