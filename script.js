// Login/Registration
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Inicio de sesión exitoso');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-panel').style.display = 'block';
    } else {
        alert('Por favor ingrese sus credenciales');
    }
});

document.getElementById('register-btn').addEventListener('click', function() {
    alert('Registro de nuevo usuario');
});

// Navigation Buttons
document.getElementById('activity-summary-btn').addEventListener('click', function() {
    alert('Resumen de Actividad');
});

document.getElementById('content-filter-btn').addEventListener('click', function() {
    document.getElementById('main-panel').style.display = 'none';
    document.getElementById('content-filter-container').style.display = 'block';
});

document.getElementById('back-from-filter').addEventListener('click', function() {
    document.getElementById('content-filter-container').style.display = 'none';
    document.getElementById('main-panel').style.display = 'block';
});

// App Control
document.getElementById('app-control-btn').addEventListener('click', function() {
    document.getElementById('main-panel').style.display = 'none';
    document.getElementById('app-control-container').style.display = 'block';
});

document.querySelectorAll('.block-app').forEach(function(button) {
    button.addEventListener('click', function() {
        this.textContent = 'Bloqueada';
        this.disabled = true; // Disable the button after blocking
    });
});

document.getElementById('disable-blocking-btn').addEventListener('click', function() {
    document.querySelectorAll('.block-app').forEach(function(button) {
        button.textContent = 'Desbloquear';
        button.disabled = false; // Enable buttons to unblock apps
    });
});

document.getElementById('back-from-app-control').addEventListener('click', function() {
    document.getElementById('app-control-container').style.display = 'none';
    document.getElementById('main-panel').style.display = 'block';
});

// Reports
document.getElementById('reports-btn').addEventListener('click', function() {
    document.getElementById('main-panel').style.display = 'none';
    document.getElementById('reports-container').style.display = 'block';
});

document.getElementById('go-back-reports').addEventListener('click', function() {
    document.getElementById('reports-container').style.display = 'none';
    document.getElementById('main-panel').style.display = 'block';
});

// Map
function initMap() {
    var mapOptions = {
        zoom: 8,
        center: {lat: 40.7128, lng: -74.0060} // Default New York location
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

document.getElementById('map-btn').addEventListener('click', function() {
    document.getElementById('main-panel').style.display = 'none';
    document.getElementById('map-container').style.display = 'block';
    initMap();
});

document.getElementById('back-from-map').addEventListener('click', function() {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('main-panel').style.display = 'block';
});
