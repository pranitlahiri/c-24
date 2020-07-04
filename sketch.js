var paper,ground;
var basketBottom,basketLeft,basketRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}
 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
	Engine.run(engine);
  ground = new Ground (width/2,height-35,width,20);
  ball = new Ball (width/4,height-50,50,50);
  basketBottom = new Basket (width-125,height-50,140,20)
  basketLeft = new Basket (width-200,height-90,20,100)
  basketRight = new Basket (width-50,height-90,20,100)
  
}


function draw() {
  rectMode(CENTER);
  background("maroon");
  ground.display();
  ball.display();
  basketBottom.display();
  basketLeft.display();
  basketRight.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-185});
  }
}



