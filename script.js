const passwordTextBox = document.getElementById("pw");
const copyBtn = document.getElementById("copy");
const lengthElement = document.getElementById("len");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lower");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+={}`<>?;:";
const numbers = "0123456789";

generateBtn.addEventListener("click", generatePassword);

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function generatePassword() {
    const length = lengthElement.value;

    let password = "";

    if (uppercaseElement.checked) {
        password += getUppercase();
        password += getUppercase();
        password += getUppercase();
        password += getUppercase();
    }


    if (lowercaseElement.checked) {
        password += getLowercase();
        password += getLowercase();
        password += getLowercase();
        password += getLowercase();
    }

    if (numberElement.checked) {
        password += getNumber();
        password += getNumber();
        password += getNumber();
        password += getNumber();
    }

    if (symbolElement.checked) {
        password += getSymbol();
        password += getSymbol();
        password += getSymbol();
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    passwordTextBox.innerText = password;
}

function generateX() {
    const xs = [];
    if (uppercaseElement.checked) {
        xs.push(getUppercase());
        
    }

    if (lowercaseElement.checked) {
        xs.push(getLowercase());
    }

    if (numberElement.checked) {
        xs.push(getNumber());
    }

    if (symbolElement.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

copyBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passwordTextBox.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied!");
    document.getElementById("pw").innerHTML="";
});