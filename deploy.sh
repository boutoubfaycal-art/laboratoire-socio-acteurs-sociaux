#!/bin/bash
# Script de Déploiement Automatisé - Plateforme Laboratoire de Recherches Sociologiques
# Utilisation: ./deploy.sh votre-username-github

echo "🚀 Début du déploiement automatisé..."
echo "=============================================="

# Vérifier si le nom d'utilisateur GitHub est fourni
if [ -z "$1" ]; then
    echo "❌ Erreur: Veuillez fournir votre nom d'utilisateur GitHub"
    echo "Usage: ./deploy.sh votre-username-github"
    exit 1
fi

USERNAME=$1
REPO_NAME="laboratoire-socio-acteurs-sociaux"

echo "👤 Nom d'utilisateur GitHub: $USERNAME"
echo "📁 Nom du repository: $REPO_NAME"
echo ""

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Créer le repository local si nécessaire
if [ ! -d ".git" ]; then
    echo "📝 Initialisation du repository Git local..."
    git init
    git add .
    git commit -m "Initial deployment - Plateforme laboratoire socio"
fi

# Créer le repository distant
echo "🌐 Création du repository GitHub..."
echo "Veuillez créer manuellement le repository '$REPO_NAME' sur GitHub:"
echo "1. Allez sur https://github.com/new"
echo "2. Nom: $REPO_NAME"
echo "3. Description: Plateforme web du Laboratoire d'Études Sociologiques des Acteurs Sociaux"
echo "4. Public"
echo "5. Cocher 'Add a README file'"
echo "6. Cliquez 'Create repository'"
echo ""
read -p "Appuyez sur Entrée après avoir créé le repository..."

# Ajouter le remote
echo "🔗 Configuration du repository distant..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

# Déployer
echo "📤 Déploiement en cours..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Déploiement terminé!"
echo "🌐 Votre site sera bientôt disponible à:"
echo "   https://$USERNAME.github.io/$REPO_NAME"
echo ""
echo "⚙️  Configuration de GitHub Pages:"
echo "1. Allez sur https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "2. Source: Deploy from a branch"
echo "3. Branch: main"
echo "4. Folder: / (root)"
echo "5. Cliquez 'Save'"
echo ""
echo "🎉 Votre plateforme de laboratoire est maintenant en ligne!"
echo "=============================================="
