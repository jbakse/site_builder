// require https://cdn.jsdelivr.net/npm/p5@0.7.3/lib/p5.min.js
// require https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js
// require https://www.gstatic.com/firebasejs/5.9.2/firebase-firestore.js
/* global firebase */

const config = {
  apiKey: 'AIzaSyDZ3qPO3YoXEqZRIL1KKvupnsizuZcEvDQ',
  projectId: 'why-we-code-living',
};

firebase.initializeApp(config);
const db = firebase.firestore();
const clicksDB = db.collection('clicks');

const clicks = [];
listen_for_clicks();

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
}

function draw() {
  background(30);

  for (const click of clicks) {
    ellipse(click.x, click.y, 10, 10);
  }
}

function mouseClicked() {
  add_click(mouseX, mouseY);
}

function add_click(x, y) {
  clicksDB
    .add({ x, y, created: firebase.firestore.FieldValue.serverTimestamp() })
    .then((docRef) => {
      console.log('Wrote: ', docRef.id);
    });
}

function listen_for_clicks() {
  clicksDB.onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        console.log('Read: ', change.doc.id);
        clicks.push({
          x: change.doc.data().x,
          y: change.doc.data().y,
        });
      }
    });
  });
}
