
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
	/*backgroundImage.onload = function() {
        backgroundContext.drawImage(backgroundImage, 0, 0,438,300);
      };
      backgroundImage.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
	*/
	gameContext.fillStyle = "#000"; // Set color to black
	gameContext.font = 'italic 16px Calibri';
	gameContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
 	gameContext.fillText("I'm counting! " + counter , textX, textY);
}




