// Language toggle
let currentLanguage = 'en';

const translations = {
    en: {
        appTitle: 'GuardiánTeen',
        subtitle: 'Secure Parental Control',
        loginButton: 'Login',
        registerButton: 'Register',
        dashboardTitle: 'Welcome to GuardiánTeen Dashboard',
        viewHistory: 'View Browsing History',
        frequentAppsButton: 'Frequent Apps',
        appControlButton: 'App Control',
        logoutButton: 'Logout',
        historyTitle: 'Browsing History',
        frequentAppsTitle: 'Frequently Used Apps',
        appControlTitle: 'App Control'
    },
    es: {
        appTitle: 'GuardiánTeen',
        subtitle: 'Control Parental Seguro',
        loginButton: 'Iniciar Sesión',
        registerButton: 'Registrar',
        dashboardTitle: 'Bienvenido al Panel de GuardiánTeen',
        viewHistory: 'Ver Historial de Navegación',
        frequentAppsButton: 'Aplicaciones Frecuentes',
        appControlButton: 'Control de Aplicaciones',
        logoutButton: 'Cerrar Sesión',
        historyTitle: 'Historial de Navegación',
        frequentAppsTitle: 'Aplicaciones Frecuentes',
        appControlTitle: 'Control de Aplicaciones'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    document.getElementById("language-toggle").innerText = currentLanguage === 'en' ? 'Español' : 'English';
    updateLanguage();
}

function updateLanguage() {
    const elements = [
        { id: 'app-title', key: 'appTitle' },
        { id: 'subtitle', key: 'subtitle' },
        { id: 'login-button', key: 'loginButton' },
        { id: 'register-button', key: 'registerButton' },
        { id: 'dashboard-title', key: 'dashboardTitle' },
        { id: 'view-history', key: 'viewHistory' },
        { id: 'frequent-apps-button', key: 'frequentAppsButton' },
        { id: 'app-control-button', key: 'appControlButton' },
        { id: 'logout-button', key: 'logoutButton' },
        { id: 'history-title', key: 'historyTitle' },
        { id: 'frequent-apps-title', key: 'frequentAppsTitle' },
        { id: 'app-control-title', key: 'appControlTitle' }
    ];

    elements.forEach(element => {
        document.getElementById(element.id).innerText = translations[currentLanguage][element.key];
    });
}

// Login function with page switch
function login() {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard-screen").classList.remove("hidden");
    return false; // Prevent form submission
}

// Button action to open specific pages
document.querySelectorAll('.dashboard-options button[data-page]').forEach(button => {
    button.addEventListener('click', () => {
        openPage(button.getAttribute('data-page'));
    });
});

function openPage(pageId) {
    document.querySelectorAll('.screen, .page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function goBack() {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById("dashboard-screen").classList.remove('hidden');
}

function logout() {
    document.querySelectorAll('.screen, .page').forEach(page => page.classList.add('hidden'));
    document.getElementById("login-screen").classList.remove('hidden');
}

function blockApp(button) {
    button.previousElementSibling.style.color = 'red';
    button.innerText = 'Blocked';
}

function unblockApp(button) {
    button.previousElementSibling.style.color = 'green';
    button.innerText = 'Unblocked';
}

function showRegistration() {
    alert("Registration feature coming soon!");
}

// Initial load to set language
updateLanguage();
