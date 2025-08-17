# 08 — Front-end: Projets

## Contexte
- Front: Next.js (TS), Tailwind, Framer Motion; Axios.
- Back: endpoints `/api/v1/projects/`.

## Objectif
Afficher une grille de projets avec images, descriptions, stack, et liens code/démo, en consommant l’API.

## Périmètre (in)
- Composants: `ProjectsSection`, `ProjectCard`, `ProjectFilters`.
- Appels API: liste paginée, filtres (status, tech).
- Micro-animations: apparition des cartes, hover.

## Hors périmètre (out)
- Auth admin (création/édition côté front).

## Contraintes & lignes directrices
- Images optimisées via `next/image`.
- A11y: alt images, focus visible.

## Modèle de données (si applicable)
- Types TS alignés avec serializer DRF.

## Contrat API (si applicable)
- `GET /api/v1/projects/?status=...&tech=...`.

## Spécifications UI
- Grille responsive; cartes cliquables avec CTA (code/démo).

## Acceptation (checklist)
- [ ] Liste rendue depuis API (loading, error states).
- [ ] Filtres fonctionnels côté requêtes API.
- [ ] Animations fluides.

## Tests
- Manuel + éventuellement tests composants.

## Tâches (à détailler plus tard)
- [ ] Écrire service Axios `projects`.
- [ ] Implémenter `ProjectsSection`.


