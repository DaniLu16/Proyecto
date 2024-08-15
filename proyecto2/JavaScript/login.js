document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', loginUser);
   
});

function loginUser(event) {
    event.preventDefault(); // Prevenir la acción por defecto del botón

    // Obtener los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtener los datos de registro del almacenamiento local
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedDrivers = JSON.parse(localStorage.getItem('drivers')) || [];

    // Buscar el usuario o conductor en los datos almacenados
    const currentUser = storedUsers.find(user => user.email === username && user.password === password);
    const currentDriver = storedDrivers.find(driver => driver.email === username && driver.password === password);

    // Si se encuentra el usuario o conductor, almacenar en localStorage y redirigir
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert('Login successful!');
        hideRidesLink(); // Llama a la función para ocultar el enlace de "Rides" al cargar la página
        window.location.href = '/proyecto2/SearchHome.html'; // Redirigir a la página de viajes
        
    } else if (currentDriver) {
        localStorage.setItem('currentUser', JSON.stringify(currentDriver));
        alert('Login successful!');
        window.location.href = '/proyecto2/MyRides.html'; // Redirigir a la página de viajes
    } else {
        alert('Invalid username or password.');
    }
}

function hideRidesLink() {
    // Obtén el usuario actual de localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Obtén el enlace de "Rides"
    const ridesLink = document.getElementById('ridesLink');

    // Si el usuario es de tipo 'user', oculta el enlace de "Rides"
    if (currentUser && currentUser.type === 'user') {
        if (ridesLink) {
            ridesLink.style.display = 'none';
        }
    }
}
