game.module(
    'game.boy'
)
.body(function() {

    game.createClass('Boy', 'Sprite', {

        init: function(x, y) {

            this._super('boy.png', x, y, {
                anchor: {
                    x: 0.5,
                    y: 0.5
                }
            });

            this.body = new game.Body({
                position: { x: x, y: y },
            });

            this.body.addShape(new game.Rectangle(60, 60));

            game.scene.addObject(this);
            game.scene.world.addBody(this.body);
            game.scene.stage.addChild(this);

        },

        update: function () {
            this.position.x = this.body.position.x;
            this.position.y = this.body.position.y;
        },

        moveRight: function () {
            if (this.body.position.x > 700) {
                this.body.velocity.x = 100;
            } else {
                this.body.velocity.x = 300;
            }
        },

        moveLeft: function () {
            if (this.body.position.x > 700) {
                this.body.velocity.x = -100;
            } else {
                this.body.velocity.x = -300;
            }
        },

        stop: function () {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
        }


    });

});
