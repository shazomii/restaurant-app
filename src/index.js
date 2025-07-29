import "./styles.css";
import { about } from "./about.js";
import { home } from "./home.js";
import { menu } from "./menu.js";

const buttons = document.querySelectorAll("button");

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
        default:
            home();
    }
}

const handleNavigation = (event) => {
    navigate(event.target.id);
}

buttons.forEach(button => {
    button.addEventListener("click", handleNavigation);
});

home();