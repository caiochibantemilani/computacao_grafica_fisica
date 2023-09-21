class FallingBall {
  constructor(x, y, radius, mass, gravity) {
    this.position = createVector(x, y); // Posição inicial da bola
    this.velocity = createVector(0, 0); // Velocidade inicial da bola
    this.radius = radius; // Raio da bola
    this.mass = mass; // Massa da bola em quilogramas
    this.gravity = gravity; // Aceleração da gravidade na Terra em m/s²
  }

  applyGravity() {
    const force = createVector(0, this.mass * this.gravity); // Calcula a força da gravidade (F = m * g)
    this.velocity.add(force); // Adiciona a força à velocidade
  }

  update() {
    this.position.add(this.velocity); // Atualiza a posição com base na velocidade
    // Verifica se a bola atingiu o chão (no caso, a parte inferior do canvas)
    if (this.position.y > height - this.radius / 2) {
      this.position.y = height - this.radius / 2; // Mantém a bola no chão
      this.velocity.y *= -0.2; // Inverte a velocidade vertical (rebote)
    }
  }

  display() {
    fill(255, 0, 0); // Define a cor da bola (vermelha)
    noStroke(); // Sem contorno
    ellipse(this.position.x, this.position.y, this.radius * 2); // Desenha a bola
  }
}
//exemplo de como instanciar o objeto e exibi-lo
let ball; // Variável para representar a bola

function setup() {
  createCanvas(600, 650); // Cria um canvas de 400x400 pixels
  ball = new FallingBall(width / 2, 0, 20, 1, 9.81); // Inicializa a bola no topo do canvas com massa 1 kg
}

function draw() {
  background(220); // Define o fundo do canvas

  ball.applyGravity(); // Aplica a força da gravidade à bola
  ball.update(); // Atualiza a posição da bola
  ball.display(); // Exibe a bola

  // Calcula o peso da bola
  const weight = ball.mass * ball.gravity;
  fill(0);
  textSize(16);
  text(`Peso: ${weight.toFixed(2)} N`, 20, 20);
}
