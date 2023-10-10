import React from 'react';
import { useState } from 'react';
import './sistema_solar.css'
import GravitySimulation from '../GravitySimulation';

function SistemaSolar(anterior='') {
    const [gravity, setGravity] = useState('')
    const [planet,setPlanet] = useState('')

    function planeta_selecionado(event){
        let elementoId = event.target.id;
        if(elementoId === 'orbita_terra'){
            elementoId = 'terra'
            setGravity(9.8)
        }
        if(elementoId === 'lua'){
            setGravity(1.6)
        }
        if(elementoId === 'sol'){
            setGravity(274)
        }
        if(planet === elementoId){
            elementoId = ''
        }else if(planet !== ''){
            elementoId = ''

        }

        setPlanet(elementoId)
    }
    let isGrabbing = false;

        document.getElementById('divirTela').addEventListener('mousedown', () => {
            isGrabbing = true;
            document.addEventListener('mouseup', () => {
                isGrabbing = false;
            }, { once: true });
        });

        document.getElementById('divirTela').addEventListener('mousemove', (event) => {
            if (isGrabbing) {
                const container = document.getElementById('divirTela');
                container.scrollLeft -= event.movementX; // Alteração aqui: subtraímos em vez de somar
                container.scrollTop -= event.movementY;
            }
        });
        
        let zoomLevel = 1;

        document.getElementById('divirTela').addEventListener('wheel', (event) => {
            event.preventDefault();
            const content = document.querySelector('.geral_dividido');
        
            if (event.deltaY < 0) {
                zoomLevel += 0.1; // Aumenta o zoom
            } else {
                zoomLevel -= 0.1; // Diminui o zoom
            }
        
            content.style.transform = `scale(${zoomLevel})`;
        });
    return(
        <>
            <div className="tela_dividida">
                <div id="divirTela" className="geral_dividido">
                    <div className="sistema_solar">
                        <div id="sol" onClick={planeta_selecionado} className="sol">
                            <div className="legenda_sol">
                                <div className="centro_sol">
                                    <div id="legenda">Sol</div>
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
                        <div id="marte" class="marte">
                        </div>
                        <div id="jupiter" class="jupiter">
                        </div>
                        <div id="saturno" class="saturno">
                            <div id="aneis" class="aneis">
                            </div>
                        </div>
                        <div id="urano" class="urano">
                        </div>
                        <div id="neptuno" class="neptuno">
                        </div>
                        <div id="orbita_venus" class="orbita_venus">
                                <div id="cliquevenus" onclick="planeta_selecionado('venus')" class="legenda_venus">
                                    <div id="centro_venus" class="centro_venus">
                                        <div>venus</div>
                                    </div>
                                </div>
                            </div>
                            <div id="orbita_mercurio" class="orbita_mercurio">
                                <div id="cliquemercurio" onclick="planeta_selecionado('mercurio')" class="legenda_mercurio">
                                    <div id="centro_mercurio" class="centro_mercurio">
                                        <div>mercurio</div>
                                    </div>
                                </div>
                            </div>
                        <div id="orbita_sol" className="orbita_sol">
                            <div className="legenda_terra" id='terra'>
                                <div id="centro_terra" className="centro_terra" >
                                    <div>Terra</div>
                                </div>
                            </div>
                            <div id="orbita_terra" className="orbita_terra" onClick={planeta_selecionado}>
                                <div onClick={planeta_selecionado} className="legenda_lua" id='lua'>
                                    <div id="centro_lua" className="centro_lua">
                                        <div>Lua</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="orbita_marte" class="orbita_marte">
                            <div id="cliquemarte" onclick="planeta_selecionado('marte')" class="legenda_marte">
                                <div id="centro_marte" class="centro_marte">
                                    <div>marte</div>
                                </div>
                            </div>
                        </div>
                        <div id="orbita_jupiter" class="orbita_jupiter">
                            <div id="cliquejupiter" onclick="planeta_selecionado('jupiter')" class="legenda_jupiter">
                                <div id="centro_jupiter" class="centro_jupiter">
                                    <div>jupiter</div>
                                </div>
                            </div>
                        </div>
                        <div id="orbita_saturno" class="orbita_saturno">
                            <div id="cliquesaturno" onclick="planeta_selecionado('saturno')" class="legenda_saturno">
                                <div id="centro_saturno" class="centro_saturno">
                                    <div>saturno</div>
                                </div>
                            </div>
                        </div>
                        <div id="orbita_urano" class="orbita_urano">
                            <div id="cliqueurano" onclick="planeta_selecionado('urano')" class="legenda_urano">
                                <div id="centro_urano" class="centro_urano">
                                    <div>urano</div>
                                </div>
                            </div>
                        </div>
                        <div id="orbita_neptuno" class="orbita_neptuno">
                            <div id="cliqueneptuno" onclick="planeta_selecionado('neptuno')" class="legenda_neptuno">
                                <div id="centro_neptuno" class="centro_neptuno">
                                    <div>neptuno</div>
                                </div>
                            </div>
                        </div>
                        <div class="universo">
                        </div>
                    </div>
                </div>
                <div id="contextoPlaneta" className='gravityName'>
                    {planet ? <button className='simulacaobutton' onClick={() => {
                        setPlanet('')
                        setGravity('')
                    }}>X</button> : ''}
                    
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
