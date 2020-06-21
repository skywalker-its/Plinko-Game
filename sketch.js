
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var engine,world;
  //  var ground;
    var plinkos = [];
    var divisions = [];
    var particles = [];
    //var ground1,ground2,ground3;
    var divisionsHeight = 150;

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(599,590,1200,30);

    // for(var j = 40; j<= width; j = j+50){
    //   plinkos.push(new Plinko(j , 75))
    // }
    for(var j = 40; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 75))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,125))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,175))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,225))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,275))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,325))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,375))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,425))
    }
      // for(var k = 75; k<= 300; k = k+100){
      //   plinkos.push(new Plinko(j,k))
      // }
    

   
    for(var k = 0; k <=width; k = k+80){
      divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
    }

  }

 
 
function draw() { 
  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background("pink");
   Engine.update(engine);

  //  strokeWeight(4); 

for(var i = 0; i < particles.length; i++){
  particles[i].display();
 }

  for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
    // for(var k = 0; k<plinkos.length;k++){
    //   plinkos[j].display();
    // }
    // for(var l = 0; l<plinkos.length;l++){
    //   plinkos[j].display();
    // }
 }
  ground.display();   

 console.log(plinkos.length);

  
}
 