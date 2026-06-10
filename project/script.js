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
    clickL2_4: document.getElementById('clickL2_4'),
    clickL2_5: document.getElementById('clickL2_5'),

    backBox2: document.getElementsByClassName('back2')[0],

    tipBox2: document.getElementById('tipBox2'),

    endscreen2: document.getElementById('endscreen2'),

    level3: document.getElementById('level3'),
    rLevel3: document.getElementById('rLevel3'),

    clickL3_1: document.getElementById('clickL3_1'),
    clickL3_2: document.getElementById('clickL3_2'),
    clickL3_3: document.getElementById('clickL3_3'),
    clickL3_4: document.getElementById('clickL3_4'),
    clickL3_5: document.getElementById('clickL3_5'),

    backBox3: document.getElementById('backBox3'),

    codePanel3: document.getElementById('codePanel3'),
    codeInput3: document.getElementById('codeInput3'),

    grafScreen3: document.getElementById('grafScreen3'),
    grafImg3: document.getElementById('grafImg3'),

    endscreen3: document.getElementById('endscreen3')
}

let playerName = ""
let timer = 0
let bgmusic = new Audio('audio/bg.mp3')

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

let levelsBgSound
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
        bgmusic.pause()
        levelsBgSound = new Audio('audio/levelBg.mp3')
        levelsBgSound.play()
        
        lightScreen()
        doc.level1.style.display = "none"
        doc.rLevel1.style.display = "block"
        doc.tipBox.style.display = "block"
        doc.rLevel1.style.backgroundImage = "url('./img/halle.jpg')"
        interval = setInterval(oneSecondMore, 1000)
        type('Willkommen im Schloss! Sieh dich mal um!')
    }, 500)
}

function backBox() {
    playSteps()
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
    playSteps()
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
        doc.click1.style = "cursor: url('img/tropfen.png'), auto; display: block; left: 42.5vw; top: 60vh; height: 20vh; width: 15vw;"
        type('Jetzt bist du im Arbeitszimmer. Irgendwo hier muss sich ein geheimer Ausgang befinden!')
    } else if (counter == 4) {
        new Audio('audio/fire.mp3').play()
        setTimeout(() => {
            doc.rLevel1.style.backgroundImage = "url('./img/arbeitszimmerO.jpg')"
            type('Du hast ihn gefunden!')
        })
        doc.click1.style.cursor = "pointer"
    } else if (counter == 5) {
        doc.click1.style.cursor = "pointer"
        doc.rLevel1.style.backgroundImage = "url('./img/tor.jpg')"
        bgmusic.pause()
        levelsBgSound.pause()
        new Audio('audio/win.mp3').play()
        doc.tipBox.style.display = "none"
        doc.endscreen1.style.display = "block"
        clearInterval(interval)
        saveLevelResult("1", playerName, timer)
    }
    counter++
}

function o2next() {
    playSteps()
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

        bgmusic.pause()
        levelsBgSound = new Audio('audio/levelBg.mp3').play()

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
    playSteps()
    if (room2 == 0) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/level2_hall.jpg')"

        doc.clickL2_1.style.display = "block"
        doc.tipBox.style.display = "block"
        doc.clickL2_1.style.left = "10vw"
        doc.clickL2_1.style.top = "20vh"
        doc.clickL2_1.style.width = "20vw"
        doc.clickL2_1.style.height = "50vh"

        doc.clickL2_2.style.display = "block"
        doc.clickL2_2.style.left = "70vw"
        doc.clickL2_2.style.top = "20vh"
        doc.clickL2_2.style.width = "20vw"
        doc.clickL2_2.style.height = "50vh"

        doc.clickL2_4.style.display = "block"
        doc.clickL2_4.style.left = "45vw"
        doc.clickL2_4.style.top = "40vh"
        doc.clickL2_4.style.width = "10vw"
        doc.clickL2_4.style.height = "20vh"

        doc.backBox2.style.display = "none"

        doc.clickL2_3.style.display = "none"
        doc.clickL2_5.style.display = "none"

        type("Der zweite Stock wirkt bewohnt.")
    }

    // BIBLIOTHEK
    else if (room2 == 1) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/bibliothek.jpg')"

        doc.backBox2.style.display = "block"

        doc.clickL2_3.style.display = "block"
        doc.clickL2_3.style.left = "42.5vw"
        doc.clickL2_3.style.top = "25vh"
        doc.clickL2_3.style.width = "15vw"
        doc.clickL2_3.style.height = "40vh"

        doc.clickL2_1.style.display = "none"
        doc.clickL2_2.style.display = "none"
        doc.clickL2_4.style.display = "none"
        doc.clickL2_5.style.display = "none"

        type("Irgendwo hier muss sich doch ein Hinweis befinden")

    }

    // UHRZIMMER
    else if (room2 == 2) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/uhrzimmer.jpg')"

        doc.backBox2.style.display = "block"
        doc.clickL2_1.style.left = "40vw"
        doc.clickL2_1.style.top = "10vh"
        doc.clickL2_1.style.width = "20vw"
        doc.clickL2_1.style.height = "30vh"
        doc.clickL2_1.style.display = "none"

        doc.clickL2_1.style.display = "none"
        doc.clickL2_2.style.display = "none"
        doc.clickL2_3.style.display = "none"
        doc.clickL2_4.style.display = "none"
        doc.clickL2_5.style.display = "none"
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
        doc.clickL2_1.style.display = "none"

        doc.clickL2_1.style.display = "none"
        doc.clickL2_2.style.display = "none"
        doc.clickL2_3.style.display = "none"
        doc.clickL2_4.style.display = "none"
        doc.clickL2_5.style.display = "none"

        type("Eingeschaltete Lampen? Wozu die wohl dienen")

    }

    // GEHEIMER GANG
    else if (room2 == 4) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/geheimgang.png')"

        doc.backBox2.style.display = "block"
        doc.clickL2_5.style.display = "block"
        doc.clickL2_5.style.left = "45vw"
        doc.clickL2_5.style.top = "40vh"
        doc.clickL2_5.style.width = "10vw"
        doc.clickL2_5.style.height = "20vh"

        doc.clickL2_1.style.display = "none"
        doc.clickL2_2.style.display = "none"
        doc.clickL2_3.style.display = "none"
        doc.clickL2_4.style.display = "none"

        type("Der letzte Blick zeigt die Wahrheit")

    }

    // CODE TÜR
    else if (room2 == 5) {

        doc.rLevel2.style.backgroundImage =
            "url('./img/codeDoor.jpg')"

        doc.clickL2_1.style.display = "none"
        doc.clickL2_2.style.display = "none"
        doc.clickL2_3.style.display = "none"
        doc.clickL2_4.style.display = "none"
        doc.clickL2_5.style.display = "none"

        doc.codePanel2.style.display = "flex"

        type("Vier Zahlen trennen dich von der Freiheit")

    }

    room2++
}

function nextLevel2() {

    /*if (room2 <= 5) {
        level2Next()
    }*/

    room2 = 1

    level2Next()

}

function nextLevel2Room() {

    room2 = 2

    level2Next()

}

function bedroom2() {
    room2 = 3

    level2Next()
}

function gang2() {
    room2 = 4

    level2Next()
}

function door2() {
    room2 = 5

    level2Next()
}

function backLevel2() {

    playSteps()
    if (room2 < 4 || room2 == 5) {
        room2 = 0
    } else if (room2 == 4) {
        room2 = 1
    } else if (room2 > 5) {
        room2 = 4
    }

    doc.codePanel2.style.display = "none"
    level2Next()

}

function checkCode2() {

    let code = doc.codeInput2.value

    if (code == secretCode2) {

        clearInterval(grafInterval2)

        doc.codePanel2.style.display = "none"

        doc.backBox2.style.display = "none"
        type("Die Tür öffnet sich langsam...")
        new Audio('audio/open.mp3').play()

        setTimeout(() => {
            doc.rLevel2.style.backgroundImage =
                "url('./img/tor.jpg')"
            doc.endscreen2.style.display = "block"
            doc.tipBox.style.display = "none"
            bgmusic.pause()
            levelsBgSound.pause()
            new Audio('audio/win.mp3').play()

        }, 2000)

    } else {

        wrongCode2++

        if (wrongCode2 == 1) {
            type("Falscher Code. Noch 2 Versuche!")
        } else if (wrongCode2 == 2) {
            type("Falscher Code. Noch 1 Versuch!")
        }

        let audio = new Audio("./audio/error.mp3")

        audio.play()

        if (wrongCode2 >= 3) {
            grafAttack2()
        }

    }

}

function grafAttack2() {

    clearInterval(grafInterval2)

    doc.rLevel2.style.backgroundImage = "url('img/graf.png')"
    doc.codePanel2.style.display = "none"
    doc.backBox2.style.display = "none"

    let scream = new Audio("./audio/graf.mp3")

    scream.volume = 1
    scream.loop = true
    scream.play()

    type("Der Graf hat dich gefunden.")

    setTimeout(blackScreen, 4800)

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

function showResults() {
    const data = JSON.parse(localStorage.getItem("levelResults")) || {};

    let levels = ["level1", "level2", "level3"];

    for (let i = 0; i < levels.length; i++) {

        let level = levels[i];

        if (!data[level]) continue;

        data[level].sort((a, b) => a.time - b.time);

        document.getElementById(level).innerHTML =
            data[level].map(player => `
                <div class="playerBox">
                    <div>${player.name}</div>
                    <div>${player.time}s</div>
                </div>
            `).join("");
    }
}

function oneSecondMore() {
    timer++
}

//Level 3
const ROOMS3 = {
    HALL: 0,
    LABOR: 1,
    CHAPEL: 2,
    CLOCK: 3,
    THRONE: 4,
    CATACOMBS: 5,
    CODE: 6
}

function goIn3() {

    blackScreen()

    setTimeout(() => {

        lightScreen()

        bgmusic.pause()
        levelsBgSound = new Audio('audio/levelBg.mp3').play()

        doc.level3.style.display = "none"
        doc.rLevel3.style.display = "block"
        doc.tipBox.style.display = "block"

        room3 = ROOMS3.HALL

        future = false

        futureTime = 0

        wrongCode3 = 0

        renderRoom3()

        interval3 = setInterval(() => {

            if (future) {

                futureTime++

                if (futureTime >= 120) {

                    grafAttack3()

                }

            }

        }, 1000)

    }, 500)

}

function hideBoxes3() {

    doc.clickL3_1.style.display = "none"
    doc.clickL3_2.style.display = "none"
    doc.clickL3_3.style.display = "none"
    doc.clickL3_4.style.display = "none"
    doc.clickL3_5.style.display = "none"

}

function renderRoom3() {

    hideBoxes3()

    doc.codePanel3.style.display = "none"

    playSteps()
    if (room3 == ROOMS3.HALL) {

        if (future) {

            doc.rLevel3.style.backgroundImage =
                "url('./img/hall_future.png')"

            type("Die Halle hat sich verändert.")

        } else {

            doc.rLevel3.style.backgroundImage =
                "url('./img/hall_present.png')"

            type("Der alte Kerker birgt neue Gefahren")

        }

        doc.backBox3.style.display = "none"

        // Labor
        doc.clickL3_1.style.display = "block"
        doc.clickL3_1.style.left = "2vw"
        doc.clickL3_1.style.top = "20vh"
        doc.clickL3_1.style.width = "13vw"
        doc.clickL3_1.style.height = "60vh"
        doc.clickL3_1.onclick = () => {

            room3 = ROOMS3.LABOR
            renderRoom3()

        }

        // Kapelle
        doc.clickL3_2.style.display = "block"
        doc.clickL3_2.style.left = "35vw"
        doc.clickL3_2.style.top = "30vh"
        doc.clickL3_2.style.width = "12vw"
        doc.clickL3_2.style.height = "25vh"
        doc.clickL3_2.onclick = () => {

            room3 = ROOMS3.CHAPEL
            renderRoom3()

        }

        // Uhrraum
        doc.clickL3_3.style.display = "block"
        doc.clickL3_3.style.left = "50vw"
        doc.clickL3_3.style.top = "60vh"
        doc.clickL3_3.style.width = "7vw"
        doc.clickL3_3.style.height = "20vh"
        doc.clickL3_3.onclick = () => {

            room3 = ROOMS3.CLOCK
            renderRoom3()

        }

        if (future) {

            // Thronsaal

            doc.clickL3_4.style.display = "block"

            doc.clickL3_4.style.left = "50vw"
            doc.clickL3_4.style.top = "35vh"
            doc.clickL3_4.style.width = "15vw"
            doc.clickL3_4.style.height = "15vh"

            doc.clickL3_4.onclick = () => {

                room3 = ROOMS3.THRONE

                renderRoom3()

            }

        }

    }

    else if (room3 == ROOMS3.LABOR) {

        doc.backBox3.style.display = "flex"

        if (future) {

            doc.rLevel3.style.backgroundImage =
                "url('./img/labor_future.png')"

            type("Die Zeit hat auch hier ihre Spuren hinterlassen.")

        } else {

            doc.rLevel3.style.backgroundImage =
                "url('./img/labor.png')"

            type("Im alten Labor könnte etwas nützliches sein.")

        }

    }

    else if (room3 == ROOMS3.CHAPEL) {

        doc.backBox3.style.display = "flex"

        if (future) {

            doc.rLevel3.style.backgroundImage =
                "url('./img/kapelle_future.png')"

            type("Vielleicht hat die Zeit auch hier einen Hinweis hinterlassen.")

        } else {

            doc.rLevel3.style.backgroundImage =
                "url('./img/kapelle.png')"

            type("Die alte Kathedrale birgt auch ihre Geheimnisse.")

        }

    }

    else if (room3 == ROOMS3.CLOCK) {

        doc.backBox3.style.display = "flex"

        doc.rLevel3.style.backgroundImage =
            "url('./img/uhrraum.png')"

        type("Die Uhr scheint einen besonderen Zweck zu erfüllen.")

        doc.clickL3_1.style.display = "block"

        doc.clickL3_1.style.left = "50vw"
        doc.clickL3_1.style.top = "15vh"
        doc.clickL3_1.style.width = "16vw"
        doc.clickL3_1.style.height = "60vh"

        doc.clickL3_1.onclick = () => {

            travelTime()

        }

    }

    else if (room3 == ROOMS3.THRONE) {

        doc.backBox3.style.display = "flex"

        doc.rLevel3.style.backgroundImage =
            "url('./img/thronsaal_future.png')"

        type("Von hier kann der Graf nicht weit sein. Du solltest dich beeilen!")

        doc.clickL3_1.style.display = "block"

        doc.clickL3_1.style.position = "absolute"
        doc.clickL3_1.style.zIndex = "100000000"
        doc.clickL3_1.style.left = "40vw"
        doc.clickL3_1.style.top = "70vh"
        doc.clickL3_1.style.width = "20vw"
        doc.clickL3_1.style.height = "20vh"

        doc.clickL3_1.onclick = () => {

            room3 = ROOMS3.CATACOMBS

            renderRoom3()

        }

    }

    else if (room3 == ROOMS3.CATACOMBS) {

        doc.backBox3.style.display = "flex"

        doc.rLevel3.style.backgroundImage =
            "url('./img/katakomben_future.png')"

        type("Hier könnte es richtung Ausgang gehen")

        doc.clickL3_1.style.display = "block"

        doc.clickL3_1.style.left = "45vw"
        doc.clickL3_1.style.top = "40vh"
        doc.clickL3_1.style.width = "15vw"
        doc.clickL3_1.style.height = "30vh"

        doc.clickL3_1.onclick = () => {

            room3 = ROOMS3.CODE

            renderRoom3()

        }

    }

    else if (room3 == ROOMS3.CODE) {

        doc.backBox3.style.display = "flex"

        doc.rLevel3.style.backgroundImage =
            "url('./img/codetor.png')"

        doc.codePanel3.style.display = "flex"

        type("Die Wahrheit liegt in einer anderen Zeit.")

    }

}

function travelTime() {

    future = !future

    blackScreen()

    setTimeout(() => {

        lightScreen()

        if (future) {

            type("Die Uhr schlägt Mitternacht.")

        } else {

            type("Du kehrst zurück.")

        }

        renderRoom3()

    }, 1000)

}

function backLevel3() {

    room3 = ROOMS3.HALL

    renderRoom3()

}

function checkCode3() {

    if (doc.codeInput3.value == "7429") {

        clearInterval(interval3)

        doc.codePanel3.style.display = "none"

        doc.backBox3.style.display = "none"
        type("Die Tür öffnet sich langsam...")
        new Audio('audio/open.mp3').play()

        setTimeout(() => {
            doc.rLevel3.style.backgroundImage =
                "url('./img/tor.jpg')"
            doc.endscreen3.style.display = "block"
            doc.tipBox.style.display = "none"
            bgmusic.pause()
            levelsBgSound.pause()
            new Audio('audio/win.mp3').play()

        }, 2000)

    } else {

        wrongCode3++

        type("Falscher Code.")
        new Audio('audio/error.mp3').play()

        if (wrongCode3 >= 3) {

            grafAttack3()

        }

    }

}

function grafAttack3() {

    clearInterval(grafInterval2)

    doc.rLevel3.style.backgroundImage = "url('img/graf.png')"
    doc.codePanel3.style.display = "none"
    doc.backBox3.style.display = "none"

    let scream = new Audio("./audio/graf.mp3")

    scream.volume = 1
    scream.loop = true
    scream.play()

    type("Der Graf hat dich gefunden.")

    setTimeout(blackScreen, 4800)

    setTimeout(() => {

        location.reload()

    }, 5000)

}


//Sounddesign
let bgmusicBool = true
function bgMusicPlay() {
    if (bgmusicBool) {
        bgmusic.play()
        bgmusicBool = false
        bgmusic.loop = true
    }
}

let wind
function windSound() {
    wind = new Audio('audio/wind.mp3').play()
}

function playSteps() {
    new Audio('audio/steps.mp3').play()
}