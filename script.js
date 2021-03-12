const pierre = document.querySelector(".pierre");
const feuille = document.querySelector(".feuille");
const ciseaux =document.querySelector(".ciseaux");

let playerScore, computeurScore, nombreDeManches, clickStatus = 0;

let uneAutrePartie = "O";

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
        console.log("Nobody Win !");
    } else if (computerChoice > clickStatus || (computerChoice===0 && clickStatus===3)){
            console.log("Computer Win !");
    }
    else {
        console.log("You Win !");

    }
}

/*
while (uneAutrePartie === "O") {
    nombreDeManches = parseInt(prompt("Combien de manches voulez vous jouer ?"));
    while (clickStatus === 0) {
        clickStatus
    }
}
*/