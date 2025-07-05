function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if(choice === 0){
        option = "rock";
    }else if(choice === 1){
        option = "paper";
    }else {
        option = "scissors";
    }

    return option;
}

function getHumanChoice() {
    let humanOption = prompt("Enter your option! (Rock, Paper, or Scissors?)");

    humanOption = humanOption.toLowerCase();

    return humanOption;
}


humanScore = 0;
computerScore = 0;

// humanChoice = getHumanChoice()
// computerChoice = getComputerChoice()

function playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()) {

    switch (`${humanChoice}-${computerChoice}`){
        case "rock-rock":
            console.log("It's a tie!");
            break;

        case "rock-paper":
            computerScore++
            console.log("You lose! Paper beats Rock.");
            break;

        case "rock-scissors":
            humanScore++
            console.log("You win! Rock beats Scissors.");
            break;
    
        case "paper-rock":
            humanScore++
            console.log("You win! Paper beats Rock.");
            break;

        case "paper-paper":
            console.log("It's a tie!");
            break;

        case "paper-scissors":
            computerScore++
            console.log("You lose! Scissors beats Paper.");
            break;

        case "scissors-rock":
            computerScore++
            console.log("You lose! Rock beats Scissors.");
            break;

        case "scissors-paper":
            humanScore++
            console.log("You win! Scissors beats Paper.");
            break;

        case "scissors-scissors":
            console.log("It's a tie!");
            break;
    }
    return (`Your score: ${humanScore}, Computer's score: ${computerScore}`);
}


function playGame(start){
    if (start === true){
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
    }   
}

playGame(true)