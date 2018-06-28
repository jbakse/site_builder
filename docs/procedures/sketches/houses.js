// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
  createCanvas(600, 600);
  frameRate(3);
}

function draw() {
  // draw the sky
  noStroke();

  const skyColor = sample([
    color(100, 100, 200),
    color(0, 0, 255),
    color(0, 0, 100),
  ]);

  const grassColor = sample([
    color(200, 200, 200),
    color(0, 255, 0),
    color(0, 100, 0),
  ]);

  const houseColor = sample([
    color(255, 0, 0),
    color(255, 255, 0),
    color(255, 255, 255),
  ]);

  const roofColor = lerpColor(houseColor, color('black'), 0.5);

  fill(skyColor);
  rect(0, 0, 800, 600);

  // draw the grass
  fill(grassColor);
  rect(0, 400, 800, 200);

  // move house
  translate(random(-300, 300), 0);

  // draw the main part of the house
  fill(houseColor);
  rect(200, 250, 200, 200);

  // draw the roof
  fill(roofColor);
  triangle(150, 250, 300, 100, 450, 250);

}

function sample(a) {
  return a[randomInt(0, a.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
