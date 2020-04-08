// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}

function draw() {
  clear();
  background(50);

  fill(20);
  blendMode(ADD);

  let seconds = millis() / 1000.0;
  let i = floor(seconds);
  let f = seconds - i;

  for (let n = 0; n < 10; n++) {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        let amount = pow(1.0 - f, 2.0) * 60;

        let x = map(col, 0, 9, 50, 350);
        let y = map(row, 0, 9, 50, 350);
        let x_fuzz = (noise(millis(), 0) - 0.5) * amount;
        let y_fuzz = (noise(millis(), 1) - 0.5) * amount;

        ellipse(x + x_fuzz, y + y_fuzz, 30, 30);
      }
    }
  }
}
