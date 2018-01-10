// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
    createCanvas(600, 600);
    ellipseMode(CENTER);
    fill(200, 50, 100);
    noStroke();
}


function draw() {
    background(255);
    let n;

    for (let y = 15; y < height; y += 30) {
        for (let x = 15; x < width; x += 30) {

            // vary over x
            n = noise(x);

            // vary over y
            // n = noise(y);

            // vary over x + y
            // n = noise(x + y);

            // vary over x and y
            // n = noise(x, y);
            // n = noise(x*.01, y*.01);
            // n = noise(x*.01, y*.05);
            // n = noise(x*.05, y*.01);

            // vary over x + time;
            // n = noise(x + millis() * .001);
            // n = noise(x * .002 + millis() * .001);

            // vary x and time, y
            // n = noise(x * .002 + millis() * .001, y);
            // n = noise(x * .002 + millis() * .001, y * .002);

            // vary over x and time
            //n = noise(x, millis() * .001);

            // vary over y and time
            //n = noise(y, millis() * .001);

            // vary over x and y and time
            //n = noise(x, y, millis() * .001);
            //n = noise(x*.003, y*.003, millis() * .001);

            // vary over distance from center
            // n = noise(dist(300, 300, x, y) * .03);
            // n = noise(dist(300, 300, x, y) * .03, millis() * .001);
            // n = noise(dist(300, 300, x, y) * .03 +  millis() * .001);

            let diameter = n * 30;

            ellipse(x, y, diameter, diameter);
        }
    }



}