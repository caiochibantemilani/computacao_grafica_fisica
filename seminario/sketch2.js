let projectile; // Variável para representar o projétil
let gravity; // Vetor de gravidade

function setup() {
  createCanvas(600, 600); // Cria um canvas de 400x400 pixels
  projectile = new Projectile(50, height - 350, 20); // Inicializa o projétil
  gravity = createVector(0, 0.2); // Define a força de gravidade
}

function draw() {
  background(190); // Define o fundo do canvas

  projectile.applyForce(gravity); // Aplica a força da gravidade ao projétil
  projectile.update(); // Atualiza a posição do projétil
  projectile.display(); // Exibe o projétil
}

class Projectile {
  constructor(x, y, radius) {
    this.position = createVector(x, y); // Posição inicial do projétil
    this.velocity = createVector(11, -3); // Velocidade inicial do projétil (lançamento para cima)
    this.radius = radius; // Raio do projétil
    this.airResistance = 0.02; // Resistência do ar simulada
  }

  applyForce(force) {
    this.velocity.add(force); // Adiciona uma força à velocidade
  }

  update() {
    this.velocity.x -= this.airResistance * this.velocity.x; // Simula resistência do ar na direção horizontal
    this.position.add(this.velocity); // Atualiza a posição com base na velocidade
  }

  display() {
    fill(0, 0, 255); // Define a cor do projétil (azul)
    noStroke(); // Sem contorno
    ellipse(this.position.x, this.position.y, this.radius * 2); // Desenha o projétil
  }
}
