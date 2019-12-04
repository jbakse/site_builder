// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
    createCanvas(400, 400);


}


function draw() {
    background(50);

    noStroke();
    ellipseMode(CENTER);
    colorMode(HSB, 100);

    var noiseFrequency = .02;

    for (var i = 0; i < 100; i++) {
        var x = (random(width) + random(width) + random(width)) * .33;
        var y = (random(height) + random(height) + random(height)) * .33;
        var size = noise(x * noiseFrequency, y * noiseFrequency) * 20 + 2;
        var hue = noise(x * noiseFrequency, y * noiseFrequency) * 150 - 25;
        fill(hue, 100, 100);
        ellipse(x, y, size, size);
    }


    noLoop();


}