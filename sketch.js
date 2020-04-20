                                                                      var ball,img,paddle;
function preload() {
  ballimage = loadImage('ball.png');
  paddleimage=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimage); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimage)
  
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[2]); 
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY= -9;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY= 9;
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

