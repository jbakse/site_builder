// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.5/dat.gui.js
/* eslint-disable */

////////////////////////////////////////////////
// drawing settings
var GAPPY = 2;
var SLOPPY = 2;
var SHADOW_BLUR = 0;
var ROUGH = 0.1;
var STROKE = 1.0;
var COLOR_GAPS = false;

draw();
function draw() {
  project.activeLayer.removeChildren();
  drawCircle([300, 260], 30);
  drawCircle([280, 280], 30);
  drawCircle([330, 300], 30);
  drawCircle([280, 320], 30);
  drawCircle([310, 340], 30);
}

function drawCircle(center, radius) {
  // create backing blocker
  var back_path = new Path.Circle(center, radius + GAPPY);
  back_path.name = "back";
  back_path.translate(randomPoint() * SLOPPY);
  back_path.style = {
    fillColor: COLOR_GAPS ? "red" : "white",
    shadowColor: new Color(1, 1, 1, 1),
    shadowBlur: SHADOW_BLUR,
    shadowOffset: 0
  };

  // create stroke circle
  var path = new Path.Circle(center, radius);
  path.name = "front";
  path.style = {
    fillColor: new Color(1, 1, 1, 1),
    strokeColor: new Color(0.3, 0.3, 0.3),
    strokeWidth: STROKE
  };

  for (var s = 0; s < path.segments.length; s++) {
    path.segments[s].point += randomPoint() * ROUGH * radius;
  }

  // add a dashed clone of the stroke to give some slight variation to weight and color
  var dash_path = path.clone();
  dash_path.style = {
    dashOffset: randomRange(0, 200),
    dashArray: [randomRange(0, 50), 200],
    strokeColor: new Color(0.3, 0.3, 0.3),
    strokeWidth: STROKE * 1.3,
    strokeCap: "round",
    fillColor: undefined,
    strokeScaling: true
  };

  return new Group([back_path, path, dash_path]);
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function randomPoint() {
  return new Point(randomRange(-1, 1), randomRange(-1, 1));
}

////////////////////////////////////////////////////
// Set up sliders
var settings = {
  GAPPY: GAPPY,
  SLOPPY: SLOPPY,
  SHADOW_BLUR: SHADOW_BLUR,
  ROUGH: ROUGH,
  STROKE: STROKE,
  COLOR_GAPS: COLOR_GAPS
};

var gui = new dat.GUI();
gui.add(settings, "GAPPY", 0, 20).onChange(update);
gui.add(settings, "SLOPPY", 0, 20).onChange(update);
gui.add(settings, "SHADOW_BLUR", 0, 20).onChange(update);
gui.add(settings, "ROUGH", 0, 1).onChange(update);
gui.add(settings, "STROKE", 0.5, 20).onChange(update);
gui.add(settings, "COLOR_GAPS").onChange(update);
// gui.remember(settings);
function update() {
  GAPPY = settings.GAPPY;
  SLOPPY = settings.SLOPPY;
  SHADOW_BLUR = settings.SHADOW_BLUR;
  ROUGH = settings.ROUGH;
  STROKE = settings.STROKE;
  COLOR_GAPS = settings.COLOR_GAPS;
  draw();
}
