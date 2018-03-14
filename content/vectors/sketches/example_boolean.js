// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

var center = new Point(250, 250);

// create the red, rotated square
var rectangle1 = new Rectangle(new Point(100, 100), new Size(300, 300));
var path1 = new Path.Rectangle(rectangle1);
path1.strokeColor = 'red';
path1.rotate(45);

// create the green rectangle
var rectangle2 = new Rectangle(new Point(0, 100), new Size(250, 300));
var path2 = new Path.Rectangle(rectangle2);
path2.strokeColor = 'green';

// cut the green rectangle from the red square
// style the result
var comboPath = path1.subtract(path2);
comboPath.style = {
    strokeColor: 'black',
    fillColor: '#ccf',
    strokeWidth: 4,
    dashArray: [10, 4],
    shadowColor: new Color(0, 0, 0, .5),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5),
}