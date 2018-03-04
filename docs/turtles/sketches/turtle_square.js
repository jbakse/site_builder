// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(500, 500);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
	stroke(255);
	strokeWeight(2);

	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(200, 200);

	// put the pen down to draw
	myTurtle.penDown();

	// draw the square
	myTurtle.moveForward(100);
	myTurtle.turnRight(90);
	myTurtle.moveForward(100);
	myTurtle.turnRight(90);
	myTurtle.moveForward(100);
	myTurtle.turnRight(90);
	myTurtle.moveForward(100);
	myTurtle.turnRight(90);

	noLoop();
}
