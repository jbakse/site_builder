// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

// var canvas = document.getElementById('paperCanvas');

var center = new Point(250, 250);

// create the red, rotated square
for (var i = 0; i < 30; i++) {
    var bounds = new Rectangle(center - [i * 15, i * 15], center + [i * 15, i * 15]);
    var path = new Path.Rectangle(bounds);
    path.strokeColor = 'red';
    path.strokeWidth = 2;
    path.rotate(i * 5);
}