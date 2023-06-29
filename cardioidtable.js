function setup() {
  createCanvas(600, 600);
  background(255);
  


function draw() {
  // Code for any animations or updates can go here
    const cardioidRadius = 200;
  const numPoints = 360;
  const multiplicationFactor = 7;
  
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    const theta = radians(i);
    const x = cardioidRadius * cos(theta) * (1 + cos(multiplicationFactor * theta));
    const y = cardioidRadius * sin(theta) * (1 + cos(multiplicationFactor * theta));
    vertex(width / 2 + x, height / 2 + y);
  }
  endShape(CLOSE);
}
