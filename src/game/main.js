game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects'
)
.body(function() {

game.createScene('Main', {
    init: function() {

        this.world = new game.World(0, 0);

        var boy = new game.Boy(200, 200);
        var background = new game.Background();


        // var back = new game.Sprite('back.png');
        // this.stage.addChild(back);


    }
});

});
