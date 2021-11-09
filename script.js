const master = document.querySelector('.master');
window.addEventListener('scroll', () => {
    if(window.scrollY > master.offsetHeight - 2500){
        master.classList.add('active');
    }
});

// function bodyAppear(){
//     if(window.scrollY > master.offsetHeight - 1500){
//         master.classList.add('active');
//     }
// }

