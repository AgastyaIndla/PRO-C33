const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world;
var engine;
var enemy1
var enemy2;
var player ;

var gameState = "slingMode";
var score = 0;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
world = engine.world;

ground = new Ground(600,height,1200,400);
platform = new Ground(150,305,300,170);

player = new Player(200,50);

enemy1 = new Enemy(810,350);
enemy2 = new Enemy(810,220);

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70)
box5 = new Box(810,160,70,70);

log1 = new Log(810,260,300, PI/2);
log3 = new Log(810,180,300,PI/2);
log4 = new Log(870,120,150, -PI/7);
log5 = new Log(870,120,150, -PI/7);

}

function draw() {

  background(0,100);  

  noStroke();
  
  drawSprites();
}