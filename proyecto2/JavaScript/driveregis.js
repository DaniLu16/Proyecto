document.getElementById('signUpButton').addEventListener('click', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const cedula = document.getElementById('Cedula').value;
    const password = document.getElementById('Password').value;
    const birthDate = document.getElementById('BirthDate').value;
    const email = document.getElementById('Email').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const carBrand = document.getElementById('CarBrand').value;
    const carModel = document.getElementById('CarModel').value;
    const carYear = document.getElementById('CarYear').value;
    const licensePlate = document.getElementById('LicensePlate').value;

    if (!firstName || !lastName || !cedula || !password || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    const driver = {
        type: 'driver',
        firstName,
        lastName,
        cedula,
        password,
        birthDate,
        email,
        phoneNumber,
        carBrand,
        carModel,
        carYear,
        licensePlate
    };

    let drivers = JSON.parse(localStorage.getItem('drivers')) || [];
    drivers.push(driver);
    localStorage.setItem('drivers', JSON.stringify(drivers));

    alert('Driver Registration Successful!');
    window.location.href = '/proyecto2/Login.html';
});
