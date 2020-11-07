var fixedRect, movingRect;
var o1,o2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,200,80,50);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "magenta";
  fixedRect.shapeColor = "magenta";
  
  o1 = createSprite(400, 100, 50, 80);
  o1.shapeColor = "teal";
  o2 = createSprite(400, 800,80,30);
  o2.shapeColor = "indigo";
  

  o2.velocityY = -5;
  o1.velocityY = +5;

}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x - fixedRect.x)

  if (o2.x - o1.x < o1.width/2 + o2.width/2
    && o1.x - o2.x < o1.width/2 + o2.width/2) {
      o2.velocityX = o2.velocityX * (-1);
  o1.velocityX = o1.velocityX * (-1);
}
if (o2.y - o1.y < o1.height/2 + o2.height/2
  && o1.y - o2.y < o1.height/2 + o2.height/2){
    o2.velocityY = o2.velocityY * (-1);
  o1.velocityY = o1.velocityY * (-1);
}

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2&&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2&&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "midnightblue";
    fixedRect.shapeColor = "midnightblue";
  }else{
    movingRect.shapeColor = "magenta";
    fixedRect.shapeColor = "magenta";
  }

  drawSprites();
}