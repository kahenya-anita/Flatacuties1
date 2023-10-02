//Select Elements from HTML/DOM
const characterBar = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImg = document.getElementById("image");

//Changes the DOM & store current item to local storage

const getIndividualCharacter = (charItem) => {
  characterName.textContent = charItem.name;
  characterImg.src = charItem.image;
  characterImg.alt = charItem.name;
  localStorage.setItem("charItem", JSON.stringify(charItem));
};

//GET
fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((data) => {
    getIndividualCharacter(data[0]);
    return data.map((charItem) => {
      let charName = document.createElement("span");
      characterBar.appendChild(charName);

      charName.textContent = charItem.name;
      charName.className = "character-name";

      charName.addEventListener("click", () => {
        getIndividualCharacter(charItem);
      });
    });
  });
