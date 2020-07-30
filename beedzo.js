{
    function closeSidebar() {
        let side = document.getElementById("sideSections");
        side.style.width = "0%";
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
        side.style.width = "20%";
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
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#0055ff");
        root.style.setProperty('--shadowColor',  '#00fff9')
        let page = document.getElementById("WelcomePage");
        page.style.opacity = 1;
        closeAbout();
        closeProjects();
    }

    function closeWelcome() {
        let page = document.getElementById("WelcomePage");
        page.style.opacity = 0;
    }

    function openAbout() {
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#ef4502");
        root.style.setProperty('--shadowColor',  '#f77b00')
        let page = document.getElementById("AboutPage");
        page.style.opacity = 1;
        closeWelcome();
        closeProjects();
    }

    function closeAbout() {
        let page = document.getElementById("AboutPage");
        page.style.opacity = 0;
    }

    function openProjects() {
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#026b18");
        root.style.setProperty('--shadowColor',  '#00fcb4');
        let page = document.getElementById("ProjPage");
        page.style.opacity = 1;
        closeWelcome();
        closeAbout();
    }

    function closeProjects() {
        closeProjAll();
        let page = document.getElementById("ProjPage");
        page.style.opacity = 0;
    }

    function openWheelProj() {
        let page = document.getElementById("WheelContainer");
        openGenericProj(page);
    }

    function openWingProj() {
        let page = document.getElementById("WingContainer");
        openGenericProj(page);
    }

    function openCretProj() {
        let page = document.getElementById("CretContainer");
        openGenericProj(page);
    }

    function openGenericProj(proj) {
        if (proj.style.opacity != 1) {
            proj.style.opacity = 1;
            proj.style.height = "100%";
            closeProjOthers(proj);
        }
        else {
            closeProjSelf(proj);
        }
    }

    function closeProjSelf(page) {
        page.style.opacity = 0;
        page.style.height = "0%";
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
    }
}