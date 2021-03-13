const pierre = document.querySelector(".pierre");
const feuille = document.querySelector(".feuille");
const ciseaux =document.querySelector(".ciseaux");

let playerScore, computeurScore, nombreDeManches, nombreDeTours;
let uneAutrePartie, whoWonTheGame;

const gameInit = function() {
    playerScore = 0;
    computeurScore = 0;
    uneAutrePartie = "O";
    nombreDeTours = 0;
    nombreDeManches = 2;
    while(nombreDeManches%2 === 0) {
        nombreDeManches = parseInt(prompt("Combien de manches voulez vous jouer ?  (Entrez un nombre impair)"));
    }
    document.querySelector(".playerAction").style.backgroundImage = getPicture(4);
    document.querySelector(".computerAction").style.backgroundImage = getPicture(4);
    document.querySelector(".scoreTitle").innerHTML = `Scores : Let's play...`;
    displayScores();
}

const displayScores = function() {
    document.querySelector(".computerScore").innerHTML = `Moi  : ${computeurScore}`;
    document.querySelector(".playerScore").innerHTML = `Vous  : ${playerScore}`;
    if (nombreDeTours === nombreDeManches) {
        if (playerScore > computeurScore) {
            whoWonTheGame = "You";
        } else {
            whoWonTheGame = "I";
        }
        uneAutrePartie = prompt(`${whoWonTheGame} Won the game \n Voulez vous faire une autre partie ?`).toUpperCase();
        if (uneAutrePartie === "O") {
            gameInit();
        } /* else {
            pierre.removeEventListener("click", clickPierre());
            feuille.removeEventListener("click", clickFeuille());
            ciseaux.removeEventListener("click", clickCiseaux());
        } */
    }

}

const displayWinner = function(winner) {
    document.querySelector(".scoreTitle").innerHTML = `Scores : ${winner} Win !`;
}



const whatIsClicked = function(clickStatus) {
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    document.querySelector(".playerAction").style.backgroundImage = getPicture(clickStatus);
    document.querySelector(".computerAction").style.backgroundImage = getPicture(computerChoice);

    if (computerChoice===clickStatus) {
        displayWinner("Nobody");
    } else if (computerChoice-1 === clickStatus || (computerChoice===1 && clickStatus===3)){
        computeurScore += 1;
        nombreDeTours++;
        displayWinner("Computer");
    }
    else {
        playerScore += 1;
        nombreDeTours++;
        displayWinner("You");
    }
    displayScores();
}

const getPicture = function(pictureNumber) {
    switch (pictureNumber) {
        case 1 :
            return("url(./Pierre.png)");
            break;
        case 2 :
            return("url(./Feuille.png)");
            break;
        case 3 :
            return("url(./Ciseaux.png)");
            break;
        default :
            return("url(./Board.png)");
            break;
    }
}

pierre.addEventListener("click",function clickPierre() {
    whatIsClicked(1);
});
feuille.addEventListener("click",function clickFeuille() {
    whatIsClicked(2);
});
ciseaux.addEventListener("click",function clickCiseaux() {
    whatIsClicked(3);
});

gameInit();
