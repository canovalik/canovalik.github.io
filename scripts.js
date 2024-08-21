        function checkPasscode() {
            const passcode = document.getElementById('passcode').value;
            const obfuscatedPasscode = 'YmFzZTY0ZW5jb2RlZFZhbHVl';  // Replace with your Base64 encoded passcode

            const decodedPasscode = atob(obfuscatedPasscode);

            if (passcode === decodedPasscode) {
                window.location.href = 'nextpage.html';  // Replace with your next page URL
                return false;
            } else {
                document.getElementById('error-message').style.display = 'block';
                return false;
            }
        }
