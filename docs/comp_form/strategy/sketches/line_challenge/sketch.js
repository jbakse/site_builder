// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

// draws a rectangle, where you tell it to!

var freq_slider;
var amplitude_slider;
var time_slider;

var startX = 50;
var startY = 350;
var endX = 350;
var endY = 50;

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



    fill(255);
    noStroke();
    for (i = 0; i < 1; i += .02) {
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);
        var offsetX = noise(i * frequency + t) * amplitude * 100;
        var offsetY = noise(i * frequency + t, 100) * amplitude * 100;

        ellipse(x + offsetX, y + offsetY, 10, 10);
    }



}