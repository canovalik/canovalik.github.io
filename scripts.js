function validateAccessCode() {
    const accessCode = document.getElementById("accessCode").value;

    fetch("https://prod-122.westus.logic.azure.com:443/workflows/338032193a5c45ca8beb7fff1b38af4e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f-K-XKwsdiYC5cnaHj_DBXso4guGjpjzX4v3JPQgTX0", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ accessCode: accessCode })
    })
    .then(response => response.json())
    .then(data => {
        if (data.isValid) {
            window.location.href = "sign-in.html";
        } else {
            window.location.href = "failure.html";
        }
    })
    .catch(error => console.error("Error:", error));
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://YOUR_POWER_AUTOMATE_FLOW_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.isValid) {
            window.location.href = "account.html"; // Change this to your account page
        } else {
            window.location.href = "failure.html";
        }
    })
    .catch(error => console.error("Error:", error));
}

function goToRegister() {
    window.location.href = "register.html";
}

function signUp() {
    const userData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        cellPhone: document.getElementById("cellPhone").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    fetch("https://YOUR_POWER_AUTOMATE_FLOW_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.isSuccess) {
            window.location.href = "thank-you.html"; // Create this page to thank users
        } else {
            alert("Registration failed. Please try again.");
        }
    })
    .catch(error => console.error("Error:", error));
}
