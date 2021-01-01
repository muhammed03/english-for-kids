var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');

export const createCategoryCard = category => {
    const card = document.createElement('div');
    card.classList.add("category-card");

    const cardImageWrapper = document.createElement("div");
    cardImageWrapper.classList.add("category-card-image-wrapper");

    const cardImage = document.createElement("img");
    cardImage.src = `assets/${category.url}`;
    cardImageWrapper.appendChild(cardImage);

    const cardName = document.createElement("div");
    cardName.classList.add("category-card-name");
    cardName.innerHTML = category.name;

    card.appendChild(cardImageWrapper);
    card.appendChild(cardName);
    
    const link = window.document.createElement("a");
    link.href = `#${category.id}`;
    link.appendChild(card);

    return link;
}



export const createWordCard = word => {
    let flipClick = false;

    let wordCard = document.createElement("div");
    wordCard.classList.add("word-card");
        
    let wordCardImageWrapper = document.createElement("div");
    wordCardImageWrapper.classList.add("word-card-image");
    wordCardImageWrapper.classList.add("card-compact");

    let wordCardImage = document.createElement("img");
    wordCardImage.src = `assets/${word.url}`;

    wordCardImageWrapper.appendChild(wordCardImage);
    wordCard.appendChild(wordCardImageWrapper);

    const wordCardCaption = document.createElement("div");
    wordCardCaption.classList.add("word-card-caption");

    let flipButton = document.createElement("button");
    flipButton.classList.add("flip-button");
    wordCardCaption.appendChild(flipButton);

    let wordCardCaptionTitle = document.createElement("span");
    wordCardCaptionTitle.classList.add("word-card-caption-title");
    wordCardCaptionTitle.innerText  = word.name;
    wordCardCaption.appendChild(wordCardCaptionTitle)


    switchBtnLeft.addEventListener('click', function () {
        wordCardCaption.style.display = " flex"
    }, false);
    
    switchBtnRight.addEventListener('click', function () {
        wordCardCaption.style.display = "none"
    }, false);

    flipButton.addEventListener('click', () => {
        if (!flipClick){
            wordCardCaptionTitle.innerText  = word.translation;
            wordCardCaption.style.transform = "rotateY(180deg)"
            wordCard.style.transform = "rotateY(180deg)"
            console.log("Russian:",flipClick)
            flipClick = true;
        } else {
            wordCard.style.transform = "rotateY(360deg)"
            wordCardCaption.style.transform = "rotateY(360deg)"
            wordCardCaptionTitle.innerText  = word.name;
            console.log("English:",flipClick)
            flipClick = false;
        }
    })

    const singleCardAudio = document.createElement('audio');
    singleCardAudio.classList.add('single-card-audio');
    singleCardAudio.src = `assets/${word.audioSrc}`;
    singleCardAudio.controls = true;
    singleCardAudio.id = word.name;
    wordCardCaption.appendChild(singleCardAudio);

    let listenButton = document.createElement("button");
    listenButton.classList.add("listen-button"); 
    wordCardCaption.appendChild(listenButton);

    listenButton.addEventListener('click', () => {
        singleCardAudio.play()
    });

    const correctAudio = document.querySelector(".correct")
    correctAudio.controls = true;
    correctAudio.src = `assets/audio/correct.mp3`;
    const errorAudio = document.querySelector(".error")
    errorAudio.controls = true;
    errorAudio.src = `assets/audio/error.mp3`;
    let resultAudio = document.querySelector('.result-audio')
    resultAudio.controls = true;
    wordCard.addEventListener(
        "click",
        () => {
          if (document.game) {
              const result = document.game.checkWord(word.name);
              if (result === "CORRECT") {
                    // juldyzdy append jasa
                    let stars = document.createElement('div');
                    stars.classList.add("stars-win")
                    document.querySelector('.score-display').appendChild(stars);
                    correctAudio.play()
                    wordCard.style.backgroundColor = "green";

              } else {
                    let stars = document.createElement('div');
                    stars.classList.add("stars-lose")
                    document.querySelector('.score-display').appendChild(stars);
                    errorAudio.play()
                    wordCard.style.backgroundColor = "red";
                    
              }

              if (!document.game.isFinished()) {
                  const nextWord = document.game.getRound();
                  const audio = document.getElementById(nextWord);
                  window.setTimeout(() => {
                    audio.play();
                }, 1000)
                  
              } else {
                  // uttyng degen soz jazylady
                  
                  const resultPage = document.querySelector(".result-page");
                  document.querySelector('.result-score-number').innerText = `Your score is ${document.game.getCorrectlyGuessed()}!`
                  if (document.game.getCorrectlyGuessed() > 4) {
                    resultPage.classList.add('win')
                    resultAudio.src = 'assets/audio/success.mp3'
                  } else {
                    resultPage.classList.add('lose')
                    resultAudio.src = 'assets/audio/failure.mp3'
                  }
                  resultPage.classList.toggle("hidden");
                  resultAudio.play();
                  window.setTimeout(() => {
                      resultPage.classList.toggle("hidden");
                  }, 4000)
                  // juldyzdar tazalanady
                  document.querySelector('.score-display').innerHTML = '';
                  // oyin tazalanady
                  document.game = null;
              }
          } else {
              console.log("Game has not started!");
          }
        }
    );

    wordCard.appendChild(wordCardCaption)

    return wordCard;
}

export const createSidebar = links => {
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");

    const closeButton = document.createElement("button");
    closeButton.classList.add("sidebar-close-button");
    closeButton.innerText = 'X';
    closeButton.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-closed");
    });
    sidebar.appendChild(closeButton);

    let mainPageLink = document.createElement("a");
    mainPageLink.innerText = "Main page"
    mainPageLink.href = '#'
    sidebar.appendChild(mainPageLink)

    sidebar.appendChild(closeButton);

    let i = 0;
    for (const lk of links) {
        const categoryLink = document.createElement("a");
        categoryLink.classList.add("sidebar-link");
        categoryLink.href = `#category-${i}`;
        categoryLink.innerText = lk;
        sidebar.appendChild(categoryLink);
        i++;
    }


    document.querySelector("#root").appendChild(sidebar);
    
}

export function initBurgerMenu() {
    const burger = document.querySelector(".burger-menu");
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("sidebar-closed");
    burger.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-closed");
    })
}
