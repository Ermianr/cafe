const createAbout = () => {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutContainerDiv = document.createElement("div");
    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About Us!!!";
    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "At Kitty Cafe, we believe in creating a space where the love for cats and coffee comes together in perfect harmony. We’re more than just a café; we’re a haven that promotes animal welfare and encourages responsible adoption. Every visit helps support our rescued cats, giving them a second chance. Come meet us and be part of this unique community!"

    aboutContainerDiv.appendChild(aboutTitle);
    aboutContainerDiv.appendChild(aboutParagraph);


    // Append
    aboutContainer.appendChild(aboutContainerDiv);

    return aboutContainer;
};

export {createAbout};