const button = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

const navItems = document.querySelectorAll('.nav-item');

button.onclick = () => {
    button.classList.toggle('opened-menu');
    navigation.style.display = (navigation.style.display === 'block')? 'none' : 'block';
};

let activeLink;

Array.from(navItems).forEach(navItem => {
    navItem.onclick = () => {
        if(activeLink){
            activeLink.classList.toggle('clicked-nav-item');
        }
        navItem.classList.toggle('clicked-nav-item');
        activeLink = navItem;
    }
});