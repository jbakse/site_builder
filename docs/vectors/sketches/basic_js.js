// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
paper.setup(canvas);

var bounds = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(500, 500));
var rectangle = new paper.Path.Rectangle(bounds);
rectangle.fillColor = '#61ACEC';

var circle1 = new paper.Path.Circle(new paper.Point(200, 250), 150);
circle1.fillColor = 'red';

var circle2 = new paper.Path.Circle(new paper.Point(300, 250), 150);
circle2.fillColor = 'black';