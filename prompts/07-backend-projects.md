# 07 — Back-end: Projets

## Contexte
- Back: Django REST Framework + MySQL.
- Front consommera via Axios sur `/api/v1/projects/`.

## Objectif
Créer le modèle `Project`, serializers, vues et routes CRUD, avec gestion d’images et filtres basiques.

## Périmètre (in)
- Modèle `Project`: `title`, `slug`, `summary`, `description`, `tech_stack` (Array/ManyToMany), `image`, `demo_url`, `code_url`, `status`, `created_at`, `updated_at`.
- Serializer(s) et ViewSet DRF.
- Routes: `/api/v1/projects/` (liste/création) et `/api/v1/projects/{slug}/` (détail/màj/suppression).
- Filtres: par `status`, `tech_stack`.
- Admin Django configuré.

## Hors périmètre (out)
- Auth avancée, permissions fines (v2 si besoin).

## Contraintes & lignes directrices
- Slug unique, index DB sur slug.
- Pagination standard DRF.

## Modèle de données (si applicable)
- Voir modèle `Project` ci-dessus.

## Contrat API (si applicable)
- `GET /api/v1/projects/` → liste paginée.
- `GET /api/v1/projects/{slug}/` → détail.
- `POST /api/v1/projects/` → création (admin).

## Spécifications UI
- N/A (back-end).

## Acceptation (checklist)
- [ ] CRUD complet opérationnel.
- [ ] Filtres fonctionnels.
- [ ] Admin lisible.

## Tests
- DRF APITestCase sur liste/détail/filtrage.

## Tâches (à détailler plus tard)
- [ ] Modèle + migrations.
- [ ] Serializer + ViewSet.
- [ ] Router + URLs `/api/v1/projects/`.
- [ ] Admin + filtres.


