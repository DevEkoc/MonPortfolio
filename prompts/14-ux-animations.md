# 14 — UX: Animations & Micro-interactions

## Contexte
- Front: Next.js (TS), Tailwind, Framer Motion.

## Objectif
Définir un système d’animations cohérent (variants, transitions), entrances on-scroll, et états hover/tap.

## Périmètre (in)
- Variants communs: `fadeIn`, `slideUp`, `staggerContainer`.
- Hook utilitaire on-scroll (intersection observer + motion).
- Guidelines: durées, easings, distances.

## Hors périmètre (out)
- Animations complexes 3D.

## Contraintes & lignes directrices
- Performance: éviter reflows, limiter motion sur prefers-reduced-motion.

## Modèle de données (si applicable)
- N/A.

## Contrat API (si applicable)
- N/A.

## Spécifications UI
- Appliquer aux sections clés (Hero, cartes projets, timeline, CTA).

## Acceptation (checklist)
- [ ] Variants réutilisables exportés.
- [ ] Hook on-scroll fonctionne et respecte `prefers-reduced-motion`.

## Tests
- Manuel: jank, perf.

## Tâches (à détailler plus tard)
- [ ] Créer `src/lib/motion.ts` + hook `useInViewMotion`.


