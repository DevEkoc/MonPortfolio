from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.conf import settings
from taggit.managers import TaggableManager

class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, unique_for_date='published_at', blank=True)
    excerpt = models.TextField(blank=True, null=True)
    content = models.TextField()
    tags = TaggableManager()
    published = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-published_at',)
        indexes = [
            models.Index(fields=['published']),
            models.Index(fields=['published_at']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        if self.published and not self.published_at:
            self.published_at = timezone.now()
        elif not self.published and self.published_at:
            self.published_at = None
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title