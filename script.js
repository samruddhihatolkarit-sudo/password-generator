function generatePassword() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let allChars = "";
    let password = "";

    if (document.getElementById("uppercase").checked) {
        allChars += upper;
    }
    if (document.getElementById("lowercase").checked) {
        allChars += lower;
    }
    if (document.getElementById("numbers").checked) {
        allChars += numbers;
    }
    if (document.getElementById("symbols").checked) {
        allChars += symbols;
    }

    let length = document.getElementById("length").value;

    if (allChars === "") {
        alert("Select at least one option!");
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied!");
}