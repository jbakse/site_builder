// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
function setup() {
    createCanvas(400, 350);
    frameRate(60);
}

function draw() {
    clear();

    const theta = map(frameCount, 0, 60, 0, 2 * PI);
    const pendulumAngle = sin(theta) * .5;
    metronome(200, 325, 3, pendulumAngle);
}

function metronome(x, y, size, pendulumAngle) {
    push();
    noStroke();
    translate(x, y);
    scale(size);

    // body
    fill(220, 200, 200);
    quad(-10, -100, 10, -100, 40, 0, -40, 0);

    // pendulum
    push();
    rotate(pendulumAngle);
    fill(50, 100, 100);
    rect(-3, -90, 6, 80);
    ellipse(0, -70, 20, 20);
    pop();

    // bottom
    fill(180, 160, 160);
    arc(0, 0, 50, 50, PI, 0);
    pop();
}