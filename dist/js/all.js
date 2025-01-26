"use strict";

// DROPDOWN MENU TOGGLE & TABINDEX ASSIGNMENT 

var dropdownMenu = document.querySelector(".dropdown-menu");
var openDropdownMenuBtn = document.querySelector(".open-menu-btn");
var closeDropdownMenuBtn = document.querySelector(".close-menu-btn");
var dropdownLinks = document.querySelectorAll(".dropdown-menu ul li a");
var dropdownSocialsContainer = document.querySelectorAll(".dropdown-menu__social-icons");
var dropdownSocials = document.querySelectorAll(".dropdown-menu__social-icons .dropdown-menu__social-icon");
var dropdownGoBackBtn = document.querySelector(".dropdown-menu .back-in-time-btn");
var dropdownLinksToEnter = document.querySelectorAll(".fade-in");

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
    dropdownLinksToEnter.forEach(function (x, index) {
      setTimeout(function () {
        return x.classList.add("dropdown-menu-links--fade-in");
      }, index * 80);
    });
  }, 600);
});

// CLOSE 
closeDropdownMenuBtn.addEventListener("click", function () {
  dropdownLinksToEnter.forEach(function (x, index) {
    setTimeout(function () {
      return x.classList.remove("dropdown-menu-links--fade-in");
    }, index * 80);
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
  }, 800);
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