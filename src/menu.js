export const menu = () => {
    const content = document.querySelector("div#content");
    content.innerHTML = "";

    const container = document.createElement("div");

    const menuSection = document.createElement("div");
    menuSection.setAttribute("id", "menu-section");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Small, seasonal, always fresh.";

    const menuItems = [
        {
            heading: "Starters",
            items: [
                { name: "Tomato Soup", price: "₦2,500" },
                { name: "Bruschetta", price: "₦2,000" },
                { name: "Salad", price: "₦3,000" }
            ]
        },
        {
            heading: "Mains",
            items: [
                { name: "Grilled Chicken", price: "₦6,500" },
                { name: "Pasta Alfredo", price: "₦4,800" },
                { name: "Jollof Rice", price: "₦5,500" }
            ]
        },
        {
            heading: "Desserts",
            items: [
                { name: "Cheesecake", price: "₦2,500" },
                { name: "Fruit Tart", price: "₦2,800" },
                { name: "Chocolate Mousse", price: "₦3,000" }
            ]
        },
        {
            heading: "Drinks",
            items: [
                { name: "Fresh Juice", price: "₦1,800" },
                { name: "Coffee", price: "₦1,500" },
                { name: "House Wine", price: "₦3,000" }
            ]
        }
    ];

    menuItems.forEach(section => {
        const div = document.createElement("div");

        const heading = document.createElement("h2");
        heading.textContent = section.heading;

        const ul = document.createElement("ul");

        section.items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} – ${item.price}`;
            ul.appendChild(li);
        });

        div.append(heading, ul);

        menuSection.appendChild(div);
    });

    container.append(title, subtitle, menuSection);

    content.appendChild(container);
}