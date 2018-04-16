// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js
// require /music/MonoSynth.js


let synth;

function setup() {
    createCanvas(400, 200);

    synth = new MonoSynth('triangle');

    // staccato
    // synth.spacing = .01;

    // no envelope
    // synth.envelope.setADSR(0, 0, 1, 0);

    // long release
    // synth.envelope.setADSR(.01, 0, 1, 2);

    // quick decay
    // synth.envelope.setADSR(.01, .1, .1, 0);

    // warble
    // const warbler = new p5.Oscillator('sine');
    // warbler.amp(10); // set amplitude
    // warbler.freq(10); // set frequency
    // warbler.disconnect();
    // warbler.start();
    // synth.oscillator.freq(warbler);
}


function mousePressed() {
    const note = floor(map(mouseX, 0, 400, 20, 80));
    synth.noteOn(note);
}

function mouseReleased() {
    synth.noteOff();
}

function draw() {
    background(50);
}