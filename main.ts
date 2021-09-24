input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.NorthWest)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("B F C5 D G B C A ", 500)
    music.playMelody("A F G D G E B C5 ", 500)
    music.playMelody("C5 B A G F E D C ", 500)
    music.playMelody("E F G A G C5 B A ", 250 + 250)
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
