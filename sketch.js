 Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
//var plinkos = [];
//var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;

function preload(){
  fruit1_img = loadImage("images/thunderbolt/1.png");
  fruit2_img = loadImage("images/thunderbolt/2.png");
  fruit3_img = loadImage("images/thunderbolt/3.png");
  fruit4_img = loadImage("images/thunderbolt/4.png");
}
function setup() {
  createCanvas(400, 810);
  engine = Engine.create();
  world = engine.world;
 // ground = new Ground(width/2,height,width,20);
  man = new Umbrella(200,500);
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   man.display();
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
 
 mousePressed();
 
  }
function mousePressed(){
 if(frameCount%10===0){
    particles.push(new Particle(random(100,300),10,5));
   
  }
  
}
function maybe(){
if (frameCount % 20 === 0) {
  fruits = createSprite(random(100, 1000), 0, 100, 100);
  //fruits.velocityY = 6;
  var rand = Math.round(random(1,4));
  switch(rand){
      case 1: fruits.addImage("fruit1",fruit1_img);
      break;
      case 2: fruits.addImage("fruit1", fruit2_img);
      break;
      case 3: fruits.addImage("fruit1", fruit3_img);
      break;
      case 4: fruits.addImage("fruit1", fruit4_img);
      break;
      
  }

  
}
}

