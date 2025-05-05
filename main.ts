namespace SpriteKind {
    export const Win = SpriteKind.create()
    export const Non_useable = SpriteKind.create()
    export const Melee = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bullet_Direction_TL == false) {
        Axe = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 . . 1 1 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 1 . . 
            . . . . . 1 1 . . . 1 1 1 1 1 . 
            . . . . . 1 1 . . . . 1 1 1 1 . 
            . . . . . . . . . . . 1 1 1 1 . 
            . . . . . . . . . . . 1 1 . 1 . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . . 1 1 . . . . 
            . . . . . . . . 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 . . . . . . . . . 
            `, mySprite, 0, 0)
        Axe.x = mySprite.x + 10
        animation.runImageAnimation(
        Axe,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 1 . . . . 
            . . . . . 1 1 1 . . 1 1 1 . . . 
            . . . . . 1 . . 1 1 1 1 1 1 . . 
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . . . 1 1 . 1 1 . 
            . . . . . . . . . . . 1 . . 1 . 
            . . . . . . . . . . . 1 . . 1 . 
            . . . . . . . . . . . 1 . . 1 . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . 1 1 1 1 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 1 . . 
            . . . . . . . . . 1 1 1 1 1 . . 
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . . 1 1 1 1 1 1 . 
            . 1 . . . . . . 1 1 . . 1 1 . . 
            . 1 1 . . . . 1 1 . . . 1 1 . . 
            . . 1 1 1 1 1 1 . . . 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 . . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . 1 1 1 1 . . 
            . 1 . . . . . . . . 1 1 1 1 . . 
            . 1 . . . . . . . . 1 1 1 1 . . 
            . 1 . . . . . . . 1 1 1 1 1 . . 
            . 1 1 . . . . . 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 1 1 . . . . . . . . . . . . 
            . 1 1 . . . . . . . . 1 . . . . 
            1 1 1 . . . . . . . 1 1 . . . . 
            1 1 1 . . . . . . 1 1 1 . . . . 
            1 1 1 . . . . 1 1 1 1 . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 . . . . . 
            1 1 1 1 1 1 1 1 1 1 . . . . . . 
            . 1 1 1 1 1 1 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        pause(200)
        sprites.destroy(Axe)
    } else {
        Axe = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 . . 1 1 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 1 . . 
            . . . . . 1 1 . . . 1 1 1 1 1 . 
            . . . . . 1 1 . . . . 1 1 1 1 . 
            . . . . . . . . . . . 1 1 1 1 . 
            . . . . . . . . . . . 1 1 . 1 . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . . 1 1 . . . . 
            . . . . . . . . 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 . . . . . . . . . 
            `, mySprite, 0, 0)
        Axe.x = mySprite.x + -10
        animation.runImageAnimation(
        Axe,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 . . . . . . . . . 
            . . . 1 1 1 . . 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 . . 1 . . . . . 
            . 1 1 1 1 1 . . . . . . . . . . 
            . 1 1 . 1 1 . . . . . . . . . . 
            . 1 . . 1 . . . . . . . . . . . 
            . 1 . . 1 . . . . . . . . . . . 
            . 1 . . 1 . . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . 1 1 1 1 1 1 . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . 1 1 1 1 1 1 1 1 . . . . . . 
            . . 1 1 1 1 1 . . . . . . . . . 
            . 1 1 1 1 1 . . . . . . . . . . 
            . 1 1 1 1 1 . . . . . . . . . . 
            . 1 1 1 1 1 . . . . . . . . . . 
            . 1 1 1 1 1 . . . . . . . . . . 
            . 1 1 1 1 1 1 . . . . . . . . . 
            . . 1 1 . . 1 1 . . . . . . 1 . 
            . . 1 1 . . . 1 1 . . . . 1 1 . 
            . . . 1 1 . . . 1 1 1 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . 1 1 1 1 . . . . . . . . . . 
            . . 1 1 1 1 . . . . . . . . 1 . 
            . . 1 1 1 1 . . . . . . . . 1 . 
            . . 1 1 1 1 1 . . . . . . . 1 . 
            . . . 1 1 1 1 1 . . . . . 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . 1 . . . . . . . . 1 1 . 
            . . . . 1 1 . . . . . . . 1 1 1 
            . . . . 1 1 1 . . . . . . 1 1 1 
            . . . . . 1 1 1 1 . . . . 1 1 1 
            . . . . . 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . . 1 1 1 1 1 1 1 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        pause(200)
        sprites.destroy(Axe)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bullet_Direction_TL == false) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -150, 0)
    }
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet_Direction_TL = true
    if (!(CharPause)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Bearacuda Walk Anim`,
        200,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (!(CharPause)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Bearacuda Walk Anim0`,
        200,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (!(CharPause)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Bearacuda Walk Anim`,
        200,
        false
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet_Direction_TL = false
    if (!(CharPause)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Bearacuda Walk Anim0`,
        200,
        true
        )
    }
})
let projectile: Sprite = null
let Bullet_Direction_TL = false
let CharPause = false
let Axe: Sprite = null
let mySprite: Sprite = null
let Current_Level = 1
tiles.setCurrentTilemap(tilemap`City Houses`)
mySprite = sprites.create(assets.image`Bearacuda Walk 3`, SpriteKind.Player)
let Win_Stage_1 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Win)
let Win_Stage_2 = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Win)
let Win_Stage_3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .........888........
    .........888........
    ......888888888.....
    ........fffff.......
    .......9999999......
    .......9999999......
    .......9999999......
    .......9999999......
    .......9999999......
    .......9999999......
    ......888888888.....
    ......fffffffff.....
    ....................
    ....................
    `, SpriteKind.Player)
let Win_Game = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c . . . 
    c 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
    c d d d d d d d d d d d d c . . 
    c d c c c c c c c c c c d c . . 
    c d b d b b b b b b b b d c . . 
    c d b b b b b b b b b b d c . . 
    c d b b b b b b b b b b d c . . 
    c d b b b b b b b b b b d c . . 
    c 1 b b b b b b b b b b 1 c . . 
    c 1 1 d 1 1 d 1 1 d 1 1 1 c . . 
    c 1 d d d d d d d d d d 1 c . . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 c . . 
    c b b b b b b b b b b b b c . . 
    c c c c c c c c c c c c c c . . 
    `, SpriteKind.Win)
let Puhtooey = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . 2 1 1 1 1 2 . . . . . 
    . . . . . 2 1 1 1 1 2 . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Speaker = sprites.create(assets.image`myImage`, SpriteKind.Non_useable)
let Sound = sprites.create(assets.image`myImage`, SpriteKind.Non_useable)
Axe = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 . . 1 1 1 . . . 
    . . . . . . 1 1 1 1 1 1 1 1 . . 
    . . . . . 1 1 . . . 1 1 1 1 1 . 
    . . . . . 1 1 . . . . 1 1 1 1 . 
    . . . . . . . . . . . 1 1 1 1 . 
    . . . . . . . . . . . 1 1 . 1 . 
    . . . . . . . . . . . 1 1 . . . 
    . . . . . . . . . . . 1 1 . . . 
    . . . . . . . . . . . 1 1 . . . 
    . . . . . . . . . . 1 1 1 . . . 
    . . . . . . . . . . 1 1 . . . . 
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 . . . . . . . . . 
    `, SpriteKind.Melee)
CharPause = false
let Music_Playing = false
scene.cameraFollowSprite(mySprite)
info.setLife(3)
if (!(CharPause)) {
    controller.moveSprite(mySprite, 100, 100)
}
mySprite.setPosition(35, 195)
Win_Stage_1.setPosition(245, 185)
Win_Stage_2.setPosition(-20, 0)
Win_Stage_3.setPosition(-20, 0)
Win_Game.setPosition(-20, 0)
Puhtooey.setPosition(-20, 0)
Speaker.setPosition(-20, 0)
Sound.setPosition(-20, 0)
Axe.setPosition(-20, 0)
forever(function () {
    if (mySprite.overlapsWith(Win_Stage_1)) {
        Current_Level = 2
        tiles.setCurrentTilemap(tilemap`Nighttime 1`)
        mySprite.setPosition(200, 17)
        Win_Stage_1.setPosition(-20, 0)
        Win_Stage_2.setPosition(245, 215)
        music.stopAllSounds()
        Music_Playing = false
    }
    if (mySprite.overlapsWith(Win_Stage_2)) {
        Current_Level = 3
        tiles.setCurrentTilemap(tilemap`Walkway`)
        mySprite.setPosition(15, 155)
        Win_Stage_2.setPosition(-20, 0)
        Win_Stage_3.setPosition(400, 155)
        music.stopAllSounds()
        Music_Playing = false
    }
    if (mySprite.overlapsWith(Win_Stage_3)) {
        game.splash("Almost over...")
        Current_Level = 4
        tiles.setCurrentTilemap(tilemap`Boss Room`)
        mySprite.setPosition(15, 130)
        Win_Stage_3.setPosition(-20, 0)
        Speaker.setPosition(900, 130)
        music.stopAllSounds()
        Music_Playing = false
    }
    if (mySprite.overlapsWith(Speaker)) {
        mySprite.setPosition(890, 130)
        animation.runImageAnimation(
        Sound,
        assets.animation`myAnim0`,
        200,
        true
        )
        game.showLongText("Welcome, Subject T1J1.", DialogLayout.Bottom)
        game.showLongText("I was wondering if you would show", DialogLayout.Bottom)
        game.showLongText("But here you are", DialogLayout.Bottom)
        game.showLongText("You've really let yourself go by the way >:P", DialogLayout.Bottom)
        game.showLongText("Anyways, Sheppard will make sure you do not leave", DialogLayout.Bottom)
        game.showLongText("And I will have my source of unlimited energy...", DialogLayout.Bottom)
        game.splash("Y O U")
        music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
        animation.stopAnimation(animation.AnimationTypes.All, Sound)
        Speaker.setPosition(-20, 0)
        Sound.setPosition(-20, 0)
    }
    if (Music_Playing == false) {
        if (Current_Level == 1 == true) {
            music.play(music.createSong(assets.song`Main Area Long`), music.PlaybackMode.LoopingInBackground)
            Music_Playing = true
        } else if (Current_Level == 2) {
            music.play(music.createSong(assets.song`Level 2 Song`), music.PlaybackMode.LoopingInBackground)
            Music_Playing = true
        } else if (Current_Level == 3) {
            music.play(music.createSong(assets.song`Heartbeat`), music.PlaybackMode.LoopingInBackground)
            Music_Playing = true
        } else {
            music.play(music.createSong(assets.song`Maz-Tec Lab0`), music.PlaybackMode.LoopingInBackground)
            Music_Playing = true
        }
    }
})
