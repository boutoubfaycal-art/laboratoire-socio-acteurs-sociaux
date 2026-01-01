// Laboratory Platform JavaScript
console.log('JavaScript file loaded successfully!');

// Global variables
let currentLang = 'ar';
let isAdminLoggedIn = false; // Authentification requise pour l'administration
let adminUsername = 'MOURAD';
let adminPassword = '080213400'; // Mot de passe par défaut
let membersData = [];
let publicationsData = [];
let activitiesData = [];
let structuredContent = null;

// Initialize the platform
document.addEventListener('DOMContentLoaded', function() {
    // Load data from localStorage first
    loadDataFromLocalStorage();
    
    initializePlatform();
    loadMembersData();
    loadPublicationsData();
    loadStructuredContent();
    animateCounters();
    setupEventListeners();
    
    // Setup admin button listener directly here to ensure it works
    const adminBtn = document.getElementById('adminBtn');
    if (adminBtn) {
        console.log('Setting up admin button click handler...');
        adminBtn.addEventListener('click', function(e) {
            console.log('Admin button clicked!');
            e.preventDefault();

            // Check if already logged in
            if (isAdminLoggedIn) {
                // Navigate to admin page if authenticated
                window.location.href = 'https://boutoubfaycal-art.github.io/laboratoire-socio-acteurs-sociaux/admin/';
            } else {
                // Show login modal if not authenticated
                openAdminLogin();
            }
        });
    }
});

// Initialize platform
function initializePlatform() {
    // Set initial language
    updateLanguage(currentLang);

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize modern animations
    initializeAnimations();

    // Initialize progress bar
    initializeProgressBar();

    // Initialize scroll effects
    initializeScrollEffects();

    // Initialize interactive elements
    initializeInteractiveElements();
}

// Language toggle functionality
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'ar' ? 'fr' : 'ar';
            updateLanguage(currentLang);
        });
    }
}

function updateLanguage(lang) {
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language toggle button (only if element exists)
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'ar' ? 'Français' : 'العربية';
    }
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-ar][data-fr]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${lang}`);
        } else {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    
    // Update navigation active state
    updateNavigationActive();
}

// Load members data (real data from laboratory documents)
function loadMembersData() {
    // Real data from laboratory documents
    membersData = [
        {
            id: 1,
            name: 'مولاي الحاج مراد',
            nameFr: 'Moulai Hadj Morad',
            role: 'أستاذ التعليم العالي',
            roleFr: 'Professeur d\'Enseignement Supérieur',
            category: 'professeurs',
            email: 'moulaihadj.morad@univ-oran2.dz',
            research: 'الشباب والقيم في المجتمع الجزائري',
            researchFr: 'Jeunesse et valeurs dans la société algérienne',
            team: 'JVEA',
            university: 'جامعة وهران 2'
        },
        {
            id: 2,
            name: 'هــرندي كريمة',
            nameFr: 'Herni Krim',
            role: 'أستاذة التعليم العالي',
            roleFr: 'Professeure d\'Enseignement Supérieur',
            category: 'professeurs',
            email: 'herndi.krim@univ-mestghanati.dz',
            research: 'الرابطة الاجتماعية والأسرة',
            researchFr: 'Lien social et famille',
            team: 'LSF',
            university: 'جامعة مستغانم'
        },
        {
            id: 3,
            name: 'حساين عويشة',
            nameFr: 'Hesaine Ouichaa',
            role: 'أستاذة محاضرة أ',
            roleFr: 'Maître de Conférences A',
            category: 'professeurs',
            email: 'hesaine.ouichaa@univ-saida.dz',
            research: 'الفاعلون الاجتماعيون في الوسط الحضري',
            researchFr: 'Acteurs sociaux en milieu urbain',
            team: 'ASMU',
            university: 'جامعة سعيدة'
        },
        {
            id: 4,
            name: 'بلحاج حسنية',
            nameFr: 'Belhadj Hasna',
            role: 'أستاذة محاضرة أ',
            roleFr: 'Maître de Conférences A',
            category: 'professeurs',
            email: 'belhadj.hasna@univ-oran2.dz',
            research: 'قيم الشباب الجزائري والبيئة الرقمية',
            researchFr: 'Valeurs des jeunes algériens et environnement numérique',
            team: 'VJEN',
            university: 'جامعة وهران 2'
        },
        {
            id: 5,
            name: 'غربي راضية',
            nameFr: 'Ghorbi Radia',
            role: 'أستاذة',
            roleFr: 'Professeure',
            category: 'chercheurs',
            email: 'ghorbi.radia@univ-oran2.dz',
            research: 'الشباب والقيم في المجتمع الجزائري',
            researchFr: 'Jeunesse et valeurs dans la société algérienne',
            team: 'JVEA',
            university: 'جامعة وهران 2'
        },
        {
            id: 6,
            name: 'لغرع ايمان',
            nameFr: 'Lgherri Imen',
            role: 'أستاذة مساعدة',
            roleFr: 'Maître Assistante',
            category: 'chercheurs',
            email: 'lgherri.imen@univ-oran2.dz',
            research: 'الشباب والقيم في المجتمع الجزائري',
            researchFr: 'Jeunesse et valeurs dans la société algérienne',
            team: 'JVEA',
            university: 'جامعة وهران 2'
        },
        {
            id: 7,
            name: 'بوطوب فيصل',
            nameFr: 'Boutob Faysal',
            role: 'باحث',
            roleFr: 'Chercheur',
            category: 'chercheurs',
            email: 'boutob.faysal@univ-oran2.dz',
            research: 'الشباب والقيم في المجتمع الجزائري',
            researchFr: 'Jeunesse et valeurs dans la société algérienne',
            team: 'JVEA',
            university: 'جامعة وهران 2'
        },
        {
            id: 8,
            name: 'بودرع فوزي',
            nameFr: 'Boudarf Foudil',
            role: 'باحث',
            roleFr: 'Chercheur',
            category: 'chercheurs',
            email: 'boudarf.foudil@univ-oran2.dz',
            research: 'الشباب والقيم في المجتمع الجزائري',
            researchFr: 'Jeunesse et valeurs dans la société algérienne',
            team: 'JVEA',
            university: 'جامعة وهران 2'
        },
        {
            id: 9,
            name: 'العقاق حفصة',
            nameFr: 'Laqqak Hafsa',
            role: 'باحثة',
            roleFr: 'Chercheuse',
            category: 'chercheurs',
            email: 'laqqak.hafsa@univ-mestghanati.dz',
            research: 'الرابطة الاجتماعية والأسرة',
            researchFr: 'Lien social et famille',
            team: 'LSF',
            university: 'جامعة مستغانم'
        },
        {
            id: 10,
            name: 'سعداوي ام الخير',
            nameFr: 'Sadawi Amelkheir',
            role: 'باحثة',
            roleFr: 'Chercheuse',
            category: 'chercheurs',
            email: 'sadawi.amelkheir@univ-mestghanati.dz',
            research: 'الرابطة الاجتماعية والأسرة',
            researchFr: 'Lien social et famille',
            team: 'LSF',
            university: 'جامعة مستغانم'
        },
        {
            id: 11,
            name: 'بن شراط نجاة',
            nameFr: 'Ben Charat Nadjate',
            role: 'باحثة',
            roleFr: 'Chercheuse',
            category: 'chercheurs',
            email: 'ben.charat.nadjate@univ-saida.dz',
            research: 'الفاعلون الاجتماعيون في الوسط الحضري',
            researchFr: 'Acteurs sociaux en milieu urbain',
            team: 'ASMU',
            university: 'جامعة سعيدة'
        },
        {
            id: 12,
            name: 'طرشاوي رقية',
            nameFr: 'Tarshawi Roukia',
            role: 'باحثة',
            roleFr: 'Chercheuse',
            category: 'chercheurs',
            email: 'tarshawi.roukia@univ-saida.dz',
            research: 'الفاعلون الاجتماعيون في الوسط الحضري',
            researchFr: 'Acteurs sociaux en milieu urbain',
            team: 'ASMU',
            university: 'جامعة سعيدة'
        },
        {
            id: 13,
            name: 'حطاب حطاب',
            nameFr: 'Hattab Hattab',
            role: 'باحث',
            roleFr: 'Chercheur',
            category: 'chercheurs',
            email: 'hattab.hattab@univ-saida.dz',
            research: 'الفاعلون الاجتماعيون في الوسط الحضري',
            researchFr: 'Acteurs sociaux en milieu urbain',
            team: 'ASMU',
            university: 'جامعة سعيدة'
        },
        {
            id: 14,
            name: 'زرقة دليلة',
            nameFr: 'Zerga Dalila',
            role: 'باحثة',
            roleFr: 'Chercheuse',
            category: 'chercheurs',
            email: 'zerga.dalila@univ-oran2.dz',
            research: 'قيم الشباب الجزائري والبيئة الرقمية',
            researchFr: 'Valeurs des jeunes algériens et environnement numérique',
            team: 'VJEN',
            university: 'جامعة وهران 2'
        },
        {
            id: 15,
            name: 'طيبي عيسى',
            nameFr: 'Tibi Issa',
            role: 'باحث',
            roleFr: 'Chercheur',
            category: 'chercheurs',
            email: 'tibi.issa@univ-oran2.dz',
            research: 'قيم الشباب الجزائري والبيئة الرقمية',
            researchFr: 'Valeurs des jeunes algériens et environnement numérique',
            team: 'VJEN',
            university: 'جامعة وهران 2'
        },
        {
            id: 16,
            name: 'بلحاجي محمد',
            nameFr: 'Belhadji Mohamed',
            role: 'باحث',
            roleFr: 'Chercheur',
            category: 'chercheurs',
            email: 'belhadji.mohamed@univ-oran2.dz',
            research: 'قيم الشباب الجزائري والبيئة الرقمية',
            researchFr: 'Valeurs des jeunes algériens et environnement numérique',
            team: 'VJEN',
            university: 'جامعة وهران 2'
        }
    ];

    // Only display members if the grid exists
    const grid = document.getElementById('effectifsGrid');
    if (grid) {
        displayMembers('all');
    }
}

// Display members based on category
function displayMembers(category) {
    const grid = document.getElementById('effectifsGrid');
    const filteredMembers = category === 'all' 
        ? membersData 
        : membersData.filter(member => member.category === category);
    
    grid.innerHTML = '';
    
    filteredMembers.forEach(member => {
        const memberCard = createMemberCard(member);
        grid.appendChild(memberCard);
    });
    
    // Add animation
    setTimeout(() => {
        grid.querySelectorAll('.member-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-fade-in-up');
            }, index * 100);
        });
    }, 100);
}

// Create member card
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card card-hover';
    
    const name = currentLang === 'ar' ? member.name : member.nameFr;
    const role = currentLang === 'ar' ? member.role : member.roleFr;
    const research = currentLang === 'ar' ? member.research : member.researchFr;
    
    card.innerHTML = `
        <div class="member-avatar">
            ${name.charAt(0).toUpperCase()}
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${name}</h3>
        <p class="text-blue-600 font-medium mb-2">${role}</p>
        <p class="text-gray-600 text-sm mb-3">${research}</p>
        <div class="flex justify-center space-x-reverse space-x-2">
            <a href="mailto:${member.email}" class="text-blue-600 hover:text-blue-800">
                <i class="fas fa-envelope"></i>
            </a>
            <button class="text-gray-600 hover:text-gray-800">
                <i class="fas fa-user"></i>
            </button>
        </div>
    `;
    
    return card;
}

// Load publications data
function loadPublicationsData() {
    // Simulated publications data
    publicationsData = [
        {
            id: 1,
            title: 'التحولات الاجتماعية في المجتمعات العربية',
            titleFr: 'Les transformations sociales dans les sociétés arabes',
            authors: 'أحمد محمد، فاطمة بن علي',
            authorsFr: 'Ahmed Mohamed, Fatima Ben Ali',
            year: 2023,
            journal: 'مجلة العلوم الاجتماعية',
            journalFr: 'Revue des Sciences Sociales',
            type: 'article'
        },
        {
            id: 2,
            title: 'سوسيولوجيا الفاعلين الاجتماعيين في العصر الرقمي',
            titleFr: 'Sociologie des acteurs sociaux à l\'ère numérique',
            authors: 'سارة قاضي',
            authorsFr: 'Sarah Qadi',
            year: 2023,
            journal: 'دراسات سوسيولوجية',
            journalFr: 'Études Sociologiques',
            type: 'book'
        },
        {
            id: 3,
            title: 'الشباب والهوية في سياق العولمة',
            titleFr: 'Jeunesse et identité dans le contexte de la mondialisation',
            authors: 'محمد أمين، مريم سعيد',
            authorsFr: 'Mohamed Amin, Mariam Said',
            year: 2022,
            journal: 'مجلة الدراسات الشبابية',
            journalFr: 'Revue des Études Jeunes',
            type: 'article'
        }
    ];
    
    displayPublications();
}

// Display publications
function displayPublications() {
    const list = document.getElementById('publicationsList');
    if (!list) return; // Exit if element doesn't exist
    
    list.innerHTML = '';
    
    publicationsData.forEach(pub => {
        const pubCard = createPublicationCard(pub);
        list.appendChild(pubCard);
    });
}

// Create publication card
function createPublicationCard(pub) {
    const card = document.createElement('div');
    card.className = 'publication-card';
    
    const title = currentLang === 'ar' ? pub.title : pub.titleFr;
    const authors = currentLang === 'ar' ? pub.authors : pub.authorsFr;
    const journal = currentLang === 'ar' ? pub.journal : pub.journalFr;
    const typeIcon = pub.type === 'book' ? 'fa-book' : 'fa-file-alt';
    
    card.innerHTML = `
        <div class="flex items-start space-x-reverse space-x-4">
            <i class="fas ${typeIcon} text-blue-600 text-xl mt-1"></i>
            <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">${title}</h3>
                <p class="text-gray-600 mb-1">${authors}</p>
                <p class="text-sm text-gray-500">${journal} • ${pub.year}</p>
            </div>
        </div>
    `;
    
    return card;
}

// Animate statistics counters
function animateCounters() {
    const counters = [
        { id: 'totalMembers', target: 25, duration: 2000 },
        { id: 'researchers', target: 15, duration: 1500 },
        { id: 'publications', target: 42, duration: 2500 },
        { id: 'projects', target: 8, duration: 1000 }
    ];
    
    counters.forEach(counter => {
        animateCounter(counter.id, counter.target, counter.duration);
    });
}

// Animate individual counter
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    if (!element) return; // Exit if element doesn't exist
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Setup event listeners
function setupEventListeners() {
    // Setup language toggle
    setupLanguageToggle();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white');
                b.classList.add('bg-gray-200', 'text-gray-700');
            });

            this.classList.remove('bg-gray-200', 'text-gray-700');
            this.classList.add('active', 'bg-blue-600', 'text-white');

            // Filter members
            const category = this.getAttribute('data-category');
            displayMembers(category);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                searchMembers(query);
            } else {
                // Reset to current filter
                const activeFilter = document.querySelector('.filter-btn.active');
                const category = activeFilter ? activeFilter.getAttribute('data-category') : 'all';
                displayMembers(category);
            }
        });
    }

    // Export button
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            exportMembersToCSV();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Show success message
            showNotification(currentLang === 'ar'
                ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
                : 'Votre message a été envoyé avec succès! Nous vous contacterons bientôt.');

            // Reset form
            this.reset();
        });
    }

    // Navigation scroll spy
    window.addEventListener('scroll', updateNavigationActive);
}

// Update navigation active state based on scroll position
function updateNavigationActive() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-800', 'active');
        link.classList.add('text-gray-700');
        
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-blue-800', 'active');
        }
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle ml-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality
function searchMembers(query) {
    const filtered = membersData.filter(member => {
        const name = currentLang === 'ar' ? member.name : member.nameFr;
        const research = currentLang === 'ar' ? member.research : member.researchFr;
        return name.toLowerCase().includes(query.toLowerCase()) || 
               research.toLowerCase().includes(query.toLowerCase());
    });
    
    const grid = document.getElementById('effectifsGrid');
    grid.innerHTML = '';
    
    filtered.forEach(member => {
        const memberCard = createMemberCard(member);
        grid.appendChild(memberCard);
    });
}

// Export members data to CSV
function exportMembersToCSV() {
    const headers = currentLang === 'ar' ?
        ['الاسم', 'المنصب', 'الفئة', 'مجال البحث', 'البريد الإلكتروني'] :
        ['Nom', 'Poste', 'Catégorie', 'Domaine de recherche', 'Email'];

    const csvContent = [
        headers.join(','),
        ...membersData.map(member => [
            currentLang === 'ar' ? member.name : member.nameFr,
            currentLang === 'ar' ? member.role : member.roleFr,
            member.category,
            currentLang === 'ar' ? member.research : member.researchFr,
            member.email
        ].map(field => `"${field}"`).join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `membres_laboratoire_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success notification
    showNotification(currentLang === 'ar'
        ? 'تم تصدير البيانات بنجاح!'
        : 'Données exportées avec succès!');
}

// Print functionality
function printPage() {
    window.print();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printPage();
    }
    
    // Ctrl/Cmd + E for export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportMembersToCSV();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        // Close any open modals
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Load structured content from JSON
async function loadStructuredContent() {
    try {
        const response = await fetch('structured_content.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        structuredContent = await response.json();

        // Populate sections with dynamic content
        populateSectionsWithContent();
    } catch (error) {
        console.error('Erreur lors du chargement du contenu structuré:', error);
        // Fallback: use static content if JSON fails to load
        structuredContent = null;
    }
}

// Populate sections with dynamic content
function populateSectionsWithContent() {
    if (!structuredContent) return;

    // Populate nomination section
    const nominationSection = document.querySelector('#nomination .bg-blue-50');
    if (nominationSection && structuredContent.section1_nomination) {
        const title = currentLang === 'ar' ?
            structuredContent.section1_nomination.title :
            structuredContent.section1_nomination.title_fr;
        const content = structuredContent.section1_nomination.content[2] || 'Contenu non disponible';

        nominationSection.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-800 mb-4">${title}</h3>
            <p class="text-gray-700 leading-relaxed">${content}</p>
        `;
    }

    // Populate presentation section
    const presentationSection = document.querySelector('#presentation-laboratoire .grid.md\\:grid-cols-2');
    if (presentationSection && structuredContent.section2_presentation) {
        const title = currentLang === 'ar' ?
            structuredContent.section2_presentation.title :
            structuredContent.section2_presentation.title_fr;

        presentationSection.innerHTML = `
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">${title}</h3>
                <p class="text-gray-700 leading-relaxed">
                    ${currentLang === 'ar' ?
                        'المخبر مكرس للبحث العلمي في مجال علم الاجتماع مع التركيز على دراسة الفاعلين الاجتماعيين.' :
                        'Le laboratoire est dédié à la recherche scientifique en sociologie avec un focus sur l\'étude des acteurs sociaux.'
                    }
                </p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-800 mb-4" data-ar="أهداف المخبر" data-fr="Objectifs du laboratoire">
                    ${currentLang === 'ar' ? 'أهداف المخبر' : 'Objectifs du laboratoire'}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                    ${currentLang === 'ar' ?
                        'تطوير البحث العلمي في مجال علم الاجتماع، تكوين الباحثين، نشر النتائج العلمية' :
                        'Développer la recherche scientifique en sociologie, former les chercheurs, diffuser les résultats scientifiques'
                    }
                </p>
            </div>
        `;
    }

    // Populate definition section
    const definitionSection = document.querySelector('#definition-laboratoire .bg-gradient-to-r.from-purple-50');
    if (definitionSection && structuredContent.section3_definition) {
        const title = currentLang === 'ar' ?
            structuredContent.section3_definition.title :
            structuredContent.section3_definition.title_fr;

        const content = structuredContent.section3_definition.content;
        const description = content[3] || 'Contenu non disponible';
        const objectives = content[4] || 'Contenu non disponible';
        const topics = content[5] || 'Contenu non disponible';

        definitionSection.innerHTML = `
            <h3 class="text-xl font-semibold text-purple-800 mb-4">${title}</h3>
            <p class="text-gray-700 leading-relaxed mb-6">${description}</p>

            <div class="grid md:grid-cols-3 gap-6 mt-8">
                <div class="text-center">
                    <i class="fas fa-microscope text-4xl text-purple-600 mb-3"></i>
                    <h4 class="font-semibold text-gray-800 mb-2" data-ar="بحث علمي" data-fr="Recherche scientifique">
                        ${currentLang === 'ar' ? 'بحث علمي' : 'Recherche scientifique'}
                    </h4>
                    <p class="text-sm text-gray-600" data-ar="منهجية علمية rigoristes" data-fr="Méthodologie scientifique rigoureuse">
                        ${currentLang === 'ar' ? 'منهجية علمية rigoristes' : 'Méthodologie scientifique rigoureuse'}
                    </p>
                </div>
                <div class="text-center">
                    <i class="fas fa-users text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-semibold text-gray-800 mb-2" data-ar="فاعلون اجتماعيون" data-fr="Acteurs sociaux">
                        ${currentLang === 'ar' ? 'فاعلون اجتماعيون' : 'Acteurs sociaux'}
                    </h4>
                    <p class="text-sm text-gray-600" data-ar="دراسة السلوكات والممارسات" data-fr="Étude des comportements et pratiques">
                        ${currentLang === 'ar' ? 'دراسة السلوكات والممارسات' : 'Étude des comportements et pratiques'}
                    </p>
                </div>
                <div class="text-center">
                    <i class="fas fa-globe text-4xl text-green-600 mb-3"></i>
                    <h4 class="font-semibold text-gray-800 mb-2" data-ar="تأثير مجتمعي" data-fr="Impact social">
                        ${currentLang === 'ar' ? 'تأثير مجتمعي' : 'Impact social'}
                    </h4>
                    <p class="text-sm text-gray-600" data-ar="المساهمة في التطور الاجتماعي" data-fr="Contribution au développement social">
                        ${currentLang === 'ar' ? 'المساهمة في التطور الاجتماعي' : 'Contribution au développement social'}
                    </p>
                </div>
            </div>
        `;
    }

    // Populate research teams section
    const equipesSection = document.querySelector('#equipes-recherche');
    if (equipesSection && structuredContent.section4_equipes_recherche) {
        const equipes = structuredContent.section4_equipes_recherche.equipes;

        // Update existing equipe cards with dynamic content
        equipes.forEach((equipe, index) => {
            const cardSelector = `.bg-gradient-to-r:nth-child(${index + 1})`;
            const card = equipesSection.querySelector(cardSelector);

            if (card) {
                const title = currentLang === 'ar' ? equipe.titre : equipe.titre_fr;
                const content = equipe.contenu;

                // Extract objectives from content (simplified)
                const objectives = content.filter(function(line) {
                    return line.includes('أ. الأهداف') ||
                           line.includes('Les objectifs') ||
                           line.includes('Objectifs');
                }).slice(0, 2).join(' ').substring(0, 200) + '...';

                const existingTitle = card.querySelector('h3');
                if (existingTitle) {
                    existingTitle.textContent = title;
                }

                // Update axes de recherche if available
                const axesList = card.querySelector('ul.space-y-2');
                if (axesList && content.length > 0) {
                    // This would need more sophisticated parsing of the content
                    // For now, keep existing structure but could be enhanced
                }
            }
        });
    }
}



// Initialize modern animations
function initializeAnimations() {
    // Add stagger animations to cards
    const cards = document.querySelectorAll('.modern-card, .stat-card-modern, .member-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add floating animation to key elements
    document.querySelectorAll('.float-animation').forEach(el => {
        el.style.animation = 'float 6s ease-in-out infinite';
    });
}

// Initialize progress bar
function initializeProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('observe-visible');
            }
        });
    }, observerOptions);

    // Observe elements with scroll animations
    document.querySelectorAll('.observe-fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add ripple effect to buttons
    document.querySelectorAll('.modern-btn, .filter-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add magnetic effect to interactive elements
    document.querySelectorAll('.interactive-element').forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            this.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px) scale(1.05)`;
        });

        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    // Add parallax effect to hero section
    const heroSection = document.querySelector('#accueil');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Add typing effect to headings (optional)
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.opacity = '0';
        setTimeout(() => {
            heading.style.transition = 'opacity 1s ease-in-out';
            heading.style.opacity = '1';
        }, 500);
    });
}

// Add particle effect to hero section
function createParticles() {
    const heroSection = document.querySelector('#accueil');
    if (!heroSection) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: particle-float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        heroSection.appendChild(particle);
    }
}

// Particle animation keyframes (added to CSS via JS)
const particleStyles = `
@keyframes particle-float {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = particleStyles;
document.head.appendChild(styleSheet);

// Initialize particles after DOM load
setTimeout(createParticles, 1000);

// Advanced hover effects
document.querySelectorAll('.hover-lift').forEach(el => {
    el.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });

    el.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth reveal animations on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// =================================================
// ADMIN DASHBOARD FUNCTIONALITY
// =================================================

// Initialize admin functionality
function initializeAdmin() {
    // Vérifier l'état d'authentification réel
    const adminStatus = localStorage.getItem('adminLoggedIn');
    if (adminStatus === 'true') {
        isAdminLoggedIn = true;
        showAdminButton();
    }

    // Setup other admin event listeners (forms, modals, etc.)
    setupAdminEventListeners();
}

// Show admin button
function showAdminButton() {
    const adminBtn = document.getElementById('adminBtn');
    if (adminBtn) {
        adminBtn.classList.remove('hidden');
    }
}

// Setup admin event listeners
function setupAdminEventListeners() {
    console.log('Setting up admin event listeners...');

    // Note: Admin button event listener is now handled in main DOM ready function

    // Admin login form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }

    // Close admin login modal
    const closeAdminLogin = document.getElementById('closeAdminLogin');
    if (closeAdminLogin) {
        closeAdminLogin.addEventListener('click', () => {
            document.getElementById('adminLoginModal').classList.add('hidden');
        });
    }

    // Close admin dashboard modal
    const closeAdminDashboard = document.getElementById('closeAdminDashboard');
    if (closeAdminDashboard) {
        closeAdminDashboard.addEventListener('click', () => {
            document.getElementById('adminDashboardModal').classList.remove('hidden');
            document.getElementById('adminDashboardModal').classList.add('hidden');
        });
    }

    // Add member button
    const addMemberBtn = document.getElementById('addMemberBtn');
    if (addMemberBtn) {
        addMemberBtn.addEventListener('click', () => {
            document.getElementById('addMemberModal').classList.remove('hidden');
        });
    }

    // Add publication button
    const addPublicationBtn = document.getElementById('addPublicationBtn');
    if (addPublicationBtn) {
        addPublicationBtn.addEventListener('click', () => {
            document.getElementById('addPublicationModal').classList.remove('hidden');
        });
    }

    // Add activity button
    const addActivityBtn = document.getElementById('addActivityBtn');
    if (addActivityBtn) {
        addActivityBtn.addEventListener('click', () => {
            document.getElementById('addActivityModal').classList.remove('hidden');
        });
    }

    // Close modals
    const closeAddMember = document.getElementById('closeAddMemberModal');
    if (closeAddMember) {
        closeAddMember.addEventListener('click', () => {
            document.getElementById('addMemberModal').classList.add('hidden');
        });
    }

    const closeAddPublication = document.getElementById('closeAddPublicationModal');
    if (closeAddPublication) {
        closeAddPublication.addEventListener('click', () => {
            document.getElementById('addPublicationModal').classList.add('hidden');
        });
    }

    const closeAddActivity = document.getElementById('closeAddActivityModal');
    if (closeAddActivity) {
        closeAddActivity.addEventListener('click', () => {
            document.getElementById('addActivityModal').classList.add('hidden');
        });
    }

    // Cancel buttons
    const cancelAddMember = document.getElementById('cancelAddMember');
    if (cancelAddMember) {
        cancelAddMember.addEventListener('click', () => {
            document.getElementById('addMemberModal').classList.add('hidden');
        });
    }

    const cancelAddPublication = document.getElementById('cancelAddPublication');
    if (cancelAddPublication) {
        cancelAddPublication.addEventListener('click', () => {
            document.getElementById('addPublicationModal').classList.add('hidden');
        });
    }

    const cancelAddActivity = document.getElementById('cancelAddActivity');
    if (cancelAddActivity) {
        cancelAddActivity.addEventListener('click', () => {
            document.getElementById('addActivityModal').classList.add('hidden');
        });
    }

    // Form submissions
    const addMemberForm = document.getElementById('addMemberForm');
    if (addMemberForm) {
        addMemberForm.addEventListener('submit', handleAddMember);
    }

    const addPublicationForm = document.getElementById('addPublicationForm');
    if (addPublicationForm) {
        addPublicationForm.addEventListener('submit', handleAddPublication);
    }

    const addActivityForm = document.getElementById('addActivityForm');
    if (addActivityForm) {
        addActivityForm.addEventListener('submit', handleAddActivity);
    }
}

// Handle admin login
function handleAdminLogin(e) {
    e.preventDefault();

    const password = document.getElementById('adminPassword').value;

    if (password === adminPassword) {
        isAdminLoggedIn = true;
        localStorage.setItem('adminLoggedIn', 'true');

        document.getElementById('adminLoginModal').classList.add('hidden');
        showAdminButton();

        showNotification(currentLang === 'ar'
            ? 'تم تسجيل الدخول بنجاح!'
            : 'Connexion réussie!');

        // Open dashboard immediately after login
        setTimeout(() => {
            openAdminDashboard();
        }, 500);
    } else {
        showNotification(currentLang === 'ar'
            ? 'كلمة المرور غير صحيحة!'
            : 'Mot de passe incorrect!', 'error');
    }
}

// Open admin login modal
function openAdminLogin() {
    document.getElementById('adminLoginModal').classList.remove('hidden');
}

// Open admin dashboard
function openAdminDashboard() {
    console.log('Opening admin dashboard...');
    console.log('isAdminLoggedIn:', isAdminLoggedIn);

    const modal = document.getElementById('adminDashboardModal');
    console.log('Modal element:', modal);

    if (modal) {
        modal.classList.remove('hidden');
        console.log('Dashboard modal opened successfully');
        
        // Update dashboard content
        updateDashboardStats();
        loadDashboardData();
    } else {
        console.error('Dashboard modal not found!');
        alert('Dashboard modal not found!');
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    document.getElementById('adminTotalMembers').textContent = membersData.length;
    document.getElementById('adminTotalPublications').textContent = publicationsData.length;
    document.getElementById('adminTotalActivities').textContent = activitiesData.length;

    // Simulate visits (would normally come from analytics)
    const visits = Math.floor(Math.random() * 1000) + 1000;
    document.getElementById('adminTotalVisits').textContent = visits.toLocaleString();
}

// Load dashboard data
function loadDashboardData() {
    loadMembersForDashboard();
    loadPublicationsForDashboard();
    loadActivitiesForDashboard();
}

// Load members for dashboard
function loadMembersForDashboard() {
    const membersList = document.getElementById('membersList');
    if (!membersList) return;

    membersList.innerHTML = '';

    // Show only first 3 members in dashboard
    const displayMembers = membersData.slice(0, 3);

    displayMembers.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        memberItem.innerHTML = `
            <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">
                    ${member.name.charAt(0)}
                </div>
                <div>
                    <p class="font-medium text-gray-800">${currentLang === 'ar' ? member.name : member.nameFr}</p>
                    <p class="text-sm text-gray-600">${currentLang === 'ar' ? member.role : member.roleFr}</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button class="text-blue-600 hover:text-blue-800" onclick="editMember(${member.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="text-red-600 hover:text-red-800" onclick="deleteMember(${member.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        membersList.appendChild(memberItem);
    });
}

// Load publications for dashboard
function loadPublicationsForDashboard() {
    const publicationsList = document.getElementById('publicationsAdminList');
    if (!publicationsList) return;

    publicationsList.innerHTML = '';

    // Show only first 3 publications in dashboard
    const displayPublications = publicationsData.slice(0, 3);

    displayPublications.forEach(pub => {
        const pubItem = document.createElement('div');
        pubItem.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        pubItem.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-${pub.type === 'book' ? 'book' : 'file-alt'} text-green-600 ml-3"></i>
                <div>
                    <p class="font-medium text-gray-800">${currentLang === 'ar' ? pub.title : pub.titleFr}</p>
                    <p class="text-sm text-gray-600">${pub.year}</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button class="text-green-600 hover:text-green-800" onclick="editPublication(${pub.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="text-red-600 hover:text-red-800" onclick="deletePublication(${pub.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        publicationsList.appendChild(pubItem);
    });
}

// Load activities for dashboard
function loadActivitiesForDashboard() {
    const activitiesList = document.getElementById('activitiesList');
    if (!activitiesList) return;

    activitiesList.innerHTML = '';

    // For demo, add one activity if none exist
    if (activitiesData.length === 0) {
        activitiesData.push({
            id: 1,
            title: 'برنامج يوم دراسي',
            titleFr: 'Programme de journée d\'étude',
            description: 'يوم دراسي حول الفاعلين الاجتماعيين',
            descriptionFr: 'Journée d\'étude sur les acteurs sociaux',
            date: '2025-01-15',
            location: 'جامعة وهران 2',
            type: 'study_day'
        });
    }

    // Show only first 3 activities in dashboard
    const displayActivities = activitiesData.slice(0, 3);

    displayActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        activityItem.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-calendar-alt text-purple-600 ml-3"></i>
                <div>
                    <p class="font-medium text-gray-800">${currentLang === 'ar' ? activity.title : activity.titleFr}</p>
                    <p class="text-sm text-gray-600">${activity.date}</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button class="text-purple-600 hover:text-purple-800" onclick="editActivity(${activity.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="text-red-600 hover:text-red-800" onclick="deleteActivity(${activity.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        activitiesList.appendChild(activityItem);
    });
}

// Handle add member form submission
function handleAddMember(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newMember = {
        id: Date.now(), // Simple ID generation
        name: formData.get('nameAr'),
        nameFr: formData.get('nameFr'),
        role: formData.get('roleAr'),
        roleFr: formData.get('roleFr'),
        category: formData.get('category'),
        research: formData.get('researchAr'),
        researchFr: formData.get('researchFr'),
        email: formData.get('email')
    };

    // Add to members data
    membersData.push(newMember);

    // Save to localStorage
    saveDataToLocalStorage();

    // Close modal and show success
    document.getElementById('addMemberModal').classList.add('hidden');
    showNotification(currentLang === 'ar'
        ? 'تم إضافة العضو بنجاح!'
        : 'Membre ajouté avec succès!');

    // Reset form
    e.target.reset();

    // Refresh displays
    displayMembers('all');
    updateDashboardStats();
    loadMembersForDashboard();
}

// Handle add publication form submission
function handleAddPublication(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newPublication = {
        id: Date.now(),
        title: formData.get('titleAr'),
        titleFr: formData.get('titleFr'),
        authors: formData.get('authorsAr'),
        authorsFr: formData.get('authorsFr'),
        year: parseInt(formData.get('year')),
        journal: formData.get('journalAr'),
        journalFr: formData.get('journalFr'),
        type: formData.get('type')
    };

    // Add to publications data
    publicationsData.push(newPublication);

    // Save to localStorage
    saveDataToLocalStorage();

    // Close modal and show success
    document.getElementById('addPublicationModal').classList.add('hidden');
    showNotification(currentLang === 'ar'
        ? 'تم إضافة المنشور بنجاح!'
        : 'Publication ajoutée avec succès!');

    // Reset form
    e.target.reset();

    // Refresh displays
    displayPublications();
    updateDashboardStats();
    loadPublicationsForDashboard();
}

// Handle add activity form submission
function handleAddActivity(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newActivity = {
        id: Date.now(),
        title: formData.get('titleAr'),
        titleFr: formData.get('titleFr'),
        description: formData.get('descriptionAr'),
        descriptionFr: formData.get('descriptionFr'),
        date: formData.get('date'),
        location: formData.get('location'),
        type: formData.get('type')
    };

    // Add to activities data
    activitiesData.push(newActivity);

    // Save to localStorage
    saveDataToLocalStorage();

    // Close modal and show success
    document.getElementById('addActivityModal').classList.add('hidden');
    showNotification(currentLang === 'ar'
        ? 'تم إضافة النشاط بنجاح!'
        : 'Activité ajoutée avec succès!');

    // Reset form
    e.target.reset();

    // Refresh dashboard
    updateDashboardStats();
    loadActivitiesForDashboard();
}

// Save data to localStorage
function saveDataToLocalStorage() {
    localStorage.setItem('membersData', JSON.stringify(membersData));
    localStorage.setItem('publicationsData', JSON.stringify(publicationsData));
    localStorage.setItem('activitiesData', JSON.stringify(activitiesData));
}

// Load data from localStorage
function loadDataFromLocalStorage() {
    const savedMembers = localStorage.getItem('membersData');
    const savedPublications = localStorage.getItem('publicationsData');
    const savedActivities = localStorage.getItem('activitiesData');

    if (savedMembers) {
        membersData = JSON.parse(savedMembers);
    }
    if (savedPublications) {
        publicationsData = JSON.parse(savedPublications);
    }
    if (savedActivities) {
        activitiesData = JSON.parse(savedActivities);
    }
}

// Edit functions
function editMember(id) {
    const member = membersData.find(m => m.id === id);
    if (!member) {
        showNotification(currentLang === 'ar'
            ? 'العضو غير موجود!'
            : 'Membre introuvable!');
        return;
    }

    // Create a simple edit modal
    const editModal = document.createElement('div');
    editModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    editModal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h3 class="text-xl font-bold mb-6">${currentLang === 'ar' ? 'تعديل العضو' : 'Modifier le membre'}</h3>
            <form id="editMemberForm">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'الاسم (عربي)' : 'Nom (Arabe)'}</label>
                        <input type="text" name="name" value="${member.name}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'المنصب (عربي)' : 'Poste (Arabe)'}</label>
                        <input type="text" name="role" value="${member.role}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                        <input type="email" name="email" value="${member.email}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                </div>
                <div class="flex justify-end space-x-reverse space-x-4 mt-6">
                    <button type="button" onclick="this.closest('.fixed').remove()" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        ${currentLang === 'ar' ? 'إلغاء' : 'Annuler'}
                    </button>
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        ${currentLang === 'ar' ? 'حفظ' : 'Sauvegarder'}
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(editModal);
    
    // Handle form submission
    document.getElementById('editMemberForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Update member data
        member.name = formData.get('name');
        member.role = formData.get('role');
        member.email = formData.get('email');
        
        // Save to localStorage
        saveDataToLocalStorage();
        
        // Remove modal
        editModal.remove();
        
        // Refresh displays
        displayMembers('all');
        updateDashboardStats();
        loadMembersForDashboard();
        
        showNotification(currentLang === 'ar'
            ? 'تم تعديل العضو بنجاح!'
            : 'Membre modifié avec succès!');
    });
}

function deleteMember(id) {
    if (confirm(currentLang === 'ar'
        ? 'هل أنت متأكد من حذف هذا العضو؟'
        : 'Êtes-vous sûr de vouloir supprimer ce membre?')) {

        membersData = membersData.filter(member => member.id !== id);
        saveDataToLocalStorage();

        showNotification(currentLang === 'ar'
            ? 'تم حذف العضو بنجاح!'
            : 'Membre supprimé avec succès!');

        // Refresh displays
        displayMembers('all');
        updateDashboardStats();
        loadMembersForDashboard();
    }
}

// Edit functions
function editPublication(id) {
    const publication = publicationsData.find(p => p.id === id);
    if (!publication) {
        showNotification(currentLang === 'ar'
            ? 'المنشور غير موجود!'
            : 'Publication introuvable!');
        return;
    }

    // Create a simple edit modal
    const editModal = document.createElement('div');
    editModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    editModal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h3 class="text-xl font-bold mb-6">${currentLang === 'ar' ? 'تعديل المنشور' : 'Modifier la publication'}</h3>
            <form id="editPublicationForm">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'العنوان (عربي)' : 'Titre (Arabe)'}</label>
                        <input type="text" name="title" value="${publication.title}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'المؤلفون (عربي)' : 'Auteurs (Arabe)'}</label>
                        <input type="text" name="authors" value="${publication.authors}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'السنة' : 'Année'}</label>
                        <input type="number" name="year" value="${publication.year}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                </div>
                <div class="flex justify-end space-x-reverse space-x-4 mt-6">
                    <button type="button" onclick="this.closest('.fixed').remove()" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        ${currentLang === 'ar' ? 'إلغاء' : 'Annuler'}
                    </button>
                    <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        ${currentLang === 'ar' ? 'حفظ' : 'Sauvegarder'}
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(editModal);
    
    // Handle form submission
    document.getElementById('editPublicationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Update publication data
        publication.title = formData.get('title');
        publication.authors = formData.get('authors');
        publication.year = parseInt(formData.get('year'));
        
        // Save to localStorage
        saveDataToLocalStorage();
        
        // Remove modal
        editModal.remove();
        
        // Refresh displays
        displayPublications();
        updateDashboardStats();
        loadPublicationsForDashboard();
        
        showNotification(currentLang === 'ar'
            ? 'تم تعديل المنشور بنجاح!'
            : 'Publication modifiée avec succès!');
    });
}

function deletePublication(id) {
    if (confirm(currentLang === 'ar'
        ? 'هل أنت متأكد من حذف هذا المنشور؟'
        : 'Êtes-vous sûr de vouloir supprimer cette publication?')) {

        publicationsData = publicationsData.filter(pub => pub.id !== id);
        saveDataToLocalStorage();

        showNotification(currentLang === 'ar'
            ? 'تم حذف المنشور بنجاح!'
            : 'Publication supprimée avec succès!');

        // Refresh displays
        displayPublications();
        updateDashboardStats();
        loadPublicationsForDashboard();
    }
}

// Edit functions
function editActivity(id) {
    const activity = activitiesData.find(a => a.id === id);
    if (!activity) {
        showNotification(currentLang === 'ar'
            ? 'النشاط غير موجود!'
            : 'Activité introuvable!');
        return;
    }

    // Create a simple edit modal
    const editModal = document.createElement('div');
    editModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    editModal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h3 class="text-xl font-bold mb-6">${currentLang === 'ar' ? 'تعديل النشاط' : 'Modifier l\'activité'}</h3>
            <form id="editActivityForm">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'العنوان (عربي)' : 'Titre (Arabe)'}</label>
                        <input type="text" name="title" value="${activity.title}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'الوصف (عربي)' : 'Description (Arabe)'}</label>
                        <textarea name="description" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg">${activity.description}</textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'التاريخ' : 'Date'}</label>
                        <input type="date" name="date" value="${activity.date}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">${currentLang === 'ar' ? 'المكان' : 'Lieu'}</label>
                        <input type="text" name="location" value="${activity.location}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    </div>
                </div>
                <div class="flex justify-end space-x-reverse space-x-4 mt-6">
                    <button type="button" onclick="this.closest('.fixed').remove()" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        ${currentLang === 'ar' ? 'إلغاء' : 'Annuler'}
                    </button>
                    <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        ${currentLang === 'ar' ? 'حفظ' : 'Sauvegarder'}
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(editModal);
    
    // Handle form submission
    document.getElementById('editActivityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Update activity data
        activity.title = formData.get('title');
        activity.description = formData.get('description');
        activity.date = formData.get('date');
        activity.location = formData.get('location');
        
        // Save to localStorage
        saveDataToLocalStorage();
        
        // Remove modal
        editModal.remove();
        
        // Refresh displays
        updateDashboardStats();
        loadActivitiesForDashboard();
        
        showNotification(currentLang === 'ar'
            ? 'تم تعديل النشاط بنجاح!'
            : 'Activité modifiée avec succès!');
    });
}

function deleteActivity(id) {
    if (confirm(currentLang === 'ar'
        ? 'هل أنت متأكد من حذف هذا النشاط؟'
        : 'Êtes-vous sûr de vouloir supprimer cette activité?')) {

        activitiesData = activitiesData.filter(activity => activity.id !== id);
        saveDataToLocalStorage();

        showNotification(currentLang === 'ar'
            ? 'تم حذف النشاط بنجاح!'
            : 'Activité supprimée avec succès!');

        // Refresh displays
        updateDashboardStats();
        loadActivitiesForDashboard();
    }
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(updateNavigationActive, 100);
window.addEventListener('scroll', debouncedScrollHandler);
