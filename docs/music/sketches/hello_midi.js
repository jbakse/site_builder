// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js
// require /music/SimpleSynth.js


// connects a midi keyboard to the MonoSynth, lets you play music
// works with physical midi keyboards
// also works with virtual keyboards like http://www.manyetas.com/creed/midikeys.html

function setup() {
    createCanvas(400, 200);
    synth = new SimpleSynth('triangle');
    connectMidi();
}

function draw() {
    background(50);
}

function connectMidi() {
    if (!navigator.requestMIDIAccess) return;
    // pretty limited support (4/2018), works in chrome

    navigator.requestMIDIAccess().then((access) => {
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
}