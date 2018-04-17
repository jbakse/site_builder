/**
 * Basic Monophonic Synthesizer
 */

class SimpleSynth {
    /**
     * @param  {string} shape - oscilator shape  sine, sawtooth, triangle, square
     */
    constructor(shape = "sine") {
        /**
         * name of the synth, useful for reporting/debugging
         */
        this.name = "MonoSynth";

        /**
         * master amplitude for the synth
         */
        this.amplitude = 0.5;

        /**
         * controls the envelope of the notes
         * @type p5.Evn
         */
        this.envelope = new p5.Env();
        this.envelope.setADSR(0.01, 0.05, 0.75, 0.25);
        // this.envelope.setADSR(0, 0, 1, 0);
        this.envelope.setRange(1.0, 0.0);

        /**
         * generates the tone of the notes
         * https://github.com/processing/p5.js-sound/blob/master/src/oscillator.js
         * @type p5.Oscillator
         */
        this.oscillator = new p5.Oscillator(shape);
        this.oscillator.amp(this.envelope); // set amplitude
        this.oscillator.freq(220); // set frequency
        this.oscillator.start(); // start oscillating

        /**
         * spacing shortens length of notes to make sure
         * they are fully decayed before next note plays
         * @type {Number}
         */
        this.spacing = .02; // -0.7;

        /**
         * callback called when a note is played, receives
         * @type {notePlayedCalback}
         */
        this.onNotePlayed = this.reportNote;
    }



    /**
     * plays a note
     * @param  {number} note - midi pitch value - middle C is 60
     * @param  {number} length - length of note in seconds
     * @param  {number} time - time in seconds from now to start note
     */
    playNote(note, length, time = 0) {
        this.noteOn(note, time);
        this.noteOff(note, time + length - this.spacing);
    }

    /**
     * starts a note
     * @param  {number} note - midi pitch value - middle C is 60
     * @param  {number} time - time in seconds from now to start note
     */

    noteOn(note, time = 0) {
        if (note === undefined || length === undefined) {
            console.error("playNote requires note and length parameters");
            return;
        }

        if (note !== "rest") {
            //schedule the pitch change
            const frequency = midiToFreq(note);

            this.oscillator.freq(frequency, 0, time);
            // const now = getAudioContext().currentTime;
            // this.oscillator.oscillator.frequency.setValueAtTime(frequency, now + time);

            this.envelope.mult(this.amplitude);
            this.envelope.triggerAttack(this.oscillator, time);

            setTimeout(() => {
                this.onNotePlayed(self, note, length, time);
            }, time * 1000);
        }
    }

    /**
     * ends a note
     * @param  {number} note - midi pitch value - middle C is 60
     * @param  {number} time - time in seconds from now to start note
     */
    noteOff(note, time = 0) {
        // note is not used since this is a monophonic synth there can only be one note
        this.envelope.triggerRelease(this.oscillator, time);
    }

    /**
     * plays a series of notes in sequence
     * @param  {Array.Array} notes - An array of note descriptions [note, length]
     */
    playNotes(notes) {
        let time = 0;
        for (let i = 0; i < notes.length; i++) {
            const freq = notes[i][0];
            const length = notes[i][1];
            this.playNote(freq, length, time);
            time += length;
        }
    }

    /**
     * logs the note to the console
     */
    reportNote(synth, note, length) {
        console.log("Note Played!", synth.name, note, length);
    }

}