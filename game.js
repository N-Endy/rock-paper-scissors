
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let scorePlayer = document.querySelector('.player-score');
    let scoreComputer = document.querySelector('.computer-score');
    let options = document.querySelectorAll('.option');
    let winUpdate = document.querySelector('.win-update');
    let btn = document.querySelector('.btn');
    let rock = 'rock option';
    let paper = 'paper option';
    let scissors = 'scissors option';

    function computerPlay() {
        // Cache all options, then multiply the node lenght by random and use in accessing nodeList
        computerChoice = options[Math.floor(Math.random() * options.length)];
        return computerChoice.className;
    }
    
    function playerPlay() {
        options.forEach(option => {
            option.addEventListener('click', () => {
                computerPlay()
                choice = option.classList;
                playerChoice = option.className;
                playRound(playerChoice, choice);
            })
        });
    }
    playerPlay();
    
    
    function playRound(player, color) {
        let computer = computerPlay();
        // Compare player and computer choices
        // If computer is rock and player is paper, player wins
        if (computer === rock && player === paper) {
            playerScore++;
            scorePlayer.textContent = playerScore;
            winUpdate.textContent = 'Paper covers Rock. You win this round!';
            color.add('green-color');
            setTimeout(() => color.remove('green-color'), 1000);
        } else if (computer === rock && player === scissors) {
            // If computer is rock and player is scissors, computer wins
            computerScore++;
            scoreComputer.textContent = computerScore;
            winUpdate.textContent = 'Rock breaks Scissors. You lose this round!';
            color.add('red-color');
            setTimeout(() => color.remove('red-color'), 1000);
        } else if (computer === rock && player === rock) {
            // If computer is rock and player is rock, it's a draw
            winUpdate.textContent = 'You both chose Rock. Play again!';
            color.add('grey-color');
            setTimeout(() => color.remove('grey-color'), 1000);
        } else if (computer === paper && player === rock) {
            // If computer is paper and player is rock, computer wins
            computerScore++;
            scoreComputer.textContent = computerScore;
            winUpdate.textContent = 'Paper covers Rock. You lose this round!';
            color.add('red-color');
            setTimeout(() => color.remove('red-color'), 1000);
        } else if (computer === paper && player === scissors) {
            // If computer is paper and player is scissors, player wins
            playerScore++;
            scorePlayer.textContent = playerScore;
            winUpdate.textContent = 'Scissors cuts Paper. You win this round!';
            color.add('green-color');
            setTimeout(() => color.remove('green-color'), 1000);
        } else if (computer === paper && player === paper) {
            // If computer is paper and player is paper, it's a draw
            winUpdate.textContent = "Same hand. It's a draw. Play again!";
            color.add('grey-color');
            setTimeout(() => color.remove('grey-color'), 1000);
        } else if (computer === scissors && player === rock) {
            // If computer is scissors and player is rock, player wins
            playerScore++;
            scorePlayer.textContent = playerScore;
            winUpdate.textContent = 'Rock breaks Scissors. You win this round!';
            color.add('green-color');
            setTimeout(() => color.remove('green-color'), 1000);
        } else if (computer === scissors && player === paper) {
            // If computer is scissors and player is paper, computer wins
            computerScore++;
            scoreComputer.textContent = computerScore;
            winUpdate.textContent = 'Scissors cuts Paper. You lose this round!';
            color.add('red-color');
            setTimeout(() => color.remove('red-color'), 1000);
        } else if (computer === scissors && player === scissors) {
            // If computer is scissors and player is scissors, it's a draw
            winUpdate.textContent = 'This loooks like a draw. Play again!';
            color.add('grey-color');
            setTimeout(() => color.remove('grey-color'), 1000);
        } else {
            
        }

        if (playerScore > 4) {
            winUpdate.textContent = 'Congratulations! You Won!';
            disableOption();
        } else if (computerScore > 4) {
            winUpdate.textContent = 'Awwww! You Lost!';
            disableOption();
        }
    }
    

    function disableOption() {
        document.querySelector('#container > p').style.display = 'none';
        document.querySelector('.options').style.display = 'none';
        startGameAgain();
    }
    
    function startGameAgain() {
        btn.style.display = 'flex';
        btn.addEventListener('click', () => {
            document.location.reload();
        })
    }
    
}
game();