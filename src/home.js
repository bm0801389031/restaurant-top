function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.src = "none.jpeg";
    chefImage.alt = "chef";

    home.appendChild(createParagraph("best cockroach's in your country"));
    home.appendChild(createParagraph("Made with passion since longtime"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("oder online or visit us!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;