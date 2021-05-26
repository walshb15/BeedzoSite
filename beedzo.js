{
    function closeSidebar() {
        let side = document.getElementById("sideSections");
        side.style.display = "none";
        //side.style.width = "0%";
        side.style.borderColor = "transparent";
        side.style.backgroundColor = 'transparent';
        let items = document.getElementsByClassName("sidebarItems");
        //Set the items in the sidebar to be transparent
        for (i = 0; i < items.length; ++i)
        {
            items[i].style.opacity = "0";
        }
        document.getElementById("menuButton").style.opacity = 1;
    }

    function openSidebar() {
        let side = document.getElementById("sideSections");
        /*if (screen.width <= 600)
        {
            side.style.width = "100%";
        }
        else
        {
            side.style.width = "20%";
        }*/
        side.style.display = "block";
        //side.style.width = getComputedStyle(document.documentElement).getPropertyValue('--sidebarWidth');
        side.style.borderColor = "lightslategray";
        side.style.backgroundColor = "black";
        let items = document.getElementsByClassName("sidebarItems");
        //Set the items in the sidebar to be visible
        for (i = 0; i < items.length; ++i)
        {
            items[i].style.opacity = "1";
        }
        document.getElementById("menuButton").style.opacity = 0;
    }

    function openWelcome() {
        checkSidebar();
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#0055ff");
        root.style.setProperty('--shadowColor',  '#00fff9')
        let page = document.getElementById("WelcomePage");
        page.style.opacity = 1;
        page.style.visibility = "visible";
        closeAbout();
        closeProjects();
        closeSkills();
    }

    function checkSidebar() {
        let side = document.getElementById("sideSections");
        //Close the sidebar if the user selected something and
        //it is taking up more than half of the viewport
        if (side.offsetWidth > window.innerWidth / 2) {
            closeSidebar();
        }
    }

    function closeWelcome() {
        let page = document.getElementById("WelcomePage");
        page.style.opacity = 0;
        page.style.visibility = "hidden";
    }

    function openAbout() {
        checkSidebar();
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#ef4502");
        root.style.setProperty('--shadowColor',  '#f77b00')
        let page = document.getElementById("AboutPage");
        page.style.opacity = 1;
        page.style.visibility = "visible";
        closeWelcome();
        closeProjects();
        closeSkills();
    }

    function closeAbout() {
        let page = document.getElementById("AboutPage");
        page.style.opacity = 0;
        page.style.visibility = "hidden";
    }

    function openProjects() {
        checkSidebar();
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#026b18");
        root.style.setProperty('--shadowColor',  '#00fcb4');
        let page = document.getElementById("ProjPage");
        page.style.opacity = 1;
        page.style.visibility = "visible";
        closeWelcome();
        closeAbout();
        closeSkills();
    }

    function closeProjects() {
        closeProjectModals();
        let page = document.getElementById("ProjPage");
        page.style.opacity = 0;
        page.style.visibility = "hidden";
    }

    function openSkills() {
        checkSidebar();
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#8c1eff");
        root.style.setProperty('--shadowColor',  '#f222ff');
        //root.style.setProperty('--primaryColor', "#f222ff");
        //root.style.setProperty('--shadowColor', "#8c1eff");
        let page = document.getElementById("SkillsPage");
        page.style.opacity = 1;
        page.style.visibility = "visible";
        closeWelcome();
        closeAbout();
        closeProjects();
    }

    function closeSkills() {
        let page = document.getElementById("SkillsPage");
        page.style.opacity = 0;
        page.style.visibility = "hidden";
    }

    /*function openCMSProj() {
        let page = document.getElementById("Project_CMS");
        openGenericProj(page);
        closeSidebar();
    }

    function openWheelProj() {
        let page = document.getElementById("WheelContainer");
        openGenericProj(page);
        closeSidebar();
    }

    function openWingProj() {
        let page = document.getElementById("WingContainer");
        openGenericProj(page);
        closeSidebar();
    }

    function openCretProj() {
        let page = document.getElementById("CretContainer");
        openGenericProj(page);
        closeSidebar();
    }*/

    function openGenericProj(sel) {
        //Close any open projects first
        closeProjectModals();
        let proj = document.getElementById(sel);
        proj.style.opacity = 1;
        proj.style.visibility = "visible";
        /*if (proj.style.opacity != 1) {
            proj.style.opacity = 1;
            proj.style.visibility = "visible";
            //proj.style.height = "100%";
            closeProjOthers(proj);
        }
        else {
            closeProjSelf(proj);
        }*/
    }

    /*function closeProjSelf(page) {
        page.style.opacity = 0;
        page.style.height = "0%";
        page.style.visibility = "hidden";
    }

    function closeProjOthers(page) {
        let pages = document.getElementsByClassName("ProjContainer");
        for (i = 0; i < pages.length; ++i) {
            if (pages[i] != page) {
                closeProjSelf(pages[i]);
            }
        }
    }

    function closeProjAll() {
        let pages = document.getElementsByClassName("ProjContainer");
        for (i = 0; i < pages.length; ++i) {
            closeProjSelf(pages[i]);
        }
    }*/

    function closeProjectModals() {
        let projects = document.getElementsByClassName("ProjContainer");
        for (i = 0; i < projects.length; ++i) {
            projects[i].style.opacity = 0;
            projects[i].style.visibility = "hidden";
        }
    }
}