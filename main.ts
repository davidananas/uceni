input.onButtonPressed(Button.A, function () {
    tecka.move(-1)
})
input.onButtonPressed(Button.B, function () {
    tecka.move(1)
})
let tecka: game.LedSprite = null
tecka = game.createSprite(2, 4)
