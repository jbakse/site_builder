// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.5/dat.gui.js
/* eslint-disable */

draw();

function draw() {
  // create a cluster of points
  var points = clusterPoints(new Point(0, 0), 30, 30);

  for (var i = 0; i < points.length; i++) {
    p = points[i];
    Path.Circle(p, 30);
  }
}

function clusterPoints(center, point_count, spacing) {
  var points = [];
  for (var i = 0; i < point_count; i++) {
    points.push(center + randomPoint());
  }

  relaxPoints(points, spacing, spacing * 0.1, 30);

  return points;
}

function relaxPoints(points, min, stepSize, steps) {
  min = min * min;
  for (var step = 0; step < steps; step++) {
    for (var i1 = 0; i1 < points.length; i1++) {
      for (var i2 = 0; i2 < points.length; i2++) {
        if (i1 === i2) continue;
        var p1 = points[i1];
        var p2 = points[i2];
        var direction = (p1 - p2).normalize();
        var dist = p1.getDistance(p2, true);
        if (dist < min) {
          p1 = p1 + direction * stepSize;
          p2 = p2 - direction * stepSize;
        }
        points[i1] = p1;
        points[i2] = p2;
      }
    }
  }
}

function randomPoint() {
  return new Point(randomRange(-1, 1), randomRange(-1, 1));
}
