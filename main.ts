input.onButtonPressed(Button.A, function () {
    led.setBrightness(2)
})
input.onSound(DetectedSound.Loud, function () {
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(255)
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        basic.showNumber(randint(1, 6))
        basic.showNumber(randint(1, 6))
        basic.showNumber(randint(1, 6))
    }
    basic.pause(500)
    basic.showNumber(randint(1, 6))
})
input.onSound(DetectedSound.Quiet, function () {
    led.enable(true)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 1; index++) {
        basic.showNumber(randint(1, 6))
        basic.showNumber(randint(1, 6))
    }
    basic.pause(500)
    basic.showNumber(randint(1, 6))
})
