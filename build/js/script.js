

// DROPDOWN MENU TOGGLE & TABINDEX ASSIGNMENT 

const dropdownMenu = document.querySelector(".dropdown-menu");
const openDropdownMenuBtn = document.querySelector(".open-menu-btn");
const closeDropdownMenuBtn = document.querySelector(".close-menu-btn");

const dropdownLinks = document.querySelectorAll(".dropdown-menu ul li a");
const dropdownSocialsContainer = document.querySelectorAll(".dropdown-menu__social-icons");
const dropdownSocials = document.querySelectorAll(".dropdown-menu__social-icons .dropdown-menu__social-icon");
const dropdownGoBackBtn = document.querySelector(".dropdown-menu .back-in-time-btn");
const dropdownLinksToEnter = document.querySelectorAll(".fade-in");
const dropdownMenuImageOverlay = document.querySelector(".dropdown-menu__image-overlay");


// OPEN 
openDropdownMenuBtn.addEventListener("click", () => {
    dropdownMenu.classList.add("dropdown-menu--activated");
    dropdownMenu.setAttribute("aria-expanded", "true");
    dropdownLinks.forEach(x => {
        x.setAttribute("tabindex", "0");
    })
    dropdownSocials.forEach(x => {
        x.setAttribute("tabindex", "0");
    });
    dropdownGoBackBtn.setAttribute("tabindex", '0');

    setTimeout(() => {
        dropdownMenuImageOverlay.classList.add("image-overlay--removed")
        dropdownLinksToEnter.forEach((x, index) => {
            setTimeout(() => x.classList.add("dropdown-menu-links--fade-in"), index * 70);
        });
    }, 800);
} )


// CLOSE 
closeDropdownMenuBtn.addEventListener("click", () => {
    dropdownMenuImageOverlay.classList.remove("image-overlay--removed")
    dropdownLinksToEnter.forEach((x, index) => {
        setTimeout(() => x.classList.remove("dropdown-menu-links--fade-in"), index * 80);
    });    
    dropdownMenu.setAttribute("aria-expanded", "false");
    dropdownLinks.forEach(x => {
        x.setAttribute("tabindex", "-1");
    })
    dropdownSocials.forEach(x => {
        x.setAttribute("tabindex", "-1");
    });
    dropdownGoBackBtn.setAttribute("tabindex", '-1');

    setTimeout(() => {
        dropdownMenu.classList.remove("dropdown-menu--activated");
    }, 1000);
} );




// ACTIVATES PAGE TRANSITION EFFECT 

const pageTransitionTriggers = document.querySelectorAll(".triggers-page-transition");
const pageTransitionBlocks = document.querySelectorAll(".entrance-block");

pageTransitionTriggers.forEach(y => {
    y.addEventListener("click", (event) => {
        event.preventDefault(); 
        pageTransitionBlocks.forEach(x => {
            x.classList.add("entrance-block--activated");
        })
        setTimeout(function() {
            window.location.href = event.target.href;
          }, 1000);
    })
})




document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.about-main-img', {
        y: 50,
        scrollTrigger: {
            trigger: '.about-main-img',
            scrub: true,
        }
    });
});