game.module(
    'game.boy'
)
.body(function() {

    game.createClass('RekiBack', 'Sprite', {

        init: function (x, y) {

            this.zIndex = 4;

            this._super('reki-back', x, y, {
                anchor: { x: 0.5, y: 0.5 }
            });

            this.body = new game.Body({
                position: { x: x, y: y },
                velocityLimit: { x: 300, y: 0 }
            });
            this.body.addShape(new game.Rectangle(160, 166));

            game.scene.addObject(this);
            game.scene.world.addBody(this.body);
            game.scene.stage.addChild(this);
        },

        update: function () {
            this.position.x = this.body.position.x;
            this.position.y = this.body.position.y;


            if (game.accelerometer) {
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


    game.createClass('RekiFront', 'Sprite', {

        init: function (x, y) {

            this.zIndex = 2;

            this._super('reki-front', x, y, {
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


            if (game.accelerometer) {
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



    game.createClass('Boy', 'Sprite', {

        init: function(x, y) {

            this.zIndex = 3;
            this.windup = false;
            this.ready = true;

            this._super('santaboy-idle', x, y, {
                anchor: {
                    x: 0.5,
                    y: 0.5
                }
            });

            this.body = new game.Body({
                position: { x: x, y: y },
            });

            this.body.addShape(new game.Rectangle(40, 41));

            game.scene.addObject(this);
            game.scene.world.addBody(this.body);
            game.scene.stage.addChild(this);

        },

        update: function () {
            this.position.x = this.body.position.x;
            this.position.y = this.body.position.y;


            if (game.accelerometer) {
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
        },

        toggleWindup: function () {

            var self = this;

            if (this.recovery) {
                return;
            }

            if (this.windup === false) {

                this.setTexture('santaboy-windup');
                this.windup = true;

            } else {

                this.setTexture('santaboy-release');
                this.recovery = true;

                setTimeout(function() {
                    self.setTexture('santaboy-idle');
                    self.windup = false;
                    self.recovery = false;
                }, 250);
            }

        }


    });

});
