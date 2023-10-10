import React from 'react';
import { useState } from 'react';
import './sistema_solar.css'
import GravitySimulation from '../GravitySimulation';

function SistemaSolar(anterior='') {
    const [gravity, setGravity] = useState(9.8)
    const [planet,setPlanet] = useState('terra')

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
                                <div id="cliquevenus" onclick="planeta_selecionado('venus')" className="legenda_venus">
                                    <div id="centro_venus" className="centro_venus">
                                        <div>venus</div>
                                    </div>
                                </div>
                            </div>
                            <div id="orbita_mercurio" className="orbita_mercurio">
                                <div id="cliquemercurio" onclick="planeta_selecionado('mercurio')" className="legenda_mercurio">
                                    <div id="centro_mercurio" className="centro_mercurio">
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
