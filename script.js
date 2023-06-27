let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

};

ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2500,
    delay: 100
});
ScrollReveal().reveal('.home-content ,.heading', {origin: 'top'})
ScrollReveal().reveal('.my-img ,.services-container, .portfolio-box, .contact form, footer', {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1,.about-img, .skills', {origin: 'left'})
ScrollReveal().reveal('.home-content p,.about-content', {origin: 'right'})

const typed = new Typed('.multiple-text',{
    strings: ["a Full Stack Developer", "a Web designer", "a technical volunteer of IEEE","a Java developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true
});
