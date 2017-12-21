// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var freq_slider;
var amplitude_slider;
var octive_slider;

function setup() {
    createCanvas(300, 300);

    fill(240);
    noStroke();
    ellipseMode(CENTER);

    createP('Amplitude');
    amplitude_slider = createSlider(0, 100, 100);
    createP('Frequency');
    freq_slider = createSlider(0, 100, 50);
    createP('Octaves/Detail');
    octive_slider = createSlider(1, 8, 1);

}



function draw() {
    background(50);


    var frequency = freq_slider.value() / 100;
    var amplitude = amplitude_slider.value();
    noiseDetail(octive_slider.value(), .5);

    // draw a pulsing circle at the top
    var w = 50 + noise(frameCount * frequency) * amplitude;
    ellipse(width * .5, height * .25, w, w);

    // draw a line of ellipses with varying size
    for (var x = 0; x < width; x += 20) {
        var w = 3 + noise(x * frequency * .1) * .2 * amplitude;
        ellipse(x, height * .75, w, w);
    }
}