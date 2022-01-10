
const aMenuItems = document.querySelectorAll('.nav__bar_menu .menu__list .menu__items ')
const length = aMenuItems.length;
const itemLine = document.querySelector('.nav__bar_menu .menu__list .line')
console.log(itemLine)
for (var i=0;i<length;i++) {
        aMenuItems[i].onmouseover = function(e){
        itemLine.style.left=this.offsetLeft + 'px';
        itemLine.style.width=this.offsetWidth + 'px';
    }
}

// handle scroll nav-bar fixed
function myFunction() {
    const disE = document.querySelector('.discount')
    const navE= document.querySelector(".nav__bar")
    const header_top = document.querySelector('.header__top')
    const sticky= header_top.offsetTop + 34;
    if (window.pageYOffset >= sticky) {
        navE.classList.add("sticky")
        disE.classList.add("mt-113")
    }
    else {
        navE.classList.remove("sticky");
        disE.classList.remove("mt-113");
    }
}
