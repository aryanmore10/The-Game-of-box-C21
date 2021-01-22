
var fixedRect,movingRect,gameRect1,gameRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(800, 400, 50, 50);
  movingRect.shapeColor="red";

  gameRect1=createSprite(200, 500, 50, 50);
  gameRect1.shapeColor="red";

  gameRect2=createSprite(100, 600, 50, 50);
 gameRect2.shapeColor="red";

}

function draw() {
  background(0); 
   
  movingRect.x =World.mouseX;
  movingRect.y =World.mouseY;

if(isTouching(movingRect,gameRect1)){
  movingRect.shapeColor = "pink"; 
  gameRect1.shapeColor = "pink"; 
}
else{
  movingRect.shapeColor = "red"; 
  gameRect1.shapeColor = "red";
}


 

  drawSprites();
}
function isTouching(ob1,ob2){
  if (ob1.x -ob2.x < ob2.width/2 +ob1.width/2 &&
    ob2.x - ob1.x <ob2.width/2 + ob1.width/2 && 
    ob1.y - ob2.y < ob2.height/2 + ob1.height/2 &&
    ob2.y - ob1.y < ob2.height/2 +ob1.height/2) {
    
      return true;


}
else { 
  return false;
 } 
}