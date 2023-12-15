function countVowels() {
    const text = document.getElementById('input-text').value.toLowerCase();
    const vowelCount = (text.match(/[aeiou]/g) || []).length; // Using regex to count vowels

    document.getElementById('result').textContent = `Total vowels: ${vowelCount}`;
}

const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', countVowels);
