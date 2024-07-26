var randomNumber = Math.floor(Math.random() * 49) + 1;
var turns = 7;
var userWins = localStorage.userWins ? localStorage.userWins : 0;
var userLosses = localStorage.userLosses ? localStorage.userLosses : 0;

function checkGuess() {
    let userGuess = document.getElementById("guess-input").value;
    if (userGuess == "") {
        document.getElementById('message-label').innerHTML = "Please enter a number!";
        return;
    }
    if (userGuess == randomNumber) {
        document.getElementById('message-label').innerHTML = "Congratulations! You guessed the correct number!🎉🎉";
        document.getElementById('submit-button').innerHTML = "Play Again";
        document.getElementById('submit-button').onclick = restartGame;
        userWins++;
        localStorage.userWins = userWins;
        localStorage.userLosses = userLosses;
        document.getElementById('user-win').innerHTML = "Wins: " + userWins;
        document.getElementById('user-loss').innerHTML = "Losses: " + userLosses;
    } else if (userGuess > randomNumber) {
        document.getElementById('message-label').innerHTML = "Try a lower number!";
        turns--;
        document.getElementById('turns-left').innerHTML = "Turns left: " + turns;
    } else if (userGuess < randomNumber) {
        document.getElementById('message-label').innerHTML = "Try a higher number!";
        turns--;
        document.getElementById('turns-left').innerHTML = "Turns left: " + turns;
    }
    checkLose();
    document.getElementById('guess-input').value = "";

}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 49) + 1;
    turns = 7;
    document.getElementById('message-label').innerHTML = "Guess a Number between 1-50.";
    document.getElementById('turns-left').innerHTML = "Turns left: " + turns;
    document.getElementById('submit-button').innerHTML = "Submit";
    document.getElementById('submit-button').onclick = checkGuess;
    document.getElementById('guess-input').value = "";
}

function checkLose() {
    if (turns < 1) {
        document.getElementById('message-label').innerHTML = "Game Over! The correct number was: " + randomNumber;
        document.getElementById('submit-button').innerHTML = "Play Again";
        document.getElementById('submit-button').onclick = restartGame;
        userLosses++;
        localStorage.userWins = userWins;
        localStorage.userLosses = userLosses;
        document.getElementById('user-win').innerHTML = "Wins: " + userWins;
        document.getElementById('user-loss').innerHTML = "Losses: " + userLosses;
        return;
    }
}

window.onload = function () {
    function checWinLoose() {
        document.getElementById('user-win').innerHTML = "Wins: " + userWins;
        document.getElementById('user-loss').innerHTML = "Losses: " + userLosses;
    }

    checWinLoose();
};