        function checkPasscode() {
            const passcode = document.getElementById('passcode').value;
            const obfuscatedPasscode = 'UEdIX1NvdXRoX0xNUzI0';  // Replace with your Base64 encoded passcode

            const decodedPasscode = atob(obfuscatedPasscode);

            if (passcode === decodedPasscode) {
                window.location.href = 'loginpage.html';  // Replace with your next page URL
                return false;
            } else {
                document.getElementById('error-message').style.display = 'block';
                return false;
            }
        }
