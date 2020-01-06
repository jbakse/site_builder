// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
function setup() {
    createCanvas(800, 200);
    frameRate(60);
}

function draw() {
    clear();

    const frameCount60 = frameCount;
    const frameCount30 = floor(frameCount / 2) * 2;
    const frameCount15 = floor(frameCount / 4) * 4;
    const frameCount5 = floor(frameCount / 12) * 12;


    metronome(100, 175, 1.5, sin(frameCount5 / 60 * PI * 2) * .5);
    metronome(300, 175, 1.5, sin(frameCount15 / 60 * PI * 2) * .5);
    metronome(500, 175, 1.5, sin(frameCount30 / 60 * PI * 2) * .5);
    metronome(700, 175, 1.5, sin(frameCount60 / 60 * PI * 2) * .5);
}

function metronome(x, y, s, a) {
    push();
    noStroke();
    translate(x, y);
    scale(s);

    // body
    fill(220, 200, 200);
    quad(-10, -100, 10, -100, 40, 0, -40, 0);

    // pendulum
    push();
    rotate(a);
    fill(50, 100, 100);
    rect(-3, -90, 6, 80);
    ellipse(0, -70, 20, 20);
    pop();

    // bottom
    fill(180, 160, 160);
    arc(0, 0, 50, 50, PI, 0);
    pop();
}