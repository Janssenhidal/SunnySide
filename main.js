const hamburger = document.querySelector('.hamburger');
let mobileMenuToggle = false;
hamburger.addEventListener('click', () => {

    var x = document.querySelector(".menu");
    if (!mobileMenuToggle) {
        x.classList.add('mob-menu-visible');
    } else {
        x.classList.remove('mob-menu-visible');
    }
    mobileMenuToggle = !mobileMenuToggle;
})