// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(500, 500);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
	stroke(255, 255, 255, 180);
	strokeWeight(2);


	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(100, 250);

	// put the pen down to draw
	myTurtle.penDown();

	// draw the triangle
	for (var i = 0; i < 72; i++) {
		myTurtle.moveForward(300);
		myTurtle.turnRight(175);
	}

	noLoop();
}
