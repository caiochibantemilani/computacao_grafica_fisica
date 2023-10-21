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
import Plank1 from './planck1';
import Planck2 from './plank2';
import ExemploP5 from './ExemploP5';
import ExemploMatterJS from './ExemploMatterJS';
import Menu from './pages/menu'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="" element={<Menu />}></Route>
          <Route path="/sistemaSolar" element={<SistemaSolar/>}></Route>
          <Route path="/mola" element={<SpringSimulation/>}></Route>
          <Route path="/pendulum" element={<PendulumSimulation/>}></Route>
          <Route path="/colisao" element={<CollisionSimulation/>}></Route>
          <Route path="/cloth" element={<Cloth/>}></Route>
          <Route path="/NewtonCradle" element={<NewtonCradle/>}></Route>
          <Route path="/game" element={<MatterGame/>}></Route>
          <Route path="/simulacao_agua" element={<WaterSimulation/>}></Route>
          <Route path="/planck" element={<Plank1/>}></Route>
          <Route path="/planck2" element={<Planck2/>}></Route>
          <Route path="/ExemploP5" element={<ExemploP5/>}></Route>
          <Route path="/ExemploMatterJS" element={<ExemploMatterJS/>}></Route>
        </Routes>
         
    </BrowserRouter>
  );
}

export default App;
