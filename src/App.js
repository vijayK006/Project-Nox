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
import FourtyGLoopbackProduct from './Component/LoopbackSeries/40GLoopbackProduct';
import HundredGLoopbackProduct from './Component/LoopbackSeries/100GLoopbackProduct.jsx.jsx';
import TwoHGLoopbackProduct from './Component/LoopbackSeries/200GLoopbackProduct.jsx';
import FourHGLoopbackProduct from './Component/LoopbackSeries/400GLoopbackProduct.jsx';
import TenGLoopbackProduct from './Component/LoopbackSeries/10GLoopbackProduct.jsx';
import TwentyFiveGLoopbackProduct from './Component/LoopbackSeries/25GLoopbackProduct.jsx';


function App() {
  return (

    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/AboutUs" element={<AboutUs/>}/>
     <Route path="/40G-Loopback-Product" element={<FourtyGLoopbackProduct/>}/>
     <Route path="/100G-Loopback-Product" element={<HundredGLoopbackProduct/>}/>
     <Route path="/200G-Loopback-Product" element={<TwoHGLoopbackProduct/>}/>
     <Route path="/400G-Loopback-Product" element={<FourHGLoopbackProduct/>}/>
     <Route path="/10G-Loopback-Product" element={<TenGLoopbackProduct/>}/>
     <Route path="/25G-Loopback-Product" element={<TwentyFiveGLoopbackProduct/>}/>
    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
