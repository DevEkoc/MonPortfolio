from django.core.management.base import BaseCommand
from django.db import transaction
from projects.models import Project, Technology

class Command(BaseCommand):
    help = 'Seeds the database with initial project and technology data.'

    def handle(self, *args, **options):
        with transaction.atomic():
            self.stdout.write(self.style.WARNING('Clearing existing projects and technologies...'))
            Project.objects.all().delete()
            Technology.objects.all().delete()

            self.stdout.write(self.style.SUCCESS('Existing data cleared.'))

            # Create Technologies
            tech_data = [
                'Python', 'Django', 'FastAPI', 'Flask', 'React', 'Next.js', 'TypeScript', 
                'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 
                'SQLite', 'Docker', 'Nginx', 'Vue.js', 'Firebase', 'Node.js'
            ]
            tech_objects = {name: Technology.objects.create(name=name) for name in tech_data}
            self.stdout.write(self.style.SUCCESS(f'Created {len(tech_data)} technologies.'))

            # Create Projects
            projects_data = [
                {
                    'title': 'Plateforme E-commerce',
                    'summary': 'Une plateforme de vente en ligne complète avec gestion des produits, des commandes et des utilisateurs.',
                    'description': 'Développement d\'une solution e-commerce robuste avec un back-end Django REST Framework et un front-end React. Inclut l\'intégration de paiement, l\'authentification et un dashboard administrateur.',
                    'tech_stack': ['Django', 'React', 'PostgreSQL', 'Docker'],
                    'image': 'projects/images/ecommerce.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Moteur de Blog',
                    'summary': 'Un moteur de blog moderne et rapide, optimisé pour le SEO, avec un rendu côté serveur.',
                    'description': 'Création d\'un blog performant avec Next.js pour le front-end (SSR) et FastAPI pour une API Python asynchrone et rapide.',
                    'tech_stack': ['Next.js', 'FastAPI', 'TypeScript', 'PostgreSQL'],
                    'image': 'projects/images/blog_engine.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Ce Portfolio',
                    'summary': 'Le site que vous consultez actuellement, conçu pour présenter mes compétences et projets.',
                    'description': 'Un portfolio full-stack utilisant Next.js et Tailwind CSS pour le front-end, et Django pour le back-end API. Le projet est entièrement conteneurisé avec Docker.',
                    'tech_stack': ['Next.js', 'Django', 'Tailwind CSS', 'Docker'],
                    'image': 'projects/images/portfolio.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Dashboard d\'Analyse de Données',
                    'summary': 'Une application web pour visualiser et analyser des ensembles de données complexes.',
                    'description': 'Interface interactive construite avec Vue.js et Chart.js, alimentée par une API légère développée avec Flask. Permet de filtrer et d\'explorer les données en temps réel.',
                    'tech_stack': ['Flask', 'Vue.js', 'JavaScript'],
                    'image': 'projects/images/dashboard.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'API pour Application Mobile',
                    'summary': 'Un back-end sécurisé et performant pour une application mobile de partage social.',
                    'description': 'API RESTful conçue avec Django REST Framework, gérant l\'authentification des utilisateurs (JWT), le stockage de fichiers et les notifications push.',
                    'tech_stack': ['Django', 'PostgreSQL', 'Docker'],
                    'image': 'projects/images/mobile_api.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Raccourcisseur d\'URL',
                    'summary': 'Un service web simple et efficace pour créer des URLs courtes et les suivre.',
                    'description': 'Microservice développé en Python avec Flask et une base de données SQLite pour la simplicité. L\'accent est mis sur la performance et la légèreté.',
                    'tech_stack': ['Python', 'Flask', 'SQLite'],
                    'image': 'projects/images/url_shortener.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Application de Chat en Temps Réel',
                    'summary': 'Une application de messagerie instantanée utilisant les WebSockets.',
                    'description': 'Application de chat construite avec Node.js et Socket.io pour la communication en temps réel, avec une interface utilisateur simple et réactive en React.',
                    'tech_stack': ['Node.js', 'React', 'JavaScript'],
                    'image': 'projects/images/chat_app.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Outil de Gestion de Tâches',
                    'summary': 'Un "To-Do list" collaboratif avec une base de données en temps réel.',
                    'description': 'Application de type "single-page" (SPA) développée avec Vue.js et utilisant Firebase (Firestore) pour la synchronisation des données en temps réel entre les utilisateurs.',
                    'tech_stack': ['Vue.js', 'Firebase', 'JavaScript'],
                    'image': 'projects/images/task_manager.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Application Météo',
                    'summary': 'Une application simple pour consulter la météo actuelle et les prévisions.',
                    'description': 'Front-end en React qui interroge une API météo tierce (ex: OpenWeatherMap) pour afficher des informations météorologiques à jour.',
                    'tech_stack': ['React', 'JavaScript', 'HTML5', 'CSS3'],
                    'image': 'projects/images/weather_app.jpg',
                    'demo_url': '#', 'code_url': '#'
                },
                {
                    'title': 'Générateur de Site Statique',
                    'summary': 'Un script Python pour générer un site web statique à partir de fichiers Markdown.',
                    'description': 'Outil en ligne de commande développé en Python pur, qui convertit un répertoire de fichiers Markdown en un site web HTML/CSS complet.',
                    'tech_stack': ['Python'],
                    'image': 'projects/images/static_generator.jpg',
                    'demo_url': '#', 'code_url': '#'
                }
            ]

            for project_info in projects_data:
                project = Project.objects.create(
                    title=project_info['title'],
                    slug=project_info['title'].lower().replace(' ', '-').replace('\'','').replace('é', 'e').replace('à', 'a'),
                    summary=project_info['summary'],
                    description=project_info['description'],
                    image=project_info['image'],
                    demo_url=project_info['demo_url'],
                    code_url=project_info['code_url'],
                    status='published'
                )
                for tech_name in project_info['tech_stack']:
                    project.tech_stack.add(tech_objects[tech_name])
            
            self.stdout.write(self.style.SUCCESS(f'Created {len(projects_data)} projects.'))

            self.stdout.write(self.style.SUCCESS("Database seeded successfully!"))
