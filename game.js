function playGame(){
    const outcome = document.querySelector(".outcome");
    outcome.textContent = "";

    const scoreBoard = document.querySelector(".results");
    scoreBoard.textContent = "Please make your choice";

    let humanOption = "";
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    function setHumanChoice(choice) {
        humanOption = choice;
        return humanOption;
    }

    function getComputerChoice() {
        let pick = Math.floor(Math.random() * 3);
        let options = ["rock", "paper", "scissors"];
        let choice = options[pick];
        if (choice === "rock"){
            showRock();
        }else if (choice === "paper"){
            showPaper();
        }else{
            showScissors()
        }
        return choice;
    }

    const computerRock = document.querySelector(".c-rock");
    const computerPaper = document.querySelector(".c-paper");
    const computerScissors = document.querySelector(".c-scissors");

    function showRock(){
        computerPaper.style.backgroundColor = "white";
        computerScissors.style.backgroundColor = "white";
        computerRock.style.backgroundColor = "orange";
    }

    function showPaper(){
        computerRock.style.backgroundColor = "white";
        computerScissors.style.backgroundColor = "white";
        computerPaper.style.backgroundColor = "orange";
    }

    function showScissors(){
        computerPaper.style.backgroundColor = "white";
        computerRock.style.backgroundColor = "white";
        computerScissors.style.backgroundColor = "orange";
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
                outcome.style.color = "black";
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                computerScore++;
                outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                outcome.style.color = "red";
                break;
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                humanScore++;
                outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                outcome.style.color = "green";
                break;
        }
        scoreBoard.textContent = `Current scores: Human ${humanScore}, Computer ${computerScore}`;
        checkWinner();
    }

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener("click", () => {
        setHumanChoice("rock");
        paper.style.backgroundColor = "white";
        scissors.style.backgroundColor = "white";
        rock.style.backgroundColor = "blue";
        playRound(humanOption, getComputerChoice());
    });
    paper.addEventListener("click", () => {
        rock.style.backgroundColor = "white";
        scissors.style.backgroundColor = "white";
        paper.style.backgroundColor = "blue";
        setHumanChoice("paper");
        playRound(humanOption, getComputerChoice());
    });
    scissors.addEventListener("click", () => {
        rock.style.backgroundColor = "white";
        paper.style.backgroundColor = "white";
        scissors.style.backgroundColor = "blue";
        setHumanChoice("scissors");
        playRound(humanOption, getComputerChoice());
    });
}

playGame();