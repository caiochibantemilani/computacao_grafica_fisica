let ball1;
let ball2;

function setup() {
  createCanvas(400, 400); // Cria um canvas de 400x400 pixels
  // Inicializa as bolas com posições e velocidades iniciais
  ball1 = new Ball(100, 200, 30, createVector(2, 0));
  ball2 = new Ball(300, 200, 50, createVector(-2, 0));
}

function draw() {
  background(220); // Define o fundo do canvas

  // Atualiza e exibe as bolas
  ball1.update();
  ball2.update();
  ball1.display();
  ball2.display();

  // Verifica a colisão entre as bolas
  if (ball1.checkCollision(ball2)) {
    ball1.handleCollision(ball2);
    ball2.handleCollision(ball1);
  }
}

class Ball {
  constructor(x, y, radius, velocity) {
    this.position = createVector(x, y);
    this.radius = radius;
    this.velocity = velocity;
  }

  update() {
    this.position.add(this.velocity);

    // Verifica e trata a colisão com as paredes
    if (this.position.x + this.radius >= width || this.position.x - this.radius <= 0) {
      this.velocity.x *= -1;
    }
  }

  display() {
    fill(0);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  // Verifica a colisão com outra bola
  checkCollision(other) {
    const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    return distance < this.radius + other.radius;
  }

  // Trata a colisão com outra bola (inverte a velocidade)
  handleCollision(other) {
    const delta = p5.Vector.sub(this.position, other.position);
    delta.normalize();
    this.velocity.reflect(delta);
  }
}
