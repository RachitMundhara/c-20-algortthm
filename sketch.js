var fixedRect, movingRect;
var box1

function setup(){
  fixedRect = createSprite(400,200,50,200);
  movingRect = createSprite(200,200,100,30);
  
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
   box1 = createSprite(100,200,20,20)
   box1.velocityX =3

}
function draw() {
  
  background("white");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
 if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2  &&
   movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
   fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
  ){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else
 {
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
 }

 //bounceoff algorithm
 if(fixedRect.x - box1.x <= fixedRect.width/2 + box1.width/2){
   box1.velocityX = -3

 } 
  drawSprites()
}