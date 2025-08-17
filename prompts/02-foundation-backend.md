# 02 — Fondation Back-end

## Contexte

- Front: Next.js (TypeScript), Tailwind CSS, Framer Motion.
- Back: Django REST Framework + MySQL.
- Règles: API versionnée `/api/v1/...`, CORS restreint, variables sensibles dans `.env`.

## Objectif

Initialiser Django + DRF, configurer MySQL, structurer les apps `blog`, `projects`, `contact`, exposer la racine `/api/v1/` avec healthcheck, et configurer CORS/ENV.

## Périmètre (in)

- Projet Django + DRF, configuration MySQL.
- Apps: `blog`, `projects`, `contact` créées et prêtes.
- `settings.py`: CORS, INSTALLED_APPS, REST_FRAMEWORK, DB, `ALLOWED_HOSTS`.
- Fichier `.env` lu (ex: `python-dotenv` ou `django-environ`).
- Endpoint `GET /api/v1/health/`.

## Hors périmètre (out)

- Modèles finaux, endpoints CRUD complets (gérés dans phases dédiées).

## Contraintes & lignes directrices

- Respect PEP8; séparer config par environnement si possible.
- CORS: autoriser seulement domaines front (dev/prod) et méthodes nécessaires.
- Versionnage clair dans routes: `/api/v1/...`.

## Modèle de données (si applicable)

- N/A à ce stade (squelettes d’apps seulement).

## Contrat API (si applicable)

- `GET /api/v1/health/` → `{ status: "ok" }`.

## Spécifications UI

- N/A (back-end).

## Acceptation (checklist)

- [ ] Projet Django fonctionne avec MySQL (migrations OK).
- [ ] DRF installé et accessible.
- [ ] Apps `blog`, `projects`, `contact` créées et référencées.
- [ ] Endpoint `/api/v1/health/` répond OK.
- [ ] CORS configuré correctement.

## Tests

- Commandes: migrations, runserver, requête sur `/api/v1/health/`.

## Tâches (à détailler plus tard)

- [ ] Installer Django, djangorestframework, django-cors-headers, mysqlclient.
- [ ] Configurer `settings.py` (DB, REST_FRAMEWORK, CORS, ALLOWED_HOSTS).
- [ ] Créer urls: `api/v1/` + `health`.
- [ ] Créer apps: `blog`, `projects`, `contact`.
