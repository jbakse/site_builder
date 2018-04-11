// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js


var carrier, modulator;

function setup() {
	createCanvas(400, 100);

	carrier = new p5.Oscillator('sine');
	carrier.amp(100); // set amplitude
	carrier.freq(440); // set frequency


	modulator = new p5.Oscillator('sine');
	modulator.amp(100); // set amplitude
	modulator.freq(1); // set frequency
	modulator.start(); // start oscillating
	modulator.disconnect();

	carrier.freq(modulator);

	button = createButton('start');
	button.mousePressed(start);

	// record(5000);
}

function start() {
	console.log("start");
	carrier.start(); // start oscillating
}

