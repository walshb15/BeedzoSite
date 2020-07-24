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
}