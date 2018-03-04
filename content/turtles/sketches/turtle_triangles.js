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

	// put the pen down to draw
	myTurtle.penDown();

	myTurtle.moveTo(random(width), random(height));
	myTurtle.turnTo(random(360));
	drawTriangle(myTurtle);

	myTurtle.moveTo(random(width), random(height));
	myTurtle.turnTo(random(360));
	drawTriangle(myTurtle);

	myTurtle.moveTo(random(width), random(height));
	myTurtle.turnTo(random(360));
	drawTriangle(myTurtle);

	myTurtle.moveTo(random(width), random(height));
	myTurtle.turnTo(random(360));
	drawTriangle(myTurtle);



	noLoop();
}


// draw a triangle using the turtle provided
function drawTriangle(t) {
	for (var i = 0; i < 3; i++) {
		t.moveForward(100);
		t.turnRight(120);
	}
}
