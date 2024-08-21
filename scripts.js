function validateAccessCode() {
    const accessCode = document.getElementById('access-code').value;
    const flowUrl = 'https://prod-122.westus.logic.azure.com:443/workflows/338032193a5c45ca8beb7fff1b38af4e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f-K-XKwsdiYC5cnaHj_DBXso4guGjpjzX4v3JPQgTX0';

    fetch(flowUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: accessCode })
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            window.location.href = 'signin.html';
        } else {
            window.location.href = 'failure.html';
        }
    })
    .catch(error => console.error('Error:', error));
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const flowUrl = 'YOUR_POWER_AUTOMATE_FLOW_URL_FOR_LOGIN_VALIDATION';

    fetch(flowUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            window.location.href = 'account.html';
        } else {
            window.location.href = 'failure.html';
        }
    })
    .catch(error => console.error('Error:', error));
}

function signup() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;
    const flowUrl = 'https://prod-06.westus.logic.azure.com:443/workflows/6a676667a3c84602bb51f8f6b851bffd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=s8mFYhKO3GWy9D8dCO-0ZcpAEB22UOH7alIgnUWQtw4';

    fetch(flowUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            username: username,
            password: password 
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'thankyou.html';
        } else {
            alert('Registration failed. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
}
