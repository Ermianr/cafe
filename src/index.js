import "./normalizer.css";
import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./img/about.js";

const mainDiv = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

mainDiv.appendChild(createHome())

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id == "home") {
            mainDiv.replaceChildren(createHome());
        } else if (e.target.id == "menu") {
            mainDiv.replaceChildren(createMenu());
        } else if (e.target.id == "about") {
            mainDiv.replaceChildren(createAbout());
        }
    })
})

