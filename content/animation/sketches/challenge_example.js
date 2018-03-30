// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

const particles = 3000;

function setup() {
    createCanvas(1280, 720);
    frameRate(30);
}


function draw() {
    clear();

    const baseRadius = map(frameCount, 0, 90, height * .75, 0, true);
    const waveAmplitude = map(frameCount, 0, 90, 0, 100, true);
    const waveFreq = map(frameCount, 0, 90, 0, 40, true);


    for (let i = 0; i < particles; i++) {
        const iN = i / particles;

        const cX = width * .5;
        const cY = height * .5;

        const wave = sin((iN - .5) * PI * 2 * waveFreq) * waveAmplitude;
        const radius = baseRadius + wave;

        const x = cX + sin(iN * PI * 2) * radius;
        const y = cY + cos(iN * PI * 2) * radius;
        ellipse(x, y, 10, 10);
    }

    if (frameCount === 90) {
        noLoop();
    }

    text(frameRate(), 30, 30);
}