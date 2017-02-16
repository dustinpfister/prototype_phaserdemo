
var game = (function () {

    var background,
    logo;

    return new Phaser.Game(
        640, 480,
        Phaser.AUTO,
        'gamearea', {

        // preload
        preload : function () {

            game.load.image('logo', 'phaser.png');

        },

        // create
        create : function () {

            background = game.add.tileSprite(0, 0, 800, 600, 'background');

            logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
            logo.angle = 0;
            logo.width = game.width / 2;
            logo.height = game.height / 2;
            logo.x = game.width / 2 - logo.width / 2;
            logo.y = game.height / 2 - logo.height / 2;

            game.add.button(0, 0, 'a button', function () {

                background.visible = !background.visible;

            }, this, 2, 0, 1)

        },

        // update (ticks)
        update : function () {}

    });

    var pointer = new Phaser.Pointer(game, 0, 'TOUCH')

        console.log(pointer)

}
    ());

//console.log(game);
