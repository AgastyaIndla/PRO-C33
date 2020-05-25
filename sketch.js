const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world;
var engine;
var enemy1
var enemy2;
var bird ;

var gameState = "slingMode";
var score = 0;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
world = engine.world;

ground = new Ground(600,height,1200,400);



}

function draw() {
  background(255,255,255);  
  drawSprites();
}