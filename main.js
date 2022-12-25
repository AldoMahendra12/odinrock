const option = ["rock", "scissors", "paper"];

function getComputerChoice(){
    const choice = option[Math.floor(Math.random() * option.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return `It's a tie! ${playerSelection} equal to ${computerSelection}`;
    }

    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Scissors Paper");
        if (choice == null){
            continue;
        }

        const choiceLower = choice.toLowerCase();
        if (option.includes(choiceLower)){
            validatedInput = true;
            return choiceLower;
        }
    }
}




function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome the brave one, let's play!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        console.log("----------");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
     }


    if (scorePlayer > scoreComputer){
        console.log("Players win!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer's win, you lose!");
    }
    else {
        console.log("It's a tie!");
    }
    console.log("Game Over!");
}

game()
