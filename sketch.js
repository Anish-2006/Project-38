
  var monkey , monkey_running
  var banana ,backG,backimage;
  
  var distanceCovered;
  var ground;
  var start = 0;
  var play = 1;
  var gameState = start;
  
  

function preload(){
  
  
    monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
    monkey_Standing = loadImage("Monkey_07.png");
    
  
    backimage = loadImage("jungle.jpg");

  }

function setup() {
  
  createCanvas(500,400);
  
  for(var i =1;i < 100 ;i++){
    backG = createSprite(470 *i,150);
    backG.addImage(backimage);
    backG.scale = 0.95;
    
  }
  
 
  monkey = createSprite(130,300,1,1);
  //monkey.velocityX = 2;
  
  monkey.scale = 0.10;
  monkey.setCollider("circle",0,0,300)
  //monkey.debug = true;

  
  ground = createSprite(300,340,800,10);
  ground.visible = false;

  

}
  

function draw() {
  
  background(220);
  
  drawSprites();

  distanceCovered =Math.round((monkey.position.x - 130) /8);
  
  if(gameState === start){
    
    monkey.visible = false;
  
    textSize(30)
    
    fill("red");
    stroke("black");
    text("Press enter to start",120,60);

    textSize(20)
    
    fill("orange");
    stroke("black");
    strokeWeight(3);
    text("Press right arrow key to move ",40,120);

  }
  
  if(keyDown("enter")&& gameState === start){
    
    gameState = play;
    monkey.y = 300;
    
  }
  
  if(gameState === play){
    
  camera.position.x = monkey.position.x + 120;
    
  monkey.visible = true;
  
  
  if(keyIsDown(RIGHT_ARROW)){

    monkey.x = monkey.x + 2;
    ground.x = ground.x +2;
    monkey.addImage(monkey_Standing);
  }else{
    monkey.addAnimation("running",monkey_running);
    
  }
  
  monkey.collide(ground);
    
  // console.log(monkey.y);
    
  if(keyDown("space")&& monkey.y > 270){
    
    monkey.velocityY = -13.5;
    
  }
  textSize(20)
    
  fill("blue");
  stroke("black");
  text("Distance Covered : " + distanceCovered,monkey.x - 100,30);
  
  monkey.velocityY = monkey.velocityY + 0.7;
    
  }

 
}





