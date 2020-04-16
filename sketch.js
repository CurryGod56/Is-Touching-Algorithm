var fixedrect;
var movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect =createSprite(400, 200, 30, 80);
  fixedrect.shapeColor = "blue";
  movingrect = createSprite(200,200,80,30);
  movingrect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(fixedrect.width/2 + movingrect.width/2 > fixedrect.x - movingrect.x && fixedrect.width/2 + movingrect.width/2 > movingrect.x - fixedrect.x && fixedrect.height/2 + movingrect.height/2 > fixedrect.y - movingrect.y && fixedrect.height/2 + movingrect.height/2 > movingrect.y - fixedrect.y){
      movingrect.shapeColor = "green";
      fixedrect.shapeColor = "green";
  }
  else{
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";}



  
  drawSprites();
}