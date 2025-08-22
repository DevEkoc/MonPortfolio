from django.core.management.base import BaseCommand
from blog.models import Post
from faker import Faker
from django.utils.text import slugify
import random
from taggit.models import Tag

class Command(BaseCommand):
    help = 'Seeds the database with 10 fake blog posts.'

    def handle(self, *args, **options):
        fake = Faker()
        self.stdout.write('Seeding 10 blog posts...')

        # Ensure some tags exist for random assignment
        existing_tags = list(Tag.objects.all())
        if not existing_tags:
            for _ in range(5):
                Tag.objects.create(name=fake.word())
            existing_tags = list(Tag.objects.all())

        for i in range(10):
            title = fake.sentence(nb_words=6)
            content = fake.paragraphs(nb=5, ext_word_list=None)
            content = '\n\n'.join(content)
            excerpt = fake.paragraph(nb_sentences=3)
            published = random.choice([True, False])
            
            # Ensure slug is unique for the date if published
            base_slug = slugify(title)
            slug = base_slug
            counter = 1
            while Post.objects.filter(slug=slug).exists(): # Simple check, unique_for_date is handled by model save
                slug = f"{base_slug}-{counter}"
                counter += 1

            post = Post.objects.create(
                title=title,
                slug=slug,
                excerpt=excerpt,
                content=content,
                published=published,
            )

            # Add random tags
            num_tags = random.randint(1, 3)
            random_tags = random.sample(existing_tags, min(num_tags, len(existing_tags)))
            for tag in random_tags:
                post.tags.add(tag.name)
            
            self.stdout.write(f'Created post: "{post.title}" (Published: {post.published})')

        self.stdout.write(self.style.SUCCESS('Successfully seeded 10 blog posts.'))