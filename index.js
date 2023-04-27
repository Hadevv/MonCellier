document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    const close = document.querySelector('.navbar-close');
    const backdrop = document.querySelector('.navbar-backdrop');

    burger.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    close.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    backdrop.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});
