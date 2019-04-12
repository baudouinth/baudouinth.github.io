//change theme button
var themeButton = document.getElementById("themeButton");
var body = document.querySelector("body");
themeButton.addEventListener("click", function(){
    if (body.id == "dark")
    {
        body.id = "normal"
        themeButton.textContent = "thème sombre"
    }
    else if (body.id == "normal")
    {
        body.id = "dark"
        themeButton.textContent = "thème clair"
    }});