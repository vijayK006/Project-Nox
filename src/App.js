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
import L13_4WDM from './Component/100G_QSFP28/4WDM_L13';
import L12_4WDM from './Component/100G_QSFP28/4WDM_L12';
import BIDI_10_to_40_Products from './Component/100G_QSFP28/BIDI_10_to_40';
import BIDI_C27 from './Component/100G_QSFP28/BIDI_C27';
import BIDI_C29 from './Component/100G_QSFP28/BIDI_C29';
import BIDI_C31 from './Component/100G_QSFP28/BIDI_C31';
import BIDI_L04 from './Component/100G_QSFP28/BIDI_L04';
import BIDI_L09 from './Component/100G_QSFP28/BIDI_L09';
import QSPF28_adaptor from './Component/100G_QSFP28/QSPF28_adaptor';
import ER4_Single_rate_100G from './Component/100G_QSFP28/100G_ER4_Single-Rate';
import ER4_VNTP_Media_100G from './Component/100G_QSFP28/100G_ER4_VNTP_Media';
import ER4_40Di_100G from './Component/100G_QSFP28/100G_ER4_40Di';
import ESR4_100G from './Component/100G_QSFP28/100G-eSR4';
import ZR4_100G from './Component/100G_QSFP28/100G-ZR4';
import PSM4_Ethernet_100G from './Component/100G_QSFP28/100G_PSM4_Ethernet';
import LR4_100G from './Component/100G_QSFP28/100G_LR4_Products';
import LR4_Ethernet_OTU4_100G from './Component/100G_QSFP28/100G_LR4_Ethernet_OTU4';
import LR4_Ethernet_100G from './Component/100G_QSFP28/100G_LR4_Ethernet';
import BIDI_4WDM_Products from './Component/100G_QSFP28/BIDI_4WDM_Products';
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
import SFP28_25G_SW from "./Component/25G SFP28/25G-SW";
import SFP_100Tx_Products from "./Component/RJ45 Copper Series/SFP-100Tx_Products";
import SFP_100Tx_T01_X1 from './Component/RJ45 Copper Series/SFP_100Tx_X1';
import SFP_100Tx_T01_X1i from './Component/RJ45 Copper Series/SFP_100Tx_X1i';
import SFP_100Tx_T11_X1 from './Component/RJ45 Copper Series/SFP_100Tx_T11_X1';
import SFP_1000T_Products from './Component/RJ45 Copper Series/SFP_1000T_Products';
import SFP_1000T_T01_Xl from './Component/RJ45 Copper Series/SFP_1000T_T01_Xl';
import SFP_1000T_T01_Xli from './Component/RJ45 Copper Series/SFP_1000T_T01_Xli';
import SFP_1000T_T10_X1 from './Component/RJ45 Copper Series/SFP_1000T_T10_X1';
import SFP_1000T_T10_X1i from './Component/RJ45 Copper Series/SFP_1000T_T10_X1i';
import SFP_1000T_T11_X1i from './Component/RJ45 Copper Series/SFP_1000T_T11_X1i';
import SFP_1000T_T11_X1 from './Component/RJ45 Copper Series/SFP_1000T_T11_X1';
import SFP_1000T_T20_X1 from './Component/RJ45 Copper Series/SFP_1000T_T20_X1';
import SFP_1000T_T20_X1i from './Component/RJ45 Copper Series/SFP_1000T_T20_X1i';
import SFP_1000T_T22_X1 from './Component/RJ45 Copper Series/SFP_1000T_T22_X1';
import SFP_1000T_T22_X1i from './Component/RJ45 Copper Series/SFP_1000T_T22_X1i';
import X2_DUAL_Products from './Component/10G X2/X2_DUAL_Products';
import X2_10G_SR from './Component/10G X2/X2_10G_SR';
import X2_10G_LR from './Component/10G X2/X2_10G_LR';
import X2_10G_ER from './Component/10G X2/X2_10G_ER';
import X2_10G_ZR from './Component/10G X2/X2_10G_ZR';
import Dual_Bidi_LC from './Component/1.25G CSFP/Dual_Bidi_LC';
import Projects_SFP_10G from "./Component/RJ45 Copper Series/Projects_SFP_10G_T";
import SFP_10G_T_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T_Y3";
import SFP_10G_T11_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T11_Y3";
import SFP_10G_T12_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T12_Y3";
import SFP_10G_T13_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T13_Y3";
import SFP_10G_T_Y3i from "./Component/RJ45 Copper Series/SFP_10G_T_Y3i";
import SFP_10G_T_Y38 from "./Component/RJ45 Copper Series/SFP_10G_T_Y38";
// import Products_2point5_SFP_BIDI from "./Component/2.5_SFP/2.5_SFP_BIDI_Products";
import BIDI_S35_20D from "./Component/2.5_SFP/SFP_BIDI_2.5G_S35_20D";
import BIDI_S53_20D from "./Component/2.5_SFP/BIDI_S53_20D";
import BIDI_S35_40D from "./Component/2.5_SFP/BIDI_S35_40D";
import BIDI_S53_40D from "./Component/2.5_SFP/BIDI_S53_40D";
import Products_SFP_CWDM from "./Component/2.5_SFP/Products_2.5_SFP_CWDM";
import CWDM_b20D from "./Component/2.5_SFP/CWDM_b20D";
import CWDM_b26D from "./Component/2.5_SFP/CWDM_b26D";
import CWDM_b30D from "./Component/2.5_SFP/CWDM_b30D";
import CWDM_b30DM from "./Component/2.5_SFP/CWDM_b30DM";
import CWDM_b26DM from "./Component/2.5_SFP/CWDM_b26DM";
import Products_2point5_Dual from "./Component/2.5_SFP/Products_2.5G_Dual";
import Dual_X3D from "./Component/2.5_SFP/Dual_X3D";
import Dual_X3DM from "./Component/2.5_SFP/Dual_X3DM";
import Dual_02D from "./Component/2.5_SFP/Dual_02D";
import SFP_BIDI_Products from "./Component/2.5_SFP/SFP_BIDI_Products";
import SFP_DWDM_Products from './Component/2.5_SFP/SFP_DWDM_Products';
import DWDM_80km from './Component/2.5_SFP/DWDM_80km';
import DWDM_120km from './Component/2.5_SFP/DWDM_120km';
import Dual_20D from './Component/2.5_SFP/Dual_20D';
import Dual_S13_40D from './Component/2.5_SFP/Dual_S13_40D';
import Dual_S13_60D from './Component/2.5_SFP/Dual_S13_60D';
import Dual_S15_40D from './Component/2.5_SFP/Dual_S15_40D';
import Dual_S15_80D from './Component/2.5_SFP/Dual_S15_80D';
import Dual_S15_A0D from './Component/2.5_SFP/Dual_S15_A0D';
import Dual_S15_A0DM from './Component/2.5_SFP/Dual_S15_A0DM';
import Dual_S15_A2D from './Component/2.5_SFP/Dual_S15_A2D';
import Dual_S15_A2DM from './Component/2.5_SFP/Dual_S15_A2DM';

import SFP_1_25G_DWDM_Products from './Component/1.25G SFP/SFP_1.25G_DWDM_Products';
import SFP_1_25G_DWDM_80D from './Component/1.25G SFP/SFP_1.25G_DWDM_80D';
import SFP_1_25G_DWDM_A2D from './Component/1.25G SFP/SFP_1_25G_DWDM_A2D';

import SFP_CWDM_1_25G_Products from './Component/1.25G SFP/SFP_CWDM_1.25G_Products';
import CWDM_19D_1_25G from './Component/1.25G SFP/CWDM_19D_1.25G';
import CWDM_24D_1_25G from './Component/1.25G SFP/CWDM_24D_1.25G';
import CWDM_32D_1_25G from './Component/1.25G SFP/CWDM_32D_1.25G';

import Products_SFP_1_25G_BIDI from './Component/1.25G SFP/Products_SFP_1_25G_BIDI';
import BIDI_1_25_S35_20D from './Component/1.25G SFP/BIDI_1_25_S35_20D';
import BIDI_1_25_S53_20D from './Component/1.25G SFP/BIDI_1_25_S53_20D';
import BIDI_M35_X5D from './Component/1.25G SFP/BIDI_M35_X5D';
import BIDI_S34_10D from './Component/1.25G SFP/BiDi_S34_10D';
import BIDI_S34_20D from './Component/1.25G SFP/BIDI_S34_20D';
import BIDI_C8_S34_40D from './Component/1.25G SFP/BIDI_C8_S34_40D';
import BIDI_C8_S35_02D from './Component/1.25G SFP/BIDI_C8_S35_02D';
import BIDI_C8_S35_20D from './Component/1.25G SFP/BIDI_C8_S35_20D';
import BIDI_C8_S35_40D from './Component/1.25G SFP/BIDI_C8_S35_40D';
import BIDI_C8_S35_60D from './Component/1.25G SFP/BIDI_C8_S35_60D';
import BIDI_C8_S43_10D from './Component/1.25G SFP/BIDI_C8_S43_10D';
import BIDI_C8_S43_20D from './Component/1.25G SFP/BIDI_C8_S43_20D';
import BIDI_C8_S43_40D from './Component/1.25G SFP/BIDI_C8_S43_40D';
import BIDI_C8_S43_80D from './Component/1.25G SFP/BIDI_C8_S43_80D';
import BIDI_C8_S43_A0D from './Component/1.25G SFP/BIDI_C8_S43_A0D';
import BIDI_C8_S53_02D from './Component/1.25G SFP/BIDI_C8_S53_02D';
import BIDI_C8_S53_40D from './Component/1.25G SFP/BIDI_C8_S53_40D';
import BIDI_C8_S53_60D from './Component/1.25G SFP/BIDI_C8_S53_60D';
import BIDI_C8_S53_80D from './Component/1.25G SFP/BIDI_C8_S54_80D';
import BIDI_C8_S54_A0D from './Component/1.25G SFP/BIDI_C8_S54_A0D';
import Dual_1X9_M85_X5P from './Component/1X9/1X9_Dual_M85_X5P';
import CWDW_1X9_b31P from './Component/1X9/1X9_CWDW_b31P';
import Ultra_row_1X9_DC from './Component/1X9/Ultra_row_1X9_DC';
import Ultra_02B from './Component/1X9/Ultra_02B';
import Ultra_05B from './Component/1X9/Ultra_05B';


import SFP_Dual_1_25_Products from './Component/1.25G SFP/SFP_Dual_1_25_Products';
import Dual_02D_1_25G from './Component/1.25G SFP/Dual_02D_1.25G';
import Dual_X5D_1_25G from './Component/1.25G SFP/Dual_X5D.1.25G';
import Dual_10D_1_25G from './Component/1.25G SFP/Dual_10D_1.25G';
import Dual_10DR_1_25G from './Component/1.25G SFP/Dual_10DR_1.25G';
import Dual_20D_1_25G from './Component/1.25G SFP/Dual_20D_1.25G';
import Dual_20DM_1_25G from './Component/1.25G SFP/Dual_20DM_1.25G';
import Dual_20DR_1_25G from './Component/1.25G SFP/Dual_20DR_1.25G';
import Dual_40D_1_25G from './Component/1.25G SFP/Dual_40D_1.25G';
import Dual_60D_1_25G from './Component/1.25G SFP/Dual_60D_1.25G';
import Dual_50D_1_25G from './Component/1.25G SFP/Dual_50D_1.25G';
import Dual_80D_1_25G from './Component/1.25G SFP/Dual_80D_1.25G';
import Dual_A0D_1_25G from './Component/1.25G SFP/Dual_A0D_1.25G';
import Dual_A2D_1_25G from './Component/1.25G SFP/Dual_A2D_1.25G';

import Products_10G_XG_XGS_PON from './Component/PON SFP  SFP+/Products_10G_XG_XGS_PON';
import PX5_20X from './Component/PON SFP  SFP+/PX5_20X';
import PX6_20X from './Component/PON SFP  SFP+/PX6_20X';
import EPON_10G_SFP from './Component/PON SFP  SFP+/EPON_10G_SFP+';

import GPON_SFP_Products from './Component/PON SFP  SFP+/GPON_SFP_Products';
import GPON_PG3_20B from './Component/PON SFP  SFP+/GPON_PG3_20B';
import GPON_PG4_20B from './Component/PON SFP  SFP+/GPON_PG4_20B';
import GPON_PG4_201 from './Component/PON SFP  SFP+/GPON_PG4_201';
import GPON_PG4_202 from './Component/PON SFP  SFP+/GPON_PG4_202';
import GPON_PG4_203 from './Component/PON SFP  SFP+/GPON_PG4_203';

import EPON_SFP_Products from './Component/PON SFP  SFP+/EPON_SFP_Products';
import EPON_PE3_201 from './Component/PON SFP  SFP+/EPON_PE3_201';
import EPON_PE4_201 from './Component/PON SFP  SFP+/EPON_PE4_201';
import EPON_PE4_202 from './Component/PON SFP  SFP+/EPON_PE4_202';

import CWDM4_Products from './Component/100G_QSFP28/CWDM4_Products';
import CWDM4_02D from './Component/100G_QSFP28/CWDM4_02D';
import CWDM4_13D from './Component/100G_QSFP28/CWDM4_13D';
import EPON_PE4_203 from './Component/PON SFP  SFP+/EPON_PE4_203';

import BIDI_C33 from './Component/100G_QSFP28/BIDI_C33';
import X5TR_2X5_SFF from './Component/2X5 SFF/X5TR_2X5_SFF';

import BIDI_155M_Products from './Component/125M 155M  SFP/BIDI_155M_Products';
import BIDI_S35_100BX_U from './Component/125M 155M  SFP/BIDI_S35_100BX_U';
import BIDI_S35_100BX_D from './Component/125M 155M  SFP/BIDI_S35_100BX_D';
import BIDI_A8_35_20D from './Component/125M 155M  SFP/BIDI_A8_35_20D';
import BIDI_A8_35_40D from './Component/125M 155M  SFP/BIDI_A8_35_40D';
import BIDI_A8_35_60D from './Component/125M 155M  SFP/BIDI_A8_35_60D';
import BIDI_A8_45_80D from './Component/125M 155M  SFP/BIDI_A8_S45_80D';
import BIDI_A8_S45_A2D from './Component/125M 155M  SFP/BIDI_A8_S45_A2D';

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
     <Route path="/ER4_40Di_100G" element={<ER4_40Di_100G/>}/>
     <Route path="/ESR4_100G" element={<ESR4_100G/>}/>
     <Route path="/ZR4_100G" element={<ZR4_100G/>}/>
     <Route path="/PSM4_Ethernet_100G" element={<PSM4_Ethernet_100G/>}/>
     <Route path="/LR4_100G" element={<LR4_100G/>}/>
     <Route path="/LR4_Ethernet_OTU4_100G" element={<LR4_Ethernet_OTU4_100G/>}/>
     <Route path="/LR4_Ethernet_100G" element={<LR4_Ethernet_100G/>}/>
     <Route path="/BIDI_4WDM_Products" element={<BIDI_4WDM_Products/>}/>
     <Route path="/L13_4WDM" element={<L13_4WDM/>}/>
     <Route path="/L12_4WDM" element={<L12_4WDM/>}/>
     <Route path="/BIDI_10_to_40_Products" element={<BIDI_10_to_40_Products/>}/>
     <Route path="/BIDI_C27" element={<BIDI_C27/>}/>
     <Route path="/BIDI_C29" element={<BIDI_C29/>}/>
     <Route path="/BIDI_C31" element={<BIDI_C31/>}/>
     <Route path="/BIDI_L04" element={<BIDI_L04/>}/>
     <Route path="/BIDI_L09" element={<BIDI_L09/>}/>
     <Route path="/QSPF28_adaptor" element={<QSPF28_adaptor/>}/>
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
     <Route path="/SFP28_25G_SW" element={<SFP28_25G_SW/>}/>
     <Route path="/SFP_100Tx_Products" element={<SFP_100Tx_Products/>}/>

     <Route path="/SFP_100Tx_T01_X1" element={<SFP_100Tx_T01_X1/>}/>
     <Route path="/SFP_100Tx_T01_X1i" element={<SFP_100Tx_T01_X1i/>}/>
     <Route path="/SFP_100Tx_T11_X1" element={<SFP_100Tx_T11_X1/>}/>




     <Route path="/SFP_1000T_Products" element={<SFP_1000T_Products/>}/>
     <Route path="/SFP_1000T_T01_Xl" element={<SFP_1000T_T01_Xl/>}/>
     <Route path="/SFP_1000T_T01_Xli" element={<SFP_1000T_T01_Xli/>}/>
     <Route path="/SFP_1000T_T10_X1" element={<SFP_1000T_T10_X1/>}/>
     <Route path="/SFP_1000T_T10_X1i" element={<SFP_1000T_T10_X1i/>}/>
     <Route path="/SFP_1000T_T11_X1" element={<SFP_1000T_T11_X1/>}/>
     <Route path="/SFP_1000T_T11_X1i" element={<SFP_1000T_T11_X1i/>}/>
     <Route path="/SFP_1000T_T20_X1" element={<SFP_1000T_T20_X1/>}/>
     <Route path="/SFP_1000T_T20_X1i" element={<SFP_1000T_T20_X1i/>}/>
     <Route path="/SFP_1000T_T22_X1" element={<SFP_1000T_T22_X1/>}/>
     <Route path="/SFP_1000T_T22_X1i" element={<SFP_1000T_T22_X1i/>}/>
     <Route path="/X2_DUAL_Products" element={<X2_DUAL_Products/>}/>
     <Route path="/X2_10G_SR" element={<X2_10G_SR/>}/>
     <Route path="/X2_10G_LR" element={<X2_10G_LR/>}/>
     <Route path="/X2_10G_ER" element={<X2_10G_ER/>}/>
     <Route path="/X2_10G_ZR" element={<X2_10G_ZR/>}/>
     <Route path="/Dual_Bidi_LC" element={<Dual_Bidi_LC/>}/>
     <Route path="/Projects_SFP_10G" element={<Projects_SFP_10G/>}/>
     <Route path="/SFP_10G_T_Y3" element={<SFP_10G_T_Y3/>}/>
     <Route path="/SFP_10G_T11_Y3" element={<SFP_10G_T11_Y3/>}/>
     <Route path="/SFP_10G_T12_Y3" element={<SFP_10G_T12_Y3/>}/>
     <Route path="/SFP_10G_T13_Y3" element={<SFP_10G_T13_Y3/>}/>
     <Route path="/SFP_10G_T_Y3i" element={<SFP_10G_T_Y3i/>}/>
     <Route path="/SFP_10G_T_Y38" element={<SFP_10G_T_Y38/>}/>
     {/* <Route path="/Products_2point5_SFP_BIDI" element={<Products_2point5_SFP_BIDI/>}/> */}
     <Route path="/BIDI_S35_20D" element={<BIDI_S35_20D/>}/>
     <Route path="/BIDI_S53_20D" element={<BIDI_S53_20D/>}/>
     <Route path="/BIDI_S35_40D" element={<BIDI_S35_40D/>}/>
     <Route path="/BIDI_S53_40D" element={<BIDI_S53_40D/>}/>
     <Route path="/Products_SFP_CWDM" element={<Products_SFP_CWDM/>}/>
     <Route path="/CWDM_b20D" element={<CWDM_b20D/>}/>
     <Route path="/CWDM_b26D" element={<CWDM_b26D/>}/>
     <Route path="/CWDM_b30D" element={<CWDM_b30D/>}/>
     <Route path="/CWDM_b30DM" element={<CWDM_b30DM/>}/>
     <Route path="/CWDM_b26DM" element={<CWDM_b26DM/>}/>
     <Route path="/Products_2point5_Dual" element={<Products_2point5_Dual/>}/>
     <Route path="/Products_2point5_Dual/Dual_X3D" element={<Dual_X3D/>}/>
     <Route path="/Products_2point5_Dual/Dual_X3DM" element={<Dual_X3DM/>}/>
     <Route path="/Products_2point5_Dual/Dual_02D" element={<Dual_02D/>}/>
     <Route path="/Products_2point5_Dual/Dual_20D" element={<Dual_20D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S13_40D" element={<Dual_S13_40D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S13_60D" element={<Dual_S13_60D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_40D" element={<Dual_S15_40D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_80D" element={<Dual_S15_80D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A0D" element={<Dual_S15_A0D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A0DM" element={<Dual_S15_A0DM/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A2D" element={<Dual_S15_A2D/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A2DM" element={<Dual_S15_A2DM/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A2DM" element={<Dual_S15_A2DM/>}/>
     
     
     
     <Route path="/SFP_BIDI_Products" element={<SFP_BIDI_Products/>}/>
     <Route path="/SFP_DWDM_Products" element={<SFP_DWDM_Products/>}/>
     <Route path="/DWDM_80km" element={<DWDM_80km/>}/>
     <Route path="/DWDM_120km" element={<DWDM_120km/>}/>
     <Route path="/SFP_1_25G_DWDM_Products" element={<SFP_1_25G_DWDM_Products/>}/>
     <Route path="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_80D" element={<SFP_1_25G_DWDM_80D/>}/>
     <Route path="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_A2D" element={<SFP_1_25G_DWDM_A2D/>}/>
     
     <Route path="/SFP_CWDM_1_25G_Products" element={<SFP_CWDM_1_25G_Products/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_19D_1_25G" element={<CWDM_19D_1_25G/>}/>
    
     
     <Route path="/CWDM4_Products" element={<CWDM4_Products/>}/>
     <Route path="/CWDM4_Products/CWDM4_02D" element={<CWDM4_02D/>}/>
     <Route path="/CWDM4_Products/CWDM4_13D" element={<CWDM4_13D/>}/>
     
     <Route path="/Products_SFP_1_25G_BIDI" element={<Products_SFP_1_25G_BIDI/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_S35_20D" element={<BIDI_1_25_S35_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_S53_20D" element={<BIDI_1_25_S53_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_M35_X5D" element={<BIDI_M35_X5D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_S34_10D" element={<BIDI_S34_10D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_S34_20D" element={<BIDI_S34_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S34_40D" element={<BIDI_C8_S34_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_02D" element={<BIDI_C8_S35_02D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_20D" element={<BIDI_C8_S35_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_40D" element={<BIDI_C8_S35_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_60D" element={<BIDI_C8_S35_60D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_10D" element={<BIDI_C8_S43_10D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_20D" element={<BIDI_C8_S43_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_40D" element={<BIDI_C8_S43_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_80D" element={<BIDI_C8_S43_80D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_A0D" element={<BIDI_C8_S43_A0D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_02D" element={<BIDI_C8_S53_02D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_40D" element={<BIDI_C8_S53_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_60D" element={<BIDI_C8_S53_60D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_80D" element={<BIDI_C8_S53_80D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_A0D" element={<BIDI_C8_S54_A0D/>}/>
     <Route path="/Dual_1X9_M85_X5P" element={<Dual_1X9_M85_X5P/>}/>
     <Route path="/CWDW_1X9_b31P" element={<CWDW_1X9_b31P/>}/>
     <Route path="/Ultra_row_1X9_DC" element={<Ultra_row_1X9_DC/>}/>
     <Route path="/Ultra_row_1X9_DC/Ultra_02B" element={<Ultra_02B/>}/>
     <Route path="/Ultra_row_1X9_DC/Ultra_05B" element={<Ultra_05B/>}/>
     
     
     
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_24D_1_25G" element={<CWDM_24D_1_25G/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_32D_1_25G" element={<CWDM_32D_1_25G/>}/>

     <Route path="/SFP_Dual_1_25_Products" element={<SFP_Dual_1_25_Products/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_02D_1_25G" element={<Dual_02D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_X5D_1_25G" element={<Dual_X5D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_10D_1_25G" element={<Dual_10D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_10DR_1_25G" element={<Dual_10DR_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20D_1_25G" element={<Dual_20D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20DM_1_25G" element={<Dual_20DM_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20DR_1_25G" element={<Dual_20DR_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_40D_1_25G" element={<Dual_40D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_60D_1_25G" element={<Dual_60D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_50D_1_25G" element={<Dual_50D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_80D_1_25G" element={<Dual_80D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_A0D_1_25G" element={<Dual_A0D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_A2D_1_25G" element={<Dual_A2D_1_25G/>}/>

     <Route path="/Products_10G_XG_XGS_PON" element={<Products_10G_XG_XGS_PON/>}/>
     <Route path="/Products_10G_XG_XGS_PON/PX5_20X" element={<PX5_20X/>}/>
     <Route path="/Products_10G_XG_XGS_PON/PX6_20X" element={<PX6_20X/>}/>
     <Route path="/EPON_10G_SFP" element={<EPON_10G_SFP/>}/>

     <Route path="/GPON_SFP_Products" element={<GPON_SFP_Products/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG3_20B" element={<GPON_PG3_20B/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_20B" element={<GPON_PG4_20B/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_201" element={<GPON_PG4_201/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_202" element={<GPON_PG4_202/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_203" element={<GPON_PG4_203/>}/>
     
     <Route path="/EPON_SFP_Products" element={<EPON_SFP_Products/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE3_201" element={<EPON_PE3_201/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_201" element={<EPON_PE4_201/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_202" element={<EPON_PE4_202/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_203" element={<EPON_PE4_203/>}/>
     

     <Route path="/X5TR_2X5_SFF" element={<X5TR_2X5_SFF/>}/>


     <Route path="/BIDI_C33" element={<BIDI_C33/>}/>
     
     <Route path="/BIDI_155M_Products" element={<BIDI_155M_Products/>}/>
     <Route path="/BIDI_155M_Products/BIDI_S35_100BX_U" element={<BIDI_S35_100BX_U/>}/>
     <Route path="/BIDI_155M_Products/BIDI_S35_100BX_D" element={<BIDI_S35_100BX_D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_20D" element={<BIDI_A8_35_20D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_40D" element={<BIDI_A8_35_40D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_60D" element={<BIDI_A8_35_60D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_45_80D" element={<BIDI_A8_45_80D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S45_A2D" element={<BIDI_A8_S45_A2D/>}/>
     
     
     
    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
