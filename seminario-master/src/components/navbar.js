import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Navbar() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='titulo'>
            <nav className="navbar navbar-light bg-light shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-1 h1">Computação Gráfica</span>

                    <Button variant="primary" onClick={handleShow}>
                        Menu
                    </Button>
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Física aplicadas em JavaScript</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <hr className='hr'></hr>
                        <li className="tema">
                            <img src={planets} alt='vazio' className="tema_imagem" onClick={() => window.location.href = '/sistemaSolar'}/> 
                            <div className="legenda ">Gravidade</div>
                        </li>    
                        <li className="tema">
                            <img src={molaImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/mola'}/> 
                            <div className="legenda ">Simulação de Mola</div>
                        </li> 
                        <li className='tema'>
                            <img src={penduloImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/pendulum'}/> 
                            <div className="legenda ">Simulação de pêndulo</div>
                        </li>
                        <li className='tema'>
                            <img src={colisaoImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/colisao'}/> 
                            <div className="legenda ">Simulação de colisão</div>
                        </li>
                        <li className='tema'>
                            <img src={clothImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/cloth'}/> 
                            <div className="legenda ">Cloth</div>
                        </li>
                        <li className='tema'>
                            <img src={NewtonImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/NewtonCradle'}/> 
                            <div className="legenda ">Pêndulo de Newton</div>
                        </li>
                        <li className='tema'>
                            <img src={gameImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/game'}/> 
                            <div className="legenda ">Game</div>
                        </li>
                        <li className='tema'>
                            <img src={WaterImage} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/simulacao_agua'}/> 
                            <div className="legenda ">Simulação de água</div>
                        </li>
                    </Offcanvas.Body>
                    <Offcanvas.Title>Bibliografia</Offcanvas.Title>
                    <Offcanvas.Body>
                        <hr className='hr'></hr>
                        <li className="tema">
                            <img src={planets} alt='vazio' className="tema_imagem" onClick={() => window.location.href = '/sistemaSolar'}/> 
                            <div className="legenda ">Sistema Solar</div>
                        </li>    
                        <li className="tema">
                            <img src={planets} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/mola'}/> 
                            <div className="legenda ">Simulação de Mola</div>
                        </li> 
                        <li className='tema'>
                            <img src={planets} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/pendulum'}/> 
                            <div className="legenda ">Simulação de pêndulo</div>
                        </li>
                        <li className='tema'>
                            <img src={planets} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/colisao'}/> 
                            <div className="legenda ">Simulação de colisão</div>
                        </li>
                        <li className='tema'>
                            <img src={planets} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/cloth'}/> 
                            <div className="legenda ">Cloth</div>
                        </li>
                        <li className='tema'>
                            <img src={planets} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/NewtonCradle'}/> 
                            <div className="legenda ">pêndulo de Newton</div>
                        </li>
                        <li className='tema'>
                            <img src={planets} className="tema_imagem" alt='vazio' onClick={() => window.location.href = '/game'}/> 
                            <div className="legenda ">Game</div>
                        </li>
                    </Offcanvas.Body>
                </Offcanvas>
            </nav>
        </div>
    );
}

export default Navbar;