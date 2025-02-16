const button = document.querySelector("button");
button.addEventListener("click", function() {
    const difficulty = prompt("Choose a difficulty level: easy, medium, hard ");
    
    let maxAttempts, maxNumber;
    switch (difficulty) {
        case 'easy':
            maxAttempts = 10;
            maxNumber = 40;
            break;
        case 'medium':
            maxAttempts = 7;
            maxNumber = 80;
            break;
        case 'hard':
            maxAttempts = 5;
            maxNumber = 60;
            break;
        default:
            alert("Unrecognized difficulty level!!");
    }

    const randomNumber = Math.floor(Math.random() * maxNumber) ;
    let attempts = 0;
    let guessed = false;

    while (attempts < maxAttempts && !guessed) {
        const userGuess = prompt(`Choose a number between 1 and ${maxNumber} (or type 'stop' to end the game). Attempts left: ${maxAttempts - attempts}`);
        
        if (userGuess.toLowerCase() === 'stop') {
            alert("Game stopped. Thanks for playing!");
        }

        attempts++;
        const guessNumber = parseInt(userGuess,10);

        if (guessNumber === randomNumber) {
            alert(`Great Job, you guessed the number in only ${attempts} attempts!`);
            guessed = true;
        } else if (guessNumber < randomNumber) {
            alert("The number you are trying to guess is bigger!");
        } else if (guessNumber < 0 || guessNumber > maxNumber) {
            alert("Choose a valid number please.");
        } else {
            alert("The number you are trying to guess is smaller!");
        }
    }

    if (!guessed) {
        alert(`You didn't guess the number. The correct number was ${randomNumber}. Maybe next time!`);
    }

    confirm("Wanna play again?");
});