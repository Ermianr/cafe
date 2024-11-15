import catImageHome from "./img/cat1.webp";
import restaurantLocation from "./img/restaurant-location.webp";

const createHome = () => {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    // Description Restaurant
    const descriptionContainer = document.createElement("div");
    const descriptionContainerDiv = document.createElement("div");
    descriptionContainer.classList.add("description-restaurant");
    const imageDesc = document.createElement("img");
    imageDesc.src = catImageHome;
    const titleDesc = document.createElement("h1");
    titleDesc.textContent = "Welcome to Kitty Cafe!!!";
    const paragraphDesc = document.createElement("p");
    paragraphDesc.textContent = "A unique space where cat lovers and coffee enthusiasts can unwind and enjoy special moments. Savor a delicious drink while playing and relaxing with adorable cats, all rescued and available for adoption. Come experience a place that will make your heart purr!";


    descriptionContainer.appendChild(imageDesc);
    descriptionContainer.appendChild(descriptionContainerDiv);
    descriptionContainerDiv.appendChild(titleDesc);
    descriptionContainerDiv.appendChild(paragraphDesc);

    // Location
    const locationContainer = document.createElement("div");
    const locationContainerDiv = document.createElement("div");
    const imageLocation = document.createElement("img");
    imageLocation.src = restaurantLocation;
    locationContainer.classList.add("location-restaurant")
    const titleLocation = document.createElement("h2");
    titleLocation.textContent = "Location";
    const paragraphLocation = document.createElement("p");
    paragraphLocation.textContent = "We’re located in the heart of the city, in a cozy corner filled with warmth and charm. Our space is designed for both humans and cats to feel comfortable and relaxed, featuring areas to play, unwind, and enjoy a delicious cup of coffee. A perfect haven to escape the hustle and bustle!";
    
    locationContainer.appendChild(imageLocation);
    locationContainer.appendChild(locationContainerDiv);
    locationContainerDiv.appendChild(titleLocation);
    locationContainerDiv.appendChild(paragraphLocation);

    // Appends
    homeContainer.appendChild(descriptionContainer);
    homeContainer.appendChild(locationContainer);

    return homeContainer;
};

export {createHome}