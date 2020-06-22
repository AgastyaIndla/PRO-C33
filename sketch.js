const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1,enemy2;
var platform,backgroundImg;
var player, slingshot;

var gameState = "onSling";
var score = 0;
var bg = "bg123.png";

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    player = new Player(200,50);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    enemy1 = new Enemy(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    enemy2 = new Enemy(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

   slingshot = new Shooter(player.body,{x:200, y:50});
}

function draw(){
    background(155,200,251);

        
    Engine.update(engine);

    text("x:"+mouseX,50,50); 
    text("y:"+mouseY,50,80);

    stroke(30);
    fill(250,125,5);
    text("ANGRY FRIENDS GAME",375,50);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

    ground.display();
    box1.display();
    box2.display();
    enemy1.display();
    enemy1.score();
    log1.display();

    box3.display();
    box4.display();
    enemy2.display();
    enemy2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    platform.display();
    player.display();  
    slingshot.display();  

}

function mouseDragged(){
    if (gameState !=="launched"){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && player.body.speed<3){
        player.trajectory=[];
        Matter.Body.setPosition(player.body,{x: 200,y: 50});
       slingshot.attach(player.body);
    }
}
