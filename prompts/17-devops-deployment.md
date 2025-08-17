# 17 — CI/CD & Déploiement (v2)

## Contexte
- Front: déploiement Vercel.
- Back: hébergement (Railway/Render/AWS), MySQL géré (RDS/Cloud SQL), envs.

## Objectif
Configurer pipelines CI (lint/build/tests), stratégies de déploiement, variables d’environnement, et domaines.

## Périmètre (in)
- CI GitHub Actions: jobs lint/build/test pour front et back.
- Déploiement front: Vercel.
- Déploiement back: Railway/Render/AWS + MySQL; migrations auto.
- Variables d’env et secrets.

## Hors périmètre (out)
- Observabilité avancée (v3).

## Contraintes & lignes directrices
- CORS: autoriser uniquement domaines prod.
- Gestion migrations DB en déploiement.

## Modèle de données (si applicable)
- N/A.

## Contrat API (si applicable)
- Santé: `/api/v1/health/` pour probes.

## Spécifications UI
- N/A.

## Acceptation (checklist)
- [ ] Pipelines CI verts.
- [ ] Déploiements front/back reproductibles.
- [ ] Secrets stockés de manière sûre.

## Tests
- Pipelines sur PRs.

## Tâches (à détailler plus tard)
- [ ] Configurer GitHub Actions.
- [ ] Provisionner MySQL managé.
- [ ] Setup Vercel + domaine.


