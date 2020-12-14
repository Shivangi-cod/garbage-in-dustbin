
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,350);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	dustbin1 = new Dustbin(900,278,15,100);
	dustbin2 = new Dustbin(750,278,15,100);
	dustbin3 = new Dustbin(825,319,145,15);
	ground = new Ground(600,335,1200,15);
  garbage = new Garbage(250,300,20)
  Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  garbage.display();
  
  drawSprites();
 
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce (garbage.body,garbage.body.position,{x:50,y:-50})
    }
}




