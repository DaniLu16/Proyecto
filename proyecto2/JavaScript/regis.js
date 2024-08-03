document.getElementById('signUpButton').addEventListener('click', function(event) {
    event.preventDefault();

    const getElementValue = (id) => {
        const element = document.getElementById(id);
        if (element) {
            return element.value;
        } else {
            console.error(`Element with ID ${id} not found`);
            return null;
        }
    };

    const firstName = getElementValue('FirstName');
    const lastName = getElementValue('LastName');
    const email = getElementValue('Email');
    const password = getElementValue('Password');
    const repeatPassword = getElementValue('RepeatPassword');
    const address = getElementValue('Address');
    const country = getElementValue('Country');
    const state = getElementValue('State');
    const city = getElementValue('City');
    const phoneNumber = getElementValue('PhoneNumber');

    if ([firstName, lastName, email, password, repeatPassword, address, country, state, city, phoneNumber].includes(null)) {
        alert('Please fill out all fields correctly.');
        return;
    }

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
    window.location.href = '/Proyecto2/Login.html';
});
