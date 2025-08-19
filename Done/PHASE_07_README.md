## PHASE 07 : Back-end - API pour les Projets

### Objectifs

-   **Mettre en place le back-end** pour la gestion des projets du portfolio.
-   **Créer le modèle de données `Project`** avec tous les champs nécessaires (titre, description, technologies, etc.).
-   **Développer une API RESTful** en utilisant Django REST Framework pour les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).
-   **Implémenter des filtres** pour permettre au front-end de requêter les projets par `status` et par `tech_stack`.
-   **Configurer l'interface d'administration** de Django pour une gestion simple des projets.
-   **Assurer la qualité** via des tests unitaires et d'intégration.

### Journal de développement

-   **19/08/2025** :
    -   Vérification des modèles `Project` et `Technology` existants dans `projects/models.py`.
    -   Configuration de l'interface d'administration dans `projects/admin.py` pour les deux modèles, en ajoutant des filtres, des champs de recherche et le pré-remplissage du `slug`.
    -   Création du fichier `projects/serializers.py` et implémentation de `ProjectSerializer` et `TechnologySerializer` pour la conversion des données en JSON.
    -   Développement du `ProjectViewSet` dans `projects/views.py`, en utilisant `ModelViewSet` pour gérer toutes les opérations CRUD.
    -   Intégration de `django-filter` pour permettre le filtrage par `status` et `tech_stack__name`.
    -   Mise en place des routes de l'API en créant `projects/urls.py` et en l'incluant dans le routeur principal (`portfolio_backend/urls.py`) sous le préfixe `/api/v1/projects/`.
    -   Génération (`makemigrations`) et application (`migrate`) des migrations pour créer les tables correspondantes en base de données.
    -   Rédaction de tests complets (`APITestCase`) dans `projects/tests.py` pour valider la liste, le détail et les filtres de l'API.
    -   Exécution des tests, identification et correction d'une erreur liée à la pagination dans les assertions.
    -   Validation finale de la solution avec la réussite de tous les tests.

### Résultat

L'API pour la section des projets est maintenant entièrement fonctionnelle, sécurisée et testée. Elle expose les endpoints nécessaires pour que le front-end puisse afficher et filtrer les projets.

-   **Modèles** : `backend/projects/models.py`
-   **Administration** : `backend/projects/admin.py`
-   **Serializers** : `backend/projects/serializers.py`
-   **Vues (API)** : `backend/projects/views.py`
-   **Routes** : `backend/projects/urls.py`
-   **Tests** : `backend/projects/tests.py`
-   **Migration** : `backend/projects/migrations/0001_initial.py`

### Axes d'amélioration potentiels

-   **Gestion des images** : Implémenter un endpoint spécifique ou une logique dans le serializer pour gérer l'upload des images de projet.
-   **Permissions affinées** : Mettre en place un système d'authentification et de permissions pour restreindre les opérations d'écriture (POST, PUT, DELETE) aux seuls administrateurs authentifiés via l'API.
-   **Recherche textuelle** : Intégrer une recherche plus avancée (par exemple avec `SearchFilter`) sur les champs `title` et `description`.
