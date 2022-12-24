var navAtTop = window.pageYOffset;
const nav = document.querySelector(".topnav");


document.addEventListener("scroll", scrolling);

function scrolling() {

    var navScrolled = window.pageYOffset;
    if (navAtTop < navScrolled) {
        nav.style.top = "-50px";
    }
    navAtTop = navScrolled;

    if (navAtTop == "0") {
        nav.style.top = "0px";
    }
    
}

document.addEventListener("mousemove", (e) => {
    if (e.y < 47 ) {
        nav.style.top = "0";
    }
})


document.addEventListener("mousemove", (e) => {
    if (e.y > 46) {
        nav.style.top = "-50px";
    }
    if (e.y > 46 && navAtTop == "0") {
        nav.style.top = "0";
    }
});
