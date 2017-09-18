window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var input;

    var link;

    var wights = [];

    function preload () {
        game.load.image('snowTile', 'assets/sprites/SnowTile.png');

        linkPreload(game);

        wightPreload(game);
    }

    function create () {
        input = inputCreate(game);

        snowTile = game.add.tileSprite(0,0,800,600,'snowTile');

        game.physics.startSystem(Phaser.Physics.ARCADE);

        link = linkCreate(game);
    }

    function update() {
        linkUpdate(link,input);

        if(wights.length < 50) {
            wights.push(wightCreate(game, Math.random() * 800, -32));
        }

        for (i = 0; i < wights.length; i++) { 
            var wight = wights[i];
            if (!wight.exists) {
                wights[i] = wightCreate(game, Math.random() * 800, 32);
            }
            wightUpdate(wight);
        }
    }

};