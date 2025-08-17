# 11 — Contact (Back + Front)

## Contexte
- Back: DRF endpoint `/api/v1/contact/`.
- Front: formulaire avec validation.

## Objectif
Permettre l’envoi de messages via un formulaire (validation, anti-spam simple), avec gestion des états succès/erreur.

## Périmètre (in)
- Back: endpoint POST `/api/v1/contact/` (nom, email, sujet, message), throttling basique, captcha léger (honeypot).
- Front: formulaire avec validations client (zod/yup), affichage erreurs, loader, toasts.

## Hors périmètre (out)
- Intégrations email tierces (v2 option: SMTP/celery).

## Contraintes & lignes directrices
- Anti-spam: champ honeypot, rate-limit DRF.
- a11y: labels, descriptions, erreurs.

## Modèle de données (si applicable)
- Option: modèle `ContactMessage` pour persistance.

## Contrat API (si applicable)
- `POST /api/v1/contact/` → `201 { ok: true }`.

## Spécifications UI
- Formulaire simple, clair, avec feedback.

## Acceptation (checklist)
- [ ] Validation back et front cohérente.
- [ ] Gestion des erreurs et succès.
- [ ] Protection anti-spam basique.

## Tests
- Back: tests API throttling/validation.
- Front: tests validation client.

## Tâches (à détailler plus tard)
- [ ] Endpoint DRF + throttling.
- [ ] Formulaire Next.js + validations.


