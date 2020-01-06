// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(30);
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
    fill(255);
  } else {
    fill(80);
  }
  rect(100, 100, 200, 200);
}
