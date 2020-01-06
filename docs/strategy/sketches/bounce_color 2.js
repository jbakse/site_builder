// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

let ballColor = 0;
let ballSpeed = 10;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(50);


    if (ballColor < 0) {
        ballSpeed = abs(ballSpeed);
    }
    if (ballColor > 255) {
        ballSpeed = -abs(ballSpeed);
    }
    ballColor += ballSpeed;


    fill(ballColor);
    ellipse(250, 250, 300, 300);
}

