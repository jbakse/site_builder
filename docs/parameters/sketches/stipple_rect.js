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
  stippleRect(100, 100, 100, 100, 200);
  stippleRect(350, 50, 200, 200, 200);
}

function stippleRect(left, top, width, height, drawCount) {
  for (i = 0; i < drawCount; i++) {
    let x = random(left, left + width);
    let y = random(top, top + height);
    ellipse(x, y, 5, 5);
  }
}
