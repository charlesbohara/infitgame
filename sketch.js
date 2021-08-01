var path,boy,doracake,cake,cake1,rat;
var pathImg,boyImg,doracakeImg,cakeImg,cake1Img,ratImg;
var score = 0;
var food = 0;
var doracakeG,cakeG,cake1G,ratGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("d1.png");
  doracakeImg = loadImage("da1.png");
  cakeImg = loadImage("c2.png");
  cake1Img = loadImage("c3.png");
  ratImg = loadImage("r1.png");
  endImg =loadAnimation("gameOver.png");
 
}

function setup(){
  
  createCanvas(windowWidth, windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=6;

//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("dramonRunning",boyImg);
boy.scale=0.2;
  
  
doracakeG=new Group();
cakeG=new Group();
cake1G=new Group();
ratGroup=new Group();

}

function draw() {

  if(gameState===PLAY)
  {
  background(0);
  boy.x = World.mouseX;
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y >  height )
  {
    path.y = height/2;
  }
      
  createDoracake();
  createCake();
  createCake1();
  createRat();
 



    if (doracakeG.isTouching(boy)) {
      doracakeG.destroyEach();
      score=score+50;
    }
    else if (cakeG.isTouching(boy)) {
      cakeG.destroyEach();
      score=score+100;
      
    }else if(cake1G.isTouching(boy)) {
      cake1G.destroyEach();
      score= score + 150;
      
    }else{
      if(ratGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("dramonRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.2;
        
        doracakeG.destroyEach();
        cakeG.destroyEach();
        cake1G.destroyEach();
        ratGroup.destroyEach();
        
        doracakeG.setVelocityYEach(0);
        cakeG.setVelocityYEach(0);
        cake1G.setVelocityYEach(0);
        ratGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ score,150,30);
  }

}

function createDoracake() {
  if (World.frameCount % 200 == 0) {
  var doracake = createSprite(Math.round(random(50, width-50),40, 10, 10));
  doracake.addImage(doracakeImg);
  doracake.scale=0.3;
  doracake.velocityY = 3;
  doracake.lifetime = 300;
  doracakeG.add(doracake);
  }
}

function createCake() {
  if (World.frameCount % 320 == 0) {
  var cake = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cake.addImage(cakeImg);
  cake.scale=0.1;
  cake.velocityY = 3;
  cake.lifetime = 300;
  cakeG.add(cake);
}
}

function createCake1() {
  if (World.frameCount % 410 == 0) {
  var cake1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cake1.addImage(cake1Img);
  cake1.scale=0.07;
  cake1.velocityY = 3;
  cake1.lifetime = 300;
  cake1G.add(cake1);
  }
}

function createRat(){
  if (World.frameCount % 530 == 0) {
  var rat = createSprite(Math.round(random(50, width-50),40, 10, 10));
  rat.addImage(ratImg);
  rat.scale=0.5;
  rat.velocityY = 3;
  rat.lifetime = 300;
  ratGroup.add(rat);
  }
}