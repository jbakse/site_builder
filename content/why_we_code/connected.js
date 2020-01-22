// uses the https://fcc-weather-api.glitch.me/ api to get the temp!

// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js

let weatherJSON;

async function preload() {
  const response = await fetch('https://fcc-weather-api.glitch.me/api/current?lat=40&lon=-72');
  weatherJSON = await response.json();
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);
  fill(255);

  textSize(40);
  if (weatherJSON) {
    const temp = floor(map(weatherJSON.main.temp, 0, 100, 32, 212));
    text(`It is ${temp}°`, 200, 200);
  } else {
    text('waiting...', 200, 200);
  }
}
