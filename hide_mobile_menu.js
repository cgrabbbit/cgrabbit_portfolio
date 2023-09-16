const header  = document.getElementById("header");

const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
});