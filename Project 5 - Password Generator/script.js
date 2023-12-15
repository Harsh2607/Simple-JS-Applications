const alphabets = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const passwordLength = document.getElementById("length")
const alphabetsCheck = document.getElementById("alphabets")
const numbersCheck = document.getElementById("numbers")
const symbolsCheck = document.getElementById("characters")
const generateClick = document.getElementById("generate-btn")
const passwordValue = document.getElementById("password")

generateClick.addEventListener("click", function(){
    const length = passwordLength.value;
    let characters = "";
    let enigmaPassword = "";

    if(alphabetsCheck.checked)
    {
        characters += alphabets;
    }
    if(numbersCheck.checked)
    {
        characters += numbers;
    }
    if(symbolsCheck.checked)
    {
        characters += symbols;
    }

    for(i = 0; i < length; i++)
    {
        enigmaPassword += characters.charAt(Math.floor(Math.random() * characters.length));

    }

    passwordValue.value = enigmaPassword;

})