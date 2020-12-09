// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js
// require /microgames/sketches/p5.play.js

let ball;
let walls;
let paddle;

function setup() {
  createCanvas(500, 500);
  ball = createSprite(250, 250, 20, 20);

  ball.velocity.x = 5;
  ball.velocity.y = 5;

  walls = new Group();
  const left_wall = createSprite(5, height * 0.5, 10, height);
  left_wall.immovable = true;
  walls.add(left_wall);
  const right_wall = createSprite(width - 5, height * 0.5, 10, height);
  right_wall.immovable = true;
  walls.add(right_wall);
  const top_wall = createSprite(width * 0.5, 5, width, 10);
  top_wall.immovable = true;
  walls.add(top_wall);
  const bottom_wall = createSprite(width * 0.5, height - 5, width, 10);
  bottom_wall.immovable = true;
  walls.add(bottom_wall);

  paddle = createSprite(250, 450, 100, 20);
  paddle.immovable = true;
}

function clamp(_v, _min, _max) {
  return min(max(_v, _min), _max);
}

function draw() {
  background(200);

  paddle.position.x = clamp(mouseX, 50, 450);
  ball.bounce(walls);
  ball.bounce(paddle);

  drawSprites();
}
