// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}

function draw() {
  clear();
  background(50);

  fill(50);
  blendMode(ADD);

  let seconds = millis() / 1000.0;
  let i = floor(seconds);

  for (let n = 0; n < 5; n++) {
    let x_fuzz = (noise(n, 0, i) - 0.5) * 200;
    let y_fuzz = (noise(n, 1, i) - 0.5) * 200;
    ellipse(200 + x_fuzz, 200 + y_fuzz, 200, 200);
  }
}
