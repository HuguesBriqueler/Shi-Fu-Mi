const pierre = document.querySelector(".pierre");
const feuille = document.querySelector(".feuille");
const ciseaux =document.querySelector(".ciseaux");

let playerScore, computeurScore, nombreDeManches;
let uneAutrePartie;

const gameInit = function() {
    playerScore = 0;
    computeurScore = 0;
    uneAutrePartie = "O";
    nombreDeManches = 2;
    while(nombreDeManches%2 === 0) {
        nombreDeManches = parseInt(prompt("Combien de manches voulez vous jouer ?  (Entrez un nombre impair)"));
    }
    document.querySelector(".playerAction").src="./Board.png";
    document.querySelector(".computerAction").src="./Board.png";
    displayScores();
}

const displayScores = function() {
    document.querySelector(".computerScore").innerHTML = `Moi  : ${computeurScore}`;
    document.querySelector(".playerScore").innerHTML = `Vous  : ${playerScore}`;
}

const displayWinner = function(winner) {
    document.querySelector(".scoreTitle").innerHTML = `Scores : ${winner} Win !`;    

}

gameInit();

pierre.addEventListener("click",function(){
    whatIsClicked(1);
});
feuille.addEventListener("click",function(){
    whatIsClicked(2);
});
ciseaux.addEventListener("click",function(){
    whatIsClicked(3);
});

const whatIsClicked = function(clickStatus) {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);
    if (computerChoice===clickStatus) {
        displayWinner("Nobody");
    } else if (computerChoice-1 === clickStatus || (computerChoice===1 && clickStatus===3)){
        computeurScore += 1;
        displayWinner("Computer");
    }
    else {
        playerScore += 1;
        displayWinner("You");
    }
    displayScores();
}


/*
while (uneAutrePartie === "O") {
    nombreDeManches = parseInt(prompt("Combien de manches voulez vous jouer ?"));
    while (clickStatus === 0) {
        clickStatus
    }
}
*/