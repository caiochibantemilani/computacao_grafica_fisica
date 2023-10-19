import React from 'react';

class Planck2 extends React.Component {
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
       // Inicializa o ambiente de teste usando a biblioteca Planck.
planck.testbed('BulletTest', function(testbed) {
    // Importa as classes necessárias da biblioteca Planck.
    var pl = planck, Vec2 = pl.Vec2;
  
    // Cria um mundo de física com uma força de gravidade de -10 no eixo y.
    var world = new pl.World(Vec2(0, -10));
  
    // Obtém a referência para as estatísticas internas da biblioteca Planck.
    var stats = pl.internal.stats;
  
    // Cria um corpo de chão estático com uma borda horizontal e uma caixa em sua parte superior.
    var ground = world.createBody();
    ground.createFixture(pl.Edge(Vec2(-10.0, 0.0), Vec2(10.0, 0.0)), 0.0);
    ground.createFixture(pl.Box(0.2, 1.0, Vec2(0.5, 1.0), 0.0), 0.0);
  
    // Cria um corpo dinâmico (movível) com forma retangular.
    var body = world.createDynamicBody(Vec2(0.0, 4.0));
    body.createFixture(pl.Box(2.0, 0.1), 1.0);
  
    // Define a posição inicial do corpo "bullet".
    var x = 0.20352793;
  
    // Cria um corpo "bullet" dinâmico com uma forma retangular menor.
    var bullet = world.createBody({
      type: 'dynamic',
      position: Vec2(x, 10.0),
      bullet: true,
    });
    bullet.createFixture(pl.Box(0.25, 0.25), 100.0);
  
    // Define a velocidade inicial do corpo "bullet".
    bullet.setLinearVelocity(Vec2(0.0, -50.0));
  
    // Define a função Launch, que reinicializa as posições e velocidades dos corpos
    // e redefine as estatísticas para iniciar um novo lançamento.
    function Launch() {
      body.setTransform(Vec2(0.0, 4.0), 0.0);
      body.setLinearVelocity(Vec2());
      body.setAngularVelocity(0.0);
  
      x = pl.Math.random(-1.0, 1.0);
      bullet.setTransform(Vec2(x, 10.0), 0.0);
      bullet.setLinearVelocity(Vec2(0.0, -50.0));
      bullet.setAngularVelocity(0.0);
  
      // Reinicializa as estatísticas.
      stats.gjkCalls = 0;
      stats.gjkIters = 0;
      stats.gjkMaxIters = 0;
      stats.toiCalls = 0;
      stats.toiIters = 0;
      stats.toiMaxIters = 0;
      stats.toiRootIters = 0;
      stats.toiMaxRootIters = 0;
    }
  
    // Inicializa o contador de passos de simulação.
    var stepCount = 0;
  
    // Define a função de simulação que será chamada a cada passo de simulação.
    testbed.step = function() {
      // Exibe as estatísticas no ambiente de teste.
      testbed.status(stats);
  
      // A cada 60 passos de simulação, chama a função Launch para reiniciar a simulação.
      if (stepCount++ % 60 === 0) {
        Launch();
      }
    };
  
    // Retorna o mundo de física para o ambiente de teste.
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

export default Planck2;
