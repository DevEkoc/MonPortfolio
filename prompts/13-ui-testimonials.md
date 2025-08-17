# 13 — UI: Témoignages

## Contexte
- Front: Next.js (TS), Tailwind, Framer Motion.

## Objectif
Afficher des témoignages sous forme de carousel/liste avec avatars, rôles, liens.

## Périmètre (in)
- Composants: `Testimonials`, `TestimonialCard`.
- Données: v1 statique; v2 API option.
- Animations: carousel ou fade/slide.

## Hors périmètre (out)
- Back-end (v1).

## Contraintes & lignes directrices
- a11y: navigation clavier dans le carousel.

## Modèle de données (si applicable)
- Type TS `Testimonial`: `name`, `role`, `company`, `avatarUrl`, `quote`, `link`.

## Contrat API (si applicable)
- N/A (v1).

## Spécifications UI
- Cartes propres, lisibles, avatars ronds.

## Acceptation (checklist)
- [ ] Carousel accessible.
- [ ] Responsive & fluide.

## Tests
- Manuel.

## Tâches (à détailler plus tard)
- [ ] Composants testimonials.


