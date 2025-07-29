export const about = () => {
    const content = document.querySelector("div#content");
    
    const conatiner = document.createElement("div");

    const title = document.createElement("h1");
    const subtitle = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");

    title.textContent = "Who We Are";
    subtitle.textContent = "Less is more. Especially on a plate.";
    para1.textContent = "At Quick Chops, we focus on simplicity—fresh ingredients, familiar flavors, and quiet comfort.";
    para2.textContent = "No noise. No clutter. Just good food and warm hospitality.";
    para3.textContent = "We're a small team with a big love for food that feels like home.";
    para4.textContent = "Come in, take a seat, and let the plate do the talking.";

    conatiner.append(title, subtitle, para1, para2, para3, para4);

    content.appendChild(conatiner);
}