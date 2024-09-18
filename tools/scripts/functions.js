function shownav()
{
    var dropDownMenu = document.getElementById("mobilenav-dropdown-menu");
    var display = getComputedStyle(dropDownMenu);
    display = display.getPropertyValue("display");
    if (display == "none")
    {
        dropDownMenu.style.display = "block";
    }
    else if (display == "block")
    {
        dropDownMenu.style.display = "none";
    }
}

function travel(filename)
{
    window.location.href = filename+".html";
}