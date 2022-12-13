function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    if(randomNum == 0){
        return "Rock";
    }
    else if(randomNum == 1){
        return "Paper";
    } 
    else {
        return "Scissors";
    }
}

// console.log(getComputerChoice());
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// const playerSelection = prompt("Choose Rock ,Paper, Scissors", );

// Single round of game
function singleRound(playerSelection, computerSelection){


    // return "You Lose! paper beats rock"
     playerSelection = prompt("Enter Rock, Paper or Scissors",);
     computerSelection = getComputerChoice();
     console.log(computerSelection);


     //If conditions for rock input
if(playerSelection == "Rock"){
    if( playerSelection == computerSelection){
        return "Draw!"
    }
    else if( computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors"
    }
    else{
        
        return "You Lost! Paper beats Rock"
    }
}
      // conditions for user input paper
if(playerSelection == "Paper"){

    if( playerSelection == computerSelection){
        return "Draw!"
    }
    else if( computerSelection == "Rock"){
        return "You Win! Paper beats Rock"
    }
    else{
        return "You Lose! Scissors beats Paper "
    }

}

       //conditions for user input scissors

if(playerSelection == "Scissors" ){
    if(playerSelection == computerSelection){
        return "Draw!"
    }
    else if(computerSelection == "Paper"){
        return "You Win! Scissors beats Paper"
    }
    else{
        return "You Lose! Rock beats Scissors"
    }
}    
}
// game for 5 rounds
function game(){
    for(let  i = 0; i < 5; i++){
        console.log(singleRound());
    }
}
console.log(game());
