# 01 — Fondation Front-end

## Contexte

- Front: Next.js (TypeScript), Tailwind CSS (mode `dark` via classe), Framer Motion.
- Back: Django REST Framework + MySQL (intégré plus tard via `/api/v1/...`).
- Règles: API versionnée `/api/v1/...`, Axios côté front, séparation UI/logique/données, PEP8 + ESLint/Prettier.

## Objectif

Mettre en place une base front-end prête pour le développement: Next.js (TS) avec structure `src/`, Tailwind configuré (thème, palette, `dark` par classe), Framer Motion, ESLint/Prettier, alias `@/*`, et un client Axios de base.

## Périmètre (in)

- Installation et configuration: Next.js (TS), Tailwind CSS, Framer Motion, ESLint/Prettier.
- Thème Tailwind: palette bleus profonds, gris doux, accents vibrants; `darkMode: 'class'`.
- Structure répertoires: `src/app`, `src/components`, `src/styles`, `src/lib`, `src/types`.
- Alias `@/*` pour imports.
- Client Axios avec `baseURL` placeholder `/api/v1`.
- Global styles + reset, typographies système et variables CSS utiles.

## Hors périmètre (out)

- UI finale des sections (Hero, About, etc.).
- Intégration avec l’API réelle (sera faite dans des phases suivantes).

## Contraintes & lignes directrices

- Palette: bleus profonds, gris doux, accents vibrants (définie dans `tailwind.config.js`).
- Responsive mobile-first, a11y (contraste, focus, sémantique).
- Micro-animations fluides, discrètes (via Framer Motion, à activer plus tard).

## Modèle de données (si applicable)

- Types de base `ApiResponse<T>` dans `src/types/api.ts`.

## Contrat API (si applicable)

- Base: `Axios` avec `baseURL: '/api/v1'`.

## Spécifications UI

- Aucun composant final: juste un Layout minimal de test et la bascule de thème (placeholder).

## Acceptation (checklist)

- [ ] Tailwind installé, `darkMode: 'class'`, palette ajoutée.
- [ ] Framer Motion installé.
- [ ] ESLint/Prettier configurés, scripts `lint` et `format`.
- [ ] Alias `@/*` fonctionnel.
- [ ] Client Axios instancié (`src/lib/axios.ts`).
- [ ] Dossier `src/` structuré selon règles.

## Tests

- Lint passe, build passe, page d’accueil rendue sans erreur.

## Tâches (à détailler plus tard)

- [ ] Installer Tailwind, générer `tailwind.config.js` et `postcss.config.js`.
- [ ] Configurer `globals.css` + classes utilitaires.
- [ ] Installer `framer-motion`.
- [ ] Configurer ESLint/Prettier.
- [ ] Créer `src/lib/axios.ts`.
- [ ] Vérifier alias et import.
