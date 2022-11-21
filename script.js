var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

setGradient();
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";   
    css.textContent = body.style.background + ";";
}

function genRandomColor() {
    var num = genRandom();
    color1.value = "#" + genRandom();
    color2.value = "#" + genRandom();
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    setGradient();
}

function genRandom() {
    return Math.floor(Math.random() * 16777215).toString(16);   
}

button.addEventListener("click", genRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);