// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js


var bounds = new Rectangle(new Point(0, 0), new Point(500, 500));
var rectangle = new Path.Rectangle(bounds);
rectangle.fillColor = '#333';

var circle1 = new Path.Circle([200, 250], 50);
circle1.fillColor = 'red';
var deltaPosition = new Point(5, 0);

function onFrame() {
    circle1.position += deltaPosition;
    if (circle1.position.x > 500) {
        deltaPosition.x = -Math.abs(deltaPosition.x);
        circle1.fillColor = 'green';
    }
    if (circle1.position.x < 0) {
        deltaPosition.x = Math.abs(deltaPosition.x);
        circle1.fillColor = 'blue';
    }
}

