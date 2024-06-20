$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $("#mobile_menu").toggleClass('active');
        $("#mobile_btn").find("i").toggleClass('fa-x');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li');

    const makeActive = (id) => {
        navLinks.forEach(link => {
            if (link.querySelector('a').getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    const options = {
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                makeActive(entry.target.id);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
