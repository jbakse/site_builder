// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

// draws a rectangle, where you tell it to!

var freq_slider;
var amplitude_slider;
var time_slider;



var t = 0;

function setup() {
    createCanvas(400, 400);


    createP('Frequency');
    freq_slider = createSlider(0, 500, 50);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 100, 50);
    createP('Time Speed');
    time_slider = createSlider(0, 100, 50);


}


function draw() {
    background(50);
    ellipseMode(CENTER);

    var frequency = freq_slider.value() / 10;
    var amplitude = amplitude_slider.value() / 100;
    var timeStep = time_slider.value() / 1000;

    t += timeStep;
    noiseDetail(1, .5);

    noStroke();

    var rays = 30;
    for (ray = 0; ray < rays; ray++) {
        var startX = width / rays * ray;
        var startY = 425;
        var endX = startX + noise(ray, 0) * 30;
        var endY = startY - 400 + noise(ray, 10) * 330;

        colorMode(RGB);
        fill(0, 0, 0, 50);
        for (i = 0; i < 1; i += .02) {
            var x = lerp(startX, endX, i);
            var y = lerp(startY, endY, i);
            var offsetX = noise(i * frequency + t, ray) * amplitude * 100;
            var offsetY = noise(i * frequency + t, ray, 100) * amplitude * 100;

            ellipse(x + offsetX, y + offsetY, 25, 25);
            ellipse(x + offsetX, y + offsetY, 20, 20);
            ellipse(x + offsetX, y + offsetY, 15, 15);
        }

        colorMode(HSB, 100);
        for (i = 0; i < 1; i += .01) {
            fill(noise(ray + i * 2) * 100, 100, 100);
            var x = lerp(startX, endX, i);
            var y = lerp(startY, endY, i);
            var offsetX = noise(i * frequency + t, ray) * amplitude * 100;
            var offsetY = noise(i * frequency + t, ray, 100) * amplitude * 100;

            ellipse(x + offsetX, y + offsetY, 10, 10);
        }

    }



}