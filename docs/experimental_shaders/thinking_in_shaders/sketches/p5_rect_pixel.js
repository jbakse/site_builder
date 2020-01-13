// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
  pixelDensity(1);
  createCanvas(300, 300);

}

function draw() {

  loadPixels();
  drawRect(0, 0, 300, 300, [0, 0, 0, 255]);
  drawRect(100, 100, 100, 100, [255, 0, 0, 255]);
  updatePixels();
}

function drawRect(left, top, width, height, color) {
  for (let y = top; y < top + height; y++) {
    for (let x = left; x < left + width; x++) {
      setQuick(x, y, color);
    }
  }
}

function setQuick(x, y, [r, g, b, a]) {
  const i = (y * width + x) * 4;
  pixels[i] = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
  pixels[i + 3] = a;
}
