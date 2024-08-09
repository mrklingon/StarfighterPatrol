function showNum(val: number) {
    vals = convertToText(val)
    for (let index = 0; index <= vals.length - 1; index++) {
        light.setAll(0x000000)
        valn = parseFloat(vals.charAt(index))
        if (0 == valn) {
            light.setAll(0x00ff00)
        } else {
            for (let index2 = 0; index2 <= valn; index2++) {
                light.setPixelColor(index2 - 1, 0x0000ff)
            }
        }
        pause(500)
    }
}
function showBigSky() {
    for (let index = 0; index <= 19; index++) {
        strip.setPixelColor(10 + index, stars[cosmos[index]])
    }
    for (let index2 = 0; index2 <= 9; index2++) {
        strip.setPixelColor(index2, stars[cosmos[89 + index2]])
    }
    if (dir == 1) {
        strip.setPixelColor(14, 0x00ff00)
    } else {
        strip.setPixelColor(15, 0x00ff00)
    }
}
function showSky() {
    for (let index3 = 0; index3 <= 9; index3++) {
        light.setPixelColor(index3, stars[cosmos[index3]])
    }
    if (dir == 1) {
        light.setPixelColor(4, 0x00ff00)
        if (3 == cosmos[4]) {
            music.baDing.play()
            acount += -1
            lives += -1
            cosmos[4] = 0
        }
    } else {
        light.setPixelColor(5, 0x00ff00)
        if (3 == cosmos[5]) {
            music.baDing.play()
            acount += -1
            lives += -1
            cosmos[5] = 0
        }
    }
}
function mkStars(stars: number) {
    acount = 0
    cosmos = []
    for (let i = 0; i < stars; i++) {
        if (4 > Math.randomRange(0, 10)) {
            cosmos.push(Math.randomRange(1, 3))
        } else {
            cosmos.push(0)
        }
        for (let value of cosmos) {
            if (value == 3) {
                acount += 1
            }
        }
    }
}
function restart() {
    score = 0
    lives = 5
    nothing = light.rgb(0, 0, 0)
    Asteroid = light.rgb(72, 0, 72)
    bstar = light.rgb(0, 0, 25)
    wstar = light.rgb(25, 25, 25)
    stars = [nothing, bstar, wstar, Asteroid]
    dir = 1
    ffire = [5, 6, 7]
    rfire = [4, 3, 2]
    mkStars(100)
}
function hyperspace() {
    light.showAnimation(light.sparkleAnimation, 500)
    strip.showAnimation(light.sparkleAnimation, 500)
    nothing = light.rgb(0, 0, 0)
    Asteroid = light.rgb(72, 0, 72)
    bstar = light.rgb(0, 0, 25)
    wstar = light.rgb(25, 25, 25)
    stars = [nothing, bstar, wstar, Asteroid]
    dir = 1
    ffire = [5, 6, 7]
    rfire = [4, 3, 2]
    mkStars(100)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.pewPew.play()
    if (dir == 1) {
        for (let value of ffire) {
            light.setPixelColor(value, 0xffff00)
            strip.setPixelColor(10 + value, 0xffff00)
            if (3 == cosmos[value]) {
                acount += -1
                music.playTone(175, music.beat(BeatFraction.Half))
                cosmos[value] = 0
                score += 1
            }
            pause(50)
        }
        for (let value2 of ffire) {
            light.setPixelColor(value2, 0x000000)
            strip.setPixelColor(10 + value2, 0x000000)
            pause(50)
        }
    } else {
        for (let value3 of rfire) {
            light.setPixelColor(value3, 0xffff00)
            strip.setPixelColor(10 + value3, 0xffff00)
            if (3 == cosmos[value3]) {
                acount += -1
                music.playTone(175, music.beat(BeatFraction.Half))
                cosmos[value3] = 0
                score += 1
            }
            pause(50)
        }
        for (let value4 of rfire) {
            light.setPixelColor(value4, 0x000000)
            strip.setPixelColor(10 + value4, 0x000000)
            pause(50)
        }
    }
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    music.setVolume(0)
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    music.setVolume(140)
})
input.touchA4.onEvent(ButtonEvent.Click, function () {
    hyperspace()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    dir = dir * -1
})
input.touchA3.onEvent(ButtonEvent.Click, function () {
    restart()
})
input.touchA7.onEvent(ButtonEvent.Click, function () {
    wait = true
    while (wait) {
        showNum(oldscore)
        pause(1000)
        if (input.buttonA.isPressed()) {
            wait = false
        }
    }
})
let waiter = 0
let mv = 0
let oldscore = 0
let wait = false
let cosmos: number[] = []
let valn = 0
let vals = ""
let acount = 0
let rfire: number[] = []
let ffire: number[] = []
let dir = 0
let stars: number[] = []
let wstar = 0
let bstar = 0
let Asteroid = 0
let nothing = 0
let lives = 0
let score = 0
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
score = 0
lives = 5
nothing = light.rgb(0, 0, 0)
Asteroid = light.rgb(72, 0, 72)
bstar = light.rgb(0, 0, 25)
wstar = light.rgb(25, 25, 25)
stars = [nothing, bstar, wstar, Asteroid]
dir = 1
ffire = [5, 6, 7]
rfire = [4, 3, 2]
acount = 0
mkStars(100)
forever(function () {
    if (acount <= 0) {
        hyperspace()
    }
    if (false == wait && lives > 0) {
        showSky()
        showBigSky()
        if (dir == 1) {
            mv = cosmos.shift()
            cosmos.push(mv)
        } else {
            mv = cosmos.pop()
            cosmos.insertAt(0, mv)
        }
        pause(200)
    } else {
        wait = true
        waiter = 0
        while (wait) {
            showNum(score)
            pause(1000)
            if (input.buttonA.isPressed()) {
                wait = false
            }
            waiter += 1
            if (5 < waiter) {
                wait = false
            }
        }
        oldscore = score
        restart()
    }
})
