let doc = {
    level1: document.getElementById('level1'),
    rLevel1: document.getElementById('rLevel1'),
    click1: document.getElementById('click1'),
    click2: document.getElementById('click2'),
    backBox: document.getElementById('backBox'),
    hebel: document.getElementById('hebel'),
    script1: document.getElementById('script1')
}

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
            /*const typed = new Typed('#info', {
                strings: [`<i></i>`],
                typeSpeed: 50,
            });*/
            lightScreen()
            document.getElementById('levels').style.display = "none"
            document.getElementById('level1').style.display = "block"
            doc.script1.innerHTML = "<script>var typed=new Typed('#info1',{strings:[`<i>Du erwachst in einem kalten, schwach beleuchteten Raum, ohne zu wissen, wie du hierhergekommen bist. Die Luft ist schwer, und aus den dunklen Ecken scheinen dich unsichtbare Augen zu beobachten. Dieses erste Level dient dazu, dich mit den Mechaniken des Schlosses vertraut zu machen – doch unterschätze es nicht. Einfache Rätsel, versteckte Hinweise und erste Begegnungen mit seltsamen Gestalten fordern deinen Verstand heraus. Die Schritte des Grafen sind hier noch fern, doch manchmal glaubst du, ein leises Flüstern oder ein entferntes Knarren hinter dir zu hören. Mit mehreren Hinweisen und häufigen Checkpoints hast du noch eine gewisse Sicherheit – aber das Gefühl, nicht allein zu sein, begleitet dich von Anfang an.</i>.`],typeSpeed:50});</script>"
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

function goIn1() {
    blackScreen()
    setTimeout(() => {
        lightScreen()
        doc.level1.style.display = "none"
        doc.rLevel1.style.display = "block"
        doc.rLevel1.style.backgroundImage = "url('./img/halle.jpg')"
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
        doc.hebel.style.display = "none"
        doc.rLevel1.style.backgroundImage = "url('./img/1.1.png')"
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
            doc.rLevel1.style.backgroundImage = "url('./img/türO.png')"
        }
    }
    counter2++
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