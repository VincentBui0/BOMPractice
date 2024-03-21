//NUMBER GUESSING GAME

// Define the minimum and maximum numbers for the guessing range
const minNum = 1;
const maxNum = 100;

// Generate a random number between minNum and maxNum (inclusive)
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Initialize variables to keep track of attempts, user guesses, and game status
let attempts = 0;
let guess;
let running = true;

// Run the game loop until the user either guesses the correct number or cancels the prompt
while(running) {
    // Prompt the user to guess a number within the specified range
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    // Convert the user's input to a number
    guess = Number(guess);

    // Validate if the user's input is a valid number
    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        // Increment the number of attempts
        attempts++;
        // Provide feedback to the user based on their guess
        if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        } else if (guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        } else {
            // If the user guesses the correct number, end the game loop and display the result
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}
