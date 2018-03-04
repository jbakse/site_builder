// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(500, 500);
	noFill();
	stroke(255);
	background(50);
	noLoop();


	myTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(250, 450);
	myTurtle.turnTo(-90);
	myTurtle.penDown();


	drawBranch(100);


}


function drawBranch(length) {

	if (length < 10) {
		return;
	}

	// draw this branch
	myTurtle.moveForward(length);

	// left child
	myTurtle.pushState();
	myTurtle.turnLeft(35);
	drawBranch(length * 0.75);
	//drawBranch(length * random(.5, .9));

	myTurtle.popState();

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(35);
	drawBranch(length * 0.75);
	//drawBranch(length * random(.5, .9));
	myTurtle.popState();

}
