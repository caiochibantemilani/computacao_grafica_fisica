import React from 'react';

class ExemploP5 extends React.Component {
  render() {

    const srcDoc = `
    <!DOCTYPE html>
      <html>
      <head>
        <title>Matter.js Exemplo de Gravidade com Força</title>
      </head>
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
        <script>
          // Crie um motor Matter.js
          var engine = Matter.Engine.create();
          var world = engine.world;
        
          // Crie um objeto retangular
          var box = Matter.Bodies.rectangle(300, 150, 50, 60);
        
          // Adicione o objeto ao mundo
          Matter.World.add(world, box);
        
          // Configure a gravidade
          engine.world.gravity.y = 5; // Aumente o valor para uma gravidade mais forte
        
          // Aplique uma força para cima desde o início
          Matter.Body.applyForce(box, { x: box.position.x, y: box.position.y }, { x: 0.05, y: -0.07 });
        
          // Crie um renderizador
          var render = Matter.Render.create({
            element: document.body,
            engine: engine,
            options: {
              width: 800,
              height: 400
            }
          });
        
          // Inicie o renderizador
          Matter.Render.run(render);
        
          // Execute o motor
          Matter.Engine.run(engine);
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
