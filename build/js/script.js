

// DROPDOWN MENU TOGGLE & TABINDEX ASSIGNMENT 

const dropdownMenu = document.querySelector(".dropdown-menu");
const openDropdownMenuBtn = document.querySelector(".open-menu-btn");
const closeDropdownMenuBtn = document.querySelector(".close-menu-btn");

const dropdownLinks = document.querySelectorAll(".dropdown-menu ul li a");
const dropdownSocialsContainer = document.querySelectorAll(".dropdown-menu__social-icons");
const dropdownSocials = document.querySelectorAll(".dropdown-menu__social-icons .dropdown-menu__social-icon");
const dropdownGoBackBtn = document.querySelector(".dropdown-menu .back-in-time-btn");
const dropdownLinksToEnter = document.querySelectorAll(".fade-in");



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
        dropdownLinksToEnter.forEach((x, index) => {
            setTimeout(() => x.classList.add("dropdown-menu-links--fade-in"), index * 80);
        });
    }, 600);
} )


// CLOSE 
closeDropdownMenuBtn.addEventListener("click", () => {
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
    }, 800);
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