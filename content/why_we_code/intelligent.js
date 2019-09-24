// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js

let x = 0;
let y = 0;
let target_x = 200;
let target_y = 200;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(30);
  if (mouseIsPressed) {
    target_x = mouseX;
    target_y = mouseY;
  }
  fill(100);
  rect(target_x, target_y, 30, 30);

  if (x < target_x - 3) {
    x += 6;
  } else if (x > target_x + 3) {
    x -= 6;
  } else {
    if (y < target_y - 3) {
      y += 6;
    } else if (y > target_y + 3) {
      y -= 6;
    }
  }
  fill(200);
  ellipse(x, y, 20, 20);
}
