"use strict";

// DROPDOWN MENU OPEN / CLOSE & TAB INDEX ASSIGNMENT 

var dropdownMenu = document.querySelector(".dropdown-menu");
var openDropdownMenuBtn = document.querySelector(".open-menu-btn");
var closeDropdownMenuBtn = document.querySelector(".close-menu-btn");
var dropdownLinks = document.querySelectorAll(".dropdown-menu ul li a");
var dropdownSocialsContainer = document.querySelectorAll(".dropdown-menu__social-icons");
var dropdownSocials = document.querySelectorAll(".dropdown-menu__social-icons .dropdown-menu__social-icon");
var dropdownGoBackBtn = document.querySelector(".dropdown-menu .back-in-time-btn");
var dropdownLinksToEnter = document.querySelectorAll(".fade-in");
var dropdownMenuImageOverlay = document.querySelector(".dropdown-menu__image-overlay");

// OPEN 
openDropdownMenuBtn.addEventListener("click", function () {
  dropdownMenu.classList.add("dropdown-menu--activated");
  dropdownMenu.setAttribute("aria-expanded", "true");
  dropdownLinks.forEach(function (x) {
    x.setAttribute("tabindex", "0");
  });
  dropdownSocials.forEach(function (x) {
    x.setAttribute("tabindex", "0");
  });
  dropdownGoBackBtn.setAttribute("tabindex", '0');
  setTimeout(function () {
    dropdownMenuImageOverlay.classList.add("image-overlay--removed");
    dropdownLinksToEnter.forEach(function (x, index) {
      setTimeout(function () {
        return x.classList.add("dropdown-menu-links--fade-in");
      }, index * 95);
    });
  }, 800);
});

// CLOSE 
closeDropdownMenuBtn.addEventListener("click", function () {
  dropdownMenuImageOverlay.classList.remove("image-overlay--removed");
  dropdownLinksToEnter.forEach(function (x, index) {
    setTimeout(function () {
      return x.classList.remove("dropdown-menu-links--fade-in");
    }, index * 95);
  });
  dropdownMenu.setAttribute("aria-expanded", "false");
  dropdownLinks.forEach(function (x) {
    x.setAttribute("tabindex", "-1");
  });
  dropdownSocials.forEach(function (x) {
    x.setAttribute("tabindex", "-1");
  });
  dropdownGoBackBtn.setAttribute("tabindex", '-1');
  setTimeout(function () {
    dropdownMenu.classList.remove("dropdown-menu--activated");
  }, 1000);
});

// ACTIVATES PAGE TRANSITION EFFECT 

var pageTransitionTriggers = document.querySelectorAll(".triggers-page-transition");
var pageTransitionBlocks = document.querySelectorAll(".entrance-block");
pageTransitionTriggers.forEach(function (y) {
  y.addEventListener("click", function (event) {
    event.preventDefault();
    pageTransitionBlocks.forEach(function (x) {
      x.classList.add("entrance-block--activated");
    });
    setTimeout(function () {
      window.location.href = event.target.href;
    }, 1000);
  });
});

// DYNAMIC COPYRIGHT YEAR 

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var copyrightYear = document.querySelector(".copyright-year");
if (copyrightYear) {
  copyrightYear.innerText = currentYear;
}

// GSAP - ABOUT IMAGE PARALLAX 

if (document.querySelector(".about-main-img")) {
  document.addEventListener("DOMContentLoaded", function (event) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.about-main-img', {
      y: 50,
      scrollTrigger: {
        trigger: '.about-main-img',
        scrub: true
      }
    });
  });
}
var pastSitesOpenBtn = document.querySelector(".back-in-time-btn");
var pastSitesCloseBtn = document.querySelector(".past-sites-close-btn");
var pastSitesContainer = document.querySelector(".past-sites");
var pastSitesTitle = document.querySelector(".past-sites-title");
var pastSitesBlocks = Array.from(document.querySelectorAll(".past-site"));
pastSitesOpenBtn.addEventListener("click", function () {
  pastSitesContainer.classList.add("past-sites--activated");
  setTimeout(function () {
    pastSitesTitle.classList.add("past-sites--activated");
  }, 1000);
  setTimeout(function () {
    pastSitesBlocks.forEach(function (x) {
      x.classList.add("past-sites--activated");
    });
  }, 1200);
});
pastSitesCloseBtn.addEventListener("click", function () {
  pastSitesTitle.classList.remove("past-sites--activated");
  pastSitesBlocks.forEach(function (x) {
    x.classList.remove("past-sites--activated");
  });
  setTimeout(function () {
    pastSitesContainer.classList.remove("past-sites--activated");
  }, 1000);
});
"use strict";

var projectSidebar = Array.from(document.querySelectorAll('.project-sidebar-panel'));
var projectSidebarContent = Array.from(document.querySelectorAll(".project-sidebar-panel-container"));
var openProjectSidebarBtn = Array.from(document.querySelectorAll(".open-project-btn"));
var closeProjectSidebarBtn = Array.from(document.querySelectorAll(".close-project-btn"));
var _loop = function _loop(i) {
  if (openProjectSidebarBtn[i]) {
    openProjectSidebarBtn[i].addEventListener("click", function () {
      document.body.style.overflow = "hidden";
      projectSidebar[i].classList.add("sidebar--activated");
      setTimeout(function () {
        projectSidebarContent[i].classList.add("sidebar-container--activated");
      }, 600);
    });
    if (closeProjectSidebarBtn[i]) {
      closeProjectSidebarBtn[i].addEventListener("click", function () {
        document.body.style.overflow = "auto";
        projectSidebarContent[i].classList.remove("sidebar-container--activated");
        setTimeout(function () {
          projectSidebar[i].classList.remove("sidebar--activated");
        }, 600);
      });
    }
  }
};
for (var i = 0; i <= openProjectSidebarBtn.length; i++) {
  _loop(i);
}