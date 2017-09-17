//Other ways of doing this:
//https://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor

function inputCreate(game) {
	var input = {};
	input['upKey'] = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    input['downKey'] = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    input['leftKey'] = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    input['rightKey'] = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    return input;
}