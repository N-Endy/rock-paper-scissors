
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let scorePlayer = document.querySelector('.player-score');
    let scoreComputer = document.querySelector('.computer-score');
    let options = document.querySelectorAll('.option');
    let rock = 'rock option';
    let paper = 'paper option';
    let scissors = 'scissors option';
    let winUpdate = document.querySelector('.win-update');

    function computerPlay() {
        // Cache all options, then multiply the node lenght by random and use in accessing nodeList
        computerChoice = options[Math.floor(Math.random() * options.length)];
        return computerChoice.className;
        console.log(computerChoice);
    }
    
    function playerPlay() {
        options.forEach(option => {
            option.addEventListener('click', () => {
                computerPlay()
                playerChoice = option.className;
                playRound(playerChoice);
            })
        });
    }
    
    
    function playRound(player) {
        let computer = computerPlay();
        // Compare player and computer choices
        // If computer is rock and player is paper, player wins
        console.log(computer);
        if (computer === rock && player === paper) {
            console.log("You win!")
            playerScore++;
            scorePlayer.textContent = playerScore;
            winUpdate.textContent = 'Paper covers Rock. You win this round!';
        } else if (computer === rock && player === scissors) {
            // If computer is rock and player is scissors, computer wins
            computerScore++;
            scoreComputer.textContent = computerScore;
            winUpdate.textContent = 'Rock breaks Scissors. You lose this round!';
        } else if (computer === 'Rock' && player === 'Rock') {
            // If computer is rock and player is rock, it's a draw
            winUpdate.textContent = 'You both chose Rock. Play again!';
        } else if (computer === paper && player === rock) {
            // If computer is paper and player is rock, computer wins
            computerScore++;
            scoreComputer.textContent = computerScore;
            winUpdate.textContent = 'Paper covers Rock. You lose this round!';
        } else if (computer === paper && player === scissors) {
            // If computer is paper and player is scissors, player wins
            playerScore++;
            scorePlayer.textContent = playerScore;
            winUpdate.textContent = 'Scissors cuts Paper. You win this round!';
        } else if (computer === paper && player === paper) {
            // If computer is paper and player is paper, it's a draw
            winUpdate.textContent = "Same hand. It's a draw. Play again!";
        } else if (computer === scissors && player === rock) {
            // If computer is scissors and player is rock, player wins
            playerScore++;
            scorePlayer.textContent = playerScore;
            winUpdate.textContent = 'Rock breaks Scissors. win this round!';
        } else if (computer === scissors && player === paper) {
            // If computer is scissors and player is paper, computer wins
            computerScore++;
            scoreComputer.textContent = computerScore;
            winUpdate.textContent = 'Scissors cuts Paper. You lose this round!';
        } else if (computer === scissors && player === scissors) {
            // If computer is scissors and player is scissors, it's a draw
            winUpdate.textContent = 'This loooks like a draw. Play again!';
        }
    }
    playerPlay();
    
}
game();