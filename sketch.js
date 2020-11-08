var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);


    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)


    engine = Engine.create();
    world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
    World.add(world, packageBody);
    

    //Create a Ground
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
    rect2 = new Rect(300, 600, 20, 100);
    rect3 = new Rect(500, 600, 20, 100);
    rect4 = new Rect(400, 650, 200, 20);
    

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  rect2.display()
  rect3.display();
  rect4.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false )
	}
}
