import React from 'react';
import planets from '../images/sistema_solar_wallpaper.jpg'
import planets4k from '../images/sistema_solar_wallpaper_4k.jpg'
import molaImage from '../images/molaImage.png'
import penduloImage from '../images/pendulo.png'
import colisaoImage from '../images/colisao.png'
import clothImage from '../images/cloth.png'
import NewtonImage from '../images/newton.png';
import gameImage from '../images/game.png'
import Navbar from '../components/navbar';
import WaterImage from '../images/water.png'
import './menu.css'

function Menu(){
    return(
        <>
        <div className='all'>
        <Navbar/>
        <img src={planets4k} alt="planets" className="tela"/>
            <div className="paginasFisica">
            <div class="Sumario">
                <h2 className='h2'>Física aplicadas em JavaScript</h2>
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
                <h2 className='h2'>Bibliografia</h2>
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
            </div>
            </div>
        </div>
        </>
        
    )
}

export default Menu
