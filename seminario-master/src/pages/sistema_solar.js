import React from 'react';
import { useState } from 'react';
import './sistema_solar.css'
import GravitySimulation from '../GravitySimulation';
import { BsArrowsMove } from 'react-icons/bs';
import { BsZoomIn } from 'react-icons/bs';
import { useEffect } from 'react';

function SistemaSolar(anterior='') {
    const [gravity, setGravity] = useState(9.8)
    const [planet,setPlanet] = useState('terra')
    const [isGrabbing, setIsGrabbing] = useState(false);
    let [zoomLevel, setZoomLevel] = useState(1);

    function handleMouseDown() {
        setIsGrabbing(true);
        document.addEventListener('mouseup', () => {
          setIsGrabbing(false);
        }, { once: true });
      }
    
    function handleMouseMove(event) {
        if (isGrabbing) {
            const container = document.getElementById('divirTela');
            container.scrollLeft -= event.movementX;
            container.scrollTop -= event.movementY;
        }
    }

    function handleWheel(event) {
        const content = document.querySelector('#sistema_solar_universo');
    
        if (event.deltaY < 0) {
            setZoomLevel(zoomLevel += 0.1); // Aumenta o zoom
        } 
        if (zoomLevel >0.2 && event.deltaY > 0) {
            setZoomLevel(zoomLevel -= 0.1); // Diminui o zoom
        }
    
        content.style.transform = `scale(${zoomLevel})`;
    }

    function updateSimulation(new_planet) {
        if (new_planet){
            setPlanet('')
            setTimeout(() => {
            setPlanet(new_planet)
        }, 0);
        }else{
            const prevPlanet = planet
            setPlanet('')
            setTimeout(() => {
            setPlanet(prevPlanet)
        }, 0);
        }
        
    }

    useEffect(() => {
          const container = document.getElementById('divirTela');
          const content = document.querySelector('.geral_dividido');
      
          const horizontalCenter = (container.scrollWidth - container.clientWidth) / 2;
          const verticalCenter = (container.scrollHeight - container.clientHeight);
      
          container.scrollLeft = 2000;
          container.scrollTop = 2000;
    }, []);

    function planeta_selecionado(event){
        let elementoId = event.target.id;
        console.log(elementoId)
        if(elementoId === 'terra'){
            elementoId = 'terra'    
            setGravity(9.8)
            updateSimulation(elementoId)
        }else if(elementoId === 'lua'){
            setGravity(1.6)
            updateSimulation(elementoId)
        }else if(elementoId === 'sol'){
            setGravity(274)
            updateSimulation(elementoId)
        }else if(elementoId === 'urano'){
            setGravity(8.87)
            updateSimulation(elementoId)
        }else if(elementoId === 'mercurio'){
            setGravity(3.7)
            updateSimulation(elementoId)
        }else if(elementoId === 'venus'){
            setGravity(8.87)
            updateSimulation(elementoId)
        }else if(elementoId === 'marte'){
            setGravity(3.71)
            updateSimulation(elementoId)
        }else if(elementoId === 'jupiter'){
            setGravity(24.8)
            updateSimulation(elementoId)
        }else if(elementoId === 'saturno'){
            setGravity(10.44)
            updateSimulation(elementoId)
        }else if(elementoId === 'netuno'){
            setGravity(11.15)
            updateSimulation(elementoId)
        }
        else if(planet === elementoId){
            elementoId = ''
        }else if(planet !== ''){
            elementoId = ''
        }        
    }
    return(
        <>
            <div className="tela_dividida">
                <div id="divirTela" className="geral_dividido" 
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onWheel={handleWheel}
                >
                    <div className="instrucoes">        
                        <div className="instrucao_esquerda">Use o mouse para se locomover pelo universo<span className="icon"><BsArrowsMove/></span></div>
                        <div className="instrucao_direita">Para dar zoom use o scroll do mouse<span className="icon"><BsZoomIn/></span></div>
                        </div>
                    <div id="sistema_solar_universo" className="sistema_solar">
                        <div id="sol" className="sol" onClick={planeta_selecionado}>
                            <div className="legenda_sol" >
                                <div id="solClick" className="centro_sol">
                                </div>
                                <div className="ponta"></div>
                            </div>
                        </div>
                        <div id="mercurio"className="mercurio" onClick={planeta_selecionado}>
                        </div>
                        <div id="venus" className="venus" onClick={planeta_selecionado}>
                        </div>
                        <div id="terra" className="terra" onClick={planeta_selecionado}>
                            <div id="lua" className="lua">
                            </div>
                        </div>
                        <div id="marte" className="marte" onClick={planeta_selecionado}>
                        </div>
                        <div id="jupiter" className="jupiter" onClick={planeta_selecionado}>
                        </div>
                        <div id="saturno" className="saturno" onClick={planeta_selecionado}>
                            <div id="aneis" className="aneis">
                            </div>
                        </div>
                        <div className="urano" id="urano" onClick={planeta_selecionado}>
                        </div>
                        <div id="netuno" className="neptuno" onClick={planeta_selecionado}>
                        </div>
                        <div id="orbita_venus" className="orbita_venus">
                                <div id="cliquevenus" onClick="planeta_selecionado('venus')" className="legenda_venus">
                                    <div id="centro_venus" className="centro_venus">
                                    </div>
                                </div>
                            </div>
                            <div id="orbita_mercurio" className="orbita_mercurio">
                                <div className="legenda_mercurio">
                                    <div id="centro_mercurio" className="centro_mercurio">
                                    </div>
                                </div>
                            </div>
                        <div id="orbita_sol" className="orbita_sol">
                            <div className="legenda_terra" id='terra' onClick={planeta_selecionado}>
                                <div id="centro_terra" className="centro_terra">
                                </div>
                            </div>
                            <div id="orbita_terra" className="orbita_terra">
                                <div onClick={planeta_selecionado} className="legenda_lua" id='lua'>
                                    <div id="centro_lua" className="centro_lua">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="orbita_marte" className="orbita_marte">
                            <div id="cliquemarte" onClick="planeta_selecionado('marte')" className="legenda_marte">
                                <div id="centro_marte" className="centro_marte">
                                </div>
                            </div>
                        </div>
                        <div id="orbita_jupiter" className="orbita_jupiter">
                            <div id="cliquejupiter" onClick="planeta_selecionado('jupiter')" className="legenda_jupiter">
                                <div id="centro_jupiter" className="centro_jupiter">
                                </div>
                            </div>
                        </div>
                        <div id="orbita_saturno" className="orbita_saturno">
                            <div id="cliquesaturno" onClick="planeta_selecionado('saturno')" className="legenda_saturno">
                                <div id="centro_saturno" className="centro_saturno">
                                </div>
                            </div>
                        </div>
                        <div id="orbita_urano" className="orbita_urano">
                            <div id="urano" className="legenda_urano">
                                <div id="centro_urano" className="centro_urano">
                                </div>
                            </div>
                        </div>
                        <div id="orbita_neptuno" className="orbita_neptuno">
                            <div id="cliqueneptuno" onClick="planeta_selecionado('neptuno')" className="legenda_neptuno">
                                <div id="centro_neptuno" className="centro_neptuno">

                                </div>
                            </div>
                        </div>
                        <div className="universo">
                        </div>
                    </div>
                </div>
                <div id="contextoPlaneta" className='contexto gravityName'>
                    
                    <h1>{planet ? planet : ''}</h1>
                    {planet ? <GravitySimulation gravity={gravity} /> : ''}
                    
                    {planet ? <button onClick={() =>{
                        const prevPlanet = planet
                        setPlanet('')
                        setTimeout(() => {
                            setPlanet(prevPlanet)
                        }, 0);
                    }}>Reiniciar</button> : ''}
                    
                </div>
            </div>
            
        </>
    )
}

export default SistemaSolar
