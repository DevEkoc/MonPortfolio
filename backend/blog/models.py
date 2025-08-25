from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.conf import settings
from taggit.managers import TaggableManager
from django_prose_editor.fields import ProseEditorField

class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, unique_for_date='published_at', blank=True)
    excerpt = models.TextField(blank=True, null=True)
    content = ProseEditorField(
        extensions={
            "Heading": True,
            "Bold": True,
            "Italic": True,
            "Strike": True,
            "Underline": True,
            "Link": True,
            "BulletList": True,
            "OrderedList": True,
            "Blockquote": True,
            "HorizontalRule": True,
            "HardBreak": True,
            "CodeBlock": True, # Pour le code
        },
        sanitize=True
    )
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

        # Si l'article est marqué comme publié mais n'a pas de date, on la définit maintenant
        if self.published and not self.published_at:
            self.published_at = timezone.now()
        # Si l'article n'est PAS marqué comme publié, on s'assure que published_at est None
        elif not self.published:
            self.published_at = None

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title