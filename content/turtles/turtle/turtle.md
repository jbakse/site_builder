# Turtle.js

The following is a basic implementation of a graphics turtle. This implementation is written in Javascript and uses the p5.js library.

To use this code, you'll need to include it in your sketch.

If you are working with the compfrom_sketch_template project (see week 2 notes), you can download this sketch [sketch_turtle.zip](sketch_turtle.zip) and place it in your sketches folder

**Or**, if you are creating your own project from scratch.

1. Create a file called `turtle.js` in the same folder as your `index.html` and `sketch.js`
2. Copy/paste the code listed at the bottom of the page into your new file.
3. In `index.html` add the following line just before the `script` tag that includes your `sketch.js` script.


```
<script language="javascript" type="text/javascript" src="turtle.js"></script>
```

```
// Turtle
// Basic turtle graphics implementation:
// https://en.wikipedia.org/wiki/Turtle_graphics
// For more info on Javascript OOP:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
//
// The turtle's coordinate system uses pixels for distance and degrees for rotations
// 0 degrees is straight right (east); positive degrees are clockwise

// Turtle constructor
// takes optional x, y starting coordinates (default is center of sketch)
function Turtle(x, y) {
  // assign default values to x and y if they were not passed
  if (typeof x === "undefined") {
    x = width * 0.5;
  }
  if (typeof y === "undefined") {
    y = height * 0.5;
  }
  this.x = x;
  this.y = y;
  this.bearingRadians = 0;
  this.isPenDown = true;
  this._stateStack = [];
}

// moveTo instantly transports the turtle to the provided x, y location, drawing a line if pen is down
Turtle.prototype.moveTo = function (newX, newY) {
  if (this.isPenDown) {
    line(this.x, this.y, newX, newY);
  }
  this.x = newX;
  this.y = newY;
};

// moveForward moves the turtle along its current bearing, drawing a line if pen is down
Turtle.prototype.moveForward = function (distance) {
  var newX = this.x + cos(this.bearingRadians) * distance;
  var newY = this.y + sin(this.bearingRadians) * distance;
  this.moveTo(newX, newY);
};

// moveBackward moves the turtle backward from its current bearing, drawing a line if pen is down
Turtle.prototype.moveBackward = function (distance) {
  this.moveForward(-distance);
};

// turnTo changes the turtle's bearing to the provided angle in degrees
Turtle.prototype.turnTo = function (angleDegrees) {
  this.bearingRadians = radians(angleDegrees);
};

// turnRight rotates the turtle's bearing clockwise by the provided angle in degrees
Turtle.prototype.turnRight = function (amountDegrees) {
  this.bearingRadians += radians(amountDegrees);
};

// turnLeft rotates the turtle's bearing counter-clockwise by the provided angle in degrees
Turtle.prototype.turnLeft = function (amountDegrees) {
  this.bearingRadians -= radians(amountDegrees);
};

// penUp tells the turtle to move without drawing
Turtle.prototype.penUp = function () {
  this.isPenDown = false;
};

// penDown tells the turtle to draw a line when it moves
Turtle.prototype.penDown = function () {
  this.isPenDown = true;
};

// pushState records the turtle's current state (position, bearing, etc.) to a stack so that changes can be undone easily
Turtle.prototype.pushState = function () {
  this._stateStack.push({
    x: this.x,
    y: this.y,
    bearingRadians: this.bearingRadians,
    isPenDown: this.isPenDown
  });
};

// popState restores the turtle's state to the top recorded state on the stack
Turtle.prototype.popState = function () {
  if (this._stateStack.length === 0) {
    console.error(
      "Turtle: No states left on stack. Make sure your calls to .pushState and .popState are ballanced."
    );
    return;
  }
  var state = this._stateStack.pop();
  this.x = state.x;
  this.y = state.y;
  this.bearingRadians = state.bearingRadians;
  this.isPenDown = state.isPenDown;
};

// image draws and image centered on the turtle's current location and alligned with the turtle's rotation (forward = up)
Turtle.prototype.image = function (i, w, h) {
  // w, h are optional parameters to this function and to p5's image
  // p5's image function will draw the image at its "normal" size if w and h are undefined

  push();
  translate(this.x, this.y);
  rotate(this.bearingRadians + PI * 0.5);
  imageMode(CENTER);
  image(i, 0, 0, w, h);
  pop();
};
```
