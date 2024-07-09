var player = 'X';
var gameOver = false;
var playerXWins = 0;
var playerOWins = 0;
var clickSoundX = new Audio('playerX.wav');
var clickSoundO = new Audio('playerO.wav');
var victorySound = new Audio('victory.wav');
var backgroundAudio = new Audio('bg.mp3');
clickSoundX.loop = false;
clickSoundO.loop = false;
victorySound.loop = false;
backgroundAudio.loop = true;

function checkMove(btnId) {
    var button = document.getElementById("btn-" + btnId);

    if (button.innerHTML.trim() !== "&nbsp;") {
        alert("Invalid move!");
        return;
    }
    if (player == 'X') {
        clickSoundX.play().catch(error => console.error("Audio play failed:", error));
    }else {
        clickSoundO.play().catch(error => console.error("Audio play failed:", error));
    }

    document.getElementById("turns-label").innerHTML = "Player Turn: " + player;
    if (!gameOver) {
        player = player === 'X' ? 'O' : 'X';
    }
    button.innerHTML = player;
    checkGameOver();
}

function evaluateGameSituation(player) {
    return (
        (document.getElementById("btn-1").innerHTML === player && document.getElementById("btn-2").innerHTML === player && document.getElementById("btn-3").innerHTML === player) ||
        (document.getElementById("btn-4").innerHTML === player && document.getElementById("btn-5").innerHTML === player && document.getElementById("btn-6").innerHTML === player) ||
        (document.getElementById("btn-7").innerHTML === player && document.getElementById("btn-8").innerHTML === player && document.getElementById("btn-9").innerHTML === player) ||
        (document.getElementById("btn-1").innerHTML === player && document.getElementById("btn-4").innerHTML === player && document.getElementById("btn-7").innerHTML === player) ||
        (document.getElementById("btn-2").innerHTML === player && document.getElementById("btn-5").innerHTML === player && document.getElementById("btn-8").innerHTML === player) ||
        (document.getElementById("btn-3").innerHTML === player && document.getElementById("btn-6").innerHTML === player && document.getElementById("btn-9").innerHTML === player) ||
        (document.getElementById("btn-1").innerHTML === player && document.getElementById("btn-5").innerHTML === player && document.getElementById("btn-9").innerHTML === player) ||
        (document.getElementById("btn-3").innerHTML === player && document.getElementById("btn-5").innerHTML === player && document.getElementById("btn-7").innerHTML === player)
    );
}

function doGameOver(player) {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("btn-" + i).disabled = true;
    }
    if (player === 'X') {
        playerXWins++;
        document.getElementById("playerX-wins-counter").innerHTML = "Player X Wins: " + playerXWins;
    } else {
        playerOWins++;
        document.getElementById("playerO-wins-counter").innerHTML = "Player O Wins: " + playerOWins;
    }
    victorySound.play().catch(error => console.error("Audio play failed:", error));
    alert("Player " + player + " wins!");
    gameOver = true;
}

function checkGameOver() {
    if (evaluateGameSituation(player)) {
        doGameOver(player);
    }
}

function resetGame() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("btn-" + i).innerHTML = "&nbsp;";
        document.getElementById("btn-" + i).disabled = false;
    }
    player = 'X';
    gameOver = false;
    document.getElementById("turns-label").innerHTML = "Player Turn: O";
}

function toggleMute() {
    backgroundAudio.play().catch(error => console.error("Audio play failed:", error));
    var muteButton = document.getElementById("mute-button");
    var muteButtonContainer = document.getElementById("mute-button-container");

    muteButtonContainer.remove();
    muteButton.remove();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("playerX-wins-counter").innerHTML = "Player X Wins: " + playerXWins;
    document.getElementById("playerO-wins-counter").innerHTML = "Player O Wins: " + playerOWins;
});