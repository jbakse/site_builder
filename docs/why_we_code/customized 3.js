// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js

function setup() {
  createCanvas(400, 400);
  noStroke();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);
  fill(255);

  textSize(15);
  text(window.navigator.language, 200, 100);

  textSize(40);
  if (window.navigator.language == "en-US") {
    text("Hello!", 200, 200);
  } else {
    text("Hello?", 200, 200);
  }
}
