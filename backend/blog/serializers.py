from rest_framework import serializers
from taggit.serializers import TagListSerializerField, TaggitSerializer
from taggit.models import Tag
from .models import Post

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("id", "name", "slug")

class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField(required=False)
    author = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'excerpt',
            'content',
            'published',
            'author',
            'tags',
            'created_at',
            'updated_at',
        )
        # Other read-only fields that are not model-generated can stay here
        read_only_fields = ('id', 'author', 'created_at', 'updated_at')
