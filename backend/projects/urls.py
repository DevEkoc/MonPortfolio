from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, TechnologyViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'technologies', TechnologyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
