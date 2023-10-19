import React from 'react';

class Plank1 extends React.Component {
  render() {

    const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Planck.js Example</title>
        <script src="https://cdn.jsdelivr.net/npm/planck-js@0.2.3/dist/planck-with-testbed.js"></script>
    </head>
    <body>
        <script>
            /*O código começa definindo um novo teste usando a função 'testbed' */
            planck.testbed('HeavyOnLight', function(testbed) {
                /*Isso cria duas variáveis locais, pl e Vec2, para referenciar os objetos planck e Vec2 da biblioteca Planck.js, 
                tornando o código mais conciso.*/
                var pl = planck, Vec2 = pl.Vec2;
                /Cria um novo mundo de física com gravidade/
                var world = new pl.World(Vec2(0, -10));
                /Cria um corpo estático com uma aresta/
                world.createBody().createFixture(pl.Edge(Vec2(-40.0, 0.0), Vec2(40.0, 0.0)));
                /Cria um corpo dinâmico (que pode se mover)/
                world.createDynamicBody(Vec2(0.0, 4.5)).createFixture(pl.Circle(0.5), 10.0);
    
                world.createDynamicBody(Vec2(0.0, 10.0)).createFixture(pl.Circle(5.0), 10.0);
                /retorna ao mundo de fisica criado/
                return world;
            });
        </script>
    </body>
    </html>
    `
      return (
      <div>
        <div className=" butao btn btn-primary">Menu</div>
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

export default Plank1;
