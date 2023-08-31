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