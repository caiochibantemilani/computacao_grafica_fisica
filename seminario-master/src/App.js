import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import SistemaSolar from './pages/sistema_solar';
import SpringSimulation from './SpringSimulation';
import PendulumSimulation from './PendulumSimulation';
import CollisionSimulation from './CollisionSimulation';
import Cloth from './Cloth';
import NewtonCradle from './NewtonCradle';
import MatterGame from './MatterGame';
import WaterSimulation from './WaterSimulation'
import Menu from './pages/menu'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/sistemaSolar" element={<SistemaSolar/>}></Route>
          <Route path="/mola" element={<SpringSimulation/>}></Route>
          <Route path="/pendulum" element={<PendulumSimulation/>}></Route>
          <Route path="/colisao" element={<CollisionSimulation/>}></Route>
          <Route path="/cloth" element={<Cloth/>}></Route>
          <Route path="/NewtonCradle" element={<NewtonCradle/>}></Route>
          <Route path="/game" element={<MatterGame/>}></Route>
          <Route path="/simulacao_agua" element={<WaterSimulation/>}></Route>
        </Routes>
         
    </BrowserRouter>
  );
}

export default App;
