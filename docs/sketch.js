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
let ball1, ball2;

function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(50, height/2, 50, color(255, 0, 0));
  ball2 = new Ball(350, height/2, 50, color(0, 255, 0));
}

function draw() {
  background(255);
  ball1.move();
  ball2.move();
  ball1.display();
  ball2.display();
}

class Ball {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = 2;
    this.xDir = 1;
    this.yDir = 1;
  }
  
  move() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;
    
    if (this.x > width - this.size/2 || this.x < this.size/2) {
      this.xDir *= -1;
    }
    
    if (this.y > height - this.size/2 || this.y < this.size/2) {
      this.yDir *= -1;
    }
  }
  
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
