var app = (function () {

    var background,
    logo;

    return new Phaser.Game(

        640, 480,
        Phaser.AUTO,
        'gamearea', {

        // preload
        preload : function () {

            app.load.image('logo', 'assets/phaser.png');
            app.load.image('background', 'assets/moon.jpg');
            app.load.spritesheet('button', 'assets/button.png', 160, 45);

        },

        // create
        create : function () {

            // add states
            app.state.add('title', Title);
            app.state.add('game', Game);

            // start title
            app.state.start('title');

        },

        // update (ticks)
        update : function () {}

    });

    /*
    var pointer = new Phaser.Pointer(app, 0, 'TOUCH')
     */

}
    ());
