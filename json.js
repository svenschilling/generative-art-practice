import processing.core.*;

JSONArray json; // JSON array to store the data
PApplet parent; // Reference to the parent PApplet

void setup() {
  parent = this;
  createCanvas(800, 600, P3D);
  smooth();
  
  // Load the JSON file
  json = loadJSONArray("data.json");
  
  // Set the frame rate
  frameRate(30);
}

void draw() {
  background(0);
  
  // Translate to the center of the sketch
  translate(width/2, height/2, -500);
  
  // Rotate based on mouse position
  rotateX(map(mouseY, 0, height, -PI, PI));
  rotateY(map(mouseX, 0, width, -PI, PI));
  
  // Iterate through the JSON array and draw shapes
  for (int i = 0; i < json.size(); i++) {
    JSONObject point = json.getJSONObject(i);
    float x = point.getFloat("x");
    float y = point.getFloat("y");
    float z = point.getFloat("z");
    
    // Set the color based on the z-coordinate
    float hue = map(z, -100, 100, 0, 360);
    float saturation = map(z, -100, 100, 0, 100);
    float brightness = map(z, -100, 100, 100, 0);
    fill(hue, saturation, brightness);
    
    // Draw a sphere at the specified coordinates
    pushMatrix();
    translate(x, y, z);
    sphere(10);
    popMatrix();
  }
}