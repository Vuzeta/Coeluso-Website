import {
    changeComment
} from "./comment.js";
import {
    Elements
} from "./elements.js";
import {
    playWave
} from "./wave.js";
import {
    showNav
} from "./showNavbar.js"


changeComment(); //box6 function to show comments
setInterval(playWave, 220); //box2 wave function
Elements.copyYear.textContent = new Date().getFullYear(); // copy current year

Elements.hamburger.addEventListener('click', function () {
    Elements.hamburger.classList.toggle("is-active");
    showNav(Elements.headerLinks);
}, false);
Elements.copyYear.textContent = new Date().getFullYear(); // copy current year