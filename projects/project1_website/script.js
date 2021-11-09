const nav = document.querySelector('.nav');
const hamMenu = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.nav-links');
const closeHam = document.querySelector('.close-ham');


function fixNav(){

    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active');
    } else{
        nav.classList.remove('active');
    }
}


window.addEventListener('scroll', fixNav)




hamMenu.addEventListener('click', () => {
    hamMenu.classList.add('active');
    navLinks.classList.add('active');
    navLinks.style.opacity = '100%'
    closeHam.classList.add('active');
})

closeHam.addEventListener('click', () => {
    closeHam.classList.remove('active');
    navLinks.classList.remove('active');
    hamMenu.classList.remove('active');



})