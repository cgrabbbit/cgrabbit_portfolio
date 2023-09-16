const header  = document.getElementById("header");

window.addEventListener('scroll', () => {
        sideNav.style.top = `${sideNavHeight}px`;
        menu.src = "images/menu.png";
        menuBtn.style.rotate = "rotateX(180deg)"
});