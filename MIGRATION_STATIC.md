# Migration vers version statique Next.js

## Contexte
Ce document détaille les étapes pour migrer de la version Django + Next.js vers une version purement Next.js statique, tout en conservant l'historique Git et la possibilité de revenir au backend Django ultérieurement.

## Stratégie Git choisie : Branches séparées

```
master (Django + Next.js) ← Version complète archivée
├── v1-static (Next.js only) ← Version de production
└── v2-fullstack (future) ← Retour Django si nécessaire
```

## Étapes de migration

### 1. Sauvegarder la version Django actuelle

```bash
# Tagger la version actuelle pour référence future
git tag -a v0.9-django -m "Version complète Django + Next.js"

# Pousser le tag sur le remote
git push origin v0.9-django

# Vérifier que le tag est bien créé
git tag -l
```

### 2. Créer la branche pour la version statique

```bash
# Créer et basculer sur la nouvelle branche
git checkout -b v1-static

# Pousser la nouvelle branche sur GitHub
git push -u origin v1-static

# Vérifier qu'on est sur la bonne branche
git branch -v
```

### 3. Migration du code (à faire après création de la branche)

**Modifications à effectuer :**
- Exporter les données Django vers des fichiers TS/JSON
- Supprimer les appels API Axios
- Remplacer par des imports directs
- Supprimer le dossier `backend/` (sauf si on veut le garder)
- Nettoyer le package.json des dépendances inutiles

```bash
# Après avoir fait toutes les modifications
git add .
git commit -m "Migration vers Next.js pur - suppression backend Django

- Export des données Django vers fichiers TS
- Suppression des appels API
- Refactoring des composants pour données statiques
- Optimisation pour déploiement Vercel"

git push origin v1-static
```

### 4. Configuration du déploiement

**Vercel :**
- Connecter le projet Vercel à la branche `v1-static`
- Le déploiement se fera automatiquement sur cette branche
- Configurer le domaine personnalisé si nécessaire

**Settings Vercel :**
```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Root Directory: frontend (si structure conservée) ou . (si frontend à la racine)
```

### 5. Gestion des versions futures

#### Pour des améliorations sur la version statique
```bash
# Travailler toujours sur v1-static
git checkout v1-static
# ... faire des modifications ...
git add .
git commit -m "Amélioration: description"
git push origin v1-static
```

#### Pour revenir à Django plus tard (v2)
```bash
# Option 1: Partir du tag Django original
git checkout -b v2-fullstack v0.9-django

# Option 2: Partir de master et intégrer les améliorations de v1-static
git checkout master
git checkout -b v2-fullstack
git merge v1-static --allow-unrelated-histories

# Résoudre les conflits et adapter selon besoins
```

#### Pour switcher entre versions
```bash
# Voir la version Django originale
git checkout v0.9-django

# Revenir à la version statique en développement
git checkout v1-static

# Voir l'historique des branches
git log --oneline --graph --all
```

### 6. Structure finale recommandée

```
portfolio/
├── frontend/ (ou à la racine)
│   ├── src/
│   │   ├── data/          ← Nouvelles données statiques
│   │   │   ├── projects.ts
│   │   │   ├── posts.ts
│   │   │   ├── technologies.ts
│   │   │   └── config.ts
│   │   ├── components/
│   │   ├── app/
│   │   └── lib/
│   ├── public/
│   └── package.json
└── MIGRATION_STATIC.md
```

### 7. Points d'attention

**Données à migrer :**
- Projets (depuis `backend/projects/models.py`)
- Articles de blog (depuis `backend/blog/models.py`)
- Technologies utilisées
- Informations de contact

**Fonctionnalités à adapter :**
- Formulaire de contact → Service externe (Formspree, Netlify Forms)
- Images projets → Déplacer vers `public/images/`
- API calls → Imports directs des données

**Avantages de cette approche :**
- ✅ Historique Git préservé
- ✅ Possibilité de revenir au backend Django
- ✅ Déploiement indépendant et optimisé
- ✅ Coût d'hébergement minimal (gratuit sur Vercel)
- ✅ Performance maximale (statique)

## Commands de vérification

```bash
# Vérifier les branches existantes
git branch -a

# Vérifier les tags
git tag -l

# Voir l'historique complet
git log --oneline --graph --all --decorate

# Comparer les branches
git diff master..v1-static --name-only
```

## Rollback si nécessaire

Si la migration ne se passe pas bien :

```bash
# Revenir sur master
git checkout master

# Supprimer la branche problématique (locale)
git branch -D v1-static

# Supprimer la branche sur GitHub
git push origin --delete v1-static

# Recommencer la migration
git checkout -b v1-static
```