let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

// colour inputs matching the background generated on the first page load

color1.value = "#ff0000";
color2.value = "#ffff00";

// Display CSS linear gradient property

css.textContent = window.getComputedStyle(body).getPropertyValue("background-image");

function setGradient() {
    body.style.backgroundImage = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.backgroundImage + ";";
}

// function that generates random hex for colour

function randomColor () {
    const letters = "0123456789ABCDEF";
    let random1 = "#";
    let random2 = "#";
    for (let i=0; i < 6; i++) {
        random1 += letters[Math.floor(Math.random() * 16)];
        random2 += letters[Math.floor(Math.random() * 16)];
    }
    color1.value = random1;
    color2.value = random2;
    setGradient();
}



color1.addEventListener("input", setGradient);
 
color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);