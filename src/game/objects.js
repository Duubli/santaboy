game.module(
    'game.objects'
)
.body(function() {

    game.createClass('Boy', 'Sprite', {

        init: function(x, y) {

            this._super('juhani.jpg', x, y, {
                anchor: {
                    x: 0.5,
                    y: 0.5
                }
            });

            this.body = new game.Body({
                position: { x: 0, y: 0 },
            });

            this.body.addShape(new game.Rectangle(60, 60));

            // add sprite to scene
            game.scene.addObject(this);

            // add body of this sprite to the world object
            game.scene.world.addBody(this.body);

            // add sprite to display container
            game.scene.stage.addChild(this);

        }
    });

    game.createClass('Background', 'Sprite', {

        init: function () {

            this._super('back.png', 0, 0);
            game.scene.stage.addChild(this);

        }

    });

});
