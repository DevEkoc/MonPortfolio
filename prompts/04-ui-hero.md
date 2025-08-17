# 04 — UI: Hero (Accueil)

## Contexte
- Front: Next.js (TS), Tailwind (dark class), Framer Motion.
- Objectif marketing: présenter le nom, le titre, l’accroche et un CTA clair.

## Objectif
Créer une section Hero impactante avec animation d’entrée, CTA(s) (ex: Projets, Contact), et SEO de base (H1 unique, meta).

## Périmètre (in)
- Composants: `Hero` avec titre, sous-titre, court descriptif, CTA principal/secondaire.
- Micro-animations: fade/slide-in, hover sur CTA.
- Responsive: typographie fluide, ratio d’espacement.

## Hors périmètre (out)
- Navigation et autres sections (déjà gérées ailleurs).

## Contraintes & lignes directrices
- Palette bleus/gris/accents; contraste élevé pour CTA.
- H1 unique dans la page.

## Modèle de données (si applicable)
- N/A.

## Contrat API (si applicable)
- N/A.

## Spécifications UI
- Layout centré, hero pleine hauteur (min-h-screen) ou 80vh.
- Option visuelle: avatar/illustration discrète.

## Acceptation (checklist)
- [ ] H1 unique et sémantique correcte.
- [ ] CTA(s) accessibles (aria, focus, contrastes).
- [ ] Animations fluides sans jank.

## Tests
- Manuel: Lighthouse perf/a11y, test clavier.

## Tâches (à détailler plus tard)
- [ ] Créer `Hero` + variants Framer Motion.
- [ ] Ajouter CTA(s) et liens.


