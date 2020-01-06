// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(50);
  fill(200);
  noStroke();
  for (let i = 0; i < 100; i++) {
    const x = random(500);
    const y = random(500);

    ellipse(x, y, 10, 10);
  }
}
