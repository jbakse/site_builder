// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
  pixelDensity(1);
  createCanvas(300, 300);
  real_width = width * pixelDensity();
  real_height = height * pixelDensity();
}

function draw() {
  loadPixels();
  for (let y = 0; y < 300; y++) {
    for (let x = 0; x < 300; x++) {
      const r = (x / 300) * 255;
      const g = (y / 300) * 255;
      setQuick(x, y, [r, g, 0, 255]);
    }
  }
  updatePixels();
}

function setQuick(x, y, [r, g, b, a]) {
  const i = (y * real_width + x) * 4;
  pixels[i] = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
  pixels[i + 3] = a;
}
