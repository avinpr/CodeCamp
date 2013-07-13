
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var counter = 0;
var gameCanvas = document.getElementById("gameElements");
var gameContext = gameCanvas.getContext("2d");

gameContext.font = 'italic 20pt Calibri';

gameContext.fillText("Hi there" , 20, 20);

gameContext.beginPath();
gameContext.moveTo(100, 150);
gameContext.lineTo(450, 50);
gameContext.stroke();

gameContext.beginPath();
gameContext.rect(188, 50, 200, 100);
gameContext.fillStyle = 'yellow';
gameContext.fill();
gameContext.lineWidth = 7;
gameContext.strokeStyle = 'black';
gameContext.stroke();


