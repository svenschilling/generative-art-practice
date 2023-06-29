// SETUP  
dataJSON = jsonData;


function preload() {
  img = loadImage("1.jpg");
  imgMask = loadImage("mask.png");
  // jsonData = loadJSON("json/WalkTheDemon_frontal_by_Marco_Goecke.json")
}

function setup() {
  createCanvas(800, 800, WEBGL);
  frameRate(60);
}

function draw() {
  // console.log(dataJSON.x)
  // loadPixels();
  // createImage();
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
}

function parseJSON(DATA) {
  // load DATA 
  console.log(DATA);
  // danceDATA = loadJSON(DATA);
  saveJSON(danceDATA);
  return DATA;
}

function drawBezier(jsonX,jsonY,jsonZ) {
  console.log(DATA);
  beginShape()
    bezier()
    bezierDetail() // default 20
  endshape()
  return 0;
}