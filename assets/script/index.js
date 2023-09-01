'use strict';

/*
    Tools and Automation
    Noah Miller

    Assignment 4
*/

/* -----------------------------------*/
/*  Smooth Scrolling                  */
/* -----------------------------------*/

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let typed = new Typed("#typed-text", {
    strings: [
        "Welcome to my website.", 
        "I'm passionate about coding.", 
        "Let's build something amazing together!",
        "Follow me on my journey for knowledge!"
    ],
    typeSpeed: 35,
    backSpeed: 25,
    backDelay: 1250,
    startDelay: 100,
    loop: true
});