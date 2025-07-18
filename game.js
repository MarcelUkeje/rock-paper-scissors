function playGame(){
    const outcome = document.querySelector(".outcome");
    outcome.textContent = "";

    const scoreBoard = document.querySelector(".results");
    scoreBoard.textContent = "Please make your choice";

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    let humanOption = "";
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    function setHumanChoice(choice) {
        humanOption = choice;
        return humanOption;
    }

    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3);
        let options = ["rock", "paper", "scissors"];
        return options[choice];
    }

    function checkWinner() {
        if (humanScore === 5 || computerScore === 5) {
            gameOver = true;
            if (humanScore > computerScore) {
                scoreBoard.textContent = `You won! Final score: Human ${humanScore}, Computer ${computerScore}`;
            } else {
                scoreBoard.textContent = `You lost! Final score: Computer ${computerScore}, Human ${humanScore}`;
            }
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (gameOver) return;

        switch (`${humanChoice}-${computerChoice}`){
            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                outcome.textContent = "It's a tie!";
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                computerScore++;
                outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                break;
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                humanScore++;
                outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                break;
        }
        scoreBoard.textContent = `Current scores: Human ${humanScore}, Computer ${computerScore}`;
        checkWinner();
    }

    rock.addEventListener("click", () => {
        setHumanChoice("rock");
        playRound(humanOption, getComputerChoice());
    });
    paper.addEventListener("click", () => {
        setHumanChoice("paper");
        playRound(humanOption, getComputerChoice());
    });
    scissors.addEventListener("click", () => {
        setHumanChoice("scissors");
        playRound(humanOption, getComputerChoice());
    });
}

playGame();