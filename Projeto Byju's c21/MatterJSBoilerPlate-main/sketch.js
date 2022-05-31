
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var rightSide, leftSide;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

    var ball_options = {

    restitution: 0.95

	}

	//Create the Bodies Here.

    ground=new Ground(width/2,670,width,20);
    
	leftSide = new Ground(1100,600,20,120);

	rightSide = new Ground(1350,600,20,120);

    ball = Bodies.circle(350, 50, 50, ball_options);
    World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x, ball.position.y, 50);

  drawSprites();
 
}

function keyPressed() {

  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(ball, ball.position, {x: 0.10, y: -0.10});

  }
	
}
