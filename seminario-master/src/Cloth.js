import React from 'react';
import Navbar from './components/navbar';

class Cloth extends React.Component {
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
    
      Example.cloth = function () {
        var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Body = Matter.Body,
          Composites = Matter.Composites,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite,
          Bodies = Matter.Bodies;
    
        // create engine
        var engine = Engine.create(),
          world = engine.world;
    
        // create renderer
        var render = Render.create({
          element: document.body,
          engine: engine,
          options: {
            width: 500,
            height: 600
          }
        });
    
        Render.run(render);
    
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);
    
        // see cloth function defined later in this file
        var cloth = Example.cloth.cloth(150, 200, 20, 12, 5, 5, false, 8);
    
        for (var i = 0; i < 20; i++) {
          cloth.bodies[i].isStatic = true;
        }
    
        Composite.add(world, [
          cloth,
          Bodies.circle(300, 500, 80, { isStatic: true, render: { fillStyle: '#060a19' } }),          Bodies.rectangle(400, 609, 800, 50, { isStatic: true })
        ]);
    
        // add mouse control
        var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
              stiffness: 0.98,
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
          min: { x: 0, y: 0 },
          max: { x: 1000, y: 1000 }
        });
    
        // context for MatterTools.Demo
        return {
          engine: engine,
          runner: runner,
          render: render,
          canvas: render.canvas,
          stop: function () {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
          }
        };
      };
    
      Example.cloth.title = 'Cloth';
      Example.cloth.for = '>=0.14.2';
    
      Example.cloth.cloth = function (xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        var Body = Matter.Body,
          Bodies = Matter.Bodies,
          Common = Matter.Common,
          Composites = Matter.Composites;
    
        var group = Body.nextGroup(true);
        particleOptions = Common.extend({ inertia: Infinity, friction: 0.00001, collisionFilter: { group: group }, render: { visible: false } }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.06, render: { type: 'line', anchors: false } }, constraintOptions);
    
        var cloth = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function (x, y) {
          return Bodies.circle(x, y, particleRadius, particleOptions);
        });
    
        Composites.mesh(cloth, columns, rows, crossBrace, constraintOptions);
    
        cloth.label = 'Cloth Body';
    
        return cloth;
      };
    
      Example.cloth();
    </script>
    </body>
    </html>  `
      return (
      <div>
        <Navbar/>
        <iframe
          srcDoc={srcDoc} // Substitua pelo caminho correto para o seu arquivo HTML
          title="Meu Iframe"
          width="600"
          height="650"
        ></iframe>
      </div>
    );
  }
}

export default Cloth;
