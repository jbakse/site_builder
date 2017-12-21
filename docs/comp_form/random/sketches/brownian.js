// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();

    noStroke();
    fill(255, 255, 255);
}

function draw() {
    background(40, 40, 40);

    fill(220, 220, 220);



    stroke(220, 220, 220);
    drawBrownianPath(width * 0.5, height * 0.5, 10, 1000);

    stroke(255, 0, 0);
    drawBrownianPath1D(0, height * 0.5, 3, 5, 1000);
}

function drawBrownianPath(x, y, segmentLength, steps) {
    for (var step = 0; step < steps; step++) {

        var nextX, nextY;

        ////////////////////////////////////////////////////////////////////
        // even distribution

        nextX = x + random(-segmentLength, segmentLength);
        nextY = y + random(-segmentLength, segmentLength);


        ////////////////////////////////////////////////////////////////////
        // diagonals grid

        // if (random() < 0.5) {
        // 	nextX = x - segmentLength;
        // } else {
        // 	nextX = x + segmentLength;
        // }

        // if (random() < 0.5) {
        // 	nextY = y - segmentLength;
        // } else {
        // 	nextY = y + segmentLength;
        // }

        ////////////////////////////////////////////////////////////////////
        // 9 ways grid
        // var rX = random();
        // if (rX < 0.33) {
        // 	nextX = x - segmentLength;
        // } else if (rX < 0.66) {
        // 	nextX = x + segmentLength;
        // } else {
        // 	nextX = x;
        // }

        // var rY = random();
        // if (rY < 0.33) {
        // 	nextY = y - segmentLength;
        // } else if (rY < 0.66) {
        // 	nextY = y + segmentLength;
        // } else {
        // 	nextY = y;
        // }

        ////////////////////////////////////////////////////////////////////
        // 9 ways another way

        // nextX = x + floor(random(-1,2)) * segmentLength;
        // nextY = y + floor(random(-1,2)) * segmentLength;





        line(x, y, nextX, nextY);

        x = nextX;
        y = nextY;

    }
}


function drawBrownianPath1D(x, y, stepX, stepY, steps) {
    for (var step = 0; step < steps; step++) {

        var nextX, nextY;

        ////////////////////////////////////////////////////////////////////
        // even distribution

        nextX = x + stepX;
        nextY = y + random(-stepY, stepY);


        ////////////////////////////////////////////////////////////////////
        // grid
        // nextX = x + stepX;
        // nextY = y + floor(random(-1,2)) * stepY;

        line(x, y, nextX, nextY);

        x = nextX;
        y = nextY;

    }
}