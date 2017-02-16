
var Game = function () {},

proto = Game.prototype;

proto.create = function () {

    console.log('game state created');

    app.input.addPointer()

    app.add.button(0, 0, 'button', function () {

        app.state.start('title');

    }, this, 0, 0, 1)

};

proto.render = function () {

    app.debug.pointer(app.input.mousePointer);
    app.debug.pointer(app.input.pointer1);

};

proto.update = function () {};
