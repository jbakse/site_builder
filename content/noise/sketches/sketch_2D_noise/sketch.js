// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js



function setup() {
    createCanvas(600, 600, WEBGL);
}


function draw() {
    background(255);
    drawNoise();
    // save();
    noLoop();
    angleMode(DEGREES);
}

function drawNoise() {
    stroke(0);
    noStroke();
    var frequency = .01;
    var amplitude = 1;


    for (var z = 0; z < height; z += 50) {

        push();
        translate(0, 0, -601);
        rotateY(radians(45));
        translate(-300, -300, 400 - z * 2);
        fill(0, 0, 0);

        rect(-3, -3, 606, 606);
        pop();


        for (var y = 0; y < height; y += 30) {
            for (var x = 0; x < width; x += 30) {
                let n = noise(x * frequency, y * frequency, z * frequency);
                n = n * amplitude * 255;
                fill(n);
                push();
                translate(0, 0, -600);
                rotateY(radians(45));
                translate(-300, -300, 400 - z * 2);
                rect(x, y, 30, 30);
                pop();
            }
        }
    }

}