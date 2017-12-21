// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();

    noStroke();
    fill(255, 255, 255);
}

function draw() {
    background(50, 50, 70);

    // fill(150, 150, 150);
    // drawRow(height * 0.5 - 30);

    // fill(200, 200, 200);
    // drawRow(height * 0.5 - 15);

    fill(250, 250, 250);
    drawRow(height * 0.5);



}

function drawRow(y) {
    var x = 0;
    while (x < width) {
        drawObject(x, y);
        x += 15;
    }
}

function drawObject(x, y) {
    var r = random(100);
    if (r < 10) {
        drawGrass(x, y);
    } else if (r < 70) {
        drawTree(x, y);
    } else if (r < 80) {
        drawHouse(x, y);
    } else {
        drawBush(x, y);
    }
}

function drawGrass(x, y) {
    rect(x, y, 15, 20);
}


function drawHouse(x, y) {
    drawGrass(x, y);
    rect(x, y - 10, 10, 10); // base
    triangle(x, y - 10, x + 5, y - 15, x + 10, y - 10); // roof
}

function drawTree(x, y) {
    if (random() < 0.2) {
        drawMapleTree(x, y);
    } else {
        drawSpruceTree(x, y);
    }
}

function drawSpruceTree(x, y) {
    drawGrass(x, y);
    var height = floor(min(random(1, 4), random(1, 4)));

    height = height * 5;

    rect(x + 3, y - height, 4, height); // trunk
    triangle(x, y - height, x + 5, y - height - 10, x + 10, y - height); // bottom branch
    triangle(x, y - height - 5, x + 5, y - height - 15, x + 10, y - height - 5); // top
}


function drawMapleTree(x, y) {
    drawGrass(x, y);
    rect(x + 3, y - 10, 4, 10); // trunk
    ellipse(x + 5, y - 10, 10, 10); // bush
}

function drawBush(x, y) {
    drawGrass(x, y);
    ellipse(x + 5, y, 10, 10); // bush
}