// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

const points = [];

function setup() {
  createCanvas(500, 500);
  noLoop();

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      points.push({
        x: x * 50 + 25,
        y: y * 50 + 25
      });
    }
  }
}

function draw() {
  background(50);
  fill(200);
  noStroke();

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    ellipse(p.x, p.y, 10, 10);
  }
}
