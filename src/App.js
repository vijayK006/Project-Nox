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
import LR4_Eathernet_100G from './Component/100G_CFP-CFP2-CFP4/100G_LR4_Ethernet';

import Product_CFP1 from "./Component/100G_CFP-CFP2-CFP4/100G_CFP1"
import Product_CFP4 from "./Component/100G_CFP-CFP2-CFP4/100G_CFP4"
import Product_100G_QSFP28 from "./Component/100G_CFP-CFP2-CFP4/100G_QSFP28"
import ER4_DuleRate_100G from './Component/100G_CFP-CFP2-CFP4/100G_ER4_DualRate';
import SR10_DuleRate_100G from './Component/100G_CFP-CFP2-CFP4/100G_SR10_Dual-Rate';
import SFP_8GFC_ELR from './Component/8GFC SFP+_DUAL/SFP+8GFC_ELR';
import LR4_DualRate_100G from "./Component/100G_CFP-CFP2-CFP4/100G_LR4_DualRate"
import ER4_100G from './Component/100G_QSFP28/100G_ER4_Products';
import Product_16GFC_SFP from "./Component/16GFC_SFP_SW/16GFC_SFP"
import Product_QSFP28_100G_SR4 from "./Component/100G_QSFP28/QSFP28_100G_SR4"
import Product_100G_SR4 from "./Component/100G_QSFP28/100G_SR4"
import Product_100G_SR4_DualRate from "./Component/100G_QSFP28/100G_SR4_DualRate"
import Product_QSFP28_100G_SRBD from "./Component/100G_QSFP28/QSFP28-100G-SRBD"
import Product_100G_SRBD from "./Component/100G_QSFP28/100G_SRBD"
import Product_100G_SRBD_DualRate from "./Component/100G_QSFP28/100G_SRBD-DualRate"

import ER4_Single_rate_100G from './Component/100G_QSFP28/100G_ER4_Single-Rate';
import ER4_VNTP_Media_100G from './Component/100G_QSFP28/100G_ER4_VNTP_Media';
import ESR4_100G from './Component/100G_QSFP28/100G-eSR4';
import ZR4_100G from './Component/100G_QSFP28/100G-ZR4';
import PSM4_Ethernet_100G from './Component/100G_QSFP28/100G_PSM4_Ethernet';
import LR4_100G from './Component/100G_QSFP28/100G_LR4_Products';
import LR4_Ethernet_OTU4_100G from './Component/100G_QSFP28/100G_LR4_Ethernet_OTU4';
import LR4_Ethernet_100G from './Component/100G_QSFP28/100G_LR4_Ethernet';
import SFP28_SR_Products from './Component/25G SFP28/SFP28_SR_Products';
import SFP28_25G_SR from './Component/25G SFP28/SFP28_25G_SR';
import SFP28_25G_eSR from './Component/25G SFP28/SFP28_25G_eSR';
import SFP28_25G_eSR_DuleRate from './Component/25G SFP28/SFP28_25G_eSR_DuleRate';
import SFP28_BIDI_Products from './Component/25G SFP28/SFP28_BIDI_Products';
import SFP28_BX10_27 from './Component/25G SFP28/SFP28_BX10_27';
import SFP28_BX20_27 from './Component/25G SFP28/SFP28_BX20_27';
import SFP28_BX10_33 from './Component/25G SFP28/SFP28_BX10_33';
import SFP28_BX20_33 from './Component/25G SFP28/SFP28_BX20_33';
import SFP28_25G_CWDM from './Component/25G SFP28/SFP28_25G_CWDM';
import SFP28_LR_25G_Projects from './Component/25G SFP28/25G_SFP28_LR_Projects';
import SFP28_25G_LR_2km from "./Component/25G SFP28/25G-LR_2km"
import SFP28_25G_LR_10km from "./Component/25G SFP28/25G-LR_10km"
import SFP28_25G_LR_DualRate from "./Component/25G SFP28/25G-LR_DualRate"
import SFP28_25G_LR_Transceiver from "./Component/25G SFP28/25G-LR_transciever"
import SFP28_25G_DWDM from "./Component/25G SFP28/25G-DWDM"
import SFP28_25G__LWDM_products from './Component/25G SFP28/SFP28_25G_LWDM_products';
import LWDM_25G_40KM from './Component/25G SFP28/LWDM_25G_40KM';
import LWDM_25G_40KM_DuelRate from './Component/25G SFP28/LWDM_25G_40KM_DuelRate';


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
     <Route path="/Product_CFP1" element={<Product_CFP1/>}/>
     <Route path="/CFP2_Products_100G" element={<CFP2_Products_100G/>}/>
     <Route path="/LR4_Eathernet_100G" element={<LR4_Eathernet_100G/>}/>
     <Route path="/Product_CFP4" element={<Product_CFP4/>}/>
     <Route path="/Product_100G_QSFP28" element={<Product_100G_QSFP28/>}/>
     <Route path="/ER4_DuleRate_100G" element={<ER4_DuleRate_100G/>}/>
     <Route path="/SR10_DuleRate_100G" element={<SR10_DuleRate_100G/>}/>
     <Route path="/SFP_8GFC_ELR" element={<SFP_8GFC_ELR/>}/>
     <Route path="/LR4_DualRate_100G" element={<LR4_DualRate_100G/>}/>
     <Route path="/ER4_100G" element={<ER4_100G/>}/>
     <Route path="/Product_16GFC_SFP" element={<Product_16GFC_SFP/>}/>
     <Route path="/Product_QSFP28_100G_SR4" element={<Product_QSFP28_100G_SR4/>}/>
     <Route path="/Product_100G_SR4" element={<Product_100G_SR4/>}/>
     <Route path="/Product_100G_SR4_DualRate" element={<Product_100G_SR4_DualRate/>}/>
     <Route path="/Product_QSFP28_100G_SRBD" element={<Product_QSFP28_100G_SRBD/>}/>
     <Route path="/Product_100G_SRBD" element={<Product_100G_SRBD/>}/>
     <Route path="/Product_100G_SRBD_DualRate" element={<Product_100G_SRBD_DualRate/>}/>
     
     <Route path="/ER4_Single_rate_100G" element={<ER4_Single_rate_100G/>}/>
     <Route path="/ER4_VNTP_Media_100G" element={<ER4_VNTP_Media_100G/>}/>
     <Route path="/ESR4_100G" element={<ESR4_100G/>}/>
     <Route path="/ZR4_100G" element={<ZR4_100G/>}/>
     <Route path="/PSM4_Ethernet_100G" element={<PSM4_Ethernet_100G/>}/>
     <Route path="/LR4_100G" element={<LR4_100G/>}/>
     <Route path="/LR4_Ethernet_OTU4_100G" element={<LR4_Ethernet_OTU4_100G/>}/>
     <Route path="/LR4_Ethernet_100G" element={<LR4_Ethernet_100G/>}/>
     <Route path="/SFP28_SR_Products" element={<SFP28_SR_Products/>}/>
     <Route path="/SFP28_25G_SR" element={<SFP28_25G_SR/>}/>
     <Route path="/SFP28_25G_eSR" element={<SFP28_25G_eSR/>}/>
     <Route path="/SFP28_25G_eSR_DuleRate" element={<SFP28_25G_eSR_DuleRate/>}/>
     <Route path="/SFP28_BIDI_Products" element={<SFP28_BIDI_Products/>}/>
     <Route path="/SFP28_BX10_27" element={<SFP28_BX10_27/>}/>
     <Route path="/SFP28_BX20_27" element={<SFP28_BX20_27/>}/>
     <Route path="/SFP28_BX10_33" element={<SFP28_BX10_33/>}/>
     <Route path="/SFP28_BX20_33" element={<SFP28_BX20_33/>}/>
     <Route path="/SFP28_25G_CWDM" element={<SFP28_25G_CWDM/>}/>
     <Route path="/SFP28_LR_25G_Projects" element={<SFP28_LR_25G_Projects/>}/>
     <Route path="/SFP28_25G_LR_2km" element={<SFP28_25G_LR_2km/>}/>
     <Route path="/SFP28_25G_LR_10km" element={<SFP28_25G_LR_10km/>}/>
     <Route path="/SFP28_25G_LR_DualRate" element={<SFP28_25G_LR_DualRate/>}/>
     <Route path="/SFP28_25G_LR_Transceiver" element={<SFP28_25G_LR_Transceiver/>}/>
     <Route path="/SFP28_25G_DWDM" element={<SFP28_25G_DWDM/>}/>
     <Route path="/SFP28_25G__LWDM_products" element={<SFP28_25G__LWDM_products/>}/>
     <Route path="/LWDM_25G_40KM" element={<LWDM_25G_40KM/>}/>
     <Route path="/LWDM_25G_40KM_DuelRate" element={<LWDM_25G_40KM_DuelRate/>}/>
     
    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
