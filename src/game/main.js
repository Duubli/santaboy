game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects',
    'game.boy',
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
        this.rekiBack = new game.RekiBack(200, 600);

    },


    keydown: function (key) {

        if (key === 'RIGHT') {
            this.boy.moveRight();
            this.rekiFront.moveRight();
            this.rekiBack.moveRight();
        }

        if (key === 'LEFT') {
            this.boy.moveLeft();
            this.rekiFront.moveLeft();
            this.rekiBack.moveLeft();
        }

    },

    keyup: function (key) {
        if (key === 'RIGHT' || key === 'LEFT') {
            this.boy.stop();
            this.rekiFront.stop();
            this.rekiBack.stop();
        }
    }
});

});
