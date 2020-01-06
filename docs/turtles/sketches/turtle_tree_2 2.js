// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

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
    myTurtle.penUp();
    myTurtle.moveTo(250, 450);
    myTurtle.turnTo(-70);
    myTurtle.penDown();
    drawBranch(100);
}


function drawBranch(length) {

    if (length < 4) {
        return;
    }

    // draw this branch
    strokeWeight(length / 10);
    myTurtle.moveForward(length * .5);
    myTurtle.turnLeft(10);
    myTurtle.moveForward(length * .5);

    // left child
    myTurtle.pushState();
    myTurtle.turnLeft(random(20, 40));
    drawBranch(length * 0.75);
    //drawBranch(length * random(.5, .9));

    myTurtle.popState();

    // right child
    myTurtle.pushState();
    myTurtle.turnRight(random(10, 30));
    drawBranch(length * 0.75);
    //drawBranch(length * random(.5, .9));
    myTurtle.popState();

}
