function updateClock() {
    const now = new Date();
    /*
    The padStart() method is called on each stringified value to ensure that the string has a minimum length of 2 characters by adding '0' at the beginning if it's less than two characters long. The padStart() method takes two arguments: the desired length and the character to pad with. In this case, it specifies a minimum length of 2 characters and uses '0' as the padding character. For example, if now.getHours() returns 9, String(now.getHours()).padStart(2, '0') will return the string '09'. If now.getHours() returns 13, it will return the string '13' because it's already two digits long.
    */
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}
setInterval(updateClock, 1000);

updateClock();
