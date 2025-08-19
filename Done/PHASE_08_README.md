## PHASE 08 : Front-end - Section Projets

### Objectifs

-   **Afficher une grille de projets** sur le front-end en consommant l'API back-end.
-   **Implémenter des composants React** pour la carte de projet, les filtres et la section principale.
-   **Gérer les appels API** pour la liste des projets et les options de filtrage.
-   **Optimiser l'affichage des images** et intégrer des micro-animations.
-   **Mettre en place une logique de pagination** côté UI avec un bouton "Voir plus".

### Journal de développement

-   **19/08/2025** :
    -   Définition des types TypeScript (`Project`, `Technology`) dans `frontend/src/types/project.ts` pour aligner le front-end avec le serializer Django.
    -   **Back-end :** Ajout d'un `TechnologyViewSet` dans `backend/projects/views.py` et enregistrement de sa route dans `backend/projects/urls.py` pour exposer la liste des technologies.
    -   Création du service API `frontend/src/lib/projectsApi.ts` avec les fonctions `getProjects` et `getTechnologies` (utilisant Axios).
    -   Développement du composant `ProjectCard.tsx` (`frontend/src/components/ProjectCard.tsx`) pour l'affichage individuel des projets, incluant `next/image` et `framer-motion`.
    -   Création du composant `ProjectFilters.tsx` (`frontend/src/components/ProjectFilters.tsx`) pour la sélection des filtres par technologie.
    -   Développement du composant principal `ProjectsSection.tsx` (`frontend/src/components/ProjectsSection.tsx`) gérant l'état (chargement, erreur, filtres), l'appel API et le rendu des cartes de projets.
    -   Intégration de `ProjectsSection` dans la page principale `frontend/src/app/page.tsx`.
    -   **Débogage Erreur 404 :** Correction de la structure d'URL du back-end dans `portfolio_backend/urls.py` pour éliminer la duplication de chemin (`/projects/projects/`), résultant en des URLs propres (`/api/v1/projects/`, `/api/v1/technologies/`).
    -   **Débogage Erreur `next/image` :** Configuration de `frontend/next.config.ts` pour autoriser les domaines `127.0.0.1` et `localhost` pour le chargement des images.
    -   **Peuplement de la base de données :** Création d'une commande de gestion Django personnalisée (`backend/projects/management/commands/seed_db.py`) pour ajouter 10 projets fictifs et leurs technologies associées de manière fiable.
    -   Implémentation de la logique d'affichage : 4 projets par ligne, limite initiale à 8 projets, et bouton "Voir plus".
    -   **Ajustement de la logique d'affichage :** Modification pour 3 projets par ligne, limite initiale à 6 projets.

### Résultat

La section des projets est désormais entièrement fonctionnelle sur le front-end. Elle consomme les données de l'API back-end, permet le filtrage et gère l'affichage paginé avec une disposition en grille responsive.

-   **Types** : `frontend/src/types/project.ts`
-   **Service API** : `frontend/src/lib/projectsApi.ts`
-   **Composants** : `frontend/src/components/ProjectCard.tsx`, `frontend/src/components/ProjectFilters.tsx`, `frontend/src/components/ProjectsSection.tsx`
-   **Configuration Next.js** : `frontend/next.config.ts`
-   **Commande de peuplement** : `backend/projects/management/commands/seed_db.py`

### Axes d'amélioration potentiels

-   **Filtrage multi-critères** : Permettre la sélection de plusieurs technologies pour le filtrage.
-   **Recherche textuelle** : Ajouter un champ de recherche pour filtrer les projets par titre ou description.
-   **Squelettes de chargement** : Afficher des placeholders pendant le chargement des projets pour une meilleure expérience utilisateur.
-   **Gestion des erreurs UI** : Améliorer l'affichage des messages d'erreur en cas d'échec des appels API.
