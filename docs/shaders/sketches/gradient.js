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
    for (let y = 0; y < real_height; y++) {
        for (let x = 0; x < real_width; x++) {
            let r = map(x, 0, real_width, 0, 255);
            let g = map(y, 0, real_width, 0, 255);
            setQuick(x, y, [r, g, 0, 255]);
        }
    }
    updatePixels();
}

function setQuick(x, y, [r, g, b, a]) {
    var i = (y * real_width + x) * 4;
    pixels[i] = r;
    pixels[i + 1] = g;
    pixels[i + 2] = b;
    pixels[i + 3] = a;
}