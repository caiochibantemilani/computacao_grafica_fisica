import React from 'react';

class NewtonCradle extends React.Component {
  render() {

    const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Newton's Cradle Simulation</title>
    
        <!-- Importe o Matter.js diretamente do GitHub -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js" integrity="sha512-5T245ZTH0m0RfONiFm2NF0zcYcmAuNzcGyPSQ18j8Bs5Pbfhp5HP1hosrR8XRt5M3kSRqzjNMYpm2+it/AUX/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js" integrity="sha512-5T245ZTH0m0RfONiFm2NF0zcYcmAuNzcGyPSQ18j8Bs5Pbfhp5HP1hosrR8XRt5M3kSRqzjNMYpm2+it/AUX/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
      var Example = Example || {};
    
      Example.newtonsCradle = function() {
          var Engine = Matter.Engine,
              Render = Matter.Render,
              Runner = Matter.Runner,
              Body = Matter.Body,
              Composites = Matter.Composites,
              MouseConstraint = Matter.MouseConstraint,
              Mouse = Matter.Mouse,
              Composite = Matter.Composite;
    
          // create engine
          var engine = Engine.create(),
              world = engine.world;
    
          // create renderer
          var render = Render.create({
              element: document.body,
              engine: engine,
              options: {
                  width: 800,
                  height: 600,
                  showVelocity: true
              }
          });
    
          Render.run(render);
    
          // create runner
          var runner = Runner.create();
          Runner.run(runner, engine);
    
          // see newtonsCradle function defined later in this file
          var cradle = Example.newtonsCradle.newtonsCradle(280, 100, 5, 30, 200);
          Composite.add(world, cradle);
          Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    
          // add mouse control
          var mouse = Mouse.create(render.canvas),
              mouseConstraint = MouseConstraint.create(engine, {
                  mouse: mouse,
                  constraint: {
                      stiffness: 0.2,
                      render: {
                          visible: false
                      }
                  }
              });
    
          Composite.add(world, mouseConstraint);
    
          // keep the mouse in sync with rendering
          render.mouse = mouse;
    
          // fit the render viewport to the scene
          Render.lookAt(render, {
              min: { x: 0, y: 50 },
              max: { x: 800, y: 600 }
          });
    
          // context for MatterTools.Demo
          return {
              engine: engine,
              runner: runner,
              render: render,
              canvas: render.canvas,
              stop: function() {
                  Matter.Render.stop(render);
                  Matter.Runner.stop(runner);
              }
          };
      };
    
      Example.newtonsCradle.title = 'Newtons Cradle';
      Example.newtonsCradle.for = '>=0.14.2';
    
      Example.newtonsCradle.newtonsCradle = function(xx, yy, number, size, length) {
          var Composite = Matter.Composite,
              Constraint = Matter.Constraint,
              Bodies = Matter.Bodies;
    
          var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });
    
          for (var i = 0; i < number; i++) {
              var separation = 1.9,
                  circle = Bodies.circle(xx + i * (size * separation), yy + length, size,
                      { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0, slop: size * 0.02 }),
                  constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });
    
              Composite.addBody(newtonsCradle, circle);
              Composite.addConstraint(newtonsCradle, constraint);
          }
    
          return newtonsCradle;
      };
    
      if (typeof module !== 'undefined') {
          module.exports = Example.newtonsCradle;
      }
      Example.newtonsCradle()
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
          width="800"
          height="800"
        ></iframe>
      </div>
    );
  }
}

export default NewtonCradle;
