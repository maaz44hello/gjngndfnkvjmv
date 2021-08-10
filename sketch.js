var bg ;
var allPlayers
var character
var spaces
var laserGroup;
var laserImg

function preload(){
bg = loadImage("space.png");
character= loadImage("spaceship2.png");
spaces=loadImage("spaceship.png")
laserImg=loadImage("laser1234.png")
}

function setup() {
  createCanvas(1000,700);
  win=createSprite(200,550,10,80);
  win.addImage(character)

  spaceship1=createSprite(500,100,400,700)
 spaceship1.addImage(spaces)
 spaceship1.scale=0.5

 laserGroup= new Group();

}

function draw() {
  background(bg);

  createEdgeSprites();

 

  if (keyIsDown(RIGHT_ARROW)){
   win.velocityX= +4
  }
  else{
    win.velocityX=0
  }

  if (keyIsDown(LEFT_ARROW)){
    win.velocityX= -4
   }
 

  if(keyDown("space")){
    createLaser();
    
  }


  drawSprites();
}
function createLaser() {
  var laser= createSprite(100, 100, 60, 10);
  laser.scale=0.1
  laser.addImage(laserImg);
  laser.x = win.x
  laser.y=win.y;
  laser.velocityY = -4;
  laser.lifetime = 200;
  laser.scale = 0.3;
  laserGroup.add(laser);
   
}

