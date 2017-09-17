window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var input;

    var link;

    function preload () {
        linkPreload(game);

        game.load.image('snowTile', 'assets/sprites/SnowTile.png');
    }

    function create () {
        input = inputCreate(game);

        snowTile = game.add.tileSprite(0,0,800,600,'snowTile');

        link = linkCreate(game);
    }

    function update() {
        linkUpdate(link,input);
    }

};