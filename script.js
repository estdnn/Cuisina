// JavaScript to collapse the header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('collapsed');
    } else {
        header.classList.remove('collapsed');
    }
    lastScrollTop = scrollTop;
});

