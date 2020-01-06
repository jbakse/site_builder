// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


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
	myTurtle.moveTo(100, 100);

	// put the pen down to draw
	myTurtle.penDown();

	// draw the triangle
	for (var i = 0; i < 3; i++) {
		myTurtle.moveForward(300);
		myTurtle.turnRight(120);
	}

	noLoop();
}
