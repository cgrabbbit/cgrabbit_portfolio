const menuBtn = document.getElementById("mobile_burger_menu");
const sideNav = document.getElementById("mobile_menu");
const menu = document.getElementById("menu_icon");

// get height of nav bar dynamically
const sideNavHeight = -sideNav.offsetHeight;
// set initial position in css
sideNav.style.top = `${sideNavHeight}px`;

menuBtn.onclick = function(){
    if(parseInt(sideNav.style.top) === sideNavHeight){
        sideNav.style.top = "0";
        menu.src = "images/close.png";
        menuBtn.style.transform = "rotateX(180deg)"
    }
    else{
        sideNav.style.top = `${sideNavHeight}px`;
        menu.src = "images/menu.png";
        menuBtn.style.transform = "rotateX(0deg)";
    }
}