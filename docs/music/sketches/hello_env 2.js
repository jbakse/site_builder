// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js


let oscillator;
let envelope;

function setup() {
    createCanvas(400, 200);

    envelope = new p5.Env();

    envelope.setADSR(0.01, 0.05, 0.75, 0.25); // middling
    // synth.envelope.setADSR(0, 0, 1, 0); // no envelope
    // synth.envelope.setADSR(.01, 0, 1, 2); // long release
    // synth.envelope.setADSR(.01, .1, .1, 0); // quick decay

    envelope.setRange(1.0, 0.0);

    oscillator = new p5.Oscillator('triangle');
    oscillator.amp(envelope); // set amplitude
    oscillator.freq(220); // set frequency
    oscillator.start(); // start oscillating

    // warble
    //     const warbler = new p5.Oscillator('sine');
    //     warbler.amp(5); // set amplitude
    //     warbler.freq(20); // set frequency
    //     warbler.disconnect();
    //     warbler.start();
    //     oscillator.freq(warbler);
}


function mousePressed() {
    const note = floor(map(mouseX, 0, 400, 20, 80));
    const freq = midiToFreq(note);
    oscillator.freq(freq);
    envelope.triggerAttack();

}

function mouseReleased() {
    envelope.triggerRelease();
}

function draw() {
    background(50);
}