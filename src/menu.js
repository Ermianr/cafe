import menuImages from "./menuImages";

const createMenu = () => {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container")

    let menuArray = ["Espresso", "Capuchino", "Mocha Latte", "Mocha"];
    const gridMenu = document.createElement("div");
    gridMenu.classList.add("grid-menu");
    menuImages.forEach((image, index) => {
        const cardContainer = document.createElement("div");
        const coffeImage = document.createElement("img");
        coffeImage.src = image;
        const paragraphCard = document.createElement("p");
        paragraphCard.textContent = `${menuArray[index]}`;

        cardContainer.appendChild(coffeImage);
        cardContainer.appendChild(paragraphCard);
        gridMenu.appendChild(cardContainer);
    });

    menuContainer.appendChild(gridMenu);
    return menuContainer;
};

export {createMenu};