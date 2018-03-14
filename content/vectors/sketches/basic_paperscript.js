// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

var bounds = new Rectangle(new Point(0, 0), new Point(500, 500));
var rectangle = new Path.Rectangle(bounds);
rectangle.fillColor = '#61ACEC';

var circle1Location = new Point(200, 250);
var circle1 = new Path.Circle(circle1Location, 150);
circle1.fillColor = 'red';

var circle2 = new Path.Circle(circle1Location + new Point(100, 0), 150);
circle2.fillColor = 'black';

