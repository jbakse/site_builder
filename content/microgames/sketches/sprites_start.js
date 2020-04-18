// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js
// require /microgames/sketches/p5.play.js


// art from opengameart.org
// https://opengameart.org/content/a-platformer-in-the-forest

var sprite1, sprite2;



function setup() {
    createCanvas(600, 300);

    var kingImage = loadImage("/microgames/sketches/king.png");
    var guyImage = loadImage("/microgames/sketches/guy.png");


    sprite1 = createSprite(200, 150, 100, 100);
    sprite1.addImage("main", kingImage);
    sprite1.scale = 4;

    sprite2 = createSprite(400, 150, 100, 100);
    sprite2.addImage("main", guyImage);
    sprite2.scale = 4;
    sprite2.addSpeed(1, 180);

    noSmooth();
}


function draw() {
    background(50, 50, 80);

    drawSprites();
}
