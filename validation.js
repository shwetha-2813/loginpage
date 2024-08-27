function validateForm() {
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const namePattern = /^[A-Za-z][A-Za-z\s]*$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!namePattern.test(firstName)) {
        alert('First Name must start with an alphabet.');
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert('Phone number must be 10 digits and contain only numbers.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    return true;
}
