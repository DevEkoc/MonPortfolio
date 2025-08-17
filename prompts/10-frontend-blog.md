# 10 — Front-end: Blog

## Contexte
- Front: Next.js (TS), Tailwind, Framer Motion; Axios.
- Back: `/api/v1/blog/`.

## Objectif
Afficher liste blog, pagination, page article, recherche par tag, SEO (OpenGraph, JSON-LD), et rendu markdown si besoin.

## Périmètre (in)
- Pages/sections: `BlogList`, `BlogPost`.
- Filtres par tag, champ recherche.
- Pagination côté API.
- SEO: balises meta par page; OpenGraph; JSON-LD Article.
- Option: rendu Markdown (lib `remark`/`rehype`).

## Hors périmètre (out)
- Édition côté front (admin seulement back).

## Contraintes & lignes directrices
- A11y: titres hiérarchisés, liens, focus.
- Performances: images optimisées.

## Modèle de données (si applicable)
- Types TS alignés avec `Post` DRF.

## Contrat API (si applicable)
- `GET /api/v1/blog/?page=...&tag=...&q=...`.

## Spécifications UI
- Liste cartes article + page détail avec contenu.

## Acceptation (checklist)
- [ ] Liste et pagination fonctionnelles.
- [ ] Détail article rend correct.
- [ ] SEO de base présent.

## Tests
- Manuel + snapshot composants.

## Tâches (à détailler plus tard)
- [ ] Services Axios `blog`.
- [ ] Pages/Composants blog.


