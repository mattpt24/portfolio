const projectSidebar = Array.from(document.querySelectorAll('.project-sidebar-panel'));
const projectSidebarContent = Array.from(document.querySelectorAll(".project-sidebar-panel-container"));
const openProjectSidebarBtn = Array.from(document.querySelectorAll(".open-project-btn"));
const closeProjectSidebarBtn = Array.from(document.querySelectorAll(".close-project-btn"));


for(let i = 0; i <= openProjectSidebarBtn.length; i++) {
    if(openProjectSidebarBtn[i]) {
        openProjectSidebarBtn[i].addEventListener("click", () => {
            document.body.style.overflow = "hidden";
            projectSidebar[i].classList.add("sidebar--activated");
            setTimeout(() => {
                projectSidebarContent[i].classList.add("sidebar-container--activated");
            }, 600)
        })

        if(closeProjectSidebarBtn[i]) {
        closeProjectSidebarBtn[i].addEventListener("click", () => {
            document.body.style.overflow = "auto";
            projectSidebarContent[i].classList.remove("sidebar-container--activated");
            setTimeout(() => {
                projectSidebar[i].classList.remove("sidebar--activated");
            }, 600)
        })
        }
    }
}



