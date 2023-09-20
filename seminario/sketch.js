let ball; // Variável para representar a bola

function setup() {
  createCanvas(1400, 700); // Cria um canvas de 400x400 pixels
  ball = new Ball(width / 2, -100, 20); // Inicializa a bola no topo do canvas
}

function draw() {
  background(190); // Define o fundo do canvas

  ball.applyGravity(); // Aplica a força da gravidade à bola
  ball.update(); // Atualiza a posição da bola
  ball.display(); // Exibe a bola
}

class Ball {
  constructor(x, y, radius) {
    this.position = createVector(x, y); // Posição inicial da bola
    this.velocity = createVector(100, 0); // Velocidade inicial da bola
    this.radius = radius; // Raio da bola
    this.gravity = createVector(0, 0.2); // Vetor de gravidade --> o primeiro parãmetro trata da gravidade no eixo y enquanto o segundo trata da gravidade no eixo x
  }

  applyGravity() {
    this.velocity.add(this.gravity); // Adiciona a força da gravidade à velocidade
  }

  update() {
    this.position.add(this.velocity); // Atualiza a posição com base na velocidade
    // Verifica se a bola atingiu o chão (no caso, a parte inferior do canvas)
    if (this.position.y > height - this.radius / 2) {
      this.position.y = height - this.radius / 2; // Mantém a bola no chão
      this.velocity.y *= -0.8; // Inverte a velocidade vertical (rebote)
    }
    if (this.position.x > width - this.radius / 2) {
        this.position.x = width - this.radius / 2; // Mantém a bola no chão
        this.velocity.x *= -0.8; // Inverte a velocidade vertical (rebote)
    }
    if (this.position.x < 1 - this.radius / 2) {
        this.position.x = 1 - this.radius / 2; // Mantém a bola no chão
        this.velocity.x *= -0.8; // Inverte a velocidade vertical (rebote)
    }
  }

  display() {
    fill(255, 0, 0); // Define a cor da bola (vermelha)
    noStroke(); // Sem contorno
    ellipse(this.position.x, this.position.y, this.radius * 2); // Desenha a bola
  }
}
