let playerName = ""

function leaderboard() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('lp').style.display = "none"
        document.getElementById('leaderboard').style.display = "block"
    }, 500)
}

function lp() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('lp').style.display = "grid"
        document.getElementById('leaderboard').style.display = "none"
        document.getElementById('howTo').style.display = "none"
        document.getElementById('levels').style.display = "none"
    }, 500)
}

function startGame() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('lp').style.display = "none"
        document.getElementById('levels').style.display = "block"
    }, 500)
}

function howTo() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('lp').style.display = "none"
        document.getElementById('howTo').style.display = "block"
    }, 500)
}

function startLv1() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('levels').style.display = "none"
        document.getElementById('level1').style.display = "block"
    }, 500)

}

function startLv2() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('levels').style.display = "none"
        document.getElementById('level2').style.display = "block"
    }, 500)
}

function startLv3() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('levels').style.display = "none"
        document.getElementById('level3').style.display = "block"
    }, 500)
}

function loadCheckpoint() {
    //TODO
}

function goIn1() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('level1').style.display = "none"
        document.getElementById('rLevel1').style.display = "block"
    }, 500)
}

function goIn2() {
    //TODO
}

function goIn3() {
    //TODO
}

function blackScreen() {
    document.getElementById('blackBox').style.display = "block"
    document.getElementById('blackBox').classList.remove('fromBlack')
    document.getElementById('blackBox').classList.add('toBlack')
    console.log('rage bait 2')
}

function lightScreen() {
    document.getElementById('blackBox').classList.remove('toBlack')
    document.getElementById('blackBox').classList.add('fromBlack')
    document.getElementById('blackBox').style.display = "none"
}

setTimeout(() => {
    document.getElementById('blackBox').style.display = "none"
}, 500)