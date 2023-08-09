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
import Products_40G_LR4 from './Component/40G_QSFP+/40G_LR4_Products';
import Product_40G_ER4 from './Component/40G_QSFP+/40G_ER4_Products';
import Product_40G_eSR4 from "./Component/40G_QSFP+/40G_eSR4_Products";
import LR4_10KM_40G from './Component/40G_QSFP+/40G_LR4_10KM';
import Product_40G_ZR4 from './Component/40G_QSFP+/40G_ZR4_Products'
import LR4_20KM_40G from './Component/40G_QSFP+/40G_LR4_20KM';
import Product_40G_SR4 from './Component/40G_QSFP+/40G_SR4_Products'
import IR4_40G from './Component/40G_QSFP+/40G_IR4';
import PSM4_IR_40G from './Component/40G_QSFP+/40G_PSM4_IR';
import PSM4_LR_40G from './Component/40G_QSFP+/40G_PSM4_LR';
import SWDM4_40G from './Component/40G_QSFP+/40G_SWDM4';

import Product_40G_SRBD from "./Component/40G_QSFP+/40G_SRBD_Products";
import CFP2_Products_100G from './Component/100G_CFP-CFP2-CFP4/100G_CFP2_Products';

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
     <Route path="/Products_40G_LR4" element={<Products_40G_LR4/>}/>
     <Route path="/Product_40G_ER4" element={<Product_40G_ER4/>}/>
     <Route path='/Product_40G_eSR4' element={<Product_40G_eSR4/>}/>
     <Route path="/LR4_10KM_40G" element={<LR4_10KM_40G/>}/>
     <Route path="/Product_40G_ZR4" element={<Product_40G_ZR4/>}/> 
     <Route path="/LR4_20KM_40G" element={<LR4_20KM_40G/>}/>
     <Route path="/Product_40G_SR4" element={<Product_40G_SR4/>}/>
     <Route path="/Product_40G_SRBD" element={<Product_40G_SRBD/>}/>
 
     <Route path="/IR4_40G" element={<IR4_40G/>}/>
     <Route path="/PSM4_IR_40G" element={<PSM4_IR_40G/>}/>
     <Route path="/PSM4_LR_40G" element={<PSM4_LR_40G/>}/>
     <Route path="/SWDM4_40G" element={<SWDM4_40G/>}/>
     <Route path="/CFP2_Products_100G" element={<CFP2_Products_100G/>}/>
    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
