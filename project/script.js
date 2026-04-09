function leaderboard() {
    document.getElementById('lp').style.display = "none"
    document.getElementById('leaderboard').style.display = "block"
    blackScreen()
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

function startLv1() {
    document.getElementById('levels').style.display = "none"
    document.getElementById('level1').style.display = "block"
}

function startLv2() {
    document.getElementById('levels').style.display = "none"
    document.getElementById('level2').style.display = "block"
}

function startLv3() {
    document.getElementById('levels').style.display = "none"
    document.getElementById('level3').style.display = "block"
}

function loadCheckpoint() {
    //TODO
}

function goIn1() {
    document.getElementById('level1').style.display = "none"
    document.getElementById('rLevel1').style.display = "block"
}

function goIn2() {
    //TODO
}

function goIn3() {
    //TODO
}

async function blackScreen() {
    document.getElementById('blackBox').style.display = "block"
    document.getElementById('blackBox').classList.remove('fromBlack')
    document.getElementById('blackBox').classList.add('toBlack')
    await setTimeout(() => {}, 1)
    document.getElementById('blackBox').classList.remove('toBlack')
    document.getElementById('blackBox').classList.add('fromBlack')
    document.getElementById('blackBox').style.display = "none"
}

blackScreen()