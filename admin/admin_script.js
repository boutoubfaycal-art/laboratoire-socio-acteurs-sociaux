// Script spécifique pour la page d'administration
document.addEventListener('DOMContentLoaded', function() {
    // Remplacer le lien de retour par une fonction JavaScript
    const backButton = document.querySelector('a[href="../"]');
    if (backButton) {
        // Remplacer le href par une fonction onClick
        backButton.removeAttribute('href');
        backButton.style.cursor = 'pointer';
        backButton.addEventListener('click', function() {
            // Redirection vers la page principale avec l'URL complète de GitHub Pages
            window.location.href = 'https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux/admin/';
        });
    }

    // Charger les données d'administration
    loadAdminData();
});

function loadAdminData() {
    // Initialiser l'administration
    if (typeof loadDataFromLocalStorage === 'function') {
        loadDataFromLocalStorage();
    }
    if (typeof updateDashboardStats === 'function') {
        updateDashboardStats();
    }
    if (typeof loadDashboardData === 'function') {
        loadDashboardData();
    }
    if (typeof setupAdminPageEventListeners === 'function') {
        setupAdminPageEventListeners();
    }
}
