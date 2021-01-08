var dustbin,paper,groundSprite;
var d1,d2,d3;
var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	
	d1=createSprite(900,660,170,20);
	d1.shapeColor="yellow";
	d2=createSprite(980,610,20,80);
	d2.shapeColor="yellow"
	d3=createSprite(820,610,20,80);
	d3.shapeColor="yellow";
	
   paper=new Paper(300,800,80,80)
	
	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor="blue";
   

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  paper.display()
  groundSprite.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		if(keyDown(DOWN_ARROW)) {
			Matter.Body.applyForce(x,y,40,40);
		   }
	}
}