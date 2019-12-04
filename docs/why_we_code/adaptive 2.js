// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js

let x, y;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);

  let paper_width = abs(mouseX - 200) * 2;
  let paper_height = abs(mouseY - 200) * 2;

  fill(255);
  rect(200, 200, paper_width, paper_height);

  fill(0);
  if (paper_width > paper_height) {
    textSize(0.15 * paper_height);
    text("hello, world!", 200, 200);
  } else {
    textSize(0.2 * paper_width);
    text("hello,\nworld!", 200, 200);
  }
}
