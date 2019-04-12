var HTML = document.querySelector("html");

//setting up the home button
var homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function(){location.assign("index.html");});

//setting up the links
var github = document.getElementById("githubLink");
github.addEventListener("click", function(){location.assign("https://github.com/Bauthe");});

var linkedin = document.getElementById("linkedinLink");
linkedin.addEventListener("click", function(){location.assign("https://www.linkedin.com/in/baudouin-th%C3%A9obald-01aa22181/");});

//setting up the border button
var borderStyle = document.createElement("style");
borderStyle.textContent = "#borderButton{border: solid 2px}";
var borderButton = document.getElementById("borderButton");
borderButton.addEventListener("mousedown", function(){HTML.appendChild(borderStyle);})
borderButton.addEventListener("mouseup", function(){HTML.removeChild(borderStyle);})