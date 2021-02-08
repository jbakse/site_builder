// require https://cdn.jsdelivr.net/npm/tweakpane@1.5.8/dist/tweakpane.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

const params = {
  pos_x: 0,
  pos_y: 0,
  size: 0,
  color: "blue",
};

const pane = new Tweakpane();

function setup() {
  createCanvas(window.innerWidth, window.innerHeight * 0.5);

  fill(100);
  noStroke();
  rectMode(CENTER);

  params.pos_x = width * 0.5;
  pane.addInput(params, "pos_x", { min: 0, max: width });

  params.pos_y = height * 0.5;
  pane.addInput(params, "pos_y", { min: 0, max: height });

  params.size = 100;
  pane.addInput(params, "size", { min: 10, max: 200 });

  params.color = "#0000FF";
  pane.addInput(params, "color", { min: 0, max: width, input: "color" });
}

function draw() {
  background(250);
  fill(params.color);

  rect(params.pos_x, params.pos_y, params.size, params.size);
}
