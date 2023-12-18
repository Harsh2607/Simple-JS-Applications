const checkBtnElement = document.getElementById("check-btn");
const clearBtnElement = document.getElementById("clear-btn");
const inputCharElement = document.getElementById("input-char");
const resultElement = document.getElementById("show-result");

function isASCII(input_char) {
    return input_char.charCodeAt(0) <= 127;
}

checkBtnElement.addEventListener("click", function() {
    const input_char = inputCharElement.value;
    if (input_char === "")
    {
        resultElement.innerText = "Please enter a character!!!.";
    }
    else if (isASCII(input_char))
    {
        resultElement.innerText = "The entered character is an ASCII character";
    }
    else
    {
        resultElement.innerText = "The entered character is a Unicode character";
    }
});

clearBtnElement.addEventListener("click", function() {
    inputCharElement.value = "";
    resultElement.innerText = "";
});