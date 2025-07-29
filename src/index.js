import { about } from "./about.js";
import { home } from "./home.js";
import { menu } from "./menu.js";

const buttons = document.querySelectorAll("button");
const content = document.querySelector("div#content");

const navigate = (buttonId) => {
    switch (buttonId) {
        case "home":
            home();
            break;
        case "menu":
            menu();
            break;
        case "about":
            about();
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        content.textContent = "";
        navigate(button.id);
    });
});


home();
