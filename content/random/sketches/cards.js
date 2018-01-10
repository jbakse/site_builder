// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var pickedValue = null;
var buckets = [];

var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var position = 0;

function valueFromDeck() {
    var v = values[position];
    position++;
    if (position > 9) {
        values = shuffle(values);
        position = 0;
    }
    return v;
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

    values = shuffle(values);
}

function draw() {
    clear();

    text("Click to Generate Number", 10, 20);
    if (pickedValue !== null) {
        text(pickedValue, 10, 40);
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
    pickedValue = valueFromDeck();
    // console.log("Generated: ", pickedValue);

    // increment the bucket that number falls into
    buckets[floor(pickedValue)] += 1;

}