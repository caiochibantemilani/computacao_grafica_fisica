import React from 'react';
import { useState } from 'react';
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
    const [clicado, setClicado] = useState(false);
    const [evento, setEvento] = useState(null);
    const [resumoGeral, setResumoGeral] = useState(null);

    const [gravidade, setGravidade] = useState({
        Titulo: 'Gravidade',
        Resumo: 'PREENCHER COM O RESUMO DA GRAVIDADE',
        Endereco: '/sistemaSolar'
    });
    const [mola, setMola] = useState({
        Titulo: 'Mola',
        Resumo: 'PREENCHER COM O RESUMO DA Mola',
        Endereco: '/mola'
    });
    const [pendulo, setPendulo] = useState({
        Titulo: 'Pendulo',
        Resumo: 'PREENCHER COM O RESUMO DA Pendulo',
        Endereco: '/pendulum'
    });
    const [colisao, setColisao] = useState({
        Titulo: 'Colisao',
        Resumo: 'PREENCHER COM O RESUMO DA Colisao',
        Endereco: '/colisao'
    });
    const [cloth, setCloth] = useState({
        Titulo: 'Cloth',
        Resumo: 'PREENCHER COM O RESUMO DA Cloth',
        Endereco: '/cloth'
    });
    const [newton, setNewton] = useState({
        Titulo: 'Newton',
        Resumo: 'PREENCHER COM O RESUMO DA Newton',
        Endereco: '/NewtonCradle'
    });
    const [game, setGame] = useState({
        Titulo: 'Game',
        Resumo: 'PREENCHER COM O RESUMO DA Game',
        Endereco: '/game'
    });
    const [agua, setAgua] = useState({
        Titulo: 'Pendulo',
        Resumo: 'PREENCHER COM O RESUMO DA Agua',
        Endereco: '/simulacao_agua'
    });

    function planeta_selecionado(teste, resumo){
        setClicado(true);
        setEvento(teste);
        setResumoGeral(resumo);
    }

    return(
        <>
        <div className='all'>
        <Navbar/>
            {!clicado && (
                <img src={planets4k} alt="planets" className="tela"/>
            )}
            {clicado && (
                <img src={evento} alt="planets" className="tela"/>
            )}
            {clicado && (
                <div className='resumo_geral'><h1>{resumoGeral.Titulo}</h1><p>{resumoGeral.Resumo}</p><a class="btn btn-primary" href={resumoGeral.Endereco}>Entrar</a></div>
            )}
            <div className="paginasFisica">
            <div className="Sumario">
                <h2 className='h2'>Física aplicadas em JavaScript</h2>
                <hr className='hr'></hr>
                <li className="tema">
                    <img onClick={() => planeta_selecionado(planets, gravidade)}  src={planets} alt='vazio' className="tema_imagem" /> 
                    <div className="legenda ">Gravidade</div>
                </li>    
                <li className="tema">
                    <img onClick={() => planeta_selecionado(molaImage, mola)} src={molaImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de Mola</div>
                </li> 
                <li className='tema'>
                    <img onClick={() => planeta_selecionado(penduloImage, pendulo)} src={penduloImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de pêndulo</div>
                </li>
                <li className='tema'>
                    <img onClick={() => planeta_selecionado(colisaoImage, colisao)} src={colisaoImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de colisão</div>
                </li>
                <li className='tema'>
                    <img onClick={() => planeta_selecionado(clothImage, cloth)} src={clothImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Cloth</div>
                </li>
                <li className='tema'>
                    <img onClick={() => planeta_selecionado(NewtonImage, newton)} src={NewtonImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Pêndulo de Newton</div>
                </li>
                <li className='tema'>
                    <img onClick={() => planeta_selecionado(gameImage, game)} src={gameImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Game</div>
                </li>
                <li className='tema'>
                    <img onClick={() => planeta_selecionado(WaterImage, agua)} src={WaterImage} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de água</div>
                </li>
                <h2 className='h2'>Bibliografia</h2>
                <hr className='hr'></hr>
                <li className="tema">
                    <img src={planets} alt='vazio' className="tema_imagem"/> 
                    <div className="legenda ">Sistema Solar</div>
                </li>    
                <li className="tema">
                    <img src={planets} className="tema_imagem" alt='vazio'/> 
                    <div className="legenda ">Simulação de Mola</div>
                </li> 
                <li className='tema'>
                    <img src={planets} className="tema_imagem" alt='vazio'/> 
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
