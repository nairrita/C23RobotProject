//learn to use rotate translate push and pop

var x=60;
var y=440;
var radius = 45;
var bodyHeight = 180;
var neckHeight = 40;

var easing =0.04;

function setup(){
  createCanvas(360,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw(){
  background("white");
  var neckY=-1*(bodyHeight+neckHeight+radius);
  translate(mouseX,y);

  if(mouseIsPressed){
    scale(1.0);
  }
  else{
    scale(0.6);
  }
  noStroke();
  fill("Black");
  ellipse(0,-33,33,33);
  fill("black");
  rect(-45,-bodyHeight,90,bodyHeight-33);

  stroke("black");
  line(12,-bodyHeight,12,neckY);

  push();
  translate(12,neckY);
  var angle = -PI/30
  for(var i=0;i<=30;i++){
    line(80,0,0,0);
    rotate(angle);
  }
  pop();

  noStroke();
  fill("black");
  ellipse(12,neckY,radius,radius);
  fill("white");
  ellipse(24,neckY-6,14,14);
  fill("black");
  ellipse(24,neckY-6,3,3);
}