let world; // Variável para o mundo de física do Box2D
let box; // Variável para a caixa

function setup() {
  createCanvas(400, 400); // Cria um canvas de 400x400 pixels
  world = new Box2D.b2World(new Box2D.b2Vec2(0, 10), true); // Cria o mundo de física com gravidade (0, 10)
  
  // Cria uma caixa no centro do canvas
  box = new Box(width / 2, 50, 40, 40);
}

function draw() {
  background(220); // Define o fundo do canvas

  // Atualiza a simulação do mundo de física
  world.Step(1 / 60, 10, 10);

  // Exibe a caixa
  box.display();
}

class Box {
  constructor(x, y, w, h) {
    // Define as propriedades da caixa
    this.w = w;
    this.h = h;

    // Cria o corpo rígido no mundo de física
    const bd = new Box2D.b2BodyDef();
    bd.type = Box2D.b2_dynamicBody;
    bd.position.Set(x, y);
    this.body = world.CreateBody(bd);

    // Cria a forma da caixa
    const fd = new Box2D.b2FixtureDef();
    fd.shape = new Box2D.b2PolygonShape();
    fd.shape.SetAsBox(w / 2, h / 2);
    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.2;
    this.body.CreateFixture(fd);
  }

  display() {
    // Obtém a posição do corpo rígido
    const pos = this.body.GetPosition();

    // Desenha a caixa na posição atual
    push();
    translate(pos.x * SCALE, pos.y * SCALE);
    rotate(this.body.GetAngle());
    rectMode(CENTER);
    fill(0, 0, 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
