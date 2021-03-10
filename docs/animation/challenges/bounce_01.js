// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

/*exported setup draw */

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background("gray");

  stroke("white");
  noFill();
  line(100, 200, 300, 200);

  noStroke();
  fill("black");

  const a = map(frameCount, 0, 20, 0, PI);
  let offset = sin(a) * 100;
  // offset = abs(offset);
  const y = 200 - offset;
  ellipse(200, y, 100, 100);
}

// what would happen if you comment in line 22?
// comment in `jump = abs(jump);` and test your theory.
// make the ball bounce higher
// make the ball bounce slower
// make the ball bounce faster
// make the ball bounce exactly 1 time per second
// move the line down to 384 and line up the ball so it bounces when its bottom touches the line
// challenging:
// If you change the frameRate() to 60 the ball bounces faster.
// Change the code so that the ball bounces once per second regardless
// of the frame rate.
