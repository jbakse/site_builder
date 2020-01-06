// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js

let x;
let y;
let dX;
let dY;

function setup() {
  createCanvas(400, 200);
  fill(255);
  noStroke();

  x = 200;
  y = 100;
  dX = 6;
  dY = 5;
}

function draw() {
  background(50);
  x += dX;
  y += dY;

  if (x > 395) {
    dX = -abs(dX);
  }
  if (y > 195) {
    dY = -abs(dY);
  }
  if (x < 5) {
    dX = abs(dX);
  }
  if (y < 5) {
    dY = abs(dY);
  }

  ellipse(x, y, 10, 10);
}
