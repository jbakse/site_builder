// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js
// require /music/SimpleSynth.js


// connects a midi keyboard to the MonoSynth, lets you play music
// works with physical midi keyboards
// also works with virtual keyboards like http://www.manyetas.com/creed/midikeys.html

let warbler;

function setup() {
    createCanvas(400, 200);
    synth = new SimpleSynth('triangle');


    warbler = new p5.Oscillator('sine');
    warbler.amp(15); // set amplitude
    warbler.freq(20); // set frequency
    warbler.disconnect();
    warbler.start();
    synth.oscillator.freq(warbler);


    connectMidi();
}

function draw() {
    background(50);
}

function connectMidi() {
    if (!navigator.requestMIDIAccess) return;
    // pretty limited support (4/2018), works in chrome

    navigator.requestMIDIAccess().then((access) => {
        console.log(access);
        const inputs = Array.from(access.inputs.values());
        for (let input of inputs) {
            console.log(`connecting ${input.manufacturer} ${input.name}`);
            input.onmidimessage = onMIDIMessage;
        }
    }, () => console.log("midi failure"));
}



function onMIDIMessage(m) {
    const command = m.data[0];
    const note = m.data[1];
    const velocity = m.data[2];
    console.log(m.data);

    if (command === 144) {
        synth.noteOn(note);
    }

    if (command === 128 || velocity === 0) {
        synth.noteOff();
    }

    if (command === 176 && note === 73) {
        const lfoFreq = map(velocity, 0, 127, .01, 10);

        console.log("lfo", lfoFreq);
        warbler.freq(lfoFreq);
    }

    if (command === 176 && note === 72) {
        const lfoAmp = map(velocity, 0, 127, .01, 100);

        console.log("lfo amp", lfoAmp);
        warbler.amp(lfoAmp);
    }
}