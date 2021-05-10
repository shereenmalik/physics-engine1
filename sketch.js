const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball;
var engine,world,object;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic: true
  }
  object=Bodies.rectangle(200,390,200,20,options);
  World.add(world,object);
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,200,20);
 // rect(200,200,50,50);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}