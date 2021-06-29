const burger = document.querySelector('.burger');
const closeBurgerButton = document.querySelector('.close-burger-button');
const nav = document.querySelector('.header-navigation');
const menu = document.querySelector('.header-navigation-menu');

document.addEventListener('DOMContentLoaded', function() {   
    closeBurgerButton.addEventListener('click', function(e) {
        hideMobileMenu(e);
    });

    burger.addEventListener('click', function(e) {
        openMobileMenu(e);
    });
});

function openMobileMenu(e) {
    e.target.classList.remove('burger');
    e.target.classList.add('burger-not-active');
    closeBurgerButton.classList.remove('burger-not-active');
    nav.classList.add('nav-burger-menu');
    menu.classList.add('burger-menu');
}

function hideMobileMenu(e) {
    e.target.classList.add('burger-not-active');
    burger.classList.remove('burger-not-active');
    burger.classList.add('burger');
    nav.classList.remove('nav-burger-menu');
    menu.classList.remove('burger-menu');
}