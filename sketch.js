function setup() {
  createCanvas(700, 700);
  background("teal");
}

function draw() {
  stroke("green");
  fill("lime");
  
  
  if(mouseIsPressed){
  rect(mouseX,mouseY,50,50);
  }
}