// basic template sketch showing how to use the Turtle class
var myTurtle;
var aImage;

function preload() {
	aImage = loadImage("week_8_turtles/sketches/a.png");
}


function setup() {
	createCanvas(500, 500);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
	stroke(0);
	strokeWeight(1);

	blendMode(ADD);
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(250, 150);

	// put the pen down to draw
	myTurtle.penDown();

	// draw the triangle
	for (var i = 0; i < 12; i++) {
		myTurtle.moveForward(60);
		myTurtle.turnRight(30);
		myTurtle.image(aImage);
	}

	noLoop();
}
