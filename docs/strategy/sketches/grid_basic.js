// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(50);
  fill(200);
  noStroke();
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      ellipse(x * 50 + 25, y * 50 + 25, 10, 10);
    }
  }
}
