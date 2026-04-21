let playerName = ""

function setPlayerName(name) {
    if (name != "") {
        playerName = name
        return true
    } else {
        document.getElementById('nameInput').placeholder = "zuerst Namen eingeben"
        return false
    }
}

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
    if (setPlayerName(document.getElementById('nameInput').value) == false) {

    } else {
        blackScreen()
        setTimeout(() => {
            lightScreen()
            document.getElementById('levels').style.display = "none"
            document.getElementById('level1').style.display = "block"
        }, 500)
    }
}

function startLv2() {
    if (setPlayerName(document.getElementById('nameInput').value) == false) {

    } else {
        blackScreen()
        setTimeout(() => {
            lightScreen()
            document.getElementById('levels').style.display = "none"
            document.getElementById('level2').style.display = "block"
        }, 500)
    }
}

function startLv3() {
    if (setPlayerName(document.getElementById('nameInput').value) == false) {

    } else {
        blackScreen()
        setTimeout(() => {
            lightScreen()
            document.getElementById('levels').style.display = "none"
            document.getElementById('level3').style.display = "block"
        }, 500)
    }
}

function loadCheckpoint() {
    //TODO
}

//Level 1
let data1 = [
    {
        background: "img/halle.jpg",
        box: [
            88, 65, 12, 8
        ]
    }
]

function goIn1() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        document.getElementById('level1').style.display = "none"
        document.getElementById('rLevel1').style.display = "block"
        document.getElementById('rLevel1').style.backgroundImage = "url('./img/halle.jpg')"
    }, 500)
}

let counter = 1
function onext() {
    if (counter == 1) {
        document.getElementById('rLevel1').style.backgroundImage = "url('./img/1.floor.webp')"
        document.getElementById('click1').style.left = "45vw"
        document.getElementById('click1').style.top = "30vh"
        document.getElementById('click1').style.height = "50vh"

        document.getElementById('click2').style.left = "45vw"
        document.getElementById('click2').style.top = "30vh"
        document.getElementById('click2').style.height = "50vh"
        document.getElementById('click2').style.width = "50vw"
        counter++
    } else if (counter == 2) {
        document.getElementById('rLevel1').style.backgroundImage = "url('./img/1.floor.webp')"
    }
}

let counter2 = 1
function o2next() {
    if (counter2 == 1) {

    }
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
}

function lightScreen() {
    document.getElementById('blackBox').classList.remove('toBlack')
    document.getElementById('blackBox').classList.add('fromBlack')
    document.getElementById('blackBox').style.display = "none"
}

setTimeout(() => {
    document.getElementById('blackBox').style.display = "none"
}, 500)