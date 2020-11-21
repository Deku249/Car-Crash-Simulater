//Ma'am the deformation is saying NaN so I need help

var car,wall 
var speed,weight
var deformation = 0.5 * weight * speed * speed / 22500


function setup() {
  createCanvas(1000,800);

  console.log(deformation)

  speed = random(55,90)
  weight = random(400,1500)


  car = createSprite( 50, 200, 50, 50);
  car.shapeColor= (255,255,255)

  wall = createSprite( 900, 200, 60, height/2 );
  wall.shapeColor=(0,0,0)
}

function draw() {
  background(200,200,200); 
  
  car.velocityX = speed

  if (car.x - wall.x > car.width/2 + wall.width/2){

    car.velocityX = 0
   
    if (deformation < 100){
      car.shapeColor=(0,255,0)
    }
  
    if (deformation > 100 && deformation < 180){
      car.shapeColor=(230,230,0)
    }
  
    if (deformation > 180){
      car.shapeColor=(255,0,0)
    }
  
  }

  drawSprites();
}