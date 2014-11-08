game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects',
    'game.boy',
    'game.gift'
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

        // Move right
        if (key === 'RIGHT') {
            this.boy.moveRight();
            this.rekiFront.moveRight();
            this.rekiBack.moveRight();

            for (var i = 0; i < this.gifts.length; i++) {
                this.gifts[i].moveRight();
            }
        }

        // Move left
        if (key === 'LEFT') {
            this.boy.moveLeft();
            this.rekiFront.moveLeft();
            this.rekiBack.moveLeft();

            for (var i = 0; i < this.gifts.length; i++) {
                this.gifts[i].moveLeft();
            }
        }

        // Windup!
        if (key === 'SPACE') {
            this.boy.toggleWindup();

            for (var i = 0; i < this.gifts.length; i++) {
                if (this.gifts[i].used === false) {
                    this.gifts[i].prepare();
                    this.sort();
                    break;
                }
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

        if (key === 'SPACE') {

            if (this.boy.recovery) {
                return;
            }

            for (var i = 0; i < this.gifts.length; i++) {
                if (this.gifts[i].prepared === true) {
                    this.gifts[i].shoot();
                    this.boy.toggleWindup();
                    break;
                }
            }
        }
    },

    swipe: function (dir) {

        if (dir === 'right') {
            this.boy.toggleWindup();

            for (var i = 0; i < this.gifts.length; i++) {
                if (this.gifts[i].used === false) {
                    this.gifts[i].prepare();
                    this.sort();
                    break;
                }
            }
        }

        if (dir === 'left') {
            if (this.boy.recovery) {
                return;
            }

            for (var i = 0; i < this.gifts.length; i++) {
                if (this.gifts[i].prepared === true) {
                    this.gifts[i].shoot();
                    this.boy.toggleWindup();
                    break;
                }
            }
        }
        
    },

    depthCompare: function (a, b) {
        if (a.zIndex < b.zIndex) return -1;
        if (a.zIndex > b.zIndex) return 1;
        return 0;
    },

    sort: function() {
        //All sprites have been added to game.scene.stage.
        //In order to update the zIndex, you have to sort the following list
        game.scene.stage.children.sort(this.depthCompare);
    }


});

});
