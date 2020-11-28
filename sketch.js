var fixedRect;
var movingRect;
var obj1,obj2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600,100,100,50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX=-3;

  movingRect= createSprite(200,100,100,90);
  movingRect.shapeColor = "yellow";
  movingRect.velocityX= 3;

  obj1 = createSprite(500,100,50,50);
  obj1.shapeColor = "green";

  obj2 = createSprite(600,100,50,50);
  obj2.shapeColor = "green";
  
}

function draw() {
  background(0);  
obj1.x = World.mouseX;
obj1.y = World.mouseY;

if(isTouching(obj1,obj2)){
  obj1.shapeColor = "red";
  obj2.shapeColor = "red";
}

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

