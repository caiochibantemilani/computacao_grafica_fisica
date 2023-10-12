import React from 'react';
import { useState } from 'react';
import './sistema_solar.css'
import GravitySimulation from '../GravitySimulation';
import { BsArrowsMove } from 'react-icons/bs';
import { BsZoomIn } from 'react-icons/bs';

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

    function planeta_selecionado(event){
        let elementoId = event.target.querySelector;
        let parentId = event.target.parentElement.id;

        console.log(parentId.content)
        if(elementoId === 'orbita_terra'){
            elementoId = 'terra'
            setGravity(9.8)
        }
        if(elementoId === 'lua'){
            setGravity(1.6)
        }
        if(elementoId === 'solClick'){
            elementoId = 'sol'
            setGravity(274)
            updateSimulation(elementoId)
        }
        if(planet === elementoId){
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
                        <div className="instrucao_esquerda">Use o mouse para se locomover pelo universo<span classname="icon"><BsArrowsMove/></span></div>
                        <div className="instrucao_direita">Para dar zoom use o scroll do mouse<span classname="icon"><BsZoomIn/></span></div>
                        </div>
                    <div id="sistema_solar_universo" className="sistema_solar">
                        <div id="sol" className="sol">
                            <div className="legenda_sol">
                                <div id="solClick" className="centro_sol" onClick={planeta_selecionado}>
                                </div>
                                <div className="ponta"></div>
                            </div>
                        </div>
                        <div id="mercurio" className="mercurio">
                        </div>
                        <div id="venus" className="venus">
                        </div>
                        <div id="terra" className="terra">
                            <div id="lua" className="lua">
                            </div>
                        </div>
                        <div id="marte" className="marte">
                        </div>
                        <div id="jupiter" className="jupiter">
                        </div>
                        <div id="saturno" className="saturno">
                            <div id="aneis" className="aneis">
                            </div>
                        </div>
                        <div id="urano" className="urano">
                        </div>
                        <div id="neptuno" className="neptuno">
                        </div>
                        <div id="orbita_venus" className="orbita_venus">
                                <div id="cliquevenus" onClick="planeta_selecionado('venus')" className="legenda_venus">
                                    <div id="centro_venus" className="centro_venus">
                                    </div>
                                </div>
                            </div>
                            <div id="orbita_mercurio" className="orbita_mercurio">
                                <div id="cliquemercurio" onClick="planeta_selecionado('mercurio')" className="legenda_mercurio">
                                    <div id="centro_mercurio" className="centro_mercurio">
                                    </div>
                                </div>
                            </div>
                        <div id="orbita_sol" className="orbita_sol">
                            <div className="legenda_terra" id='terra'>
                                <div id="centro_terra" className="centro_terra" >
                                </div>
                            </div>
                            <div id="orbita_terra" className="orbita_terra" onClick={planeta_selecionado}>
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
                            <div id="cliqueurano" onClick="planeta_selecionado('urano')" className="legenda_urano">
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
