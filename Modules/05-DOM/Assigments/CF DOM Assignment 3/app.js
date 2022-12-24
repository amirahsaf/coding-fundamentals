// Select DOM elements
const closeBtn = document.getElementById('closeBtn');
const slideOverCont = document.querySelector('.slide-over-container');
const registerBtn = document.querySelector('.register');

registerBtn.addEventListener("click", openCont)

function openCont() {
    slideOverCont.classList.remove('gone');
    slideOverCont.classList.add('slide-in');
    slideOverCont.classList.remove('slide-out');
    console.log("slide out")
}

closeBtn.addEventListener("click", closeCont);

function closeCont() {
    slideOverCont.classList.add('gone');
    slideOverCont.classList.add('slide-out');
    slideOverCont.classList.remove('slide-in');
    console.log("slide in");
}