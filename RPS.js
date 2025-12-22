function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
console.log(getResult("rock", "scissors")); // Output: You win!
console.log(getResult("paper", "rock"));    // Output: You win!                 
console.log(getResult("scissors", "paper")); // Output: You win!
console.log(getResult("rock", "paper"));    // Output: You lose!
console.log(getResult("paper", "scissors")); // Output: You lose!
console.log(getResult("scissors", "rock")); // Output: You lose!
console.log(getResult("rock", "rock"));     // Output: It's a tie!
console.log(getResult("paper", "paper"));   // Output: It's a tie!