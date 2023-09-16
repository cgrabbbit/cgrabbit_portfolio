var menuBtn = document.getElementById("mobile_burger_menu")
var sideNav = document.getElementById("mobile_menu")
var menu = document.getElementById("menu_icon")


// set initial position in css
sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png";
        menuBtn.style.rotate = "180deg y"
    }
    else{
        sideNav.style.right = "-250px"
        menu.src = "images/menu.png";
        menuBtn.style.rotate = "0deg y"
    }
}