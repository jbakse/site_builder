// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js
/* eslint-disable */

////////////////////////////////////////////////
// drawing settings

function onMouseMove(e) {
  draw(e);
}
function draw(e) {
  //   var line = new Path.Line([10, 10], [100, 100]);
  project.activeLayer.removeChildren();
  var line = new Path.Rectangle([100, 100], [200, 200]);
  line.strokeColor = "blue";
  line.strokeWidth = 3;

  var circle = new Path.Circle(e.point, [100, 100]);
  circle.strokeColor = "black";

  var result = subtract(line, circle);

  for (var i = 0; i < result.removed.length; i++) {
    project.activeLayer.addChild(result.removed[i]);
    result.removed[i].strokeColor = "red";
    result.removed[i].strokeWidth = 1;
  }
}

// subtract(a, b) splits line `a` into segements and removes the segments that are inside line `b`
function subtract(a, b) {
  // line b has to be closed or subtract doesn't make sense
  if (!b.closed) {
    return false;
  }
  // line a doesn't have to be closed, and if it is we need to put in a hairline cut to open it
  if (a.closed) {
    a.splitAt(0);
  }

  // find all the points where a crosses b
  var crossings = a.getCrossings(b);

  // the kept array lists the segments outside b
  // the removed array lists the segments inside b
  var kept = [];
  var removed = [];

  // start at the end of a, work backwards, cutting of segments
  for (var i = crossings.length - 1; i >= 0; i--) {
    // cut off a segement
    var splitPart = a.splitAt(crossings[i].offset);
    // check if it is inside b
    if (b.contains(splitPart.getPointAt(splitPart.length * 0.5))) {
      splitPart.remove();
      removed.push(splitPart);
    } else {
      kept.push(splitPart);
    }
  }
  // check what is left of line a
  if (b.contains(a.getPointAt(a.length * 0.5))) {
    a.remove();
    removed.push(a);
  } else {
    kept.push(a);
  }

  // return which segments were kept and removed (so the visualizer can put the removed ones back on the page)
  return {
    kept: kept,
    removed: removed
  };
}
