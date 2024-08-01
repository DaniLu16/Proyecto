document.getElementById('signUpButton').addEventListener('click', function(event) {
    event.preventDefault();

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

    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    const user = {
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

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration Successful!');
    window.location.href = '/Proyecto1/Login.html';
});