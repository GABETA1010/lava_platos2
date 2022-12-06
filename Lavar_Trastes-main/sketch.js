var bg, bgImg
var dishWasherImg;
var handAnimation;
var cleanDishesImg;
var dirtyDishesImg;
var hand;
var disrty;
var clean;
 

function preload(){

handAnimation = loadAnimation("assets_lavaplatos/left_hand.png","assets_lavaplatos/right_hand.png");
dishWasherImg = loadImage("assets_lavaplatos/fregadero.png");
cleanDishesImg = loadImage("assets_lavaplatos/platos_limpios.png");
dirtyDishesImg = loadImage("assets_lavaplatos/platos_sucios.png");

}

function setup(){

  createCanvas(windowWidth,windowHeight);
  
  hand = createSprite(950,700);
  hand.addAnimation("hands",handAnimation);
  hand.scale = 0.9; 
  
  
}

function draw() {
  
  background(255);
  image(dishWasherImg,0,0,windowWidth,windowHeight);
  dishes();
  drawSprites();
 
}


function dishes(){

  if(World.frameCount % 60 == 0 ){

    clean = createSprite(Math.round(random(700,2000)),Math.round(random(30,600)))
    clean.addImage(cleanDishesImg);
    clean.scale = 0.5
    clean.velocityY = 5

  }

}