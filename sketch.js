
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1,bob2,bob3,bob4,bob5,bob6;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(630,200,700,40);

	bob1 = new Bob (400,700,100);
	bob2 = new Bob (500,700,100);
	bob3 = new Bob (600,700,100);
	bob4 = new Bob (700,700,100);
	bob5 = new Bob (800,700,100);
	bob6 = new Bob (900,700,100);

  rope1 = new Rope (bob1.body,roof.body,-bob1.radius*4,0)


function draw() {
  rectMode(CENTER);
  background(225);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope1.display();
  

  drawSprites();
 
}

}

