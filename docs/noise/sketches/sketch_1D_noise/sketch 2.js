// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var freq_slider;
var amplitude_slider;
var octave_slider;

function setup() {
    createCanvas(640, 300);


    rectMode(CENTER);

    createP('Frequency');
    freq_slider = createSlider(0, 500, 50);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 200, 100);
    createP('Octaves');
    octave_slider = createSlider(1, 8, 1);

    animate_checkbox = createCheckbox('Animate Noise', false);


}


function draw() {
    background(50);
    ellipseMode(CENTER);
    var frequency = freq_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 100;
    noiseDetail(octave_slider.value(), .5);


    // draw grid lines where the input to noise is 1,2,3,...
    // 1 / frequency = period
    stroke(100, 100, 100);
    for (var x = 0; x < width; x += 1 / frequency) {
        line(x, 0, x, height);
    }

    // draw horizontal grid lines
    line(0, height * .5, width, height * .5);
    line(0, height * .25, width, height * .25);
    line(0, height * .125, width, height * .125);

    // draw function plot
    fill(240);
    noStroke();
    for (var x = 0; x < width; x += .5) {
        let n;
        if (animate_checkbox.checked()) {
            n = noise(x * frequency, frameCount * .01);
        } else {
            n = noise(x * frequency);
        }

        n = n * amplitude * height;
        ellipse(x, height - n, 4, 4);
    }

}