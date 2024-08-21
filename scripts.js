// Function to validate the access code entered by the user
function validateAccessCode() {
    const accessCode = document.getElementById('accessCode').value;
    fetch('YOUR_POWER_AUTOMATE_URL_FOR_ACCESS_CODE_VALIDATION', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: accessCode })
    })
    .then(response => response.json())
    .then(data => {
        if (data.isValid) {
            window.location.href = 'signin.html';
        } else {
            window.location.href = 'failure.html';
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to log in the user with username and password
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('YOUR_POWER_AUTOMATE_URL_FOR_LOGIN', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.isAuthenticated) {
            window.location.href = 'account.html'; // Assuming 'account.html' exists
        } else {
            window.location.href = 'failure.html';
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to register a new user
function register() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cellPhone = document.getElementById('cellPhone').value;
    const email = document.getElementById('email').value;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch('YOUR_POWER_AUTOMATE_URL_FOR_REGISTRATION', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            cellPhone: cellPhone,
            email: email,
            username: newUsername,
            password: newPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = 'thankyou.html';
    })
    .catch(error => console.error('Error:', error));
}
