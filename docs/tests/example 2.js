// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(50);
    fill(255, 0, 0);
    noStroke();
    ellipse(random(190, 210), 200, 200, 200);
    //console.log("test");
}