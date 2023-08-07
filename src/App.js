import './App.css';
import './navBar.css';
import './style.css';
import './product.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Index from './Component/Index';
import AboutUs from './Component/AboutUs';
import FourtyGLoopbackProduct from './Component/40GLoopbackProduct';

function App() {
  return (

    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/AboutUs" element={<AboutUs/>}/>
     <Route path="/40G-Loopback-Product" element={<FourtyGLoopbackProduct/>}/>
    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
