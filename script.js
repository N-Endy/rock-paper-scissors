
function game() {
    // Initialize player and Computer scores
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    function computerPlay() {
        // Store string of choices in array
        let compChoice = ['Rock', 'Paper', 'Scissors'];
        // Multiply the length of choice array with a random number between 0 and 1
        // Round off number by flooring, then take the number and pulling out an item in the choices array
        return compChoice[Math.floor(Math.random() * compChoice.length)];
    }
    
    function playerPlay() {
        //Initialize variable
        let playerChoice;
        
        // Check Player's Input for correct form
        do {
            // Ask for player's choice and convert to lowercase
            playerChoice = prompt('What is your Choice?', '').toLowerCase();
            // Convert player's choice to capitalization
            playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        } while (!playerChoice || playerChoice === '') 
        
        if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === "Scissors") {
            return playerChoice;
        } else {
            alert('Please input right form of Rock, Paper, or Scissors');
        }
        
    }
    
    function playRound(playerSelection = playerPlay(), computerSelection = computerPlay()) {
        // Compare player and computer choices
        // If computer is rock and player is paper, player wins
        if (computerSelection === 'Rock' && playerSelection === 'Paper') {
            playerScore++;
            alert("You win! Paper covers Rock.");
        } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
            // If computer is rock and player is scissors, computer wins
            computerScore++;
            alert('You lose! Rock breaks Scissors');
        } else if (computerSelection === 'Rock' && playerSelection === 'Rock') {
            // If computer is rock and player is rock, it's a draw
            draw++;
            alert("It's a draw! You both chose Rock");
        } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
            // If computer is paper and player is rock, computer wins
            computerScore++;
            alert('You lose! Paper covers Rock');
        } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
            // If computer is paper and player is scissors, player wins
            playerScore++;
            alert('You win! Scissors cuts Paper');
        } else if (computerSelection === 'Paper' && playerSelection === 'Paper') {
            // If computer is paper and player is paper, it's a draw
            draw++;
            alert("It's a draw. You both chose Paper");
        } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
            // If computer is scissors and player is rock, player wins
            playerScore++;
            alert('You win! Rock breaks Scissors');
        } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
            // If computer is scissors and player is paper, computer wins
            computerScore++;
            alert('You lose! Scissors cuts Paper');
        } else if (computerSelection === 'Scissors' && playerSelection === 'Scissors') {
            // If computer is scissors and player is scissors, it's a draw
            draw++;
            alert("It's a draw! You both chose Scissors")
        }
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();



    // Declare Winner
    if (playerScore > computerScore) {
        alert(`You won ${playerScore}, Computer won ${computerScore}, and you drew ${draw} out of 5. You win the game!`);
    } else if (playerScore === computerScore) {
        alert(`You won ${playerScore}, Computer won ${computerScore}, and you drew ${draw} out of 5. It was a draw`);
    } else {
        alert(`You won ${playerScore}, Computer won ${computerScore}, and you drew ${draw} out of 5. You lose the game!`);
    }
}
game();