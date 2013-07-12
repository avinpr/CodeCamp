



var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 400;
var counter = 0;
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
var textX = 50;
var textY = 50;

canvasElement.appendTo('#gameContainer');

var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

var FPS = 30;
setInterval(function() {
  update_faster_w_clamp();
  draw();
}, 1000/FPS);

function update() {
	if (keydown.left) {
		player.x -= 2;
	}

	if (keydown.right) {
		player.x += 2;
	}
}

function update_faster_w_clamp() {
  if (keydown.left) {
    player.x -= 5;
  }

  if (keydown.right) {
    player.x += 5;
  }

  player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);
}

function draw() {
	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  	player.draw();
}




