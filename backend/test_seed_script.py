from django.db import transaction
from projects.models import Project, Technology

with transaction.atomic():
    # Clear existing projects (keep technologies for now)
    Project.objects.all().delete()

    # Create a test project
    test_project = Project.objects.create(
        title='Projet Test Unique',
        slug='projet-test-unique',
        summary='Ceci est un projet de test pour vérifier la persistance.',
        description='Description détaillée du projet de test.',
        image='projects/images/test.jpg',
        demo_url='#',
        code_url='#',
        status='published'
    )

    # Add some existing technologies to it
    # Ensure technologies exist before trying to get them
    try:
        python_tech = Technology.objects.get(name='Python')
        react_tech = Technology.objects.get(name='React')
        test_project.tech_stack.add(python_tech, react_tech)
    except Technology.DoesNotExist:
        print("Technologies Python or React not found. Please run the full seed script first.")

print("Projet test unique créé (avec transaction atomique).")