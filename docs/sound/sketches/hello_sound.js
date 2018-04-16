// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js

let myOscillator;

function setup() {
    createCanvas(400, 200);

    myOscillator = new p5.Oscillator('sine');
    myOscillator.amp(1); // set amplitude
    myOscillator.freq(440); // set frequency



    const startButton = createButton('start');
    startButton.mousePressed(start);

    const stopButton = createButton('stop');
    stopButton.mousePressed(stop);
}

function start() {
    myOscillator.start(); // start oscillating
}

function stop() {
    myOscillator.stop(); // start oscillating
}

function draw() {
    background(50);
}