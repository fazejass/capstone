var path,boy,pizza,sandwhich,burger,apple;
var pathImg,boyImg,pizzaImg,sandwhichImg,burgerImg,appleImg;
var foodCollection = 0;
var pizzaG,sandwhichG,burgerG,appleGroup;
 
//Game States
var PLAY=1;
var END=0;
var gameState=1;
 
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  pizzaImg = loadImage("pizza.png");
  sandwhichImg = loadImage("sandwhich.jpg");
  burgerImg = loadImage("burger.png");
  appleImg = loadImage("apple.jpg");
  endImg =loadAnimation("gameOver.png");
}
 
function setup(){
 
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
 
 
//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
 
 
pizzaG=new Group();
sandwhichG=new Group();
burgerG=new Group();
appleGroup=new Group();
 
}
 
function draw() {
 
  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
 
  edges= createEdgeSprites();
  boy.collide(edges);
 
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
 
    createpizza();
    createsandwhich();
    createburger();
    createapple();
 
    if (pizzaG.isTouching(boy)) {
      pizzaG.destroyEach();
      foodCollection=foodCollection+50;
    }
    else if (sandwhichG.isTouching(boy)) {
      sandwhichG.destroyEach();
      foodCollection=foodCollection+100;
     
    }else if(burgerG.isTouching(boy)) {
      burgerG.destroyEach();
 
      // foodCollection=+ 150;
      // foodCollection= 150;
      // foodCollection= foodCollection - 150;
       foodCollection= foodCollection + 150;
     
    }else{
      if(appleGroup.isTouching(boy)) {
        gameState=END;
       
        // boy.addAnimation(endImg);
        // boy.addAnimation("SahilRunning",endImg);
         boy.addAnimation("SahilRunning");
        // boy.addAnimation(SahilRunning,endImg);
 
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
       
        // pizzaG.destroyEach;
        // sandwhichG.destroyEach;
        // burgerG.destroyEach;
        // appleGroup.destroyEach;
 
        // pizzaG.destroy();
        // sandwhichG.destroy();
        // burgerG.destroy();
        // appleGroup.destroy();
       
         pizzaG.destroyEach();
         sandwhichG.destroyEach();
         burgerG.destroyEach();
         appleGroup.destroyEach();
       
        // pizzaGdestroyEach();
        // sandwhichGdestroyEach();
        // burgerGdestroyEach();
        // appleGroupdestroyEach();
       
        //pizzaG.setVelocityYEach(0);
        //sandwhichG.setVelocityYEach(0);
        //burgerG.setVelocityYEach(0);
        //appleGroup.setVelocityYEach(0);
     
    }
  }
 
  drawSprites();
  textSize(20);
  fill(255);
  text("food: "+ foodCollection,10,30);
  }
 
}
 
function createpizza() {
  if (World.frameCount % 200 == 0) {
  var pizza = createSprite(Math.round(random(50, 350),40, 10, 10));
  pizza.addImage(pizzaImg);
  pizza.scale=0.12;
  pizza.velocityY = 3;
  pizza.lifetime = 150;
  pizzaG.add(pizza);
  }
}
 
function createsandwhich() {
  if (World.frameCount % 320 == 0) {
  var sandwhich = createSprite(Math.round(random(50, 350),40, 10, 10));
  sandwhich.addImage(sandwhichImg);
  sandwhich.scale=0.03;
  sandwhich.velocityY = 3;
  sandwhich.lifetime = 150;
  sandwhichG.add(sandwhich);
}
}
 
function createburger() {
  if (World.frameCount % 410 == 0) {
  var burger = createSprite(Math.round(random(50, 350),40, 10, 10));
  burger.addImage(burgerImg);
  burger.scale=0.13;
  burger.velocityY = 3;
  burger.lifetime = 150;
  burgerG.add(burger);
  }
}
 
function createapple(){
  if (World.frameCount % 530 == 0) {
  var apple = createSprite(Math.round(random(50, 350),40, 10, 10));
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY = 3;
  apple.lifetime = 150;
  appleGroup.add(apple);
  }
}

