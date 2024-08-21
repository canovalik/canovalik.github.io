// Function to validate the access code entered by the user
function validateAccessCode() {
    const accessCode = document.getElementById('accessCode').value;
    fetch('https://prod-122.westus.logic.azure.com:443/workflows/338032193a5c45ca8beb7fff1b38af4e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f-K-XKwsdiYC5cnaHj_DBXso4guGjpjzX4v3JPQgTX0', {
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
