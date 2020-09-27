var movingrect;
var fixedrect




function setup() {
createCanvas(800,400);
 fixedrect = createSprite(200,200,60,40)
 fixedrect.shapeColor = "green";
 movingrect = createSprite(400,200,40,60)
 movingrect.shpeColor = "green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x = mouseX;
  movingrect.y = mousey;
  if(movingrect.x - fixedrect.x< movingrect.width/2+fixedrect.width/2 
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.with/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2) {
      fixedrect.shapeColor = "red";
      movingrect.shapeColor = "red";
    }
    else{
      movingrect.shapeColor = "green";
      fixedreect.shapeColor = "green";
    }
}