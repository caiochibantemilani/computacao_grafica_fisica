let ropeLength; // Comprimento da corda
let angle; // Ângulo de oscilação
let angleVelocity; // Velocidade angular
let angleAcceleration; // Aceleração angular
let damping; // Coeficiente de amortecimento do ar
let weight; // Peso no final da corda

function setup() {
  createCanvas(400, 400); // Cria um canvas de 400x400 pixels

  ropeLength = 200; // Comprimento inicial da corda
  angle = PI / 4; // Ângulo inicial da corda
  angleVelocity = 0; // Velocidade angular inicial
  angleAcceleration = 0; // Aceleração angular inicial
  damping = 0.98; // Coeficiente de amortecimento do ar
  weight = 30; // Peso no final da corda
}

function draw() {
  background(220); // Define o fundo do canvas

  // Calcula a força gravitacional no peso
  const gravity = 1.5;
  const weightForce = weight * gravity * sin(angle);

  // Calcula a aceleração angular (segunda lei de Newton)
  angleAcceleration = (-1 * weightForce) / (weight + ropeLength);

  // Atualiza a velocidade angular e o ângulo
  angleVelocity += angleAcceleration;
  angleVelocity *= damping; // Aplica o coeficiente de amortecimento
  angle += angleVelocity;

  // Calcula as coordenadas do peso no final da corda
  const weightX = width / 2 + ropeLength * sin(angle);
  const weightY = height / 2 + ropeLength * cos(angle);

  // Desenha a corda
  stroke(0);
  strokeWeight(2);
  line(width / 2, height / 2, weightX, weightY);

  // Desenha o peso no final da corda
  fill(127);
  stroke(0);
  ellipse(weightX, weightY, 40, 40);
}
