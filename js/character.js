function characterPreload(game, spritesheetName, spritesheetPath, tileWidth, tileHeight) {
    game.load.spritesheet(spritesheetName, spritesheetPath, tileWidth, tileHeight);
}

function characterCreate(game, spritesheetName, x, y, speed, walkUpTiles, walkRightTiles, walkDownTiles, walkLeftTiles, animationFrameRate) {
    var character = game.add.sprite(x, y, spritesheetName);

    game.physics.arcade.enable(character);

    character.speed = speed;

    character.animations.add('walkUp', walkUpTiles);
    character.animations.add('walkRight',walkRightTiles);
    character.animations.add('walkDown', walkDownTiles);
    character.animations.add('walkLeft', walkLeftTiles);

    character.animationFrameRate = animationFrameRate;

    return character;
}

function characterUpdate(character,inputDirection) {
    var characterAnimation;
    character.body.velocity.setTo(0,0);

    switch(inputDirection) {
        case 'UP':
            character.body.velocity.y = -character.speed;
            characterAnimation = 'walkUp';
            break;
        case 'RIGHT':
            character.body.velocity.x = character.speed;
            characterAnimation = 'walkRight'
            break;
        case 'DOWN':
            character.body.velocity.y = character.speed;
            characterAnimation = 'walkDown';
            break;
        case 'LEFT':
            character.body.velocity.x = -character.speed;
            characterAnimation = 'walkLeft';
    }

    if (characterAnimation != null) {
        character.animations.play(characterAnimation, character.animationFrameRate, true);
    } else {
        character.animations.stop(null, true);
    }
}