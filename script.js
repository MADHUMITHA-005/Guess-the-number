let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.querySelector('input');
const guessButton = document.querySelector('.guess');
const attemptsText = document.querySelector('body > div > h3');
const clueMessage = document.querySelector('#clueMessage');
const playAgainButton = document.querySelector('body > div > button:last-child');

guessButton.addEventListener('click', function () {

    let guess = Number(input.value);

    if (guess < 1 || guess > 100 || input.value === "") {
        clueMessage.innerText = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess < randomNumber) {

        clueMessage.innerText = "Guess a little higher ↑";

    } else if (guess > randomNumber) {

        clueMessage.innerText = "Guess a little lower ↓";

    } else {

        clueMessage.innerText = "🎉 Congratulations!!! You guessed it!";

        guessButton.disabled = true;
    }

    attemptsText.innerText = "No of attempts: " + attempts;
});


playAgainButton.addEventListener('click', function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    input.value = "";

    clueMessage.innerText = "Enter a number to get your first clue!";

    attemptsText.innerText = "No of attempts: 0";

    guessButton.disabled = false;
});