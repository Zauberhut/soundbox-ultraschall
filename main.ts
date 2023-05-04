input.onLogoEvent(TouchButtonEvent.Touched, function () {
    dfplayermini.press(dfplayermini.playType.Stop)
})
input.onButtonPressed(Button.A, function () {
    dfplayermini.press(dfplayermini.playType.PlayPrevious)
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.press(dfplayermini.playType.PlayNext)
})
informatiktheater.ultrasonic_init(informatiktheater.startbit_ultrasonicPort.port2)
dfplayermini.connect(SerialPin.P1, SerialPin.P2)
basic.forever(function () {
    if (informatiktheater.startbit_ultrasonic() < 15) {
        dfplayermini.playFile(randint(1, 14), dfplayermini.isRepeat.No)
    }
})
