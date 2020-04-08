// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}

function draw() {
  clear();
  background(50);

  fill(5);
  blendMode(ADD);

  let seconds = millis() / 1000.0;
  let i = floor(seconds);
  let f = seconds - i;

  for (let n = 0; n < 100; n++) {
    let amount = pow(1.0 - f, 2.0) * 200;
    let x_fuzz = (noise(n + millis(), 0) - 0.5) * amount;
    let y_fuzz = (noise(n + millis(), 1) - 0.5) * amount;
    ellipse(200 + x_fuzz, 200 + y_fuzz, 200, 200);
  }
}
