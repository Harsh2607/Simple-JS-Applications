// method 1

function countVowels() {
    const text = document.getElementById('input-text').value.toLowerCase();
    const vowelCount = (text.match(/[aeiou]/g) || []).length; // Using regex to count vowels

    document.getElementById('result').textContent = `Total vowels: ${vowelCount}`;
}

const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', countVowels);

// method 2

// function isVowel(ch) {
//     var vowels = ["a", "e", "i", "o", "u"];
//     return vowels.includes(ch);
// }

// function countVowels() {
//     var text = document.getElementById("input-text").value;
//     var vowelCount = 0;
//     text = text.toLowerCase();
//     for (var i = 0; i < text.length; i++) {
//         var ch = text.charAt(i);
//         if (isVowel(ch)) {
//             vowelCount++;
//         }
//     }
//     var result = document.getElementById('result');
//     result.textContent = "Total vowels: " + vowelCount;
// }

// const countVowelsBtn = document.getElementById('count-btn');
// countVowelsBtn.addEventListener('click', countVowels);
