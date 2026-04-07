function leaderboard() {
    document.getElementById('lp').style.display = "none"
    document.getElementById('leaderboard').style.display = "block"
}

function lp() {
    document.getElementById('lp').style.display = "grid"
    document.getElementById('leaderboard').style.display = "none"
    document.getElementById('howTo').style.display = "none"
    document.getElementById('levels').style.display = "none"
}

function startGame() {
    document.getElementById('lp').style.display = "none"
    document.getElementById('levels').style.display = "block"
}

function howTo() {
    document.getElementById('lp').style.display = "none"
    document.getElementById('howTo').style.display = "block"
}