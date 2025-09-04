# 🚀 Guide de Déploiement Vercel - Portfolio DevEkoc

## 📋 Prérequis

1. ✅ Build réussi (`npm run build` dans `/frontend`)
2. ✅ Variables d'environnement configurées
3. ✅ Tests Lighthouse validés (Performance: 69/100)
4. ✅ Configuration Next.js optimisée

## 🔧 Variables d'Environnement à Configurer sur Vercel

Dans le dashboard Vercel > Settings > Environment Variables, ajouter :

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_kc3fm0p
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_9e8vnmc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=BVzaMaP7Ctize-6PL
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LfIkbwrAAAAAK-d6ACFrbz7PI8NzySLSGUsbw-A
```

## 🚀 Étapes de Déploiement

### Option 1: Via Dashboard Vercel (Recommandé)

1. **Connecter le Repository**
   - Aller sur [vercel.com](https://vercel.com)
   - "Add New Project" → "Import Git Repository"
   - Sélectionner le repository GitHub

2. **Configuration du Projet**
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` 
   - **Output Directory**: `.next` (par défaut)
   - **Install Command**: `npm ci`

3. **Variables d'Environnement**
   - Ajouter les 4 variables listées ci-dessus
   - Environnements: Production, Preview, Development

4. **Déploiement**
   - Cliquer "Deploy"
   - Attendre ~2-3 minutes

### Option 2: Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Dans le dossier frontend/
cd frontend

# Déployer
vercel --prod

# Configurer les variables d'environnement
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
vercel env add NEXT_PUBLIC_RECAPTCHA_SITE_KEY
```

## 🌐 Configuration du Domaine

### Domaine Vercel Temporaire
- URL automatique: `portfolio-devekoc.vercel.app`
- Prêt immédiatement après déploiement

### Domaine Personnalisé (devekoc.com)
1. **Dans Vercel Dashboard**:
   - Settings → Domains
   - Add Domain: `devekoc.com` et `www.devekoc.com`

2. **Configuration DNS** (chez votre registrar):
   ```
   Type: A     | Name: @     | Value: 76.76.19.61
   Type: CNAME | Name: www   | Value: cname.vercel-dns.com
   ```

3. **Vérification**:
   - SSL automatique (Let's Encrypt)
   - Redirection www → apex domain
   - HTTP → HTTPS automatique

## ✅ Vérifications Post-Déploiement

### Tests Fonctionnels
- [ ] Page d'accueil charge correctement
- [ ] Navigation entre sections
- [ ] Formulaire de contact fonctionne
- [ ] reCAPTCHA s'affiche et fonctionne
- [ ] Réception d'emails via EmailJS
- [ ] Responsive design sur mobile/desktop

### Tests Performance
- [ ] Lighthouse score ≥ 65 en Performance
- [ ] Images optimisées (WebP/AVIF)
- [ ] Temps de chargement < 3s
- [ ] Core Web Vitals dans les seuils

### Tests SEO
- [ ] Meta tags présents
- [ ] Sitemap.xml accessible
- [ ] Robots.txt valide
- [ ] Structure HTML sémantique
- [ ] Images avec alt text

## 🐛 Troubleshooting

### Erreurs Courantes

1. **Build Failed - Module not found**
   ```bash
   cd frontend && rm -rf .next node_modules
   npm ci && npm run build
   ```

2. **Variables d'environnement non trouvées**
   - Vérifier dans Vercel Dashboard > Settings > Environment Variables
   - Redéployer après ajout: `vercel --prod`

3. **Formulaire de contact ne fonctionne pas**
   - Vérifier les clés EmailJS en production
   - Tester reCAPTCHA sur le domaine de production
   - Vérifier la console navigateur pour erreurs CORS

4. **Images ne chargent pas**
   - Vérifier les paths dans `/public/images/`
   - Configuration Next.js images dans `next.config.ts`

5. **Performance dégradée**
   - Vérifier la taille des bundles
   - Analyser avec: `ANALYZE=true npm run build`
   - Optimiser les imports dynamiques

## 📊 Métriques de Succès

### Performance Targets
- **Lighthouse Performance**: ≥ 65/100 ✅ (69 atteint)
- **First Contentful Paint**: ≤ 1.5s ✅ (1.3s)
- **Largest Contentful Paint**: ≤ 2.5s ⚠️ (3.4s)
- **Total Blocking Time**: ≤ 200ms ⚠️ (980ms)
- **Cumulative Layout Shift**: ≤ 0.1 ✅ (0.0)

### Fonctionnalités
- ✅ Site statique généré
- ✅ Formulaire de contact sécurisé
- ✅ reCAPTCHA v2 intégré
- ✅ Responsive design
- ✅ SEO optimisé
- ✅ HTTPS + Security headers

## 🔄 Mise à Jour Continue

### Git Workflow
```bash
# Développement local
git checkout -b feature/nouvelle-fonctionnalite
# ... modifications ...
git commit -m "feat: nouvelle fonctionnalité"
git push origin feature/nouvelle-fonctionnalite

# Merge vers main → déploiement automatique
```

### Preview Deployments
- Chaque PR crée un déploiement de preview
- URL temporaire pour tests
- Merge vers `main` → déploiement en production

---

**🎉 Portfolio DevEkoc - Prêt pour la Production !**

*Dernière mise à jour: 04/09/2025*