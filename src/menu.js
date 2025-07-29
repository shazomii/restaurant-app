export const menu = () => {
    const content = document.querySelector("div#content");
    
    const conatiner = document.createElement("div");

    const title = document.createElement("h1");

    title.textContent = "Menu";

    conatiner.appendChild(title);

    content.appendChild(conatiner);
}