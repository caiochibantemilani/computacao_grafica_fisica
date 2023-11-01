import React from 'react';

class ExemploP5 extends React.Component {
  render() {

    const srcDoc = `
    <!DOCTYPE html>
<html>
<head>
  <title>Matter.js Exemplo de Gravidade com Força</title>
</head>
<style>
   html {
      overflow: hidden;
   }
   main {
      overflow: hidden;
   }
</style>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
  <script>
    // Crie um motor Matter.js
    var engine = Matter.Engine.create();
    var world = engine.world;

    // Crie um objeto retangular
    var box = Matter.Bodies.rectangle(300, 150, 50, 60, {isStatic: false});
    var box2 = Matter.Bodies.rectangle(600, 500, 500,50, {isStatic: true});

    // Adicione o objeto ao mundo
    Matter.World.add(world, [box, box2]);

    // Configure a gravidade
    engine.world.gravity.y = 2; // Aumente o valor para uma gravidade mais forte

    // Aplique uma força para cima desde o início
    Matter.Body.applyForce(box, { x: box.position.x, y: box.position.y }, { x: 0.05, y: -0.07 });

    // Crie um renderizador
    var render = Matter.Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1500,
        height: 600
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
      <div className='grande'>
        <a href={'/'} className=" butao btn btn-primary">Menu</a>
        <iframe
          srcDoc={srcDoc} // Substitua pelo caminho correto para o seu arquivo HTML
          title="Meu Iframe"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    );
  }
}

export default ExemploP5;
