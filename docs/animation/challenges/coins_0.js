// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(400, 200);
  frameRate(60);
  noStroke();
}

function draw() {
  background(50);

  {
    // left

    let seconds = millis() / 1000.0;
    let s = sin(seconds * TWO_PI);
    fill(s < 0 ? "red" : "white");
    ellipse(100, 100, abs(s) * 100, 100);
  }
  {
    // right
    let seconds = millis() / 1000.0;
    let s = sin(seconds * TWO_PI * 0.5);
    fill(s < 0 ? "red" : "white");
    ellipse(300, 100, 100, abs(s) * 100);
  }
}
