// DROPDOWN MENU OPEN / CLOSE & TAB INDEX ASSIGNMENT 

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
            setTimeout(() => x.classList.add("dropdown-menu-links--fade-in"), index * 95);
        });
    }, 800);
} )


// CLOSE 
closeDropdownMenuBtn.addEventListener("click", () => {
    dropdownMenuImageOverlay.classList.remove("image-overlay--removed")
    dropdownLinksToEnter.forEach((x, index) => {
        setTimeout(() => x.classList.remove("dropdown-menu-links--fade-in"), index * 95);
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



// DYNAMIC COPYRIGHT YEAR 

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const copyrightYear = document.querySelector(".copyright-year");

if(copyrightYear) {
copyrightYear.innerText = currentYear;
}



// GSAP - ABOUT IMAGE PARALLAX 

if(document.querySelector(".about-main-img")) {
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
}







const pastSitesOpenBtn = document.querySelector(".back-in-time-btn");
const pastSitesCloseBtn = document.querySelector(".past-sites-close-btn");
const pastSitesContainer = document.querySelector(".past-sites");
const pastSitesTitle = document.querySelector(".past-sites-title");
const pastSitesBlocks = Array.from(document.querySelectorAll(".past-site"));
const pastSitesBgVideo = document.querySelector(".past-sites video")


pastSitesOpenBtn.addEventListener("click", () => {
  pastSitesContainer.classList.add("past-sites--activated");
  pastSitesBgVideo.play();
  setTimeout(() => {
    pastSitesTitle.classList.add("past-sites--activated");
  }, 1000)
  setTimeout(() => {
    pastSitesBlocks.forEach(x => {
        x.classList.add("past-sites--activated");
    })
  }, 1200)
})


pastSitesCloseBtn.addEventListener("click", () => {
    pastSitesTitle.classList.remove("past-sites--activated");
    pastSitesBlocks.forEach(x => {
        x.classList.remove("past-sites--activated");
    })
    setTimeout(() => {
      pastSitesContainer.classList.remove("past-sites--activated");
      pastSitesBgVideo.pause();
    }, 1000)
  })
  

  


//   COPY EMAIL TO CLIPBOARD 

const copyableEmail = document.querySelector(".copyable-email");
const copyEmailBtn = document.querySelector(".copy-email-btn");

const myText = document.querySelector(".email");
const button = document.querySelector(".copy-to-clipboard");


if(copyEmailBtn) {
    copyEmailBtn.addEventListener("click", function(){
    copyableEmail.select();
    document.execCommand("copy");
    copyEmailBtn.innerText = "Copied!";
    copyEmailBtn.classList.add("success");
});
}





// DISPLAY CURRENT DATE ON CONTACT PAGE 

const currentDay = new Date().getDay();
const currentDayContainer = document.querySelector(".current-day");

let day;
switch (currentDay) {
  case 0:
  day = "Sunday";
  break;
  case 1:
  day = "Monday";
  break;
  case 2:
  day = "Tuesday";
  break;
  case 3:
  day = "Wednesday";
  break;
  case 4:
  day = "Thursday";
  break;
  case 5:
  day = "Friday";
  break;
  case  6:
  day = "Saturday";
}

currentDayContainer.innerText = day;