(function(window) {
mc_horse3 = function() {
	this.initialize();
}
mc_horse3._SpriteSheet = new createjs.SpriteSheet({images: ["animation.png"], frames: [[2,2,127,84,0,62.85,45.9],[131,2,127,84,0,62.85,45.9],[260,2,127,84,0,62.85,45.9],[389,2,127,84,0,62.85,45.9],[518,2,127,84,0,62.85,45.9],[647,2,127,84,0,62.85,45.9],[776,2,127,84,0,62.85,45.9],[905,2,127,84,0,62.85,45.9],[1034,2,127,84,0,62.85,45.9],[1163,2,127,84,0,62.85,45.9]]});
var mc_horse3_p = mc_horse3.prototype = new createjs.Sprite();
mc_horse3_p.Sprite_initialize = mc_horse3_p.initialize;
mc_horse3_p.initialize = function() {
	this.Sprite_initialize(mc_horse3._SpriteSheet);
	this.paused = false;
}
window.mc_horse3 = mc_horse3;
}(window));

