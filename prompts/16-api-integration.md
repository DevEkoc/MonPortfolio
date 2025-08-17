# 16 — Intégration API & Gestion des erreurs

## Contexte
- Front: Axios avec `baseURL` `/api/v1`, hooks data (option SWR/React Query).
- Back: DRF.

## Objectif
Centraliser la communication API, gérer les erreurs, retenter si pertinent, et typer les réponses.

## Périmètre (in)
- Service Axios: intercepteurs (auth future, erreurs), timeout, retries simples.
- Types: `ApiResponse<T>`, erreurs typées.
- Hooks data: SWR ou React Query (option) pour cache et revalidation.
- Gestion erreurs UI: toasts/alerts.

## Hors périmètre (out)
- Auth complète (v2).

## Contraintes & lignes directrices
- Conserver séparation UI/logique/données.
- Respecter codes HTTP.

## Modèle de données (si applicable)
- Types TS communs pour pages listées (projects, blog).

## Contrat API (si applicable)
- `GET /api/v1/...` réponses paginées DRF.

## Spécifications UI
- États loading/error cohérents.

## Acceptation (checklist)
- [ ] Service Axios unique et typé.
- [ ] Hooks prêts pour `projects` et `blog`.
- [ ] Gestion erreurs visible et accessible.

## Tests
- Unitaires sur helpers (si possible) + manuels.

## Tâches (à détailler plus tard)
- [ ] Créer `src/lib/axios.ts` + intercepteurs.
- [ ] Créer hooks SWR/React Query.


