const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('show');
    console.log('it works!');
});
