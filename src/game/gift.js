game.module(
    'game.gift'
)
.body(function() {


    game.createClass('Gift', 'Sprite', {

        init: function (x, y) {

            var items = [
                    'gift-blue',
                    'gift-red',
                    'gift-green'
                ],
            image = items[Math.floor(Math.random()*items.length)];

            this._super(image, x, y, {
                anchor: { x: 0.5, y: 0.5 }
            });

            this.body = new game.Body({
                position: { x: x, y: y }
            });
            this.body.addShape(new game.Rectangle(160, 166));

            game.scene.addObject(this);
            game.scene.world.addBody(this.body);
            game.scene.stage.addChild(this);
        },

        update: function () {
            this.position.x = this.body.position.x;
            this.position.y = this.body.position.y;
        },

        moveRight: function () {
            this.body.velocity.x = 300;
            this.rotation = 0.05;
        },

        moveLeft: function () {
            this.body.velocity.x = -300;
            this.rotation = -0.05;
        },

        stop: function () {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.rotation = 0;
        }

    });

});
