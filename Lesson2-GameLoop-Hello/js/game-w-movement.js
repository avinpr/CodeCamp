
var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 400;
var counter = 0;
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
var textX = 50;
var textY = 50;

canvasElement.appendTo('#gameContainer');


var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {
	if (textX < 400) {
		textX += 1;
 		textY += 1;
	}
	else {
		textX = 50;
		textY = 50;
	}
	
}
function draw() {
	counter++;
	canvas.fillStyle = "#000"; // Set color to black
	canvas.font = 'italic 40pt Calibri';
	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
 	canvas.fillText("I'm counting! " + counter , textX, textY);
}




