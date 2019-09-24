// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js

let x, y;

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(RGB, 5);
  background(1);
}

function draw() {
  if (frameCount % 30 === 1) {
    x = random(50, 350);
    y = random(50, 350);
    fill(floor(random(6)));
  }
  x += random(-10, 10);
  y += random(-10, 10);
  ellipse(x, y, 20, 20);
  ellipse(400 - x, y, 20, 20);
}
