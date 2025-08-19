from rest_framework import serializers
from .models import Technology, Project

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    tech_stack = TechnologySerializer(many=True, read_only=True)

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
