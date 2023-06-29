// Settings
var FPS = 100
var SCENE_WIDTH = 1280
var SCENE_HEIGHT = 720
let angle = 0;
var index = 0;

//  stickman example
var line_map = {
  0 : [1, 4],
  1 : [2],
  2 : [3],
  3 : [7],
  4 : [5],
  5 : [6],
  6 : [8],
  9 : [10],
  11: [12, 13, 23],
  12: [14, 24],
  13: [15],
  14: [16],
  15: [17, 19, 21],
  16: [18, 20, 22],
  17: [19],
  18: [20],
  23: [24, 25],
  24: [26],
  25: [27],
  26: [28],
  27: [29, 31],
  28: [30, 32],
}

// basic function to find a joint by index from given frame
// use this as a template to create a function to return joints u desire to use
function find_by_bpindex(frame, bpindex, joint_type) {
  for (let joint_index in frame) {
    let joint = frame[joint_index]
    if ((joint.index == bpindex) && (joint.type == joint_type)) {
      return joint
    }
  }
  //console.log("Warning! No matching joint found!")
}

// preload json
function preload() {
  jsonData = loadJSON('data.json');
}

function setup() {
  createCanvas(SCENE_WIDTH, SCENE_HEIGHT); 
  frameRate(FPS);
  // parse json
  let DATA = JSON.parse(jsonData);
  console.log(DATA.x);
}

function draw() {
  // fetch current data_chunk aka frame
  let data_chunk = DATA[index]
  
  // early exit data check
  if (!data_chunk || data_chunk.keypoints) {
    //console.log("Incompatible / broken data, aborting ...")
    //console.log("This sketch is only compatible to BlazePose framewise scans")
    //console.log("Will not work on tensorflowJS records!")
    p.noLoop()
    return
  }

  // loop to create stickman body from line_map
  for (let first_bpindex in line_map) {
    let point_list = line_map[first_bpindex]
    for (let pindex in point_list) {
      let second_bpindex = point_list[pindex]
      let first_point = find_by_bpindex(data_chunk, first_bpindex, "body")
      let second_point = find_by_bpindex(data_chunk, second_bpindex, "body")

      // make sure we've found useful data, skip if not found
      if (!first_point || !second_point) {
        continue
      }

      // make sure to multiply normalized coordinates to get correct coordinates
      let x1 = first_point.x * SCENE_WIDTH
      let x2 = second_point.x * SCENE_WIDTH
      let y1 = first_point.y * SCENE_HEIGHT
      let y2 = second_point.y * SCENE_HEIGHT

      p.line(x1, y1, x2, y2)

    }
  }
  
  translate(width / 2, height / 2);
  
    for (let i = 0; i < 360; i += 10) {
        // TODO make a stroke between
        // bind json data to an inner square
        // bind the color tunnel also to json
    let x = sin(radians(x1 + angle)) * 100;
    let y = cos(radians(y1 + angle)) * 100;
    let r = map(sin(radians(angle)), -1, 1, 100, 255);
    let g = map(cos(radians(angle)), -1, 1, 100, 255);
    let b = map(sin(radians(angle * 3)), -1, 1, 100, 255);
    fill(r, g, b);
    noStroke();
    ellipse(x, y, 50, 50);
    // stroke(x, y, 50, 50); 
  }
  
  angle += 0.5;
  
  // example to loop over DATA via index variable
  if (index > DATA.length) {
    noLoop();  // stop when end of DATA is reached
  } else {
    index++;
  }
}
