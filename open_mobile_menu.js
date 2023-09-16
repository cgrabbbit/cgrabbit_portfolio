const menuBtn = document.getElementById("mobile_burger_menu")
const sideNav = document.getElementById("mobile_menu")
const menu = document.getElementById("menu_icon")


// set initial position in css
sideNav.style.top = "-300px";

menuBtn.onclick = function(){
    if(sideNav.style.top == "-300px"){
        sideNav.style.top = "0";
        menu.src = "images/close.png";
        menuBtn.style.rotate = "180deg x"
    }
    else{
        sideNav.style.top = "-300px"
        menu.src = "images/menu.png";
        menuBtn.style.rotate = "0deg x"
    }
}