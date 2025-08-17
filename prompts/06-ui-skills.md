# 06 — UI: Compétences

## Contexte
- Front: Next.js (TS), Tailwind, Framer Motion.

## Objectif
Afficher les compétences par catégories avec icônes et micro-animations.

## Périmètre (in)
- Composants: `SkillsSection`, `SkillCard`.
- Catégories: Langages, Frameworks, Outils, Cloud/DevOps.
- Icônes (libre: `react-icons` ou SVGs custom).

## Hors périmètre (out)
- Données dynamiques (v1 statique, v2 API optionnelle).

## Contraintes & lignes directrices
- Hiérarchie visuelle claire, contraste.
- Animations hover subtiles.

## Modèle de données (si applicable)
- Type TS pour `Skill` et `SkillCategory`.

## Contrat API (si applicable)
- N/A (v2 option).

## Spécifications UI
- Grille responsive, colonnes variables selon breakpoints.

## Acceptation (checklist)
- [ ] Icônes accessibles (alt/aria si besoin).
- [ ] Layout propre en mobile/desktop.

## Tests
- Manuel: responsive, contrastes.

## Tâches (à détailler plus tard)
- [ ] Créer `SkillsSection` + types.


