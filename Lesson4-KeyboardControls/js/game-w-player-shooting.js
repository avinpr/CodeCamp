



var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 400;
var counter = 0;
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
var textX = 50;
var textY = 50;
var imageObj = new Image();

canvasElement.appendTo('#gameContainer');

var player = {
  shotcounter:0,
  color: "#00A",
  x: 220,
  y: 470,
  width: 32,
  height: 32,
  shoot:function() {
    this.shotcounter++;
    console.log("Pew pew : " + this.shotcounter);
    // :) Well at least adding the key binding was easy...
  },
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

// could have done it this way too
/*
player.shoot = function() {
  console.log("Pew pew");
  // :) Well at least adding the key binding was easy...
};
*/

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {
  if (keydown.space) {
    player.shoot();
  }

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

  imageObj.onload = function() {
        canvas.drawImage(imageObj, 69, 50);
      };
      imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
  	player.draw();
}




