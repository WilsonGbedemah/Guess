let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
};

function displayScore(score) {
    document.querySelector('.score').textContent = score;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    //When there is no input value.
    if (!guess) {
        displayMessage(`⛔Error! No Number `);


        //when guess is correct
    } else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Number`);

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector('.number').style.width = `30rem`;

        //Calculating the highscore.
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //When  guess is not equal to secretNumber.

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `📈 Too High` : `📉 Too Low `);
            score--;
            displayScore(score);
        } else {
            displayMessage(`💥 Sorry! You lost the game`);
        };
    };


});


//Resetting the game again.
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage(`😊 Start guessing...`);

    displayScore(score);
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = `#222`;
    document.querySelector('.number').style.width = `15rem`;
})