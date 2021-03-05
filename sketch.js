var street, streetImage;
var boy,boyImage;
var PLAY=1;
 var gameState = PLAY;

function preload(){
  streetImage = loadImage("street.png");
  boyImage = loadImage("boy.png");
}

function setup() {
  createCanvas(1300, 600);
}

function draw() {
  background(streetImage);
 boy("boy",boyImage);
 
 if(gameState === PLAY){
  //move the ground
  street.velocityX = -4;}

  drawSprites();
}

