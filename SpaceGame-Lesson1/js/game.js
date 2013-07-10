
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var counter = 0;
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvas.font = 'italic 40pt Calibri';

canvasElement.appendTo('#gameContainer');


var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() { 
	 
}
function draw() {
	counter++;
	canvas.fillStyle = "#000"; // Set color to black
	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
 	canvas.fillText("I'm counting! " + counter , 50, 50);
}