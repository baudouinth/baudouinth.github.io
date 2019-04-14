var HTML = document.querySelector("html");

//setting up the icon links
var github = document.getElementById("githubLink").children[0];
github.addEventListener("mouseenter", function(){github.setAttribute("src", "assets/imgs/icons/github-grey.png");});
github.addEventListener("mouseleave", function(){github.setAttribute("src", "assets/imgs/icons/github-white.png");});
github.addEventListener("mousedown", function(event){if (event.button == 0){github.setAttribute("src", "assets/imgs/icons/github-black.png");}});
github.addEventListener("mouseup", function(event){if (event.button == 0){github.setAttribute("src", "assets/imgs/icons/github-white.png");}});

var linkedin = document.getElementById("linkedinLink").children[0];
linkedin.addEventListener("mouseenter", function(){linkedin.setAttribute("src", "assets/imgs/icons/linkedin-grey.png");});
linkedin.addEventListener("mouseleave", function(){linkedin.setAttribute("src", "assets/imgs/icons/linkedin-white.png");});
linkedin.addEventListener("mousedown", function(event){if (event.button == 0){linkedin.setAttribute("src", "assets/imgs/icons/linkedin-black.png");}});
linkedin.addEventListener("mouseup", function(event){if (event.button == 0){linkedin.setAttribute("src", "assets/imgs/icons/linkedin-white.png");}});