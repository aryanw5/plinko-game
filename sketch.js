const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Bodies;

var engine, world;
var particle = [];
var divisions = [];
var plinkos = [];

var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,800);

  divisions = new Divisions(100,100,60,60);

  ground = new Ground(240,40,70,70);

  plinkos = new Plinko(20,40,10,10);

  particle = new Particle(40,50,10,10);

}


function draw() {
  background(255,255,255); 
  Engine.update(engine)

  divisions.display();

  ground.display();

 plinkos.display();

  particle.display();
}




