function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "scissors"];
    return options[choice];
}

function getHumanChoice() {
    let humanOption = prompt("Enter your option! (Rock, Paper, or Scissors?)");

    return humanOption?.trim().toLowerCase();
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (`${humanChoice}-${computerChoice}`){
            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                console.log("It's a tie!");
                console.log(`Current scores: Human ${humanScore}, Computer ${computerScore}`);
                return "It's a tie!";

            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                computerScore++
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                console.log(`Current scores: Human ${humanScore}, Computer ${computerScore}`);
                return `You lose! ${computerChoice} beats ${humanChoice}.`;

            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                humanScore++
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                console.log(`Current scores: Human ${humanScore}, Computer ${computerScore}`);
                return `You win! ${humanChoice} beats ${computerChoice}.`;
        }
    }
    
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore){
         console.log(`You won! And you did that with ${humanScore} points against ${computerScore} points!`)
    }else if (humanScore < computerScore){
         console.log(`You lost! The computer beat you with ${computerScore} points against ${humanScore} points!`)
    }else {
         console.log(`It's a tie. You both got ${humanScore} points!`)
    }
}

playGame();

