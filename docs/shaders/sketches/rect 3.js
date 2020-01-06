// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

let real_width = 0;
let real_height = 0;

function setup() {
  createCanvas(300, 300);
  real_width = width * pixelDensity();
  real_height = height * pixelDensity();
}

function draw() {
  loadPixels();
  drawRect(0, 0, 300, 300, [100, 100, 100, 255]);
  drawRect(50, 50, 200, 100, [255, 0, 0, 255]);
  updatePixels();
}

function drawRect(left, top, width, height, color) {
  left *= pixelDensity();
  top *= pixelDensity();
  width *= pixelDensity();
  height *= pixelDensity();
  for (let y = top; y < top + height; y++) {
    for (let x = left; x < left + width; x++) {
      setQuick(x, y, color);
    }
  }
}

function setQuick(x, y, [r, g, b, a]) {
  let i = (y * real_width + x) * 4;
  pixels[i] = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
  pixels[i + 3] = a;
}
