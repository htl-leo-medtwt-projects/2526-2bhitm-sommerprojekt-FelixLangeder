let doc = {
    nameInput: document.getElementById('nameInput'),
    lp: document.getElementById('lp'),
    leaderboard: document.getElementById('leaderboard'),
    howTo: document.getElementById('howTo'),
    levels: document.getElementById('levels'),
    blackBox: document.getElementById('blackBox'),
    level1: document.getElementById('level1'),
    rLevel1: document.getElementById('rLevel1'),
    click1: document.getElementById('click1'),
    click2: document.getElementById('click2'),
    backBox: document.getElementById('backBox'),
    hebel: document.getElementById('hebel'),
    script1: document.getElementById('script1'),
    endscreen1: document.getElementById('endscreen1')
}

let playerName = ""
let timer = 0

function setPlayerName(name) {
    if (name != "") {
        playerName = name
        return true
    } else {
        doc.nameInput.placeholder = "zuerst Namen eingeben"
        return false
    }
}

function leaderboard() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        doc.lp.style.display = "none"
        doc.leaderboard.style.display = "block"
    }, 500)
}

function lp() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        doc.lp.style.display = "grid"
        doc.leaderboard.style.display = "none"
        doc.howTo.style.display = "none"
        doc.levels.style.display = "none"
    }, 500)
}

function startGame() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        doc.lp.style.display = "none"
        doc.levels.style.display = "block"
    }, 500)
}

function howTo() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        doc.lp.style.display = "none"
        doc.howTo.style.display = "block"
        typeHowTo()
    }, 500)
}

function startLv1() {
    if (setPlayerName(doc.nameInput.value) == false) {

    } else {
        blackScreen()
        setTimeout(() => {
            lightScreen()
            doc.levels.style.display = "none"
            doc.level1.style.display = "block"
            type1()
        }, 500)
    }
}

function startLv2() {
    if (setPlayerName(doc.nameInput.value) == false) {

    } else {
        blackScreen()
        setTimeout(() => {
            lightScreen()
            doc.levels.style.display = "none"
            document.getElementById('level2').style.display = "block"
            type2()
        }, 500)
    }
}

function startLv3() {
    if (setPlayerName(document.getElementById('nameInput').value) == false) {

    } else {
        blackScreen()
        setTimeout(() => {
            lightScreen()
            doc.levels.style.display = "none"
            document.getElementById('level3').style.display = "block"
            type3()
        }, 500)
    }
}

function loadCheckpoint() {
    //TODO
}

//Level 1
let counter = 1
let counter2 = 1
let hebel = false
let data1 = [
    {
        background: "img/halle.jpg",
        box: [
            88, 65, 12, 8
        ]
    }
]

let interval
function goIn1() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        doc.level1.style.display = "none"
        doc.rLevel1.style.display = "block"
        doc.rLevel1.style.backgroundImage = "url('./img/halle.jpg')"
        interval = setInterval(oneSecondMore, 1000)
    }, 500)
}

function backBox() {
    if (counter2 == 2) {
        counter--
        counter2--
        onext()
    } else {
        counter -= 2
        if (counter < 0) {
            counter = 0
        }
        onext()
    }
}

function onext() {
    if (counter == 0) {
        doc.rLevel1.style.backgroundImage = "url('./img/halle.jpg')"
        doc.click2.style.display = "none"
        doc.backBox.style.display = "none"
        doc.click1.style.top = "10vh"
        doc.click1.style.left = "40vw"
        doc.click1.style.width = "15vw"
        doc.click1.style.height = "40vh"
    } else if (counter == 1) {
        doc.backBox.style.display = "flex"
        doc.rLevel1.style.backgroundImage = "url('./img/1.floor.webp')"
        doc.click1.style.display = "block"
        doc.click1.style.left = "45vw"
        doc.click1.style.top = "30vh"
        doc.click1.style.height = "50vh"

        doc.click2.style.display = "block"
        doc.click2.style.left = "38vw"
        doc.click2.style.top = "30vh"
        doc.click2.style.height = "50vh"
        doc.click2.style.width = "5vw"

        doc.hebel.style.display = "none"
    } else if (counter == 2) {
        doc.rLevel1.style.backgroundImage = "url('./img/1.1.png')"
        doc.hebel.style.display = "block"
        doc.click1.style.display = "none"
        doc.click2.style.display = "none"
    } else if (counter == 3) {
        doc.rLevel1.style.backgroundImage = "url('./img/arbeitszimmer.jpg')"
        doc.backBox.style.display = "none"
        doc.click1.style.left = "42.5vw"
        doc.click1.style.top = "60vh"
        doc.click1.style.width = "15vw"
        doc.click1.style.height = "20vh"
    } else if (counter == 4) {
        doc.rLevel1.style.backgroundImage = "url('./img/arbeitszimmerO.jpg')"
    } else if (counter == 5) {
        doc.rLevel1.style.backgroundImage = "url('./img/tor.jpg')"
        doc.endscreen1.style.display = "block"
        clearInterval(interval)
        saveLevelResult("1", playerName, timer)
    }
    counter++
}

function o2next() {
    if (counter2 == 1) {
        doc.click1.style.display = "none"
        doc.click2.style.display = "none"
        if (hebel == false) {
            doc.rLevel1.style.backgroundImage = "url('./img/türC.png')"
        } else {
            doc.click1.style.display = "block"
            doc.click1.style.left = "47vw"
            doc.rLevel1.style.backgroundImage = "url('./img/türO.png')"
            counter++
        }
    }
    counter2++
}

function changeHebel() {
    if (hebel) {
        hebel = false
        doc.hebel.style.animation = "hebel 0.5s ease-in-out 1 reverse"
        setTimeout(() => {
            doc.hebel.style = "display: block; transform: rotate(0deg);"
        }, 450)
    } else {
        hebel = true
        doc.hebel.style.animation = "hebel 0.5s ease-in-out 1"
        setTimeout(() => {
            doc.hebel.style = "display: block; transform: rotate(180deg);"
        }, 450)
    }
}

function goIn2() {
    //TODO
}

function goIn3() {
    //TODO
}

function blackScreen() {
    doc.blackBox.style.display = "block"
    doc.blackBox.classList.remove('fromBlack')
    doc.blackBox.classList.add('toBlack')
}

function lightScreen() {
    doc.blackBox.classList.remove('toBlack')
    doc.blackBox.classList.add('fromBlack')
    doc.blackBox.style.display = "none"
}

setTimeout(() => {
    doc.blackBox.style.display = "none"
}, 500)

//Local-Storage
function saveLevelResult(levelName, playerName, timer) {
    const STORAGE_KEY = "levelResults";
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    if (!data[levelName]) {
        data[levelName] = [];
    }

    data[levelName].push({
        name: playerName,
        time: timer
    });

    data[levelName].sort((a, b) => a.time - b.time);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function oneSecondMore() {
    timer++
}