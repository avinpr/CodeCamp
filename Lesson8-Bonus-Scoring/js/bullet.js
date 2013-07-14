function Bullet(xPosition, yPosition, speed) {
	this.x = xPosition;
	this.y = yPosition;
	this.active = true;

    this.xVelocity = 0;
	this.yVelocity = -speed;
	this.width = 3;
	this.height = 3;
	this.color = "#FFF";

	this.inBounds = function() {
		return xPosition >= 0 && xPosition <= CANVAS_WIDTH &&
			yPosition >= 0 && yPosition <= CANVAS_HEIGHT;
	};

   	this.draw = function() {
        gameContext.fillStyle = this.color;
        gameContext.fillRect(this.x, this.y, this.width, this.height);
    };

	this.update = function() {
		this.x += this.xVelocity;
		this.y += this.yVelocity;

		this.active = this.active && this.inBounds();
	};
	this.explode = function() {
		this.active = false;
	};
}