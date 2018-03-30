// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

const gridSize = 40;
const columns = 1280 / gridSize;
const rows = 720 / gridSize;

function setup() {
    createCanvas(1280, 720);
    frameRate(30);
}

function clamp(v, min, max) {
    if (v < min) return min;
    if (v > max) return max;
    return v;
}

function draw() {
    clear();
    background(0);
    noStroke();
    blendMode(ADD);

    let size = map(frameCount, 60, 90, 10, 80);
    size = clamp(size, 10, 80);
    const angle = map(frameCount, 0, 90, 0, 3 * PI);


    for (let blur = 0; blur < 10; blur++) {
        fill(25);
        for (let row = -10; row < rows + 10; row++) {
            for (let col = 0; col < columns; col++) {
                let x = (col + .5) * gridSize;
                let y = (row + .5) * gridSize;
                y += sin(x / 100 + frameCount / 10) * 100;
                ellipse(x, y, size + blur * 4, size + blur * 4);
                // drawTriangle(x, y, size + blur * 3, angle);
            }
        }
    }


    fill(0);
    text(floor(frameRate()), 30, 720);
    if (frameCount >= 90) {
        noLoop();
    }

    saveFrame("render", frameCount, "jpg", 90);
}

function drawTriangle(x, y, size, rot) {
    push();
    translate(x, y);
    rotate(rot);
    const x1 = sin(0 * 2 * PI) * size;
    const y1 = cos(0 * 2 * PI) * size;
    const x2 = sin(.333 * 2 * PI) * size;
    const y2 = cos(.333 * 2 * PI) * size;
    const x3 = sin(.666 * 2 * PI) * size;
    const y3 = cos(.666 * 2 * PI) * size;
    triangle(x1, y1, x2, y2, x3, y3);
    pop();
}




// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
    // don't save frames once we reach the max
    if (maxFrame && frameNumber > maxFrame) {
        return;
    }

    if (!extension) {
        extension = "png";
    }
    // remove the decimal part (just in case)
    frameNumber = floor(frameNumber);
    // zero-pad the number (e.g. 13 -> 0013);
    var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

    save(name + "_" + paddedNumber + "." + extension);
}