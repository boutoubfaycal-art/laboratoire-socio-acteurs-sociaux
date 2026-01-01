# Guide de Déploiement Étape par Étape - Plateforme Laboratoire de Recherches Sociologiques

## 🎯 Objectif
Déployer gratuitement et illimitément votre plateforme de laboratoire sur GitHub Pages.

## 📋 Prérequis
- Un compte GitHub (gratuit)
- 30 minutes de temps
- Les fichiers de votre projet (déjà préparés)

## 🚀 Étapes de Déploiement Détaillées

### Étape 1: Créer un Compte GitHub
1. Aller sur [github.com](https://github.com)
2. Cliquer sur "Sign up" (S'inscrire)
3. Choisir un nom d'utilisateur (ex: `laboratoire-socio`)
4. Créer un mot de passe fort
5. Vérifier l'email

### Étape 2: Créer un Nouveau Repository
1. Se connecter à GitHub
2. Cliquer sur le bouton vert "New" ou "+" → "New repository"
3. Nom du repository: `laboratoire-socio-acteurs-sociaux`
4. Description: `Plateforme web du Laboratoire d'Études Sociologiques des Acteurs Sociaux - Université d'Oran 2`
5. Sélectionner "Public" (nécessaire pour GitHub Pages gratuit)
6. Cocher "Add a README file"
7. Cliquer "Create repository"

### Étape 3: Uploader les Fichiers du Projet
#### Option A: Interface Web (Recommandé pour débutants)
1. Dans votre repository GitHub, cliquer "uploading an existing file"
2. Glisser-déposer TOUS les fichiers de votre projet:
   - index.html
   - equipes.html
   - equipe-*.html (tous les fichiers d'équipes)
   - admin/ (dossier complet)
   - styles.css
   - script.js
   - structured_content.json
   - README.md
   - .gitignore
   - CNAME
   - activités labo/ (dossier complet)
3. Commit message: "Initial deployment - Platforme laboratoire socio"
4. Cliquer "Commit changes"

#### Option B: Git Command Line (Pour utilisateurs avancés)
```bash
git clone https://github.com/votre-username/laboratoire-socio-acteurs-sociaux.git
cd laboratoire-socio-acteurs-sociaux
# Copier tous vos fichiers dans le dossier
git add .
git commit -m "Initial deployment - Platforme laboratoire socio"
git push origin main
```

### Étape 4: Activer GitHub Pages
1. Aller dans votre repository
2. Cliquer sur l'onglet "Settings"
3. Faire défiler jusqu'à "Pages" dans le menu de gauche
4. Dans "Source", sélectionner "Deploy from a branch"
5. Choisir "main" branch et "/ (root)"
6. Cliquer "Save"
7. Attendre 2-3 minutes pour le déploiement

### Étape 5: Accéder à Votre Site
1. Votre site sera disponible à: `https://votre-username.github.io/laboratoire-socio-acteurs-sociaux`
2. GitHub affichera l'URL dans la section Pages
3. Tester toutes les pages pour vérifier le bon fonctionnement

## 🔧 Configuration Avancée

### Domaine Personnalisé (Optionnel)
Si vous voulez utiliser un domaine comme `laboratoire.univ-oran2.dz`:

1. **Modifier le fichier CNAME:**
   ```
   laboratoire.univ-oran2.dz
   ```

2. **Configuration DNS:**
   - Ajouter un enregistrement CNAME pointant vers `votre-username.github.io`
   - Configurer chez votre registraire de domaine

3. **Activer HTTPS:**
   - Dans Settings → Pages → Custom domain
   - Cocher "Enforce HTTPS"

### Optimisations de Performance
1. **Activer la compression:** GitHub Pages le fait automatiquement
2. **Cache navigateur:** Configuré automatiquement
3. **CDN global:** Inclus avec GitHub Pages

## ✅ Tests de Validation

### Tests Manuels
- [ ] Page d'accueil se charge correctement
- [ ] Navigation entre les pages fonctionne
- [ ] Interface d'administration accessible
- [ ] Formulaire de contact fonctionne
- [ ] Support multilingue opérationnel
- [ ] Design responsive sur mobile/tablette
- [ ] Téléchargement du PDF fonctionne

### Tests de Performance
- [ ] Vitesse de chargement < 3 secondes
- [ ] Images optimisées
- [ ] CSS/JS minifiés (optionnel)

### Tests de Compatibilité
- [ ] Chrome (desktop/mobile)
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## 🔒 Sécurité

### Mesures Incluses
- **HTTPS automatique:** GitHub Pages fournit SSL/TLS
- **Headers sécurisés:** Configurés automatiquement
- **Protection DDoS:** Incluse avec GitHub

### Recommandations
- **Changer les mots de passe admin** après déploiement
- **Surveiller les accès** dans les statistiques GitHub
- **Sauvegarder régulièrement** le repository

## 📊 Monitoring et Statistiques

### Statistiques GitHub Pages
1. Aller dans votre repository
2. Cliquer sur "Insights" → "Traffic"
3. Voir les vues, visiteurs uniques, sources de trafic

### Google Analytics (Optionnel)
1. Créer un compte Google Analytics
2. Ajouter le code de suivi dans `<head>` de index.html
3. Suivre les statistiques détaillées

## 🛠️ Maintenance

### Mises à Jour du Contenu
1. **Via Interface GitHub:**
   - Modifier les fichiers directement en ligne
   - Commit les changements

2. **Via Interface d'Administration:**
   - Accéder à `/admin`
   - Utiliser l'interface web pour les mises à jour

3. **Via Git Local:**
   - Cloner le repository
   - Modifier en local
   - Pousser les changements

### Sauvegardes
- Repository GitHub = sauvegarde automatique
- Possibilité de télécharger une archive ZIP
- Historique des versions disponible

## 🎉 Félicitations !

Votre plateforme est maintenant:
- ✅ **En ligne 24/7**
- ✅ **Accessible partout dans le monde**
- ✅ **Gratuite à vie**
- ✅ **Sécurisée avec HTTPS**
- ✅ **Facile à maintenir**

## 📞 Support

### En cas de problème:
1. **Documentation GitHub Pages:** [pages.github.com](https://pages.github.com)
2. **Support GitHub:** [support.github.com](https://support.github.com)
3. **Communauté:** [github.community](https://github.community)

### URL Finale
Votre site sera accessible à:
`https://[votre-username].github.io/laboratoire-socio-acteurs-sociaux`

---

**🌟 Votre laboratoire de recherches sociologiques est maintenant sur internet !**
