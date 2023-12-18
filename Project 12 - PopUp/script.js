const clickBtn = document.getElementById("click-me-btn");
const popUp = document.getElementById("pop-over")
const closeBtn = document.getElementById("close-btn");

clickBtn.addEventListener("click", function(){
    popUp.classList.add("active-content")
})

closeBtn.addEventListener("click", function(){
    popUp.classList.remove("active-content")
})