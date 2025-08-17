# 03 — Layout, Navigation, Thème

## Contexte
- Front: Next.js (TS), Tailwind (dark par classe), Framer Motion.
- Règles UI: palette bleus/gris/accents, micro-animations, responsive mobile-first.

## Objectif
Mettre en place le layout global (header/nav/footer), la navigation, le toggle clair/sombre persistant, et les styles de base.

## Périmètre (in)
- Composants: `Navbar`, `Footer`, `ThemeToggle`, `Container`.
- Gestion du thème: classe `dark` sur `html/body`, persistance (localStorage), accessibilité.
- Navigation: liens vers sections/pages clés (Accueil, À propos, Projets, Blog, Contact).
- Responsive + states: focus visibles, hover, actifs.

## Hors périmètre (out)
- Contenu détaillé des sections (géré dans phases dédiées).

## Contraintes & lignes directrices
- Contrastes AA, hit areas suffisantes (min 44px), roving tabindex si menu mobile.
- Animations discrètes (fade/slide nav, hover links).

## Modèle de données (si applicable)
- N/A.

## Contrat API (si applicable)
- N/A.

## Spécifications UI
- Navbar sticky, fond translucide blur en scroll.
- Menu mobile (drawer ou dropdown) avec animation.
- Footer minimal avec liens sociaux.

## Acceptation (checklist)
- [ ] Toggle thème fonctionne et persiste entre rechargements.
- [ ] Navbar responsive avec menu mobile animé.
- [ ] Footer inclut liens sociaux et copyright.
- [ ] A11y: focus rings, nav landmarks, aria.

## Tests
- Manuels: clavier, lecteur d’écran rapide, Lighthouse a11y.

## Tâches (à détailler plus tard)
- [ ] Créer `Navbar`, `Footer`, `ThemeToggle`.
- [ ] Gérer persistance thème.
- [ ] Styles Tailwind + variantes dark.


