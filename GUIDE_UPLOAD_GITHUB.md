# 📤 Guide d'Upload vers GitHub - Étapes Détaillées

## 🎯 Vous êtes ici:
✅ Compte GitHub créé
✅ Repository `laboratoire-socio-acteurs-sociaux` créé

## 🚀 Étapes pour Uploader tous les Fichiers

### Méthode 1: Upload via Interface Web (Recommandée)

#### Étape 1: Accéder à votre Repository
1. Aller sur [github.com](https://github.com)
2. Se connecter avec votre compte
3. Cliquer sur votre repository `laboratoire-socio-acteurs-sociaux`

#### Étape 2: Commencer l'Upload
1. Dans votre repository, cliquer sur le lien **"uploading an existing file"**
   (ou l'icône d'upload avec une flèche vers le haut)
2. Une page d'upload va s'ouvrir

#### Étape 3: Sélectionner TOUS les Fichiers
1. **Glisser-déposer** tous les fichiers de votre projet dans la zone de drop:
   ```
   📁 FICHIERS À UPLOADER:
   ✅ index.html
   ✅ equipes.html
   ✅ equipe-asmu.html
   ✅ equipe-jvea.html
   ✅ equipe-lsf.html
   ✅ equipe-vjen.html
   ✅ styles.css
   ✅ script.js
   ✅ structured_content.json
   ✅ README.md
   ✅ .gitignore
   ✅ CNAME
   ✅ deploy.sh
   ✅ DEMARRAGE_RAPIDE.md
   ✅ GUIDE_DEPLOIEMENT_ETAPES.md
   ✅ DEPLOYMENT_GUIDE.md
   ✅ TASK_PROGRESS.md
   
   📁 DOSSIERS:
   ✅ admin/ (tout le dossier avec son contenu)
   ✅ activités labo/ (tout le dossier avec son contenu)
   ```

#### Étape 4: Commit des Fichiers
1. Dans "Commit message", écrire: `Initial deployment - Plateforme laboratoire socio`
2. Cliquer sur **"Commit changes"**
3. Attendre que l'upload se termine

### Méthode 2: Si l'Upload échoue (Fichiers trop volumineux)

#### Alternative - Upload par Lots
Si vous avez des problèmes avec l'upload en une fois:

1. **Premier upload** - Fichiers principaux:
   - index.html
   - styles.css
   - script.js
   - structured_content.json

2. **Deuxième upload** - Pages HTML:
   - equipes.html
   - equipe-*.html (tous les fichiers d'équipes)

3. **Troisième upload** - Dossier admin:
   - Glisser-déposer le dossier `admin/` complet

4. **Quatrième upload** - Dossier activités:
   - Glider-déposer le dossier `activités labo/` complet

5. **Cinquième upload** - Fichiers de configuration:
   - README.md
   - .gitignore
   - CNAME
   - Les fichiers .md (guides)

## ⚡ Activer GitHub Pages - Après l'Upload

### Étape 1: Aller dans les Paramètres
1. Dans votre repository, cliquer sur l'onglet **"Settings"**
2. Faire défiler dans le menu de gauche jusqu'à **"Pages"**

### Étape 2: Configurer GitHub Pages
1. Dans "Source", sélectionner **"Deploy from a branch"**
2. Dans "Branch", choisir **"main"**
3. Dans "Folder", sélectionner **"/ (root)"**
4. Cliquer sur **"Save"**

### Étape 3: Attendre le Déploiement
1. GitHub va afficher: "Your site is ready to be published"
2. Attendre 2-3 minutes
3. L'URL de votre site apparaîtra

## 🌐 Votre Site Sera Disponible À:
`https://[votre-nom-utilisateur].github.io/laboratoire-socio-acteurs-sociaux`

## ✅ Vérification du Bon Fonctionnement
Après le déploiement:
- [ ] Page d'accueil se charge correctement
- [ ] Navigation entre les pages fonctionne
- [ ] Interface d'administration accessible (bouton "الإدارة")
- [ ] Support multilingue opérationnel
- [ ] Design responsive sur mobile

## 🚨 Problèmes Courants et Solutions

### Problème 1: "404 Not Found"
**Solution:** Attendre 5-10 minutes pour le déploiement initial

### Problème 2: "Upload failed"
**Solution:** Essayer l'upload par lots (voir Méthode 2)

### Problème 3: "Pages not enabled"
**Solution:** Vérifier que le repository est "Public" et non "Private"

## 🎉 Félicitations !
Votre laboratoire de recherches sociologiques sera bientôt en ligne !

---

**Besoin d'aide ?** Consultez les guides complets dans les fichiers .md de votre projet.
