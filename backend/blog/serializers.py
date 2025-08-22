from rest_framework import serializers
from taggit.serializers import TagListSerializerField, TaggitSerializer
from taggit.models import Tag
from .models import Post

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("id", "name", "slug")

class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'slug',
            'excerpt',
            'content',
            'tags',
            'published',
            'published_at',
            'created_at',
            'updated_at',
        )
        read_only_fields = ('created_at', 'updated_at')
        extra_kwargs = {
            'content': {'required': False},
        }
