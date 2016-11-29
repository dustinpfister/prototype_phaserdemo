window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(
            640, 480,
            Phaser.AUTO,
            'gamearea', {
            preload : preload,
            create : create,
            update : update
        });

    var logo,
    grow = true;

    function preload() {

        game.load.image('logo', 'phaser.png');

    }

    function create() {

        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.angle = 90;
        logo.width = 60;
        logo.height = 60;
        //logo.anchor.setTo(0.5, 0.5);

    }

    function update() {

        console.log('test');

        if (logo.width >= 300) {
            grow = false;
        }
        if (logo.width <= 50) {
            grow = true;
        }

        var delta = grow ? 5 : -5;

        logo.width += delta;
        logo.height += delta;
        logo.angle += delta;

    }

};
