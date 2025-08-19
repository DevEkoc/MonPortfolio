from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Project, Technology
from .serializers import ProjectSerializer, TechnologySerializer

class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows technologies to be viewed.
    """
    queryset = Technology.objects.all().order_by('name')
    serializer_class = TechnologySerializer
    pagination_class = None

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Project.objects.filter(status='published').order_by('-created_at')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status', 'tech_stack__name']