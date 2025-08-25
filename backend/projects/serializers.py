from rest_framework import serializers
from .models import Technology, Project
from django.conf import settings

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    tech_stack = TechnologySerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'title',
            'slug',
            'summary',
            'description',
            'tech_stack',
            'image',
            'demo_url',
            'code_url',
            'status',
            'created_at',
            'updated_at',
        )
        lookup_field = 'slug'

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url)
        # Construire l'URL de l'image par défaut
        default_image_url = f"{settings.MEDIA_URL}projects/images/default.jpg"
        return request.build_absolute_uri(default_image_url)
