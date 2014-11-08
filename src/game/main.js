game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects',
    'game.boy',
    'game.gift',
    'game.house'
)
.body(function() {

game.createScene('Main', {

    backgroundColor: 0xffffff,

    init: function() {

        this.world = new game.World(0, 0);

        // Create the road
        var x = 550, y = 610;
        for (var i = 0; i < 8; i++) {
            var road1 = new game.Road(x, y);
            x += 114;
            y -= 115;
        }



        //this.rekiBack = new game.RekiBack(200, 600);
        // this.boy = new game.Boy(200, 600);
        this.rekiFront = new game.RekiFront(200, 600);
        this.boy = new game.Boy(200, 600);

        this.gifts = [];
        for (var i  = 0; i < 8; i++) {
            var x = Math.floor(Math.random()*(220-145+1)+145);
            var y = Math.floor(Math.random()*(600-595+1)+595);
            this.gifts.push(new game.Gift(x,y));
        }

        this.rekiBack = new game.RekiBack(200, 600);

    },


    keydown: function (key) {

        if (key === 'RIGHT') {
            this.boy.moveRight();
            this.rekiFront.moveRight();
            this.rekiBack.moveRight();

            for (var i = 0; i < this.gifts.length; i++) {
                this.gifts[i].moveRight();
            }
        }

        if (key === 'LEFT') {
            this.boy.moveLeft();
            this.rekiFront.moveLeft();
            this.rekiBack.moveLeft();

            for (var i = 0; i < this.gifts.length; i++) {
                this.gifts[i].moveLeft();
            }
        }

    },

    keyup: function (key) {
        if (key === 'RIGHT' || key === 'LEFT') {
            this.boy.stop();
            this.rekiFront.stop();
            this.rekiBack.stop();

            for (var i = 0; i < this.gifts.length; i++) {
                this.gifts[i].stop();
            }

        }
    }
});

});
