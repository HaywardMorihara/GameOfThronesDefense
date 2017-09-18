window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var input;

    var link;

    var wights;

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

        wights = game.add.group();
    }

    function update() {
        linkUpdate(link,input);

        if(wights.length < 800) {
            wights.add(wightCreate(game, Math.random() * 800, -32));
        }

        //there is a forEachAlive that may come in handy...what does "alive" mean?
        wights.forEach(function(wight) { 
            wightUpdate(wight);
        });

        //Can we get nicer bounding boxes?
        game.physics.arcade.collide(link,wights);
        game.physics.arcade.collide(wights);
    }

};