
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var dustbin, paper;
var gameState="on";
function setup(){
	createCanvas(800,400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	//Engine.run(engine);
	dustbin = new Dustbin(720, 390, 100, 10);
	paper = new Paper(100,300,70);
	launcher = new Launcher(paper.body, {x:200, y:50});
	ground = Bodies.rectangle(width/2, 400, width, 10,{isStatic:true});
	World.add(world, ground);
}
function draw(){
	background("white");
	if(keyCode===UP_ARROW)
	{
		rectMode(CENTER);
		dustbin.display();
		paper.display();
	}
}
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13});

	}
}

function mouseDragged(){
    if(gameState!=="launched")
    {
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});

    }
   
}


function mouseReleased(){
    launcher.fly();
    gameState="launched";
}


