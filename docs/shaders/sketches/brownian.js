// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

let real_width = 0;
let real_height = 0;

function setup() {
    createCanvas(300, 300);
    real_width = width * pixelDensity();
    real_height = height * pixelDensity();
    noStroke();
    noLoop();
}

function draw() {
    background(100);
    fill(255, 0, 0, 100);

    let x = 150;
    let y = 150;

    for (let i = 0; i < 10; i++) {
        x += random(-50, 50);
        y += random(-50, 50);
        ellipse(x, y, 50, 50);
    }
}