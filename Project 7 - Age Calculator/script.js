document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.querySelector("button");
    calculateButton.addEventListener("click", calculateAge);
});

function calculateAge() {
    const birthDateInput = document.getElementById("birthDate");
    const resultParagraph = document.getElementById("result");

    const birthDate = new Date(birthDateInput.value);
    const currentDate = new Date();

    if (isNaN(birthDate.getTime()) || birthDate > currentDate) {
        resultParagraph.innerText = "Please select a valid date of birth.";
        resultParagraph.className = "error";
    } else {
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
        const fullYears = Math.floor(ageInYears);

        const birthMonth = birthDate.getMonth();
        const currentMonth = currentDate.getMonth();

        let months = currentMonth - birthMonth;
        if (currentDate.getDate() < birthDate.getDate()) {
            months--;
        }

        resultParagraph.innerText = `Your age is approximately ${fullYears} years and ${months} months.`;
        resultParagraph.className = "success";
    }
}
