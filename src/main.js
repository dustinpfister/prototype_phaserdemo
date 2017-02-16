var game = (function () {

    var background,
    logo;

    return new Phaser.Game(

        640, 480,
        Phaser.AUTO,
        'gamearea', {

        // preload
        preload : function () {

            game.load.image('logo', 'assets/phaser.png');
            game.load.image('background', 'assets/moon.jpg');
            game.load.spritesheet('button', 'assets/button.png', 160, 45);

        },

        // create
        create : function () {

            game.state.add('title', Title);
            game.state.start('title');

        },

        // update (ticks)
        update : function () {}

    });

    /*
    var pointer = new Phaser.Pointer(game, 0, 'TOUCH')
     */

}
    ());
