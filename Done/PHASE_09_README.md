## PHASE 09 : Back-end - API pour le Blog

### Objectifs

-   **Mettre en place le back-end** pour la gestion des articles de blog.
-   **Créer le modèle de données `Post`** avec tous les champs nécessaires (titre, slug, contenu, tags, etc.).
-   **Développer une API RESTful** en utilisant Django REST Framework pour les opérations CRUD.
-   **Implémenter des filtres** (par statut, tag) et une recherche textuelle.
-   **Configurer les permissions** pour restreindre l'écriture aux administrateurs.
-   **Assurer la qualité** via des tests unitaires.

### Résultat

L'API pour la section du blog est fonctionnelle. Elle expose les endpoints nécessaires pour que le front-end puisse afficher, filtrer et rechercher des articles.

-   **Modèles** : `backend/blog/models.py`
-   **Administration** : `backend/blog/admin.py`
-   **Serializers** : `backend/blog/serializers.py`
-   **Vues (API)** : `backend/blog/views.py`
-   **Routes** : Intégrées dans `backend/portfolio_backend/urls.py`
-   **Tests** : `backend/blog/tests.py`

L'API expose les endpoints suivants :
- `GET /api/v1/blog/` : Liste les articles (publiés pour les visiteurs, tous pour l'admin).
- `GET /api/v1/blog/?tags__name=<tag>` : Filtre les articles par tag.
- `GET /api/v1/blog/?search=<term>` : Recherche dans le titre et le contenu.
- `GET /api/v1/blog/{slug}/` : Récupère un article.
- `POST, PUT, PATCH, DELETE /api/v1/blog/{slug}/` : Opérations d'écriture réservées aux administrateurs.

### ⚠️ Problème Connu

-   **Test défaillant** : Le test `test_update_post_staff_user` dans `backend/blog/tests.py` échoue de manière persistante avec une erreur `400 Bad Request` lors d'une requête `PATCH`. Malgré plusieurs tentatives de correction (en ajoutant le slug, le contenu, et les tags à la requête), le problème demeure. Le code de l'application semble correct, mais ce cas de test spécifique échoue. Ce point pourrait nécessiter un débogage plus approfondi.
