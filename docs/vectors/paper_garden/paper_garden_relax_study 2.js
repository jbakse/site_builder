// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable camelcase */
/* global paper */

const canvas = document.createElement("canvas");
document.body.style.textAlign = "center";
canvas.id = "paper-canvas";
canvas.width = "500";
canvas.height = "500";
document.body.appendChild(canvas);
let seed = 1;

paper.setup("paper-canvas");

let pointsGen = clusterPoints(new paper.Point(250, 250), 30, 60);

paper.project.view.onFrame = () => {
    stepDemo();
};

function stepDemo() {
    // clear drawing
    const points = pointsGen.next().value;
    if (!points) {
        pointsGen = clusterPoints(new paper.Point(250, 250), 30, 60);
    }

    paper.project.activeLayer.removeChildren();

    seed = 1;

    for (let i = 0; i < points.length; i++) {
        const path = new paper.Path.Circle(points[i], 10);
        path.style = {
            strokeColor: "black",
            strokeWidth: 5
        };
    }

    paper.project.view.draw();
}

function* clusterPoints(center, point_count, spacing) {
    const points = [];
    for (let i = 0; i < point_count; i++) {
        points.push(center.add(randomPoint().multiply(40)));
    }
    yield points;

    const relaxGen = relaxPoints(points, spacing, spacing * 0.1, 20);
    let relaxedPoints = relaxGen.next().value;
    while (relaxedPoints) {
        yield relaxedPoints;
        relaxedPoints = relaxGen.next().value;
    }
    yield false;
}

function* relaxPoints(points, min, stepSize, steps) {
    const minSquared = min * min;
    for (let step = 0; step < steps; step++) {
        for (let i1 = 0; i1 < points.length; i1++) {
            for (let i2 = 0; i2 < points.length; i2++) {
                if (i1 === i2) continue;
                let p1 = points[i1];
                let p2 = points[i2];
                const direction = p1.subtract(p2).normalize();

                const dist = p1.getDistance(p2, true);
                if (dist < minSquared) {
                    p1 = p1.add(direction.multiply(stepSize));
                    p2 = p2.subtract(direction.multiply(stepSize));
                }
                points[i1] = p1;
                points[i2] = p2;
            }
            yield points;
        }
    }
}

function randomPoint() {
    return new paper.Point(randomRange(-1, 1), randomRange(-1, 1));
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Math.random() doesn't support setting the seed, this quick and dirty random does.
function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}