# Portfolio de Développeur Full-Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

Ce dépôt contient le code source d'un portfolio de développeur web moderne, conçu pour présenter un profil, des compétences, des projets et un blog personnel. Le projet est structuré en deux parties distinctes : un front-end interactif construit avec Next.js et un back-end robuste propulsé par Django REST Framework.

## Fonctionnalités Clés

- **Design Moderne et Responsive :** Interface utilisateur épurée avec une expérience fluide sur tous les appareils.
- **Thème Clair / Sombre :** Un interrupteur pour basculer entre un thème clair et un thème sombre.
- **Animations Fluides :** Des animations subtiles réalisées avec Framer Motion pour une expérience utilisateur dynamique.
- **Gestion de Contenu via API :** Toutes les données (projets, articles de blog, etc.) sont servies par une API RESTful.
- **Back-office d'Administration :** Interface d'administration Django complète pour une gestion simple du contenu.
- **Déploiement Séparé :** Architecture découplée permettant de déployer le front-end et le back-end indépendamment.

## Stack Technique

### Front-end

- **Framework :** [Next.js](https://nextjs.org/) (v15) - Framework React pour la production.
- **Langage :** [TypeScript](https://www.typescriptlang.org/) - JavaScript avec typage statique.
- **Style :** [Tailwind CSS](https://tailwindcss.com/) - Framework CSS "utility-first".
- **Animations :** [Framer Motion](https://www.framer.com/motion/) - Bibliothèque d'animations pour React.
- **Client HTTP :** [Axios](https://axios-http.com/) - Pour les requêtes vers l'API back-end.

### Back-end

- **Framework :** [Django](https://www.djangoproject.com/) (v5) - Framework web Python de haut niveau.
- **API :** [Django REST Framework](https://www.django-rest-framework.org/) - Pour la création d'APIs web.
- **Base de données :** [MySQL](https://www.mysql.com/) - Système de gestion de base de données relationnelle.
- **Communication :** [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - Pour la gestion des requêtes Cross-Origin.
- **Variables d'environnement :** [python-dotenv](https://github.com/theskumar/python-dotenv) - Pour la gestion des secrets.

## Installation et Lancement

Suivez ces instructions pour lancer le projet en local sur votre machine.

### Prérequis

- [Node.js](https://nodejs.org/en/) (version 20.x ou supérieure)
- [Python](https://www.python.org/downloads/) (version 3.12.x ou supérieure)
- Un serveur de base de données MySQL fonctionnel.

### 1. Configuration du Back-end

```bash
# 1. Accédez au dossier du back-end
cd backend

# 2. Créez un environnement virtuel
python -m venv venv

# 3. Activez l'environnement virtuel
# Sur Windows:
venv\Scripts\activate
# Sur macOS/Linux:
# source venv/bin/activate

# 4. Installez les dépendances Python
pip install -r requirements.txt

# 5. Configurez les variables d'environnement
# Copiez le fichier d'exemple
cp .env.example .env

# Modifiez le fichier .env avec vos propres informations
# (clé secrète, informations de la base de données, etc.)

# 6. Appliquez les migrations à la base de données
python manage.py migrate

# 7. Lancez le serveur de développement Django
python manage.py runserver
```

Le back-end devrait maintenant être accessible à l'adresse `http://127.0.0.1:8000`.

### 2. Configuration du Front-end

```bash
# 1. Dans un nouveau terminal, accédez au dossier du front-end
cd frontend

# 2. Installez les dépendances Node.js
npm install

# 3. Configurez les variables d'environnement
# Copiez le fichier d'exemple
cp .env.local.example .env.local

# Le fichier .env.local est déjà configuré pour pointer vers l'API locale.
# Assurez-vous que l'URL correspond à celle de votre back-end.

# 4. Lancez le serveur de développement Next.js
npm run dev
```

Le front-end devrait maintenant être accessible à l'adresse `http://localhost:3000`.

## Auteur

- **Christophe Cédric EKOBENA OMGBA**

## Licence

Copyright © 2024 Christophe Cédric EKOBENA OMGBA. Tous droits réservés.

Ce projet est présenté à des fins de démonstration et de consultation. La permission de voir le code source est accordée, mais toute utilisation, copie, modification, distribution ou vente du logiciel et de sa documentation est strictement interdite sans l'autorisation écrite préalable de l'auteur.
