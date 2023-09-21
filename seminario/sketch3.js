let spring; // Constante da mola
let damping; // Coeficiente de amortecimento
let objectMass; // Massa do objeto
let objectSize; // Tamanho do objeto

let position; // Posição do objeto
let velocity; // Velocidade do objeto
let acceleration; // Aceleração do objeto

let equilibriumY; // Posição de equilíbrio da mola
let restLength; // Comprimento de repouso da mola

function setup() {
  createCanvas(400, 400); // Cria um canvas de 400x400 pixels

  // Configuração inicial
  spring = 0.1; // Constante da mola
  damping = 0.1; // Coeficiente de amortecimento
  objectMass = 10; // Massa do objeto
  objectSize = 20; // Tamanho do objeto

  equilibriumY = height / 2; // Posição de equilíbrio da mola
  position = createVector(width / 2, equilibriumY - 200); // Posição inicial do objeto
  velocity = createVector(0, 0); // Velocidade inicial do objeto
  acceleration = createVector(0, 0); // Aceleração inicial do objeto

  restLength = equilibriumY - position.y; // Comprimento de repouso da mola
}

function draw() {
  background(220); // Define o fundo do canvas

  // Calcula a força elástica da mola (F = -k * x)
  const displacement = position.y - equilibriumY;
  const springForce = -spring * displacement;

  // Calcula a força de amortecimento (F = -c * v)
  const dampingForce = -damping * velocity.y;

  // Aplica as forças
  const totalForce = springForce + dampingForce;
  acceleration.y = totalForce / objectMass;
  velocity.add(acceleration);
  position.add(velocity);

  // Desenha a mola
  stroke(0);
  line(width / 2, equilibriumY, position.x, position.y);
  ellipse(position.x, position.y, objectSize, objectSize);

  // Desenha o ponto de equilíbrio da mola
  fill(0);
  noStroke();
  ellipse(width / 2, equilibriumY, 20, 20);
}
