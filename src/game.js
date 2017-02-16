
var Game = function () {},

proto = Game.prototype;

proto.create = function () {

    console.log('game state created');

    app.add.button(0, 0, 'button', function () {

        app.state.start('title');

    }, this, 0, 0, 1)

};

proto.update = function () {};
