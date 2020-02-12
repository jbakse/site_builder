// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(600, 300);
  fill(100);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(50);
  noStroke();
  fill(200);
  stippleRect(100, 100, 100, 100, 0.5);
  stippleRect(350, 50, 200, 200, 0.5);
}

function stippleRect(left, top, width, height, drawDensity) {
  drawCount = ((width * height) / 25) * drawDensity;
  for (i = 0; i < drawCount; i++) {
    let x = random(left, left + width);
    let y = random(top, top + height);
    ellipse(x, y, 5, 5);
  }
}
