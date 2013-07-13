
var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 400;
var counter = 0;
var backgroundCanvas = document.getElementById("gameBackground");
var gameCanvas = document.getElementById("gameElements");
var backgroundContext = backgroundCanvas.getContext("2d");
var gameContext = gameCanvas.getContext("2d");
var textX = 50;
var textY = 50;

var backgroundImage = new Image();

var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    gameContext.fillStyle = this.color;
    gameContext.fillRect(this.x, this.y, this.width, this.height);
  }
};

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {
	
	
}
function draw() {

	gameContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundImage.onload = function() {
    backgroundContext.drawImage(backgroundImage, 0, 0,640,480);
  };
  backgroundImage.src = 'images/gamebackground.jpg';

  player.draw();
}




