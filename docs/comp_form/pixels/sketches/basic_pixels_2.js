// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);

    img = createImage(10, 10);
    img.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var c = color(y * 25, x * 25, 0);
            img.set(x, y, c);
        }
    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();

}