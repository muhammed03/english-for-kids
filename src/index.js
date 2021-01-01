import Game from './game';
import { cardToMap, idToCategoryMap } from './utils';
import cards from './cards';
import { createCategoryCard, createWordCard, initBurgerMenu, createSidebar } from "./layout_utils";
import './styles/main.css';

document.cardsMap = cardToMap(cards);
document.idMap = idToCategoryMap(cards);
var switchButton = document.querySelector(".switch-button")
var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');
var activeSwitch = document.querySelector('.active');
let switchModeButton = document.querySelector(".switch-mode-button")


const categoryList = document.querySelector(".category-list");
const wordsList = document.querySelector(".words-list")
for (let i = 0; i < Object.keys(document.cardsMap).length; i++) {
    const category = Object.keys(document.cardsMap)[i];
    categoryList.appendChild(createCategoryCard({
        name: category,
        url: document.cardsMap[category][0].image,
        audioSrc: document.cardsMap[category][0].audioSrc,
        id: `category-${i}`,
    }));
}




window.addEventListener("popstate", () => {
    
    const selectedCategoryId = document.location.hash;
    const selectedCategoryName = document.idMap[selectedCategoryId];
    console.log(selectedCategoryId, selectedCategoryName);
    const selectedWords = document.cardsMap[selectedCategoryName];
    wordsList.innerHTML = "";
    document.querySelector('.score-display').innerHTML = '';
    document.game = null;
    if (document.location.hash) {
        // alip tastaysin
        categoryList.classList.add("hidden")
        switchButton.classList.remove("hidden")
        let i = 0;
        for (let word of selectedWords) {
            wordsList.appendChild(createWordCard({
                name: document.cardsMap[selectedCategoryName][i].word,
                url: document.cardsMap[selectedCategoryName][i].image,
                audioSrc: document.cardsMap[selectedCategoryName][i].audioSrc,
                id: `category-${i}`,
                translation: document.cardsMap[selectedCategoryName][i].translation
            }));
            i++;
        }
    } else {
        // qosasing  
        categoryList.classList.remove("hidden")
        switchButton.classList.add("hidden")
        switchModeButton.classList.add("hidden")
        switchLeft();
    }

    console.log(document.location.hash)
});



switchModeButton.addEventListener('click', () => {
    document.querySelector('.score-display').innerHTML = '';
    const currentCategoryId = document.location.hash;
    
    if (currentCategoryId) {
        const currentCategoryName = document.idMap[currentCategoryId];

        document.game = new Game(document.cardsMap[currentCategoryName]);
        const word = document.game.getRound();
        const audio = document.getElementById(word);
        audio.play();
    } else {
        console.log("No category was selected. Cannot start a game on main menu");
    }

})


/* Switch toggle mode*/



function switchLeft() {
    switchBtnRight.classList.remove('active-case');
    switchBtnLeft.classList.add('active-case');
    activeSwitch.style.left = '0%';
    switchModeButton.style.display = "none"
    document.game = null;
    document.querySelector('.score-display').innerHTML = '';
}

function switchRight() {
    switchBtnRight.classList.add('active-case');
    switchBtnLeft.classList.remove('active-case');
    activeSwitch.style.left = '50%';
    switchModeButton.style.display = "block";
}

switchBtnLeft.addEventListener('click', function () {
    switchLeft();
}, false);

switchBtnRight.addEventListener('click', function () {
    switchRight();    
}, false);
/* Switch toggle mode*/

createSidebar(Object.keys(document.cardsMap));
initBurgerMenu();

