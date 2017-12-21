// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var freq_slider;
var amplitude_slider;
var octive_slider;

function setup() {
    createCanvas(640, 300);

    fill(240);
    noStroke();
    rectMode(CENTER);

    createP('Frequency');
    freq_slider = createSlider(0, 500, 50);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 100, 50);
    createP('Octaves');
    octive_slider = createSlider(1, 8, 1);

}


function draw() {
    background(50);
    ellipseMode(CENTER);
    var frequency = freq_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 100;
    noiseDetail(octive_slider.value(), .5);


    var y = height * .5;
    for (var x = 0; x < width; x += 1) {
        let n = noise(x * frequency) - .25;
        n = n * amplitude * 300;
        ellipse(x, y - n, 3, 3);
    }





}