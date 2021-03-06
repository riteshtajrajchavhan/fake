

function preload(){
backImg=loadImage("back.gif");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  


  back=createSprite(windowWidth/2,windowHeight/2);
  back.addImage(backImg);
  back.scale=2.5;

  

//createing  the road


}

function draw() { 
  background(0);
  drawSprites();
 back.velocityY=5;
  


}



