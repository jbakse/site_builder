// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

// makes a terrible noise!

var frequency = 220;
var myOscillator;


function setup() {
	createCanvas(400, 100);

	myOscillator = new p5.Oscillator('sine');
	myOscillator.amp(1); // set amplitude
	myOscillator.freq(frequency); // set frequency

	frameRate(2);

	button = createButton('start');
	button.mousePressed(start);

	// record(5000);
}

function start() {
	console.log("start");
	myOscillator.start(); // start oscillating
}

function draw() {
	frequency += random(-50, 50); // vary frequency using brownian motion
	frequency = constrain(frequency, 100, 500);

	console.log(frequency);
	myOscillator.freq(frequency);
}


// uses the p5 SoundRecorder and SoundFile classes to record the audio output.
// begins recording when called. records for _length_ time in milliseconds.
function record(length) {
	var soundRecorder = new p5.SoundRecorder();
	var soundFile = new p5.SoundFile();
	soundRecorder.record(soundFile);
	setTimeout(function () {
		console.log("Recording Complete");
		soundRecorder.stop();
		save(soundFile, "output.wav");
	}, length);
}
