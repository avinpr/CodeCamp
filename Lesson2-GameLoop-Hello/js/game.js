
var CANVAS_WIDTH = 640;
var CANVAS_HEIGHT = 480;
var counter = 0;
var gameCanvas = document.getElementById("gameElements");
var gameContext = gameCanvas.getContext("2d");
var textX = 50;
var textY = 50;

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() { 
	 
}
function draw() {
	counter++;
	gameContext.fillStyle = "#000"; // Set color to black
	gameContext.font = 'italic 20pt Calibri';
	gameContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
 	gameContext.fillText("I'm counting! " + counter , textX, textY);
}



