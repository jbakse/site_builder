// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var generatedNumber = null;
var buckets = [];

function generateNumber() {
    // even distribution
    return random(0, 10);

    // you can scale and slide a random (0-1) value yourself: [4-8)
    // return random() * 4 + 4;

    // roll a standard die
    // return floor(random(0,6)) + 1;
    // return floor(random(1,7));

    // this won't quite work. why?
    //return floor(random(1,6));

    // generate two numbers, and average them to get a middle bias
    // return (random(0,10) + random(0,10)) / 2;

    // pick the lower of two random numbers for low bias
    // return min(random(0,10), random(0,10));

    // pick the higher of two random numbers for high bias
    // return max(random(0,10), random(0,10));

    // average more than two numbers to get something like normal, bell curve distribution
    // return (random(0,10) + random(0,10) + random(0,10)) / 3;

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(16);
    buckets[0] = 0;
    buckets[1] = 0;
    buckets[2] = 0;
    buckets[3] = 0;
    buckets[4] = 0;
    buckets[5] = 0;
    buckets[6] = 0;
    buckets[7] = 0;
    buckets[8] = 0;
    buckets[9] = 0;
}

function draw() {
    clear();

    text("Click to Generate Number", 10, 20);
    if (generatedNumber !== null) {
        text(generatedNumber, 10, 40);
    }

    drawBuckets();
}

// draw buckets draws a histogram showing how many values have fallen in each bucket
function drawBuckets() {
    for (i = 0; i < buckets.length; i++) {
        text(i, 10 + 20 * i, height - 10);

        var barLeft = 10 + 20 * i;
        var barBottom = height - 30;
        var barHeight = buckets[i] * 15;

        rect(barLeft, barBottom, 15, -barHeight);
    }
}

function mouseReleased() {
    // pick a number
    generatedNumber = generateNumber();
    // console.log("Generated: ", generatedNumber);

    // increment the bucket that number falls into
    buckets[floor(generatedNumber)] += 1;

}