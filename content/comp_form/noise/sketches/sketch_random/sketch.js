// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var amplitude_slider;


function setup() {
    createCanvas(300, 300);

    fill(240);
    noStroke();
    ellipseMode(CENTER);

    createP('Amplitude');
    amplitude_slider = createSlider(0, 100, 100);
    seed_checkbox = createCheckbox('Seed Random', false);
}


function draw() {
    background(50);

    if (seed_checkbox.checked()) {
        randomSeed(1);
    }

    var amplitude = amplitude_slider.value();

    // draw a pulsing circle at the top
    var w = 50 + random(0, 1) * amplitude;
    ellipse(width * .5, height * .25, w, w);

    // draw a line of ellipses with varying size
    for (var x = 0; x < width; x += 20) {
        var w = 10 + random(0, .1) * amplitude;
        ellipse(x, height * .75, w, w);
    }
}