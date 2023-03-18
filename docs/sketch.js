let pinky, msduapend;
let pinkyX, msduapendX;
let pinkyY, msduapendY;
let speed = 4;
let jumping = false;
let jumpCounter = 0;

class Carro {
  constructor(alto, ancho, color, name) {
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  }

  display(x, y) {
    stroke(220, 200, 200);
    fill(this.color);
    rect(x, y, this.ancho, this.alto);
  }
}

function setup() {
  createCanvas(600, 500);
  pinkyX = 0;
  msduapendX = width;
  pinkyY = height - height / 4;
  msduapendY = height - height / 4;

  pinky = new Carro(30, 60, "blue", "pinky");
  msduapend = new Carro(30, 60, "red", "msduapend");

  console.log("pinky ancho es " + pinky.ancho);
  console.log("pinky alto es " + pinky.alto);
  console.log("pinky color es " + pinky.color);
  console.log("pinky name es " + pinky.name);

  console.log("msduapend ancho es " + msduapend.ancho);
  console.log("msduapend alto es " + msduapend.alto);
  console.log("msduapend color es " + msduapend.color);
  console.log("msduapend name es " + msduapend.name);
} if (msduapendX > width - msduapend.ancho) {
    msduapendX = width - msduapend.ancho;
    speed *= -1;
} else if (msduapendX < msduapend.ancho) {
    msduapendX = msduapend.ancho;
    speed *= -1;
}

function draw() {
  background(20, 200, 150);

  pinkyX += speed;
  msduapendX -= speed;

  if (pinkyX > width - pinky.ancho) {
    pinkyX = width - pinky.ancho;
    speed * -1;
  } else if (pinkyX < 0) {
    pinkyX = 0;
    speed * -1;
  }

  if (msduapendX < msduapend.ancho) {
    msduapendX = msduapend.ancho;
    speed *= -1;
  } else if (msduapendX > width) {
    msduapendX = width;
    speed *= -1;
  }

  if (jumping) {
    if (jumpCounter < 10) {
      pinkyY -= 5;
    } else if (jumpCounter < 20) {
      pinkyY += 5;
    } else {
      jumping = false;
    }
    jumpCounter++;
  } else {
    pinkyY = height - height / 4;
  }

  pinky.display(pinkyX, pinkyY);
  msduapend.display(msduapendX, msduapendY);
}

function salto() {
  if (!jumping) {
    jumping = true;
    jumpCounter = 0;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    salto();
  }
}
