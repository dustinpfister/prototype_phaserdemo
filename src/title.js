
var Title = function () {},

proto = Title.prototype;

proto.create = function () {

    console.log('title state created');

    background = game.add.tileSprite(0, 0, 640, 480, 'background');

    logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.angle = 0;
    logo.width = game.width / 2;
    logo.height = game.height / 2;
    logo.x = game.width / 2 - logo.width / 2;
    logo.y = game.world.centerY - 200;

    game.add.button(game.world.centerX - 80, game.world.centerY + 30, 'button', function () {

        console.log('yeah man I was clicked what up?');

    }, this, 0, 0, 1)

};

proto.update = function () {};
