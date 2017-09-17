function linkPreload(game) {
	game.load.spritesheet('link', 'assets/sprites/LinkSpritesheet.png',24,32);
}

function linkCreate(game) {
	var link = game.add.sprite(game.world.centerX, game.world.centerY, 'link');

    link.animations.add('walkUp',[0,1,2,3,4,5,6,7,8,9,10,11,48,49,50,51,52,53,54,55,56,57,58,59]);
    link.animations.add('walkRight',[12,13,14,15,16,17,18,19,20,21,22,23,60,61,62,63,64,65,66,67,68,69,70,71]);
    link.animations.add('walkDown',[24,25,26,27,28,29,30,31,32,33,34,35,72,73,74,75,76,77,78,79,80,81,82,83]);
    link.animations.add('walkLeft',[36,37,38,39,40,41,42,43,44,45,46,47,84,85,86,87,88,89,90,91,92,93,94,95]);

    return link;
}

function linkUpdate(link,input) {
	var linkAnimation;
    if(input.upKey.isDown && !input.downKey.isDown && !input.leftKey.isDown && !input.rightKey.isDown) {
        linkAnimation = 'walkUp';
    } else if(!input.upKey.isDown && input.rightKey.isDown && !input.downKey.isDown && !input.leftKey.isDown) {
        linkAnimation = 'walkRight';
    } else if(!input.upKey.isDown && !input.rightKey.isDown && input.downKey.isDown && !input.leftKey.isDown) {
        linkAnimation = 'walkDown';
    } else if(!input.upKey.isDown && !input.rightKey.isDown && !input.downKey.isDown && input.leftKey.isDown) {
        linkAnimation = 'walkLeft';
    }

    if(linkAnimation != null) {
        link.animations.play(linkAnimation,45,true);
    } else {
        link.animations.stop(null,true);
    }
}