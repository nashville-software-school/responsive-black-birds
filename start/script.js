import { getBirds } from "./database.js";

const birds = getBirds();

let listHtml = "";
birds.map( (bird, index) => {
    listHtml += `<li data-index="${index}">${bird.name}</li>`
});

const birdList = document.getElementById("bird-list");
const birdName = document.getElementById("bird-name");
const birdDescription = document.getElementById("bird-description");

birdList.innerHTML = listHtml;
birdList.addEventListener("click", (event) => {
    const birdIndex = event.target.dataset.index;
    const whichBird = birds[birdIndex];
    birdName.innerHTML = whichBird.name;
    birdDescription.innerHTML = whichBird.description;
})
