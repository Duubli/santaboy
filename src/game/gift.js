game.module(
    'game.gift'
)
.body(function() {


    game.createClass('Gift', 'Sprite', {

        init: function (x, y) {

            this.used = false;
            this.prepared = false;
            this.zIndex = 3;

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

            this.rotation = Math.random();
        },

        update: function () {
            this.position.x = this.body.position.x;
            this.position.y = this.body.position.y;

            if (game.accelerometer && this.used === false) {
                var val = game.accelerometer.y;
                this.body.velocity.x = 150*val;

                if (val > 0) {
                    this.rotation = 0.05;
                } else if (val < 0) {
                    this.rotation = -0.05;
                } else {
                    this.rotation = 0;
                }
            }
        },

        moveRight: function () {
            if (this.used === false) {
                this.body.velocity.x = 300;
            }
        },

        moveLeft: function () {
            if (this.used === false) {
                this.body.velocity.x = -300;
            }
        },

        stop: function () {
            if (this.used === false) {
                this.body.velocity.x = 0;
                this.body.velocity.y = 0;
            }
        },

        prepare: function () {
            this.prepared = true;
            this.rotation = 0;
            this.zIndex = 1;
            this.body.position.x = game.scene.boy.position.x + 65;
            this.body.position.y = game.scene.boy.position.y - 48;

        },

        shoot: function () {
            this.used = true;
            this.prepared = false;
            this.body.position.x -= 100;
            this.body.velocity.x = -800;
            this.body.velocity.y = -20;

        }

    });

});
