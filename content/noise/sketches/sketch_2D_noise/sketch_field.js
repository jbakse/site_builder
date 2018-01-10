// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var freq_slider;
var amplitude_slider;
var octive_slider;

function setup() {
    createCanvas(640, 360);

    fill(240);
    noStroke();
    rectMode(CENTER);
    ellipseMode(CENTER);

    createP('Frequency');
    freq_slider = createSlider(0, 100, 50);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 20000, 10000);
    createP('Octaves');
    octive_slider = createSlider(1, 8, 1);

}


function draw() {
    background(50);





    // prettyMistake();
    // field();
    // field2();
    field3();

}

function field() {
    var frequency = freq_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 100;
    noiseDetail(octive_slider.value(), .5);

    for (var y = 0; y < height; y += 25) {
        for (var x = 0; x < width; x += 25) {
            let n = noise(x * frequency, y * frequency);
            n = n * amplitude;
            ellipse(x, y, n, n);
        }
    }
}

function field2() {
    var frequency = freq_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 100;
    noiseDetail(octive_slider.value(), .5);

    for (var y = 0; y < height; y += 15) {
        for (var x = 0; x < width; x += 15) {
            let n = noise(x * frequency, y * frequency);
            n = n * amplitude;
            if (1 < n) {
                ellipse(x, y, 15, 15);
            }
        }
    }
}


function field3() {
    var frequency = freq_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 1000;
    noiseDetail(octive_slider.value(), .5);
    randomSeed(1);
    for (var y = 0; y < height; y += 15) {
        for (var x = 0; x < width; x += 15) {
            let n = noise(x * frequency, y * frequency);

            if (.5 < n) {
                ellipse(x, y, 15, 15);
            }
        }
    }

}

function prettyMistake() {
    var frequency = freq_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 100;
    noiseDetail(octive_slider.value(), .5);

    for (var y = 0; y < height; y += 5) {
        for (var x = 0; x < width; x += 5) {
            let n = noise(x * frequency, y * frequency);
            n = n * amplitude;
            ellipse(x, y - n, 5, 5);
        }
    }
}