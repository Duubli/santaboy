game.module(
    'game.objects'
)
.body(function() {

    game.createClass('Road', 'Sprite', {

        init: function (x, y) {

            this.startX = x;
            this.startY = y;

            this._super('road', x, y);

            this.body = new game.Body({
                position: { x: x, y: y }
            });

            this.body.addShape(new game.Rectangle(633, 115));

            game.scene.addObject(this);
            game.scene.world.addBody(this.body);
            game.scene.stage.addChild(this);

            this.body.velocity.y = 100;
            this.body.velocity.x = -100;



        },

        update: function () {
            this.position.x = this.body.position.x;
            this.position.y = this.body.position.y;

            if (this.position.y > this.startY + 115) {
                this.position.y = this.startY;
                this.position.x = this.startX;
                this.body.position.y = this.startY;
                this.body.position.x = this.startX;
            }


        }

    });

});
