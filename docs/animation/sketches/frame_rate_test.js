// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// change this to other values (15, 24, 30, 45, 50, 60 are good) to see how p5.js responds
let requestedFPS = 50;
// change this to true to draw a bunch of squares, slowing down the draw
let heavyLoad = false;

let lastFrameTime = 0;
let firstDrawTime = false;
let stableFrameRate = 0;

function setup() {
    createCanvas(400, 350);
    frameRate(requestedFPS);
}

function draw() {
    clear();

    if (!firstDrawTime) {
        firstDrawTime = performance.now();
    }
    const currentFrameTime = performance.now();
    const elapsedTime = currentFrameTime - firstDrawTime;
    const timeThisFrame = currentFrameTime - lastFrameTime;
    const expectedFrameCount = (elapsedTime / 1000) * requestedFPS;
    if (frameCount % requestedFPS === 0) {
        stableFrameRate = frameRate();
    }

    text(`requestedFPS = ${requestedFPS}`, 10, 20);

    text(`realFPS = ${round(stableFrameRate)}`, 10, 40);

    text(`elapsedTime = ${round(elapsedTime)}ms`, 10, 60);

    text(`frameCount = ${frameCount}`, 10, 80);

    text(`expectedFrameCount = ${round(expectedFrameCount)}`, 10, 100);

    text(`frameCountLag = ${round(expectedFrameCount) - frameCount}`, 10, 120);

    if (heavyLoad) {
        push();
        fill(0, 0, 0, 50);
        noStroke();
        for (let i = 0; i < 1000; i++) {
            rect(10 + random(0, 100), 140 + random(0, 100), 50, 50);
        }
        pop();
    }
}
