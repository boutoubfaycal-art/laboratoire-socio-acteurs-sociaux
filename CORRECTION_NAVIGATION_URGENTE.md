# Correction Urgente - Navigation entre Pages

## 🚨 Problème Identifié

**Symptômes :**
- Page principale fonctionne ✅
- Bouton admin → Erreur 404 ❌
- Page admin existe mais navigation échoue ❌

**Cause :** Liens de navigation incorrects

## 🔧 Correction Immédiate

### Solution 1: Modifier le Bouton Admin dans index.html

**Localiser cette ligne dans index.html :**
```html
<button id="adminBtn" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition" title="لوحة التحكم">
    <i class="fas fa-cog ml-2"></i>
    <span>الإدارة</span>
</button>
```

**REMPLACER par :**
```html
<button onclick="window.location.href='https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux/admin/'" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition" title="لوحة التحكم">
    <i class="fas fa-cog ml-2"></i>
    <span>الإدارة</span>
</button>
```

### Solution 2: Modifier le Bouton Retour dans admin/index.html

**Localiser cette ligne dans admin/index.html :**
```html
<a href="../" class="bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
    <i class="fas fa-home ml-2"></i>
    العودة للموقع
</a>
```

**REMPLACER par :**
```html
<button onclick="window.location.href='https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux/'" class="bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
    <i class="fas fa-home ml-2"></i>
    العودة للموقع
</button>
```

## 🚀 Uploader les Corrections

### Méthode 1: GitHub Web Interface
1. Aller sur : https://github.com/boutoubfaycal-art/laboratoire-socio-acteurs-sociaux
2. Cliquer sur le fichier à modifier
3. Cliquer l'icône crayon (✏️) pour éditer
4. Appliquer les corrections ci-dessus
5. Cliquer "Commit changes"

### Méthode 2: Git Command Line
```bash
# Modifier les fichiers localement
# Puis uploader
git add .
git commit -m "Corriger navigation admin - liens directs"
git push origin main
```

## ✅ Tests après Correction

### Test 1: Navigation Admin
1. Aller sur : https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux
2. Cliquer sur "الإدارة"
3. ✅ Doit ouvrir la page admin

### Test 2: Retour à la Page Principale
1. Être sur la page admin
2. Cliquer sur "العودة للموقع"
3. ✅ Doit retourner à la page principale

## 🎯 URLs qui Doivent Fonctionner

**Page principale :**
```
https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociPage admin :**
```
https://boutoubfaycalaux/
```

**-art.github.io/laboratoire-socio-acteurs-sociaux/admin/
```

## 🔄 Alternative Rapide

Si les corrections ne fonctionnent pas immédiatement, utilisez ces URLs directes :

### URL Complète pour Admin
```
https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux/admin/
```

### URL Complète pour Retour
```
https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux/
```

## 📋 Vérification Finale

| Test | Action | Résultat Attendu |
|------|--------|------------------|
| 1 | Page principale | ✅ Site s'affiche |
| 2 | Bouton admin | ✅ Page admin s'ouvre |
| 3 | Bouton retour | ✅ Retour page principale |
| 4 | Navigation fluide | ✅ Toutes les pages accessibles |

## 🎉 Résultat

Après application de ces corrections :
- ✅ Navigation 100% fonctionnelle
- ✅ Accès admin opérationnel
- ✅ Retour site principal fluide
- ✅ Site professionnel complet

**Le laboratoire aura un site parfaitement fonctionnel !**
