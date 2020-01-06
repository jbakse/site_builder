// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  pixelDensity(2);
  createCanvas(300, 300);
  ellipseMode(CENTER);
  fill(200, 50, 100);
  noStroke();
}

function draw() {
  loadPixels();
  for (let y = 0; y < height * pixelDensity(); y++) {
    for (let x = 0; x < width * pixelDensity(); x++) {
      const i = (y * width * pixelDensity() + x) * 4;
      pixels[i + 0] = random(255);
      pixels[i + 1] = random(255);
      pixels[i + 2] = random(255);
      pixels[i + 3] = random(255);
    }
  }
  updatePixels();
}
