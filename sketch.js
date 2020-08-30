

var player,runningPlayer,DuckingSteve;
var bg;
var ground,groundImg;
var obstacle1,obstacle2;
var score = 0;
var obj1, obj2;
var obstacleImgs;

function preload(){
 bg = loadImage("images/background.png");
 groundImg = loadImage("images/GROUND.png");
 runningPlayer = loadAnimation("images/MOVE1.png","images/MOVE2.png","images/MOVE3.png","images/MOVE4.png","images/MOVE5.png","images/MOVE4.png","images/MOVE3.png","images/MOVE2.png");
 obj1 = loadImage("images/enemy1.png");
 obj2 = loadImage("images/enemy2.png");
 DuckingSteve = loadAnimation("images/duck steve.png");
}

function setup(){
  createCanvas(1200,600);
 
  obstacleImgs = random(obj1,obj2)

  ground = createSprite(width/2,530,width,30);
 ground.addImage("ground",groundImg);
 ground.width = ground.width/2;


 player = createSprite(65,510,25,25);
player.addAnimation("player",runningPlayer);
camera.position.x = displayWidth/2 - 75;
camera.position.y = displayHeight/2 - 145;

obstacle1 = createSprite(width,510,50,50);
obstacle1.velocityX = -10;
obstacle1.addImage("mob1",obj1);

obstacle2 = createSprite(width + width/2,510,25,25);
obstacle2.velocityX = -10;
obstacle2.addImage("mob2",obj2);

}

function draw(){
  background(bg);

  score = Math.round(frameCount/2);
  if(ground.x < 0){
   ground.x = ground.width/1  ;
  }

  if(obstacle1.x < 0){
    obstacle1.x = random(width,width + 125);
   }
  
   if(obstacle2.x < 0){
    obstacle2.x = random(width,width + 200);
   }

  ground.velocityX = -10;

  player.velocityY = player.velocityY + 1;
  player.collide(ground);

  obstacle1.collide(ground);
  obstacle2.collide(ground);

 /* if(frameCount%100===0){
    ground.velocityX = ground.velocityX - 5;
  }*/
  ground.display();
 player.display();
 obstacle1.display();
 obstacle2.display();
  console.log(player.position.y);
   textSize(30);
 textFont("california");
 text("Score: " + score, 525, 100);
}
/*function spawnObstacles(){
  if(frameCount % 60 === 0){
   var obstacle = createSprite(1200,510,50,50);
    obstacle.velocityX = -10;
    obstacle.display();
   }
}*/
 
function keyPressed(){
 if(keyCode === 32 && player.y >= 447){
    player.velocityY = -17;
 
   }
   if(keyCode === 40){
    player.velocityY = +17;
    player.changeImage("duck steve", DuckingSteve);
  }
  
}

