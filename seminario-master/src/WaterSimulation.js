import React from 'react';

class NewtonCradle extends React.Component {
  render() {

    const srcDoc = `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
        <style>
            body {
            margin: 0;
            overflow: hidden;
            }
            canvas {
            background-color: #f0f0f0;
            }
        </style>
        </head>
        <body>
        <script>
            const { Engine, Render, Bodies, World, Mouse, MouseConstraint } = Matter;

            const engine = Engine.create();

            let render = Render.create({
                element: document.body,
                engine: engine,
                options:{
                    width:2000,
                    height: 600,
                    wireframes: false
                }
            });

            let ground = Bodies.rectangle(1100, 500, 300, 250, { isStatic: true });

            let mouse = Matter.Mouse.create(render.canvas);
            let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: {visible: false}
            }
            });
            render.mouse = mouse;

            let rectangle = Matter.Bodies.rectangle(1100, 400, 30, 100);
            rectangle.render.fillStyle = 'red'; // Define a cor de preenchimento da bolinha como vermelha

            let firing = true
            Matter.Events.on(engine,'afterUpdate', function() {
                if (firing) {
                    ball = Matter.Bodies.circle(200, 0, 1.5, { friction: 0.00005, restitution: 0.2, density: 0.1 });
                    ball.render.fillStyle = 'Blue'; // Define a cor de preenchimento da nova bolinha como vermelha
                    Matter.World.add(engine.world, ball);
                    firing = true;
                }
            });


            R1 = Matter.Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.09, render: { fillStyle: '#060a19' } })
            R2 = Matter.Bodies.rectangle(500, 350, 350, 20, { isStatic: true, angle: -Math.PI * 0.07, render: { fillStyle: '#060a19' } })
            R3 = Matter.Bodies.rectangle(340, 580, 350, 20, { isStatic: true, angle: Math.PI * 0.04, render: { fillStyle: '#060a19' } })

            Matter.World.add(engine.world,[ground, rectangle, mouseConstraint,R1,R2,R3]);
            Engine.run(engine);
            Render.run(render);
        </script>
        </body>
        </html>
    `
      return (
      <div>
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

export default NewtonCradle;
