var linkSpeed = 2;
var linkAnimationFrameRate = 45;

function linkPreload(game) {
	characterPreload(game, 'link', 'assets/sprites/LinkSpritesheet.png', 24, 32);
}

function linkCreate(game) {
	var link = characterCreate(game, 'link', game.world.centerX, game.world.centerY, linkSpeed,
        [0,1,2,3,4,5,6,7,8,9,10,11,48,49,50,51,52,53,54,55,56,57,58,59],
        [12,13,14,15,16,17,18,19,20,21,22,23,60,61,62,63,64,65,66,67,68,69,70,71],
        [24,25,26,27,28,29,30,31,32,33,34,35,72,73,74,75,76,77,78,79,80,81,82,83],
        [36,37,38,39,40,41,42,43,44,45,46,47,84,85,86,87,88,89,90,91,92,93,94,95],
        linkAnimationFrameRate);

    return link;
}

function linkUpdate(link,input) {
    var inputDirection;

    if(input.upKey.isDown && !input.downKey.isDown && !input.leftKey.isDown && !input.rightKey.isDown) {
        inputDirection = 'UP';
    } else if(!input.upKey.isDown && input.rightKey.isDown && !input.downKey.isDown && !input.leftKey.isDown) {
        inputDirection = 'RIGHT';
    } else if(!input.upKey.isDown && !input.rightKey.isDown && input.downKey.isDown && !input.leftKey.isDown) {
        inputDirection = 'DOWN';
    } else if(!input.upKey.isDown && !input.rightKey.isDown && !input.downKey.isDown && input.leftKey.isDown) {
        inputDirection = 'LEFT';
    }

    characterUpdate(link, inputDirection);
}