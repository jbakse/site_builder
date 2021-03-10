// require https://cdn.jsdelivr.net/npm/tweakpane@1.5.8/dist/tweakpane.min.js
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

/*exported setup draw */

const pane = new Tweakpane();
const params = {
  frame_rate: 0,
};

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  pane.addMonitor(params, "frame_rate");
  pane.addMonitor(params, "frame_rate", {
    view: "graph",
    min: 0,
    max: 60,
  });
}

function draw() {
  background("gray");

  stroke("white");
  noFill();
  line(50, 200, 350, 200);

  noStroke();
  fill(0, 0, 0, 20);

  let i = floor(frameCount / 60);
  let f = frameCount / 60 - i;
  f = 1 - f;
  fuzzy_ellipse(200, 200, 150, 150, f * 40);

  params.frame_rate = frameRate();
}

function fuzzy_ellipse(x, y, w, h, fuzz = 100) {
  for (let i = 0; i < 100; i++) {
    const xx = random(-fuzz, fuzz);
    const yy = random(-fuzz, fuzz);
    if (dist(0, 0, xx, yy) > fuzz) continue;
    ellipse(x + xx, y + yy, w, h);
  }
}

// eslint-disable-next-line
function fuzzy_ellipse_2(x, y, w, h, fuzz = 100) {
  //stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly

  https: for (let i = 0; i < 100; i++) {
    const a = random(2 * PI);
    const d = sqrt(random()) * fuzz;
    ellipse(
      //
      x + sin(a) * d,
      y + cos(a) * d,
      w,
      h
    );
  }
}
