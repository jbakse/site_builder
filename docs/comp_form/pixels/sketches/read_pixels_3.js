// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var worldImage;

function preload() {
    worldImage = loadImage("/comp_form/pixels/sketches/world.png");
}

function setup() {
    createCanvas(500, 500);
}


function draw() {
    background(0, 50, 50);

    fill(200, 50, 50);
    noStroke();



    for (var y = 0; y < worldImage.height; y++) {
        for (var x = 0; x < worldImage.width; x++) {
            var in_color = worldImage.get(x, y);
            var s = lightness(in_color) / 255 * 50;
            ellipse(x * 30 + 25, y * 30 + 25, s, s);
        }
    }

    // we don't draw the image, its just input

    noLoop();
}