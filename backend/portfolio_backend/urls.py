"""
URL configuration for portfolio_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from projects.views import ProjectViewSet, TechnologyViewSet
from blog.views import PostViewSet, TagCloudView
from contact.views import ContactMessageCreateView
from . import views

# API v1 Router
router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'technologies', TechnologyViewSet, basename='technology')
router.register(r'blog', PostViewSet, basename='blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API v1 Endpoints
    path('api/v1/health/', views.health_check, name='health_check'),
    path('api/v1/blog/tags/', TagCloudView.as_view(), name='blog-tags'),
    path('api/v1/', include(router.urls)),

    # Contact Form API
    path('api/v1/contact/', ContactMessageCreateView.as_view(), name='contact-message-create'),

    # Les autres apps (blog, contact) pourront être ajoutées au routeur ici.
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
