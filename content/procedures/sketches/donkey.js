// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

const currentLocation = {
  x: 50,
  y: 50,
};


const corners = [{
  x: 250,
  y: 50,
}, {
  x: 50,
  y: 450,
}, {
  x: 450,
  y: 450,
}];


function setup() {
  createCanvas(500, 500);
  noStroke();
  background(50, 50, 50);
}

function draw() {
  for (let i = 0; i < 10; i++) {
    step();
  }
}

function step() {
  // move toward corner
  const targetCorner = sampleArray(corners);
  currentLocation.x = lerp(currentLocation.x, targetCorner.x, 0.5);
  currentLocation.y = lerp(currentLocation.y, targetCorner.y, 0.5);

  // draw point
  fill(255, 0, 0);
  rect(currentLocation.x, currentLocation.y, 1, 1);
}

function sampleArray(array) {
  const index = floor(random(corners.length));
  return array[index];
}
