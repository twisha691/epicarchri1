const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
 computerBase=new ComputerBase(100,600,150,150)
 computerplayer=new Player(computerBase.body.position.x,computerBase.body.position.y-140,60,180)
 playerBase=new  PlayerBase(600,600,150,150)
 player=new Player(playerBase.body.position.x,playerBase.body.position.y-140,60,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
computerBase.display()
computerplayer.display()
   //display Player and computerplayer
playerBase.display()
player.display()


}
