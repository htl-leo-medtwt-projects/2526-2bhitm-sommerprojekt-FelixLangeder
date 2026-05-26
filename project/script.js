let doc = {

    // START
    nameInput: document.getElementById('nameInput'),
    lp: document.getElementById('lp'),
    leaderboard: document.getElementById('leaderboard'),
    howTo: document.getElementById('howTo'),
    levels: document.getElementById('levels'),
    blackBox: document.getElementById('blackBox'),

    // LEVEL 1
    level1: document.getElementById('level1'),
    rLevel1: document.getElementById('rLevel1'),
    click1: document.getElementById('click1'),
    click2: document.getElementById('click2'),
    backBox: document.getElementById('backBox'),
    hebel: document.getElementById('hebel'),
    script1: document.getElementById('script1'),
    endscreen1: document.getElementById('endscreen1'),
    tipBox: document.getElementById('tipBox'),

    // LEVEL 2
    rLevel2: document.getElementById('rLevel2'),
    level2: document.getElementById('level2'),

    grafScreen2: document.getElementById('grafScreen2'),
    grafImg2: document.getElementById('grafImg2'),

    codePanel2: document.getElementById('codePanel2'),
    codeInput2: document.getElementById('codeInput2'),

    clickL2_1: document.getElementById('clickL2_1'),
    clickL2_2: document.getElementById('clickL2_2'),
    clickL2_3: document.getElementById('clickL2_3'),

    backBox2: document.getElementById('backBox2'),

    tipBox2: document.getElementById('tipBox2'),

    endscreen2: document.getElementById('endscreen2')

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
         doc.tipBox.style.display = "block"
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
        doc.tipBox.style.display = "block"
        type('Willkommen im Schloss! Sieh dich mal um!')
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
        type('Hier könnte etwas nützliches sein!')
    } else if (counter == 3) {
        doc.rLevel1.style.backgroundImage = "url('./img/arbeitszimmer.jpg')"
        doc.backBox.style.display = "none"
        doc.click1.style.left = "42.5vw"
        doc.click1.style.top = "60vh"
        doc.click1.style.width = "15vw"
        doc.click1.style.height = "20vh"
        type('Jetzt bist du im Arbeitszimmer. Irgendwo hier muss sich ein geheimer Ausgang befinden!')
    } else if (counter == 4) {
        doc.rLevel1.style.backgroundImage = "url('./img/arbeitszimmerO.jpg')"
        type('Du hast ihn gefunden!')
    } else if (counter == 5) {
        doc.rLevel1.style.backgroundImage = "url('./img/tor.jpg')"
        doc.tipBox.style.display = "none"
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
            type('Die Tür ist zu. Irgendwie muss man sie doch öffnen können!')
        } else {
            doc.click1.style.display = "block"
            doc.click1.style.left = "47vw"
            doc.rLevel1.style.backgroundImage = "url('./img/türO.png')"
            counter++
            type('Die Tür ist offen!')
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

//Level 2

let room2 = 0
let wrongCode2 = 0
let dangerTimer2 = 0

let secretCode2 = "31121"

let grafInterval2

function goIn2() {

    blackScreen()

    setTimeout(() => {

        lightScreen()

        doc.level2.style.display = "none"
        doc.rLevel2.style.display = "block"

        room2 = 0

        level2Next()

        grafInterval2 = setInterval(() => {

            dangerTimer2++

            if (dangerTimer2 >= 90) {
                grafAttack2()
            }

        }, 1000)

    }, 500)
}

function level2Next() {

    // HAUPTHALLE
    if (room2 == 0) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/level2_hall.jpg')"

        doc.clickL2_1.style.display = "block"
        doc.tipBox.style.display = "block"
        doc.clickL2_1.style.left = "20vw"
        doc.clickL2_1.style.top = "20vh"
        doc.clickL2_1.style.width = "20vw"
        doc.clickL2_1.style.height = "50vh"

        doc.clickL2_2.style.display = "block"

        doc.clickL2_2.style.left = "60vw"
        doc.clickL2_2.style.top = "20vh"
        doc.clickL2_2.style.width = "20vw"
        doc.clickL2_2.style.height = "50vh"

        type("Der zweite Stock wirkt bewohnt.")
    }

    // BIBLIOTHEK
    else if (room2 == 1) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/bibliothek.jpg')"

        doc.backBox.style.display = "block"

        doc.clickL2_1.style.left = "48vw"
        doc.clickL2_1.style.top = "40vh"
        doc.clickL2_1.style.width = "8vw"
        doc.clickL2_1.style.height = "25vh"

        doc.clickL2_2.style.display = "none"

        type("Irgendwo hier muss sich doch ein Hinweis befinden")

    }

    // UHRZIMMER
    else if (room2 == 2) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/uhrzimmer.jpg')"

        doc.clickL2_1.style.left = "40vw"
        doc.clickL2_1.style.top = "10vh"
        doc.clickL2_1.style.width = "20vw"
        doc.clickL2_1.style.height = "30vh"

        type("Die große Uhr könnte nützlich sein")

    }

    // SCHLAFZIMMER
    else if (room2 == 3) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/schlafzimmer.jpg')"

        doc.clickL2_1.style.left = "70vw"
        doc.clickL2_1.style.top = "30vh"
        doc.clickL2_1.style.width = "10vw"
        doc.clickL2_1.style.height = "40vh"

        type("Eingeschaltete Lichter? Wozu die wohl dienen")

    }

    // GEHEIMER GANG
    else if (room2 == 4) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/geheimgang.jpg')"

        doc.clickL2_1.style.left = "45vw"
        doc.clickL2_1.style.top = "50vh"
        doc.clickL2_1.style.width = "15vw"
        doc.clickL2_1.style.height = "30vh"

        type("Der letzte Blick zeigt die Wahrheit")

    }

    // CODE TÜR
    else if (room2 == 5) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/codeDoor.jpg')"

        doc.clickL2_1.style.display = "none"
        doc.clickL2_2.style.display = "none"

        doc.codePanel2.style.display = "flex"

        type("Vier Zahlen trennen dich von der Freiheit")

    }

    room2++
}

function nextLevel2() {

    if (room2 <= 5) {
        level2Next()
    }

}

function nextLevel2Room() {

    room2 = 2

    level2Next()

}

function backLevel2() {

    room2 = 0

    level2Next()

}

function bedroom2() {
    room2 = 3

    level2Next()
}

function checkCode2() {

    let code = doc.codeInput2.value

    if (code == secretCode2) {

        clearInterval(grafInterval2)

        doc.codePanel2.style.display = "none"

        doc.rLevel2.style.backgroundImage =
            "url('./img/escape.jpg')"

        type("Die Tür öffnet sich langsam...")

        setTimeout(() => {

            doc.endscreen2.style.display = "block"

        }, 3000)

    } else {

        wrongCode2++

        type("Falscher Code.")

        let audio = new Audio("./sound/error.mp3")

        audio.play()

        if (wrongCode2 >= 3) {
            grafAttack2()
        }

    }

}

function grafAttack2() {

    clearInterval(grafInterval2)

    doc.rLevel2.style.backgroundImage = "url('img/graf.png')"

    let scream = new Audio("./audio/graf.mp3")

    scream.volume = 1

    scream.play()

    type("Der Graf hat dich gefunden.")

    setTimeout(() => {

        location.reload()

    }, 5000)

}

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

//Sounddesign
let bgmusic
let bgmusicBool = true
function bgMusic() {
    if (bgmusicBool) {
        bgmusic = new Audio('audio/bg.mp3').play()
        bgmusicBool = false
        bgmusic.loop = true
    }
}

let wind
function windSound() {
    wind = new Audio('audio/wind.mp3').play()
}