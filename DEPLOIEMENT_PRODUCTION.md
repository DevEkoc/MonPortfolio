# Guide de déploiement en production

## Contexte
Ce guide détaille les étapes pour déployer votre portfolio Next.js statique en production avec Vercel, configurer un domaine personnalisé, et intégrer EmailJS avec une adresse email professionnelle Zoho Mail.

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte GitHub avec votre code
- Compte Vercel (gratuit)
- Node.js installé localement

### Étape 1 : Préparation du code

```bash
# Vérifier que le build fonctionne
cd frontend
npm run build

# Committer les derniers changements
git add .
git commit -m "Préparation pour déploiement production"
git push origin v1-static
```

### Étape 2 : Déploiement Vercel

#### Option A : Via l'interface web (Recommandée)

1. **Connexion à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer sur "New Project"

2. **Import du projet**
   - Sélectionner votre repository `MonPortfolio`
   - Choisir la branche `v1-static`
   - Configurer les settings :
     ```
     Framework Preset: Next.js
     Root Directory: frontend
     Build Command: npm run build
     Output Directory: .next
     Install Command: npm install
     ```

3. **Variables d'environnement**
   - Pas de variables nécessaires pour la version statique
   - Cliquer sur "Deploy"

#### Option B : Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer depuis le dossier frontend
cd frontend
vercel --prod

# Suivre les prompts :
# - Set up and deploy "frontend"? Y
# - Which scope? (votre compte)
# - Link to existing project? N
# - What's your project's name? mon-portfolio
# - In which directory is your code located? ./
```

### Étape 3 : Vérification du déploiement

- Vercel vous donnera une URL : `https://mon-portfolio-xxx.vercel.app`
- Tester toutes les pages et fonctionnalités
- Vérifier que les images s'affichent correctement
- Tester le formulaire de contact (il affichera juste un message de succès pour l'instant)

## 🌐 Configuration du domaine personnalisé

### Cas 1 : Vous avez déjà un domaine

#### Étape 1 : Configuration DNS chez votre registrar

1. **Aller dans les paramètres DNS de votre domaine**
   - OVH, Namecheap, GoDaddy, etc.

2. **Ajouter les enregistrements DNS**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600

   Type: A
   Name: @ (ou apex/root)
   Value: 76.76.19.61
   TTL: 3600
   ```

#### Étape 2 : Configuration sur Vercel

1. **Dans le dashboard Vercel**
   - Aller dans votre projet
   - Onglet "Settings" > "Domains"
   - Cliquer "Add Domain"

2. **Ajouter vos domaines**
   ```
   monportfolio.com
   www.monportfolio.com
   ```

3. **Vérification**
   - Vercel vérifiera automatiquement la configuration DNS
   - Cela peut prendre 24-48h pour la propagation complète
   - Certificat SSL automatique

### Cas 2 : Vous n'avez pas de domaine

#### Option A : Utiliser le domaine Vercel (Gratuit)
- Votre site sera accessible via `https://mon-portfolio-xxx.vercel.app`
- Parfait pour commencer, professionnel
- Vous pourrez toujours ajouter un domaine personnalisé plus tard

#### Option B : Acheter un domaine

1. **Registrars recommandés**
   - **Namecheap** : ~10-15€/an, interface simple
   - **OVH** : ~8-12€/an, français
   - **Cloudflare** : Prix au coût, excellent pour les performances

2. **Choisir un nom de domaine**
   ```
   christophe-ekobena.com
   devekoc.com
   portfolio-ekobena.dev
   ```

3. **Après achat, suivre "Cas 1" ci-dessus**

## 📧 Configuration EmailJS + Zoho Mail

### Étape 1 : Créer une adresse email professionnelle avec Zoho

1. **Inscription Zoho Mail**
   - Aller sur [zoho.com/mail](https://zoho.com/mail)
   - Plan gratuit : 1 domaine, 5 utilisateurs
   - Plan payant : à partir de 1€/utilisateur/mois

2. **Configuration du domaine**
   ```bash
   # Exemples d'emails professionnels
   contact@monportfolio.com
   christophe@devekoc.com
   hello@ekobena.dev
   ```

3. **Validation DNS**
   - Zoho vous donnera des enregistrements DNS à ajouter
   - MX, TXT, CNAME records
   - Ajouter chez votre registrar (même endroit que pour le domaine)

4. **Créer votre boîte mail**
   - Interface Zoho Mail
   - Créer utilisateur + mot de passe
   - Tester l'envoi/réception

### Étape 2 : Configuration EmailJS

1. **Créer un compte EmailJS**
   - Aller sur [emailjs.com](https://emailjs.com)
   - Plan gratuit : 200 emails/mois
   - S'inscrire avec votre email

2. **Ajouter un service email**
   - Dashboard EmailJS > "Email Services"
   - Cliquer "Add New Service"
   - Choisir "Other" (pour Zoho)
   - Configuration SMTP :
     ```
     Service: Other
     Name: Zoho Mail
     SMTP Server: smtp.zoho.com
     Port: 587
     Username: contact@mondomaine.com
     Password: votre_mot_de_passe
     ```

3. **Créer un template d'email**
   - Dashboard > "Email Templates"
   - "Create New Template"
   - Template exemple :
     ```
     Subject: Nouveau message de {{from_name}}
     
     Bonjour,
     
     Vous avez reçu un nouveau message depuis votre portfolio :
     
     Nom: {{from_name}}
     Email: {{from_email}}
     Sujet: {{subject}}
     
     Message:
     {{message}}
     
     ---
     Envoyé depuis votre portfolio
     ```

4. **Récupérer les clés**
   - Service ID : `service_xxxxxxx`
   - Template ID : `template_xxxxxx`
   - Public Key : `xxxxxxxxxxxxxx`

### Étape 3 : Intégration dans le code

1. **Installation EmailJS**
   ```bash
   cd frontend
   npm install @emailjs/browser
   ```

2. **Mise à jour du fichier de configuration**
   ```typescript
   // frontend/src/data/config.ts
   export const externalServices: ExternalServices = {
     analytics: {
       // googleAnalyticsId: "G-XXXXXXXXXX"
     },
     contact: {
       emailjsServiceId: "service_xxxxxxx",
       emailjsTemplateId: "template_xxxxxx", 
       emailjsPublicKey: "xxxxxxxxxxxxxx"
     }
   };
   ```

3. **Mise à jour du formulaire de contact**
   ```typescript
   // frontend/src/components/ContactForm.tsx
   import emailjs from '@emailjs/browser';
   import { externalServices } from '@/data/config';

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setLoading(true);
     setSuccessMessage(null);
     setErrorMessage(null);
     setErrors([]);

     try {
       contactFormSchema.parse(formData);
       
       // Envoi via EmailJS
       await emailjs.send(
         externalServices.contact.emailjsServiceId!,
         externalServices.contact.emailjsTemplateId!,
         {
           from_name: formData.name,
           from_email: formData.email,
           subject: formData.subject,
           message: formData.message
         },
         externalServices.contact.emailjsPublicKey
       );
       
       setSuccessMessage('Votre message a été envoyé avec succès !');
       setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
     } catch (err) {
       if (err instanceof z.ZodError) {
         setErrors(err.issues);
         setErrorMessage('Veuillez corriger les erreurs.');
       } else {
         console.error('Erreur EmailJS:', err);
         setErrorMessage('Une erreur est survenue lors de l\'envoi du message.');
       }
     } finally {
       setLoading(false);
     }
   };
   ```

### Étape 4 : Test et déploiement

1. **Test en local**
   ```bash
   npm run dev
   # Tester le formulaire de contact
   # Vérifier la réception d'email
   ```

2. **Déploiement**
   ```bash
   git add .
   git commit -m "Intégration EmailJS + formulaire de contact fonctionnel"
   git push origin v1-static
   
   # Vercel redéploiera automatiquement
   ```

## 🔒 Variables d'environnement (optionnel)

Pour plus de sécurité, vous pouvez utiliser des variables d'environnement :

1. **Créer .env.local**
   ```bash
   # frontend/.env.local
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
   ```

2. **Configurer sur Vercel**
   - Dashboard Vercel > Settings > Environment Variables
   - Ajouter les variables avec les mêmes noms
   - Redéployer

3. **Utiliser dans le code**
   ```typescript
   const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
   const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
   const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
   ```

## 📈 Améliorations supplémentaires

### Analytics (optionnel)

1. **Google Analytics 4**
   - Créer une propriété GA4
   - Ajouter le tag dans `layout.tsx`
   - Ou utiliser `@next/third-parties/google`

2. **Vercel Analytics**
   - Gratuit avec Vercel
   - Dashboard > Analytics > Enable
   - Insights automatiques sur les performances

### Performance

1. **Lighthouse audit**
   ```bash
   npx lighthouse https://mondomaine.com --output html
   ```

2. **Optimisations images**
   - Utiliser le composant `next/image` (déjà fait)
   - Format WebP automatique
   - Lazy loading natif

### SEO

1. **Sitemap.xml** (déjà configuré)
   - Accessible via `/sitemap.xml`
   - Auto-généré avec vos articles

2. **Robots.txt**
   ```bash
   # frontend/public/robots.txt
   User-agent: *
   Allow: /
   
   Sitemap: https://mondomaine.com/sitemap.xml
   ```

## 🚨 Checklist de déploiement

### Avant déploiement
- [ ] Build local réussi (`npm run build`)
- [ ] Tests manuels de toutes les pages
- [ ] Images optimisées et présentes
- [ ] Métadonnées SEO configurées
- [ ] Formulaire de contact testé

### Après déploiement
- [ ] Site accessible sur l'URL Vercel
- [ ] Toutes les pages se chargent correctement
- [ ] Formulaire de contact fonctionne
- [ ] Emails reçus correctement
- [ ] Performance Lighthouse > 90
- [ ] Responsive sur mobile/tablet

### Avec domaine personnalisé
- [ ] DNS configurés correctement
- [ ] HTTPS activé automatiquement
- [ ] Redirection www ↔ non-www
- [ ] Certificat SSL valide

## 📞 Support et dépannage

### Problèmes courants

1. **Build échoue sur Vercel**
   - Vérifier que `npm run build` fonctionne en local
   - Vérifier les versions Node.js compatibles
   - Regarder les logs détaillés sur Vercel

2. **Domaine ne fonctionne pas**
   - Vérifier la propagation DNS : [dnschecker.org](https://dnschecker.org)
   - Attendre 24-48h pour propagation complète
   - Vérifier les enregistrements DNS chez le registrar

3. **EmailJS ne fonctionne pas**
   - Vérifier les credentials dans la console EmailJS
   - Tester l'envoi depuis le dashboard EmailJS
   - Vérifier les quotas (200 emails/mois gratuit)

4. **Emails en spam**
   - Configurer SPF, DKIM, DMARC chez Zoho
   - Utiliser une adresse "from" professionnelle
   - Éviter les mots-clés spam dans le template

### Resources utiles
- [Documentation Vercel](https://vercel.com/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Zoho Mail Help](https://help.zoho.com/portal/en/community/topic/zoho-mail)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

## 🎉 Félicitations !

Votre portfolio est maintenant :
- ✅ Déployé en production
- ✅ Rapide et optimisé
- ✅ Avec un formulaire de contact fonctionnel
- ✅ Hébergement gratuit
- ✅ SSL automatique
- ✅ Prêt à recevoir du trafic

Votre site professionnel est en ligne ! 🚀