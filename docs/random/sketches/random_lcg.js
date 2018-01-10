// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// random number generator
// super basic Linear congruential generator
// based on https://en.wikipedia.org/wiki/Linear_congruential_generator
// values from http://www.phy.ornl.gov/csep/rn/node11.html

var m = 16;
var c = 1;
var a = 5;
var seed = 1;

function setup() {
    for (i = 0; i < 20; i++) {
        console.log(makeRandom());
    }
}

function makeRandom() {
    seed = (seed * a + c) % m;
    return seed / m;
}