import React from 'react';
import { useState } from 'react';
import planets from '../images/sistema_solar_wallpaper.jpg';
import planets4k from '../images/sistema_solar_wallpaper_4k.jpg';
import molaImage from '../images/molaImage.png';
import penduloImage from '../images/pendulo.png';
import colisaoImage from '../images/colisao.png';
import clothImage from '../images/cloth.png';
import NewtonImage from '../images/newton.png';
import gameImage from '../images/game.png';
import WaterImage from '../images/water.png';
import PlanckImage from '../images/planck.png';
import Planck2Image from '../images/planck2.png';
import TesteP5Image from '../images/gravidade_teste.png';
import ExemplosP5imagem from '../images/p5image.png';
import bibliotecamatterjsimage from '../images/matterjs.png';
import bibliotecaplanckimage from '../images/planckimage.png';
import matterImage from '../images/matter_example.png';
import Accordion from 'react-bootstrap/Accordion';
import './menu.css'

function Menu(){
    const [clicado, setClicado] = useState(false);
    const [copiado, setCopiado] = useState(false);
    const [evento, setEvento] = useState(null);
    const [resumoGeral, setResumoGeral] = useState(null);

    const [gravidade, setGravidade] = useState({
        Titulo: 'Gravidade',
        Resumo: 'Esta simulação tem como objetivo demonstrar o funcionamento da gravidade sendo aplicada em uma bolinha em diferentes gravidades em uma renderização feita pelo P5.',
        Codigo: '',
        Endereco: '/sistemaSolar'
    });
    const [mola, setMola] = useState({
        Titulo: 'Mola',
        Resumo: 'Esta simulação tem como objetivo demonstrar o funcionamento de uma mola com gravidade em uma renderização feita pelo P5.',
        Codigo: '',
        Endereco: '/mola'
    });
    const [pendulo, setPendulo] = useState({
        Titulo: 'Pendulo',
        Resumo: 'Esta simulação tem como objetivo demonstrar o funcionamento de um pendulo gerado em uma renderização feita pelo P5.',
        Codigo: '',
        Endereco: '/pendulum'
    });
    const [colisao, setColisao] = useState({
        Titulo: 'Colisao',
        Resumo: 'Esta simulação tem como objetivo demonstrar uma colisão aplicada em duas bolinhas em uma renderização feita pelo P5.',
        Codigo: '',
        Endereco: '/colisao'
    });
    const [cloth, setCloth] = useState({
        Titulo: 'Cloth',
        Resumo: 'Esta simulação tem como objetivo demonstrar o funcionamento de um tecido em uma renderização feita pela engine no Matter Js.',
        Codigo: '',
        Endereco: '/cloth'
    });
    const [newton, setNewton] = useState({
        Titulo: 'Newton',
        Resumo: 'Simulação para o experimento do Pêndulo de Newton, tem como objetivo simular a conservação da quantidade de movimento.',
        Codigo: '',
        Endereco: '/NewtonCradle'
    });
    const [game, setGame] = useState({
        Titulo: 'Game',
        Resumo: 'Um pequeno exemplo de jogo que pode ser feito utilizando a engine do Matter js',
        Codigo: '',
        Endereco: '/game'
    });
    const [agua, setAgua] = useState({
        Titulo: 'Pendulo',
        Resumo: 'Este exemplo demonstra o comportamente de partículas sendo utilizadas para simular água',
        Codigo: '',
        Endereco: '/simulacao_agua'
    });
    const [planck1, setPlanck] = useState({
        Titulo: 'Planck Bolas Caindo',
        Resumo: 'Essa simulação mostra a diferença de pesos ao arrastar um objeto',
        Codigo: '',
        Endereco: '/planck'
    });
    const [planck2, setPlanck2] = useState({
        Titulo: 'Planck Gangorra',
        Resumo: 'Esta simulação mostra a velocidade de um peso caindo em uma alta velocidade e atingindo um objeto',
        Codigo: '',
        Endereco: '/planck2'
    });
    const [exemplop5, setExemploP5] = useState({
        Titulo: 'Exemplo P5',
        Resumo: 'Aqui está um exemplo prático que demonstra o funcionamento da biblioteca P5, que é focada em design.',
        Codigo: `<!DOCTYPE html>
                    <html>
                      <head>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
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
                        <script>
                          // Definindo variáveis e funções
                    
                          let ball;  // Variável para representar a bola
                          let gravity = 0.2;  // Gravidade (aceleração)
                          let ground;
                    
                          function setup() {
                            createCanvas(window.innerWidth, window.innerHeight);  // Cria um canvas do tamanho da janela do navegador
                            ball = new Ball();  // Cria uma instância da bola
                            ground = height - 20;  // Define a posição do chão
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
        `,
        Endereco: '/ExemploP5'
    })
    const [exemplomatterjs, setExemploMatterJs] = useState({
        Titulo: 'Exemplo MatterJS',
        Resumo: 'Aqui está um exemplo prático que demonstra o funcionamento da biblioteca Matter.',
        Codigo: `<!DOCTYPE html>
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
`,
        Endereco: '/ExemploMatterJS'
    })
    const [bibliotecap5, setBibliotecaP5] = useState({
        Titulo: 'Biblioteca P5',
        Resumo: 'Biblioteca com diversos exemplos na biblioteca P5',
        Codigo: '',
        Endereco: 'https://p5js.org/examples/'
    })
    const [bibliotecamatterjs, setBibliotecaMatterjs] = useState({
        Titulo: 'Biblioteca MatterJs',
        Resumo: 'Biblioteca com diversos exemplos na biblioteca MatterJs',
        Codigo: '',
        Endereco: 'https://codesandbox.io/examples/package/matter-js'
    })

    const [bibliotecaplanck, setBibliotecaPlanck] = useState({
        Titulo: 'Biblioteca Planck',
        Resumo: 'Biblioteca com diversos exemplos na biblioteca Planck',
        Codigo: '',
        Endereco: 'https://piqnt.com/planck.js'
    })
                                                                 
    function opcao_selecionada(teste, resumo){
        setClicado(true);
        setEvento(teste);
        setResumoGeral(resumo);
    }

    function copiarTexto() {
        navigator.clipboard.writeText(resumoGeral.Codigo)
        setCopiado(true);
    }

    function fechar() {
        setCopiado(false);
        setClicado(false);
    }

    return(
        <>
        <div className='all'>
            <div className='celular'></div>
            {!clicado && (
                <img src={planets4k} alt="planets" className="tela"/>
            )}
            {clicado && (
                <img src={evento} alt="planets" className="tela"/>
            )}
            {clicado && (
                <div className='resumo_total'>
                    <div className='resumo_geral'>
                        <h1 className='tituloResumo'>{resumoGeral.Titulo}</h1>
                        <p className='fechar' onClick={() => fechar()}>X</p>
                        <div className='total'>
                            <div className='resumo'>
                                <h2>Resumo</h2>
                                <p>{resumoGeral.Resumo}</p>
                            </div>
                            {resumoGeral.Codigo != '' && (
                                <div className='codigo_total'>
                                    <p className='codigo' id='programa'>{resumoGeral.Codigo}</p>
                                    <div className='mensagem_codigo'>
                                    {resumoGeral.Codigo != '' && (
                                        <button onClick={() => copiarTexto()} className="button_codigo btn btn-primary">Copiar Código</button>
                                    )}
                                    {copiado && (
                                        <p className='texto_copiada'>Código Copiado</p>
                                    )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='botoes_separados'>
                                <a className="btn btn-primary entrar" href={resumoGeral.Endereco}>Entrar</a>
                        </div>
                    </div>
                </div>
            )}
            <div className="paginasFisica">
            <div className="Sumario">
                <h2 className='h2'>Física aplicadas em JavaScript</h2>
                <hr className='hr'></hr>
                <div className='introducao'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2 className='h3'>Introdução à Biblioteca P5.js</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                P5.js é uma biblioteca JavaScript que facilita a criação de simulações físicas interativas. Ela fornece funções para manipular elementos gráficos e implementar leis da física, como movimento, colisões e gravidade, tornando a criação de simulações realistas e envolventes acessível a desenvolvedores e artistas.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <li onClick={() => opcao_selecionada(planets, gravidade)} className="tema">
                    <img src={planets} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Gravidade</div>
                </li>    
                <li onClick={() => opcao_selecionada(molaImage, mola)} className="tema">
                    <img src={molaImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de Mola</div>
                </li> 
                <li onClick={() => opcao_selecionada(penduloImage, pendulo)} className='tema'>
                    <img src={penduloImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de pêndulo</div>
                </li>
                <li onClick={() => opcao_selecionada(colisaoImage, colisao)} className='tema'>
                    <img src={colisaoImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de colisão</div>
                </li>
                <h2 className='h2'>Exemplo de um código em P5</h2>
                <hr className='hr'></hr>
                <li onClick={() => opcao_selecionada(TesteP5Image, exemplop5)} className="tema">
                    <img src={TesteP5Image} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Teste de Gravidade</div>
                </li>
                <li onClick={() => opcao_selecionada(ExemplosP5imagem, bibliotecap5)} className="tema">
                    <img src={ExemplosP5imagem} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Biblioteca P5</div>
                </li>
                <div className='introducao'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2 className='h3'>Introdução à Biblioteca Matter.js</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                Matter.js é uma biblioteca de simulação física em JavaScript. Ela permite criar simulações de física realistas, como colisões, gravidade e dinâmica de objetos em um ambiente 2D. Matter.js oferece um conjunto de ferramentas para criar jogos, animações e aplicações interativas com elementos físicos autênticos, tornando possível modelar o comportamento de objetos em um ambiente virtual de forma precisa e envolvente. É amplamente utilizada no desenvolvimento de jogos, simulações educacionais e visualizações interativas.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <li onClick={() => opcao_selecionada(clothImage, cloth)} className='tema'>
                    <img src={clothImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de tecido</div>
                </li>
                <li onClick={() => opcao_selecionada(NewtonImage, newton)} className='tema'>
                    <img src={NewtonImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Pêndulo de Newton</div>
                </li>
                <li onClick={() => opcao_selecionada(gameImage, game)} className='tema'>
                    <img src={gameImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Game</div>
                </li>
                <li onClick={() => opcao_selecionada(WaterImage, agua)} className='tema'>
                    <img src={WaterImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de água</div>
                </li>
                <h2 className='h2'>Exemplo de um código em MatterJs</h2>
                <hr className='hr'></hr>
                <li onClick={() => opcao_selecionada(exemplomatterjs, exemplomatterjs)} className="tema">
                    <img src={matterImage} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Teste de Gravidade</div>
                </li>
                <li onClick={() => opcao_selecionada(bibliotecamatterjsimage, bibliotecamatterjs)} className="tema">
                    <img src={bibliotecamatterjsimage} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Biblioteca Matter JS</div>
                </li>
                <div className='introducao'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2 className='h3'>Introdução à Biblioteca Planck.js</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                Planck.js é uma biblioteca JavaScript de simulação física 2D que permite criar facilmente simulações realistas de física em navegadores web e aplicativos. Ele oferece um motor de física sólido, com suporte para corpos rígidos, colisões, juntas e detecção de contatos. Planck.js é adequado para desenvolver jogos, animações interativas e aplicativos que requerem simulações precisas de movimento, gravidade e colisões. Com uma API simples e documentação abrangente, Planck.js simplifica o processo de criação de simulações físicas imersivas em projetos web, ajudando a proporcionar experiências envolventes e realistas aos usuários.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <li onClick={() => opcao_selecionada(PlanckImage, planck1)} className='tema'>
                    <img src={PlanckImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Exemplo de planck 1</div>
                </li>
                <li onClick={() => opcao_selecionada(Planck2Image, planck2)} className='tema'>
                    <img src={Planck2Image} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Exemplo de planck 2</div>
                </li>
                <h2 className='h2'>Exemplo de um código em MatterJs</h2>
                <hr className='hr'></hr>
                <li onClick={() => opcao_selecionada(bibliotecaplanckimage, bibliotecaplanck)} className="tema">
                    <img src={bibliotecaplanckimage} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Biblioteca Planck</div>
                </li>
            </div>
            </div>
        </div>
        </>
        
    )
}
export default Menu
