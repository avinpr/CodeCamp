
var CANVAS_WIDTH = 640;
var CANVAS_HEIGHT = 480;
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
  x: 320,
  y: 350,
  width: 32,
  height: 32,
  draw: function() {
    gameContext.fillStyle = this.color;
    gameContext.fillRect(this.x, this.y, this.width, this.height);
  }
};

var enemy = new Enemy();

var FPS = 30;
setInterval(function() {
  update_faster_w_clamp();
  draw();
}, 1000/FPS);

function update_faster_w_clamp() {
  if (keydown.left) {
    player.x -= 5;
  }

  if (keydown.right) {
    player.x += 5;
  }

  player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);
  enemy.update();

  if(hasCollided(player, enemy)){
    enemy.explode();
  }
}

function draw() {

  backgroundImage.onload = function() {
    backgroundContext.drawImage(backgroundImage, 0, 0,640,480);
  };
  backgroundImage.src = 'images/gamebackground.jpg';
	gameContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
  if(enemy.active) enemy.draw();
}

function hasCollided(objectA, objectB){
  return objectA.x < objectB.x + objectB.width &&
         objectA.x + objectA.width > objectB.x &&
         objectA.y < objectB.y + objectB.height &&
         objectA.y + objectA.height > objectB.y;
}