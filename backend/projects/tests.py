from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Project, Technology

class ProjectAPITests(APITestCase):
    """
    Tests for the Project API endpoints.
    """

    @classmethod
    def setUpTestData(cls):
        # Create technologies
        cls.tech1 = Technology.objects.create(name='Python')
        cls.tech2 = Technology.objects.create(name='Django')
        cls.tech3 = Technology.objects.create(name='React')

        # Create projects
        cls.project1 = Project.objects.create(
            title='Published Project',
            slug='published-project',
            summary='A project that is published.',
            status='published'
        )
        cls.project1.tech_stack.add(cls.tech1, cls.tech2)

        cls.project2 = Project.objects.create(
            title='Draft Project',
            slug='draft-project',
            summary='A project that is a draft.',
            status='draft'
        )
        cls.project2.tech_stack.add(cls.tech3)

    def test_list_projects_returns_only_published(self):
        """
        Ensure the project list endpoint returns only published projects.
        """
        url = reverse('project-list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['title'], self.project1.title)

    def test_retrieve_project_by_slug(self):
        """
        Ensure we can retrieve a single project by its slug.
        """
        url = reverse('project-detail', kwargs={'slug': self.project1.slug})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.project1.title)

    def test_retrieve_project_404(self):
        """
        Ensure a 404 is returned for a non-existent slug.
        """
        url = reverse('project-detail', kwargs={'slug': 'non-existent-slug'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_filter_projects_by_status(self):
        """
        Ensure projects can be filtered by status.
        The default queryset only returns 'published', so filtering by 'draft' on top of that should yield 0.
        """
        url = reverse('project-list')
        response = self.client.get(url, {'status': 'draft'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 0)

        # Check that filtering by published still works
        response_published = self.client.get(url, {'status': 'published'})
        self.assertEqual(len(response_published.data['results']), 1)

    def test_filter_projects_by_tech_stack(self):
        """
        Ensure projects can be filtered by technology name.
        """
        url = reverse('project-list')
        response = self.client.get(url, {'tech_stack__name': 'Python'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['title'], self.project1.title)

        # The default queryset is published, and the react project is a draft, so we expect 0 results.
        response_react = self.client.get(url, {'tech_stack__name': 'React'})
        self.assertEqual(len(response_react.data['results']), 0)

        # Search for a tech that doesn't exist on a published project.
        response_nonexistent = self.client.get(url, {'tech_stack__name': 'NonExistentTech'})
        self.assertEqual(len(response_nonexistent.data['results']), 0)
