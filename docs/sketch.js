// Where is the car
let x, y;

class Carro {
  constructor(alto, ancho, color, name) {
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name
    }
  }

function setup() {
  createCanvas(500, 300);
  // Starts in the middle
  y = height - height/4;
  x = 0;
  let miCarro = new Carro (10, 20, red, "ms duapend"); // creating new instance of Polygon Class.
  console.log(miCarro.alto); // prints '1' to the console

}

function draw() {
  background(100);  
  display();
  move();
}

function move(){
  // Jiggling randomly
  y = y + random(-1, 1);
  
  if (x > width) {
    // Reset 
    x = 0;
  } else {
    y = height - height/4;
    // Moving up at a constant speed
    x = x + 2;
  }
}

function display(){
  // Draw a car
  stroke(50);
  fill(255,4,60);
  rect(x, y, 80, 20);
}
