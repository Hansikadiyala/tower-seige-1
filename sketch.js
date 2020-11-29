









var standObj;

function setup() {
  createCanvas(800,400);
  
standObj = new Stand(200,600,200,20);




}

function draw() {
  background(255,255,255);
standObj.display();
  drawSprites();
}