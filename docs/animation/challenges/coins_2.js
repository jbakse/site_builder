// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}

function draw() {
  background(50);

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let x = map(col, 0, 8, 50, 350);
      let y = map(row, 0, 8, 50, 350);
      let seconds = millis() / 1000.0;
      let s = sin(seconds * TWO_PI * (row + 10) * 0.1);
      coin(x, y, 30, 30, s);
    }
  }
}

function coin(x, y, w, h, spin) {
  fill(spin < 0 ? "red" : "white");
  ellipse(x, y, w * spin, h);
}
