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
    return(
        <>
            <div className="tela_dividida">
                <div id="divirTela" className="geral">
                    <div className="sistema_solar">
                        <div id="sol" onclick="planeta_selecionado('sol')" classname="sol">
                <div classname="legenda_sol">
                    <div classname="centro_sol">
                        <div id="legenda">Sol</div>
                    </div>
                    <div classname="ponta"></div>
                </div>
            </div>
            <div id="mercurio" classname="mercurio">
            </div>
            <div id="venus" classname="venus">
            </div>
            <div id="terra" classname="terra">
                <div id="lua" classname="lua">
                </div>
            </div>
            <div id="marte" classname="marte">
            </div>
            <div id="jupiter" classname="jupiter">
            </div>
            <div id="saturno" classname="saturno">
                <div id="aneis" classname="aneis">
                </div>
            </div>
            <div id="urano" classname="urano">
            </div>
            <div id="neptuno" classname="neptuno">
            </div>
            <div id="orbita_venus" classname="orbita_venus">
                <div id="cliquevenus" onclick="planeta_selecionado('venus')" classname="legenda_venus">
                    <div id="centro_venus" classname="centro_venus">
                        <div>venus</div>
                    </div>
                </div>
            </div>
            <div id="orbita_mercurio" classname="orbita_mercurio">
                <div id="cliquemercurio" onclick="planeta_selecionado('mercurio')" classname="legenda_mercurio">
                    <div id="centro_mercurio" classname="centro_mercurio">
                        <div>mercurio</div>
                    </div>
                </div>
            </div>
            <div id="orbita_sol" classname="orbita_sol">
                <div id="cliqueTerra" onclick="planeta_selecionado('terra')" classname="legenda_terra">
                    <div id="centro_terra" classname="centro_terra">
                        <div>Terra</div>
                    </div>
                </div>
                <div id="orbita_terra" classname="orbita_terra">
                    <div id="cliqueLua" onclick="planeta_selecionado('lua')" classname="legenda_lua">
                        <div id="centro_lua" classname="centro_lua">
                            <div>Lua</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="orbita_marte" classname="orbita_marte">
                <div id="cliquemarte" onclick="planeta_selecionado('marte')" classname="legenda_marte">
                    <div id="centro_marte" classname="centro_marte">
                        <div>marte</div>
                    </div>
                </div>
            </div>
            <div id="orbita_jupiter" classname="orbita_jupiter">
                <div id="cliquejupiter" onclick="planeta_selecionado('jupiter')" classname="legenda_jupiter">
                    <div id="centro_jupiter" classname="centro_jupiter">
                        <div>jupiter</div>
                    </div>
                </div>
            </div>
            <div id="orbita_saturno" classname="orbita_saturno">
                <div id="cliquesaturno" onclick="planeta_selecionado('saturno')" classname="legenda_saturno">
                    <div id="centro_saturno" classname="centro_saturno">
                        <div>saturno</div>
                    </div>
                </div>
            </div>
            <div id="orbita_urano" classname="orbita_urano">
                <div id="cliqueurano" onclick="planeta_selecionado('urano')" classname="legenda_urano">
                    <div id="centro_urano" classname="centro_urano">
                        <div>urano</div>
                    </div>
                </div>
            </div>
            <div id="orbita_neptuno" classname="orbita_neptuno">
                <div id="cliqueneptuno" onclick="planeta_selecionado('neptuno')" classname="legenda_neptuno">
                    <div id="centro_neptuno" classname="centro_neptuno">
                        <div>neptuno</div>
                    </div>
                </div>
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
