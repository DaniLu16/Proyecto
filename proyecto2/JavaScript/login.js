document.getElementById('loginButton').addEventListener('click', loginUser);

function loginUser(event) {
    event.preventDefault(); // Prevenir la acción por defecto del botón

    // Obtener los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtener los datos de registro del almacenamiento local
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedDrivers = JSON.parse(localStorage.getItem('drivers')) || [];

    // Validar las credenciales del usuario
    const userFound = storedUsers.some(user => user.email === username && user.password === password);
    const driverFound = storedDrivers.some(driver => driver.email === username && driver.password === password); // Aquí se puede usar la cédula como contraseña para simplificar

    if (userFound || driverFound) {
        alert('Login successful!');
        // Redirigir a la página de viajes
        window.location.href = '/proyecto2/MyRides.html';
    } else {
        alert('Invalid username or password.');
    }
}
