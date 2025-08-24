## PHASE 11 : Back-end & Front-end - Formulaire de Contact

### Objectifs

- Permettre l'envoi de messages via un formulaire de contact.
- Implémenter un endpoint API pour la réception des messages.
- Mettre en place des mesures anti-spam basiques (honeypot, throttling).
- Développer le formulaire front-end avec validation et gestion des états.

### Résultat (Partie Back-end)

La partie back-end du formulaire de contact est fonctionnelle. Elle permet de recevoir et de sauvegarder les messages dans la base de données via une API RESTful.

- **Modèle** : `backend/contact/models.py` (`ContactMessage`)
- **Serializer** : `backend/contact/serializers.py` (`ContactMessageSerializer`)
- **Vue (API)** : `backend/contact/views.py` (`ContactMessageCreateView`)
  - Implémente le "throttling" (limitation de débit) pour les utilisateurs anonymes.
  - Intègre un champ "honeypot" pour détecter et rejeter les soumissions de bots.
- **Route** : Intégrée dans `backend/portfolio_backend/urls.py`
  - `POST /api/v1/contact/` : Permet d'envoyer un message.

### Résultat (Partie Front-end)

La partie front-end du formulaire de contact est désormais complète et connectée à l'API :

- **Composant** : `frontend/src/components/ContactForm.tsx`
  - Validation des champs avec Zod (nom, email, message, honeypot, etc.)
  - Gestion des erreurs de validation côté client et côté serveur (affichage inline)
  - Utilisation d'Axios pour l'appel à l'API `/api/v1/contact/`
  - Affichage d'un message de succès ou d'erreur après soumission
  - **Nouveau** : Le message de succès disparaît automatiquement après 4 secondes pour une meilleure expérience utilisateur
  - Correction d'un bug critique :
    - L'erreur `Cannot read properties of undefined (reading 'find')` survenait lors de la soumission à cause d'une mauvaise gestion du type d'erreur. Correction apportée dans la fonction `getError` et la gestion des erreurs Axios/Zod.
  - Le formulaire est responsive, stylé avec Tailwind, et respecte le mode sombre.

### Tests & Vérifications

- Test manuel du formulaire (soumission, validation, gestion des erreurs, UX)
- Vérification du bon enregistrement des messages côté back-end
- Vérification du respect des règles de sécurité (CORS, honeypot, throttling)

### Bilan

- Le formulaire de contact fonctionne de bout en bout (front ↔ back)
- L'expérience utilisateur est fluide et moderne
- Le code respecte les conventions du projet (séparation logique/UI, typage, etc.)
