var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

var invi;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);
    
    invi = createSprite(0,585,2000,30);
    invi.shapeColor = "darkgrey";
    

    //BLOCKS
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(710,580,175,30);
    block4.shapeColor = "green";
    //BLOCK


    //BALL
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 5;
    ball.velocityY = -5;
    //BALL
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    //BALL BOUNCES
    ball.bounceOff(edges);
    ball.bounceOff(invi);
    //BALL BOUNCES
   
   
    
 //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
  if(ball.isTouching(block1)){
      ball.shapeColor = "blue";
     
  }

  if(ball.isTouching(block2)){
      ball.shapeColor = "orange";
  }

   if(ball.isTouching(block3)){
       ball.shapeColor = "red";
   }
       if(ball.isTouching(block4)){
           ball.shapeColor = "green";
 
   }   
  
 //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
   


    drawSprites();
}
