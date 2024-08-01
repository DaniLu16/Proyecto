document.getElementById('registrationForm').addEventListener('submit', registerUser);

function registerUser(event) {
    event.preventDefault(); // Prevenir la acción por defecto del formulario
    
    // Obtener los valores de los campos del formulario
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const repeatPassword = document.getElementById('RepeatPassword').value;
    const address = document.getElementById('Address').value;
    const country = document.getElementById('Country').value;
    const state = document.getElementById('State').value;
    const city = document.getElementById('City').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;

    // Validar que las contraseñas coincidan
    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
        firstName,
        lastName,
        email,
        password,
        address,
        country,
        state,
        city,
        phoneNumber
    };

    // Guardar los datos en el almacenamiento local
    localStorage.setItem('userRegistrationData', JSON.stringify(formData));

    // Mostrar un mensaje de éxito
    alert('Registration successful!');

    // Redirigir a la página de
    window.location.href = '/proyecto2/Login.html';
    
}