var movingRect,fixedRect;

var pan;



function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);

  fixedRect.shapeColor = "red";

  movingRect = createSprite(700,200,50,50);

  movingRect.shapeColor = "red";

  pan = createSprite(100,200,20,20);

  



}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;

  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x);

  console.log(movingRect.width/2 + fixedRect.width/2);



  if(isDetecting(movingRect,fixedRect)) {


    movingRect.shapeColor = "green";

    fixedRect.shapeColor = "green";

  } else{

    movingRect.shapeColor = "pink";

    fixedRect.shapeColor = "pink";

    pan.shapeColor = "pink";

  }

  if(isDetecting(pan,movingRect)) {


    pan.shapeColor = "green";

    movingRect.shapeColor = "green";

  } 



  



  drawSprites();
}



