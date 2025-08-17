# 15 — SEO, Performance & Accessibilité

## Contexte
- Front: Next.js (TS), Tailwind; `next-seo`.

## Objectif
Mettre en place un socle SEO/perf/a11y: métadonnées par page, sitemap/robots, images optimisées, et vérifs Lighthouse.

## Périmètre (in)
- `next-seo` config par défaut et par page.
- `sitemap.xml` et `robots.txt`.
- Images via `next/image` et tailles adaptées.
- a11y: focus visible, aria de base, contrastes.

## Hors périmètre (out)
- Internationalisation (option v2).

## Contraintes & lignes directrices
- Méta: title/description/og/twitter.
- Perf: éviter images non utilisées, lazyload.

## Modèle de données (si applicable)
- N/A.

## Contrat API (si applicable)
- N/A.

## Spécifications UI
- N/A.

## Acceptation (checklist)
- [ ] Config SEO globale + overrides par page.
- [ ] Sitemap/robots générés.
- [ ] Score Lighthouse >= 90 pour SEO et a11y.

## Tests
- Lighthouse sur pages principales.

## Tâches (à détailler plus tard)
- [ ] Installer `next-seo`.
- [ ] Ajouter fichiers sitemap/robots.


