from rest_framework import serializers
from taggit.serializers import TagListSerializerField, TaggitSerializer
from .models import Post

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
