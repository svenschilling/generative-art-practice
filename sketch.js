// SETUP 
JSON_DATA = "";
BEZIER_DETAIL = 20; // default 20
FPS_RATE = 60;



function preload() {
  // preload json data to make sure its fully loaded on init
  JSON_DATA = loadJSON("");

  // img = loadImage("1.jpg");
  // imgMask = loadImage("mask.png");
}

function setup() {
  createCanvas(800, 800, WEBGL);
  frameRate(FPS_RATE);
}

function draw() {
  console.log(JSON_DATA.x);
  loadPixels();
  createImage();
  background(220);
  if (random(100) == 23) {
    fill(0);
  } else {
    fill(255);
    return false;
  }
  console.log(Math.floor(random() * 100));
  console.log("rdn" + random(100));
  test = ellipse(mouseX, mouseY, Math.floor(random() * 100));
  console.log(test);
  drawBezier();

}

function parseJSON(DATA) {
  // load DATA 
  console.log(DATA);
  saveJSON(danceDATA);
  return DATA;
}

function drawBezier() {
  console.log(DATA);
  // beginShape()
  //   bezier()
  // bezierDetail() // default 20
  // endshape()
  noFill();
  beginShape();
    curveVertex(84, 91);
    curveVertex(84, 91);
    curveVertex(68, 19);
    curveVertex(21, 17);
    curveVertex(32, 91);
    curveVertex(32, 91);
  endShape();
}