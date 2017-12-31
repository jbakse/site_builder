// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(50);

    noStroke();
    ellipseMode(CENTER);


    var noiseFrequency = .02;

    for (var i = 0; i < 100; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = random(width);
        var y = random(height);

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 10;

        // the colors also need to change
        // what colorMode would be easiest to work with?
        fill(255, 255, 255)

        ellipse(x, y, diameter, diameter);
    }


    noLoop();


}