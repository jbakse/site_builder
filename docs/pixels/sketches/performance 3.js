// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js


var testImage;

function preload() {
    testImage = loadImage("/pixels/sketches/world_100.png");
    noLoop();
}

function setup() {
    // create a place to draw
    createCanvas(500, 500);


}


function draw() {
    // clear the background
    background(255);
    var start, end;
    var testImageCopy = createImage(100, 100);

    noSmooth();

    // draw original image
    image(testImage, 0, 0);

    // invert and draw
    testImageCopy.copy(testImage, 0, 0, 100, 100, 0, 0, 100, 100);
    start = millis();
    invertStandard(testImageCopy);
    end = millis();
    console.log("invertStandard: ", end - start);
    image(testImageCopy, 100, 0);

    // invert and draw
    testImageCopy.copy(testImage, 0, 0, 100, 100, 0, 0, 100, 100);
    start = millis();
    invertQuick(testImageCopy);
    end = millis();
    console.log("invertQuick: ", end - start);
    image(testImageCopy, 200, 0);


    noLoop();
}


//var pixelRed = img.pixels[(y * 640 + x) * 4];
function invertStandard(img) {

    for (y = 0; y < img.height; y++) {
        for (x = 0; x < img.width; x++) {


            var c = img.get(x, y);
            c = [
                255 - c[0],
                255 - c[1],
                255 - c[2],
                c[3],
            ];
            img.set(x, y, c);
            img.updatePixels();

        }
    }
}


function invertQuick(img) {
    // load up the pixel[] array so we can read colors out of it
    img.loadPixels();


    for (y = 0; y < img.height; y++) {
        for (x = 0; x < img.width; x++) {


            var c = getQuick(img, x, y);
            c = [
                255 - c[0],
                255 - c[1],
                255 - c[2],
                c[3],
            ];
            img.set(x, y, c);


        }
    }

    img.updatePixels();
}



// find the RGBA values of the pixel at x, y in the img.pixels array
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the screen

function getQuick(img, x, y) {

    var i = (y * img.width + x) * 4;
    return [
        testImage.pixels[i],
        testImage.pixels[i + 1],
        testImage.pixels[i + 2],
        testImage.pixels[i + 3],
    ];
}