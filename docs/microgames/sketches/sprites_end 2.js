var sprite1, sprite2;

// art from opengameart.org
// https://opengameart.org/content/a-platformer-in-the-forest

function setup() {
    createCanvas(600, 300);

    var kingImage = loadImage("king.png");
    var guyImage = loadImage("guy.png");


    sprite1 = createSprite(200, 150, 100, 100);
    sprite1.addImage("main", kingImage);
    sprite1.scale = 4;
    sprite1.addSpeed(1, 0);


    sprite2 = createSprite(400, 150, 100, 100);
    sprite2.addImage("main", guyImage);
    sprite2.scale = 4;
    sprite2.mirrorX(-1);
    // sprite2.mass = 2;
    sprite2.addSpeed(1, 180);
}


function draw() {
    background(50, 50, 80);
    noSmooth();
    sprite1.bounce(sprite2);
    drawSprites();
}
