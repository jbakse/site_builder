// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {

  // draw the sky
  noStroke();
  fill(0, 0, 255);
  rect(0, 0, 800, 600);

  // draw the grass
  fill(0, 255, 0);
  rect(0, 400, 800, 200);

  // draw the main part of the house
  fill(255, 255, 0);
  rect(200, 250, 200, 200);

  // draw the roof
  fill(255, 0, 0);
  triangle(150, 250, 300, 100, 450, 250);

}
