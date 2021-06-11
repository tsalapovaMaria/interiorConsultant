const button = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

const navItems = document.querySelectorAll('.nav-item');

button.onclick = () => {
    button.classList.toggle('opened-menu');
    navigation.hidden = !navigation.hidden;
};

Array.from(navItems).forEach(navItem => {
    navItem.onclick = () => {
        navItem.classList.toggle('clicked-nav-item');
    }
});