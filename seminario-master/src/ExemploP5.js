import React from 'react';

class ExemploP5 extends React.Component {
  render() {

    const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
      </head>
      <body>
        <script>
          let ball;  // Variável para representar a bola
          let gravity = 0.2;  // Gravidade (aceleração)
          let ground;
    
          function setup() {
            createCanvas(400, 400);  // Cria um canvas de 400x400 pixels
            ball = new Ball();  // Cria uma instância da bola
            ground = height - 20;  // Posição do chão
          }
    
          function draw() {
            background(220);  // Define o fundo do canvas
    
            ball.applyForce(gravity);  // Aplica a força da gravidade à bola
            ball.update();  // Atualiza a posição e a velocidade da bola
            ball.checkGround();  // Verifica se a bola atingiu o chão
            ball.display();  // Exibe a bola na tela
          }
    
          class Ball {
            constructor() {
              this.position = createVector(width / 2, 0);  // Posição inicial no topo do canvas
              this.velocity = createVector(0, 10);  // Velocidade inicial
            }
    
            applyForce(force) {
              // Aplica uma força à bola (afeta a velocidade)
              this.velocity.y += force;
            }
    
            update() {
              // Atualiza a posição e a velocidade da bola com base na gravidade
              this.position.y += this.velocity.y;
              this.velocity.y += gravity;
            }
    
            checkGround() {
              // Verifica se a bola atingiu o chão
              if (this.position.y >= ground) {
                this.position.y = ground;  // Evita que a bola vá abaixo do chão
                this.velocity.y *= -0.8;  // Inverte a velocidade com amortecimento
              }
            }
    
            display() {
              // Desenha a bola na posição atual
              fill(255, 0, 0);  // Cor da bola (vermelha)
              ellipse(this.position.x, this.position.y, 20, 20);  // Desenha a bola como uma elipse
            }
          }
        </script>
      </body>
    </html>
    `
      return (
      <div>
        <a href={'/'} className=" butao btn btn-primary">Menu</a>
        <iframe
          srcDoc={srcDoc} // Substitua pelo caminho correto para o seu arquivo HTML
          title="Meu Iframe"
          width="1200"
          height="800"
        ></iframe>
      </div>
    );
  }
}

export default ExemploP5;
