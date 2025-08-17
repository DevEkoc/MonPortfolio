# 09 — Back-end: Blog

## Contexte

- Back: Django REST Framework + MySQL.
- Front consommera via `/api/v1/blog/`.

## Objectif

Créer le modèle `Post` avec CRUD complet, y compris slug, tags, extrait, contenu, dates, et pagination.

## Périmètre (in)

- Modèle `Post`: `title`, `slug`, `excerpt`, `content`, `tags` (ManyToMany ou Array), `published`, `published_at`, `created_at`, `updated_at`.
- Serializer(s) et ViewSet.
- Routes: `/api/v1/blog/` et `/api/v1/blog/{slug}/`.
- Permissions basiques: lecture publique, écriture restreinte (staff).
- Recherche/filtre: par tag, texte, statut publié.

## Hors périmètre (out)

- Éditeur riche; markdown processing optionnel (v2).

## Contraintes & lignes directrices

- Slug unique; index sur `published` et `published_at`.
- Pagination DRF standard.

## Modèle de données (si applicable)

- Voir `Post` ci-dessus.

## Contrat API (si applicable)

- `GET /api/v1/blog/?tag=...&q=...` → liste paginée.
- `GET /api/v1/blog/{slug}/` → détail.

## Spécifications UI

- N/A (back-end).

## Acceptation (checklist)

- [ ] CRUD blog complet.
- [ ] Filtres/recherche OK.
- [ ] Permissions lecture/écriture respectées.

## Tests

- APITestCase sur list/detail/filter/permissions.

## Tâches (à détailler plus tard)

- [ ] Modèle + migrations.
- [ ] Serializer + ViewSet + Router.
- [ ] Filtres + recherche.
