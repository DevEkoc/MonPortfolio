## PHASE 06 : Section "Compétences" (Skills)

### Objectifs

-   **Créer le composant `SkillsSection`** : Mettre en place une nouvelle section pour afficher les compétences techniques et les outils.
-   **Titre et sous-titre** : La section doit avoir un titre principal (par exemple, "Mon Expertise") et un paragraphe descriptif.
-   **Catégorisation des compétences** :
    -   **Compétences Clés (Featured)** : Mettre en avant les compétences les plus importantes (ex: Analyse, Conception). Celles-ci doivent être plus détaillées.
    -   **Technologies & Outils** : Lister les autres technologies maîtrisées (Frontend, Backend, Bases de données, etc.).
-   **Mise en page (Layout)** :
    -   Utiliser une grille responsive (2 colonnes pour les compétences clés, 3 pour les autres).
    -   Chaque compétence clé aura une carte dédiée avec son nom, une description et une liste de sous-compétences avec icônes.
    -   Les autres compétences seront regroupées par catégorie dans des cartes plus petites.
-   **Design et UI** :
    -   Assurer une cohérence visuelle avec le reste du site (thème sombre/clair, typographie).
    -   Utiliser des icônes pertinentes pour chaque compétence.
    -   Ajouter des effets de survol (`hover`) sur les cartes.
-   **Animations** :
    -   Intégrer des animations pour rendre la section plus dynamique.
    -   Utiliser un effet "fade-in-up" qui se déclenche au défilement pour chaque carte.

### Journal de développement

-   **18/08/2025** :
    -   Création du fichier `src/components/SkillsSection.tsx`.
    -   Mise en place de la structure de base de la section avec un titre et un sous-titre.
    -   Création du fichier de données `src/lib/skillsData.tsx` pour séparer le contenu de la logique.
    -   Développement de la mise en page en grille responsive pour les deux catégories de compétences.
    -   Intégration des icônes depuis `react-icons`.
    -   Styling des cartes avec Tailwind CSS, en assurant la compatibilité avec le thème sombre.
    -   Ajout des animations `fadeInUp` sur les cartes, déclenchées individuellement au scroll grâce à `framer-motion` et l'option `whileInView`.
    -   Ajustement de l'animation pour qu'elle se redéclenche à chaque fois que la section est visible, améliorant l'interactivité.

### Résultat

La section "Compétences" est maintenant terminée et intégrée au site. Elle présente de manière claire et visuellement agréable mon expertise technique. Les animations la rendent vivante et moderne.

-   **Composant** : `frontend/src/components/SkillsSection.tsx`
-   **Données** : `frontend/src/lib/skillsData.tsx`

### Axes d'amélioration potentiels

-   **Filtrage interactif** : On pourrait ajouter des boutons pour filtrer les compétences par catégorie (par exemple, afficher uniquement le "Frontend").
-   **Barres de niveau** : Pour une représentation plus visuelle, des barres de progression pourraient être ajoutées pour chaque compétence (bien que cela puisse être subjectif).
