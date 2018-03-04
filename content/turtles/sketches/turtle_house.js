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
	strokeWeight(3);

	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(200, 200);

	// put the pen down to draw
	myTurtle.penDown();

	// draw the house
	myTurtle.turnLeft(90); // left wall
	myTurtle.moveForward(100);
	myTurtle.turnLeft(90); // begin roof
	myTurtle.moveForward(20);
	myTurtle.turnRight(135);
	myTurtle.moveForward(100);
	myTurtle.turnRight(90); // peak
	myTurtle.moveForward(100);
	myTurtle.turnRight(135);
	myTurtle.moveForward(20);
	myTurtle.turnLeft(90); // right wall
	myTurtle.moveForward(100);

	noLoop();
}
