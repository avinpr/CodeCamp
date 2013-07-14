
var CANVAS_WIDTH = 640;
var CANVAS_HEIGHT = 480;
var counter = 0;
var backgroundCanvas = document.getElementById("gameBackground");
var gameCanvas = document.getElementById("gameElements");
var backgroundContext = backgroundCanvas.getContext("2d");
var gameContext = gameCanvas.getContext("2d");
var textX = 50;
var textY = 50;
var score = 0;

//Collections
var enemies = new Array();
var playerBullets = new Array();

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
  },
  //Add shooting bullets
  shoot: function() {
    Sound.play("shoot");

    var bulletPosition = this.midpoint();
    playerBullets.push(new Bullet(bulletPosition.x, bulletPosition.y, 5));
  },
  //Add expoloding of player
  explode: function() {
    this.active = false;
  },
  //Calculate midpoint
  midpoint: function() {
    return {
      x: this.x + this.width/2,
      y: this.y + this.height/2
    };
  }
};

var FPS = 30;
setInterval(function() {
  update_faster_w_clamp();
  draw();
}, 1000/FPS);

function update_faster_w_clamp() {
  //Fire bullets if space bar is pressed
  if(keydown.space || keydown.up) {
    player.shoot();
  }
  if (keydown.left) {
    player.x -= 5;
  }

  if (keydown.right) {
    player.x += 5;
  }

  player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);

  //Filter out bullets and enemies that are active only
  playerBullets.forEach(function(bullet) {
    bullet.update();
  });

  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });

  enemies = enemies.filter(function(enemy) {
    return enemy.active;
  });

  enemies.forEach(function(enemy) {
    enemy.update();
  });

  //handle all collisions
  handleCollisions();

  //Generate random number of enemies
  if(Math.random() < 0.1) {
    enemies.push(new Enemy());
  }

  updateScore();
}

function draw() {

  backgroundImage.onload = function() {
    backgroundContext.drawImage(backgroundImage, 0, 0,640,480);
  };
  backgroundImage.src = 'images/gamebackground.jpg';
	gameContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();

  //draw all bullets
  playerBullets.forEach(function(bullet) {
    bullet.draw();
  });

  //draw all enemies
  enemies.forEach(function(enemy) {
    enemy.draw();
  });
}

function updateScore(){
  document.getElementById("score").innerHTML = score;
}

function handleCollisions(){
  //handle collision of bullets with enemies
  playerBullets.forEach(function(bullet) {
    enemies.forEach(function(enemy) {
      if(hasCollided(bullet, enemy)) {
        enemy.explode();
        bullet.active = false;
      }
    });
  });

  //handle collisions of player with enemies
  enemies.forEach(function(enemy) {
    if(hasCollided(enemy, player)) {
      enemy.explode();
      player.explode();
    }
  });
}

function hasCollided(objectA, objectB){
  return objectA.x < objectB.x + objectB.width &&
         objectA.x + objectA.width > objectB.x &&
         objectA.y < objectB.y + objectB.height &&
         objectA.y + objectA.height > objectB.y;
}