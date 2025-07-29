export const home = () => {
    const content = document.querySelector("div#content");
    content.innerHTML = "";

    const container = document.createElement("div");

    const title = document.createElement("h1");
    const subtitle = document.createElement("p");
    const intro = document.createElement("p");
    const hourHeading = document.createElement("h2");
    const openHours = document.createElement("p");
    const closedHours = document.createElement("p");
    const locationHeading = document.createElement("h2");
    const location = document.createElement("p");

    title.textContent = "Quick Chops";
    subtitle.textContent = "Simple food. Done right";
    intro.textContent = "Welcome to a space where good food meets calm design. We serve a small, thoughtful menu made with fresh, local ingredients.";
    hourHeading.textContent = "Hours";
    openHours.textContent = "Monday - Saturday: 12pm - 9pm";
    closedHours.textContent = "Closed on Sundays";
    locationHeading.textContent = "Location";
    location.textContent = "123 Main Street, Lagos";

    container.append(title, subtitle, intro, hourHeading, openHours, closedHours, locationHeading, location);

    content.appendChild(container);
}