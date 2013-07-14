function Enemy() {
	this.active = true;
	this.age = Math.floor(Math.random() * 128);
    this.color = "#A2B";

    this.x = CANVAS_WIDTH / 4 + Math.random() * CANVAS_WIDTH / 2;
    this.y = 0;
    this.xVelocity = 0
    this.yVelocity = 2;

    this.width = 32;
    this.height = 32;

    this.inBounds = function() {
		return this.x >= 0 && this.x <= CANVAS_WIDTH &&
			this.y >= 0 && this.y <= CANVAS_HEIGHT;
    };

	this.sprite = Sprite("enemy");

	this.draw = function() {
    	this.sprite.draw(gameContext, this.x, this.y);
	};

	this.update = function() {
		this.x += this.xVelocity;
		this.y += this.yVelocity;

		this.xVelocity = 3 * Math.sin(this.age * Math.PI / 64);

		this.age++;

		this.active = this.active && this.inBounds();
	};

	this.explode = function() {
    	Sound.play("explosion");
        this.active = false;
        score++;
	};
};