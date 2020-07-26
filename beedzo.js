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
        document.getElementById("menuButton").style.opacity = "100%";
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
        document.getElementById("menuButton").style.opacity = "0%";
    }

    function openWelcome() {
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#0055ff");
        root.style.setProperty('--shadowColor',  '#00fff9')
        let page = document.getElementById("WelcomePage");
        page.style.opacity = 1;
        closeAbout();
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
    }

    function closeAbout() {
        let page = document.getElementById("AboutPage");
        page.style.opacity = 0;
    }

    function openProjects() {
        let root = document.documentElement;
        root.style.setProperty('--primaryColor', "#026b18");
        root.style.setProperty('--shadowColor',  '#00fcb4')
    }

    function closeProjects() {

    }
}