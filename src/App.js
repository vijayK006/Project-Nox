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
import LR4_10KM_40G_i from './Component/40G_QSFP+/LR4_10KM_40G_i';
import LR4_20KM_40G_i from './Component/40G_QSFP+/LR4_20KM_40G_i';

import Product_40G_ER4 from './Component/40G_QSFP+/40G_ER4_Products';
import ER4_40D from './Component/40G_QSFP+/ER4_40D';
import ER4_40Di from './Component/40G_QSFP+/ER4_40Di';

import Product_40G_eSR4 from "./Component/40G_QSFP+/40G_eSR4_Products";
import LR4_10KM_40G from './Component/40G_QSFP+/40G_LR4_10KM';
import Product_40G_ZR4 from './Component/40G_QSFP+/40G_ZR4_Products';
import LR4_20KM_40G from './Component/40G_QSFP+/40G_LR4_20KM';

import SR4_40G_Products from './Component/40G_QSFP+/40G_SR4_Products';
import SR4_X1D from './Component/40G_QSFP+/SR4_X1D';
import SR4_X1Di from './Component/40G_QSFP+/SR4_X1Di';

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

import SFP_PLUS_DUAL_Products from './Component/8GFC SFP+_DUAL/SFP+_DUAL_Products';
import SFP_8GFC_ELR from './Component/8GFC SFP+_DUAL/SFP+8GFC_ELR';
import SFP_8GFC_ELRi from './Component/8GFC SFP+_DUAL/SFP+8GFC_ELRi';

import LR4_DualRate_100G from "./Component/100G_CFP-CFP2-CFP4/100G_LR4_DualRate"
import ER4_100G_Products from './Component/100G_QSFP28/100G_ER4_Products';
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

import LR4_100G_Products from './Component/100G_QSFP28/100G_LR4_Products';

import LR4_Ethernet_OTU4_100G from './Component/100G_QSFP28/100G_LR4_Ethernet_OTU4';
import LR4_Ethernet_100G from './Component/100G_QSFP28/100G_LR4_Ethernet';

import BIDI_4WDM_Products from './Component/100G_QSFP28/BIDI_4WDM_Products';

import SFP28_SR_Products from './Component/25G SFP28/SFP28_SR_Products';
import SFP28_25G_SR from './Component/25G SFP28/SFP28_25G_SR';
import SFP28_25G_SR_i from './Component/25G SFP28/SFP28_25G_SR_i';
import SFP28_25G_eSR from './Component/25G SFP28/SFP28_25G_eSR';
import SFP28_25G_eSR_i from './Component/25G SFP28/SFP28_25G_eSR_i';
import SFP28_25G_eSR_DuleRate from './Component/25G SFP28/SFP28_25G_eSR_DuleRate';
import SFP28_25G_eSR_DuleRate_i from './Component/25G SFP28/SFP28_25G_eSR_DuleRate_i';

import SFP28_BIDI_Products from './Component/25G SFP28/SFP28_BIDI_Products';
import SFP28_BX10_27 from './Component/25G SFP28/SFP28_BX10_27';
import SFP28_BX10_27_i from './Component/25G SFP28/SFP28_BX10_27_i';
import SFP28_BX20_27 from './Component/25G SFP28/SFP28_BX20_27';
import SFP28_BX20_27_i from './Component/25G SFP28/SFP28_BX20_27_i';
import SFP28_BX10_33 from './Component/25G SFP28/SFP28_BX10_33';
import SFP28_BX10_33_i from './Component/25G SFP28/SFP28_BX10_33_i';
import SFP28_BX20_33 from './Component/25G SFP28/SFP28_BX20_33';
import SFP28_BX20_33_i from './Component/25G SFP28/SFP28_BX20_33_i';

import SFP28_25G_CWDM_Products from './Component/25G SFP28/SFP28_25G_CWDM_Products';
import CWDM_10DQ from './Component/25G SFP28/CWDM_10DQ';
import CWDM_10DQ_i from './Component/25G SFP28/CWDM_10DQ_i';

import SFP28_LR_25G_Projects from './Component/25G SFP28/25G_SFP28_LR_Projects';
import SFP28_25G_LR_2km from "./Component/25G SFP28/25G-LR_2km"
import SFP28_25G_LR_10km from "./Component/25G SFP28/25G-LR_10km"
import SFP28_25G_LR_DualRate from "./Component/25G SFP28/25G-LR_DualRate"
import SFP28_25G_LR_Transceiver from "./Component/25G SFP28/25G-LR_transciever"
import SFP28_25G_LR_2km_i from "./Component/25G SFP28/25G-LR_2km_i"
import SFP28_25G_LR_10km_i from "./Component/25G SFP28/25G-LR_10km_i"
import SFP28_25G_LR_DualRate_i from "./Component/25G SFP28/25G-LR_DualRate_i"
import SFP28_25G_LR_Transceiver_i from "./Component/25G SFP28/25G-LR_transciever_i"
import LR_S13_20DQ from './Component/25G SFP28/LR_S13_20DQ';
import LR_S13_20DQ_i from './Component/25G SFP28/LR_S13_20DQ_i';

import SFP28_25G_DWDM from "./Component/25G SFP28/25G-DWDM"

import SFP28_25G__LWDM_products from './Component/25G SFP28/SFP28_25G_LWDM_products';
import LWDM_25G_40KM from './Component/25G SFP28/LWDM_25G_40KM';
import LWDM_25G_40KM_DuelRate from './Component/25G SFP28/LWDM_25G_40KM_DuelRate';

import SFP28_25G_SW from "./Component/25G SFP28/25G-SW";

import SFP_100Tx_Products from "./Component/RJ45 Copper Series/SFP-100Tx_Products";
import SFP_100Tx_T01_X1 from './Component/RJ45 Copper Series/SFP_100Tx_X1';
import SFP_100Tx_T01_X1i from './Component/RJ45 Copper Series/SFP_100Tx_X1i';
import SFP_100Tx_T11_X1 from './Component/RJ45 Copper Series/SFP_100Tx_T11_X1';
import SFP_100Tx_T11_X1i from './Component/RJ45 Copper Series/SFP_100Tx_T11_X1i';

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

import Dual_Bidi_LC_Products from './Component/1.25G CSFP/Dual_Bidi_LC_Products';
import CSFP_S34_20D from './Component/1.25G CSFP/CSFP_S34_20D';
import CSFP_S34_20Di from './Component/1.25G CSFP/CSFP_S34_20Di';
import CSFP_S43_20D from './Component/1.25G CSFP/CSFP_S43_20D';
import CSFP_S43_20Di from './Component/1.25G CSFP/CSFP_S43_20Di';
import CSFP_S53_20D from './Component/1.25G CSFP/CSFP_S53_20D';
import CSFP_S53_20Di from './Component/1.25G CSFP/CSFP_S53_20Di';

import Projects_SFP_10G from "./Component/RJ45 Copper Series/Projects_SFP_10G_T";
import SFP_10G_T_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T_Y3";
import SFP_10G_T11_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T11_Y3";
import SFP_10G_T12_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T12_Y3";
import SFP_10G_T13_Y3 from "./Component/RJ45 Copper Series/SFP_10G_T13_Y3";
import SFP_10G_T_Y3i from "./Component/RJ45 Copper Series/SFP_10G_T_Y3i";
import SFP_10G_T_Y38 from "./Component/RJ45 Copper Series/SFP_10G_T_Y38";
import T22_Y3_10G_T from './Component/RJ45 Copper Series/T22_Y3_10G_T';
import T11_Y8_10G_T from './Component/RJ45 Copper Series/T11_Y8_10G_T';

import SFP_BIDI_Products from "./Component/2.5_SFP/SFP_BIDI_Products";
import BIDI_S35_20D from "./Component/2.5_SFP/SFP_BIDI_2.5G_S35_20D";
import BIDI_S53_20D from "./Component/2.5_SFP/BIDI_S53_20D";
import BIDI_S35_40D from "./Component/2.5_SFP/BIDI_S35_40D";
import BIDI_S53_40D from "./Component/2.5_SFP/BIDI_S53_40D";
import BIDI_S35_20Di from "./Component/2.5_SFP/SFP_BIDI_2.5G_S35_20Di";
import BIDI_S53_20Di from "./Component/2.5_SFP/BIDI_S53_20Di";
import BIDI_S35_40Di from "./Component/2.5_SFP/BIDI_S35_40Di";
import BIDI_S53_40Di from "./Component/2.5_SFP/BIDI_S53_40Di";

import Products_SFP_CWDM from "./Component/2.5_SFP/Products_2.5_SFP_CWDM";
import CWDM_b20D from "./Component/2.5_SFP/CWDM_b20D";
import CWDM_b26D from "./Component/2.5_SFP/CWDM_b26D";
import CWDM_b30D from "./Component/2.5_SFP/CWDM_b30D";
import CWDM_b30DM from "./Component/2.5_SFP/CWDM_b30DM";
import CWDM_b26DM from "./Component/2.5_SFP/CWDM_b26DM";
import CWDM_b20Di from "./Component/2.5_SFP/CWDM_b20Di";
import CWDM_b26Di from "./Component/2.5_SFP/CWDM_b26Di";
import CWDM_b30Di from "./Component/2.5_SFP/CWDM_b30Di";
import CWDM_b30DMi from "./Component/2.5_SFP/CWDM_b30DMi";
import CWDM_b26DMi from "./Component/2.5_SFP/CWDM_b26DMi";

import Products_2point5_Dual from "./Component/2.5_SFP/Products_2.5G_Dual";
import Dual_X3D from "./Component/2.5_SFP/Dual_X3D";
import Dual_X3Di from "./Component/2.5_SFP/Dual_X3Di";
import Dual_X3DM from "./Component/2.5_SFP/Dual_X3DM";
import Dual_X3DMi from "./Component/2.5_SFP/Dual_X3DMi";
import Dual_02D from "./Component/2.5_SFP/Dual_02D";
import Dual_02Di from "./Component/2.5_SFP/Dual_02Di";
import Dual_20D from './Component/2.5_SFP/Dual_20D';
import Dual_20Di from './Component/2.5_SFP/Dual_20Di';
import Dual_S13_40D from './Component/2.5_SFP/Dual_S13_40D';
import Dual_S13_40Di from './Component/2.5_SFP/Dual_S13_40Di';
import Dual_S13_60D from './Component/2.5_SFP/Dual_S13_60D';
import Dual_S13_60Di from './Component/2.5_SFP/Dual_S13_60Di';
import Dual_S15_40D from './Component/2.5_SFP/Dual_S15_40D';
import Dual_S15_40Di from './Component/2.5_SFP/Dual_S15_40Di';
import Dual_S15_80D from './Component/2.5_SFP/Dual_S15_80D';
import Dual_S15_80Di from './Component/2.5_SFP/Dual_S15_80Di';
import Dual_S15_A0D from './Component/2.5_SFP/Dual_S15_A0D';
import Dual_S15_A0Di from './Component/2.5_SFP/Dual_S15_A0Di';
import Dual_S15_A0DM from './Component/2.5_SFP/Dual_S15_A0DM';
import Dual_S15_A0DMi from './Component/2.5_SFP/Dual_S15_A0DMi';
import Dual_S15_A2D from './Component/2.5_SFP/Dual_S15_A2D';
import Dual_S15_A2Di from './Component/2.5_SFP/Dual_S15_A2Di';
import Dual_S15_A2DM from './Component/2.5_SFP/Dual_S15_A2DM';
import Dual_S15_A2DMi from './Component/2.5_SFP/Dual_S15_A2DMi';

import SFP_DWDM_Products from './Component/2.5_SFP/SFP_DWDM_Products';
import DWDM_80km from './Component/2.5_SFP/DWDM_80km';
import DWDM_120km from './Component/2.5_SFP/DWDM_120km';
import DWDM_80km_i from './Component/2.5_SFP/DWDM_80km_i';
import DWDM_120km_i from './Component/2.5_SFP/DWDM_120km_i';



import SFP_1_25G_DWDM_Products from './Component/1.25G SFP/SFP_1.25G_DWDM_Products';
import SFP_1_25G_DWDM_80D from './Component/1.25G SFP/SFP_1.25G_DWDM_80D';
import SFP_1_25G_DWDM_80Di from './Component/1.25G SFP/SFP_1_25G_DWDM_80Di';
import SFP_1_25G_DWDM_A2D from './Component/1.25G SFP/SFP_1_25G_DWDM_A2D';
import SFP_1_25G_DWDM_A2Di from './Component/1.25G SFP/SFP_1_25G_DWDM_A2Di';

import SFP_CWDM_1_25G_Products from './Component/1.25G SFP/SFP_CWDM_1.25G_Products';
import CWDM_19D_1_25G from './Component/1.25G SFP/CWDM_19D_1.25G';
import CWDM_19D_1_25Gi from './Component/1.25G SFP/CWDM_19D_1_25Gi';
import CWDM_24D_1_25G from './Component/1.25G SFP/CWDM_24D_1.25G';
import CWDM_24D_1_25Gi from './Component/1.25G SFP/CWDM_24D_1_25Gi';
import CWDM_32D_1_25G from './Component/1.25G SFP/CWDM_32D_1.25G';
import CWDM_32D_1_25Gi from './Component/1.25G SFP/CWDM_32D_1_25Gi';

import XFP_BIDI_Products from './Component/10G XFP/XFP_BIDI_Products';
import BIDI_C27_20D from './Component/10G XFP/BIDI_C27_20D';
import BIDI_C27_20Di from './Component/10G XFP/BIDI_C27_20Di';

import XFP_DUAL_Products from './Component/10G XFP/XFP_Dual_Products';
import Dual_H7_M85_X3D from './Component/10G XFP/Dual_H7_M85_X3D';
import Dual_H7_S13_10D from './Component/10G XFP/Dual_H7_S13_10D';
import Dual_H7_S13_10Di from './Component/10G XFP/Dual_H7_S13_10Di';
import Dual_H7_S13_10D_L from './Component/10G XFP/Dual_H7_S13_10D_L';
import Dual_H7_S15_80D_SFP from './Component/10G XFP/Dual_H7_S15_80D_SFP';
import Dual_H7_S15_80Di_SFP from './Component/10G XFP/Dual_H7_S15_80Di_SFP';
import Dual_H7_S15_80D_L_SFP from './Component/10G XFP/Dual_H7_S15_80D_L_SFP';
import Dual_H7_S15_A0D_SFP from './Component/10G XFP/Dual_H7_S15_A0D_SFP';
import Dual_H7_S15_A0Di_SFP from './Component/10G XFP/Dual_H7_S15_A0Di_SFP';
import Dual_H7_S15_A2D_SFP from './Component/10G XFP/Dual_H7_S15_A2D_SFP';


import Products_SFP_1_25G_BIDI from './Component/1.25G SFP/Products_SFP_1_25G_BIDI';
import BIDI_1_25_S35_20D from './Component/1.25G SFP/BIDI_1_25_S35_20D';
import BIDI_1_25_S35_20Di from './Component/1.25G SFP/BIDI_1_25_S35_20Di';
import BIDI_1_25_S53_20D from './Component/1.25G SFP/BIDI_1_25_S53_20D';
import BIDI_1_25_S53_20Di from './Component/1.25G SFP/BIDI_1_25_S53_20Di';
import BIDI_M35_X5D from './Component/1.25G SFP/BIDI_M35_X5D';
import BIDI_M35_X5Di from './Component/1.25G SFP/BIDI_M35_X5Di';
import BIDI_1_25_M53_X5D from './Component/1.25G SFP/BIDI_1_25_M53_X5D';
import BIDI_1_25_M53_X5Di from './Component/1.25G SFP/BIDI_1_25_M53_X5Di';
import BIDI_S34_10D from './Component/1.25G SFP/BiDi_S34_10D';
import BIDI_S34_10Di from './Component/1.25G SFP/BIDI_S34_10Di';
import BIDI_S34_20D from './Component/1.25G SFP/BIDI_S34_20D';
import BIDI_S34_20Di from './Component/1.25G SFP/BIDI_S34_20Di';
import BIDI_C8_S34_40D from './Component/1.25G SFP/BIDI_C8_S34_40D';
import BIDI_C8_S34_40Di from './Component/1.25G SFP/BIDI_C8_S34_40Di';
import BIDI_C8_S35_02D from './Component/1.25G SFP/BIDI_C8_S35_02D';
import BIDI_C8_S35_02Di from './Component/1.25G SFP/BIDI_C8_S35_02Di';
import BIDI_C8_S35_20D from './Component/1.25G SFP/BIDI_C8_S35_20D';
import BIDI_C8_S35_20Di from './Component/1.25G SFP/BIDI_C8_S35_20Di';
import BIDI_C8_S35_40D from './Component/1.25G SFP/BIDI_C8_S35_40D';
import BIDI_C8_S35_40Di from './Component/1.25G SFP/BIDI_C8_S35_40Di';
import BIDI_C8_S35_60D from './Component/1.25G SFP/BIDI_C8_S35_60D';
import BIDI_C8_S35_60Di from './Component/1.25G SFP/BIDI_C8_S35_60Di';
import BIDI_C8_S43_10D from './Component/1.25G SFP/BIDI_C8_S43_10D';
import BIDI_C8_S43_10Di from './Component/1.25G SFP/BIDI_C8_S43_10Di';
import BIDI_C8_S43_20D from './Component/1.25G SFP/BIDI_C8_S43_20D';
import BIDI_C8_S43_20Di from './Component/1.25G SFP/BIDI_C8_S43_20Di';
import BIDI_C8_S43_40D from './Component/1.25G SFP/BIDI_C8_S43_40D';
import BIDI_C8_S43_40Di from './Component/1.25G SFP/BIDI_C8_S43_40Di';
import BIDI_C8_S45_80D from './Component/1.25G SFP/BIDI_C8_S45_80D';
import BIDI_C8_S45_80Di from './Component/1.25G SFP/BIDI_C8_S45_80Di';
import BIDI_C8_S45_A0D from './Component/1.25G SFP/BIDI_C8_S45_A0D';
import BIDI_C8_S45_A0Di from './Component/1.25G SFP/BIDI_C8_S45_A0Di';
import BIDI_C8_S53_02D from './Component/1.25G SFP/BIDI_C8_S53_02D';
import BIDI_C8_S53_02Di from './Component/1.25G SFP/BIDI_C8_S53_02Di';
import BIDI_C8_S53_40D from './Component/1.25G SFP/BIDI_C8_S53_40D';
import BIDI_C8_S53_40Di from './Component/1.25G SFP/BIDI_C8_S53_40Di';
import BIDI_C8_S53_60D from './Component/1.25G SFP/BIDI_C8_S53_60D';
import BIDI_C8_S53_60Di from './Component/1.25G SFP/BIDI_C8_S53_60Di';
import BIDI_C8_S53_80D from './Component/1.25G SFP/BIDI_C8_S54_80D';
import BIDI_C8_S53_80Di from './Component/1.25G SFP/BIDI_C8_S54_80Di';
import BIDI_C8_S54_A0D from './Component/1.25G SFP/BIDI_C8_S54_A0D';
import BIDI_C8_S54_A0Di from './Component/1.25G SFP/BIDI_C8_S54_A0Di';

import Dual_1X9_Products from './Component/1X9/Dual_1X9_Products';
import Dual_1X9_M85_X5P from './Component/1X9/1X9_Dual_M85_X5P';
import Dual_1X9_M85_X5Pi from './Component/1X9/1X9_Dual_M85_X5Pi';

import CWDM_1X9_Products from './Component/1X9/CWDM_1X9_Products';
import CWDW_1X9_b31P from './Component/1X9/1X9_CWDW_b31P';
import CWDW_1X9_b31Pi from './Component/1X9/CWDW_1X9_b31Pi';
import CWDW_1X9_A3_b31P from './Component/1X9/CWDW_1X9_A3_b31P';
import CWDW_1X9_A3_b31Pi from './Component/1X9/CWDW_1X9_A3_b31Pi';
import CWDW_1X9_AM_b31P from './Component/1X9/CWDW_1X9_AM_b31P';
import CWDW_1X9_AM_b31Pi from './Component/1X9/CWDW_1X9_AM_b31Pi';

import Ultra_row_1X9_DC from './Component/1X9/Ultra_row_1X9_DC';
import Ultra_02B from './Component/1X9/Ultra_02B';
import Ultra_02Bi from './Component/1X9/Ultra_02Bi';
import Ultra_05B from './Component/1X9/Ultra_05B';
import Ultra_05Bi from './Component/1X9/Ultra_05Bi';


import SFP_Dual_1_25_Products from './Component/1.25G SFP/SFP_Dual_1_25_Products';
import Dual_02D_1_25G from './Component/1.25G SFP/Dual_02D_1.25G';
import Dual_02D_1_25Gi from './Component/1.25G SFP/Dual_02D_1_25Gi';
import Dual_X5D_1_25G from './Component/1.25G SFP/Dual_X5D.1.25G';
import Dual_X5D_1_25Gi from './Component/1.25G SFP/Dual_X5D_1_25Gi';
import Dual_10D_1_25G from './Component/1.25G SFP/Dual_10D_1.25G';
import Dual_10D_1_25Gi from './Component/1.25G SFP/Dual_10D_1_25Gi';
import Dual_10DR_1_25G from './Component/1.25G SFP/Dual_10DR_1.25G';
import Dual_10DR_1_25Gi from './Component/1.25G SFP/Dual_10DR_1_25Gi';
import Dual_20D_1_25G from './Component/1.25G SFP/Dual_20D_1.25G';
import Dual_20D_1_25Gi from './Component/1.25G SFP/Dual_20D_1_25Gi';
import Dual_20DM_1_25G from './Component/1.25G SFP/Dual_20DM_1.25G';
import Dual_20DM_1_25Gi from './Component/1.25G SFP/Dual_20DM_1_25Gi';
import Dual_20DR_1_25G from './Component/1.25G SFP/Dual_20DR_1.25G';
import Dual_20DR_1_25Gi from './Component/1.25G SFP/Dual_20DR_1_25Gi';
import Dual_40D_1_25G from './Component/1.25G SFP/Dual_40D_1.25G';
import Dual_40D_1_25Gi from './Component/1.25G SFP/Dual_40D_1.25Gi';
import Dual_60D_1_25G from './Component/1.25G SFP/Dual_60D_1.25G';
import Dual_60D_1_25Gi from './Component/1.25G SFP/Dual_60D_1_25Gi';
import Dual_50D_1_25G from './Component/1.25G SFP/Dual_50D_1.25G';
import Dual_50D_1_25Gi from './Component/1.25G SFP/Dual_50D_1_25Gi';
import Dual_80D_1_25G from './Component/1.25G SFP/Dual_80D_1.25G';
import Dual_80D_1_25Gi from './Component/1.25G SFP/Dual_80D_1_25Gi';
import Dual_A0D_1_25G from './Component/1.25G SFP/Dual_A0D_1.25G';
import Dual_A0D_1_25Gi from './Component/1.25G SFP/Dual_A0D_1_25Gi';
import Dual_A2D_1_25G from './Component/1.25G SFP/Dual_A2D_1.25G';
import Dual_A2D_1_25Gi from './Component/1.25G SFP/Dual_A2D_1_25Gi';


import Products_10G_XG_XGS_PON from './Component/PON SFP  SFP+/Products_10G_XG_XGS_PON';
import PX5_20X from './Component/PON SFP  SFP+/PX5_20X';
import PX5_20Xi from './Component/PON SFP  SFP+/PX5_20Xi';
import PX6_20X from './Component/PON SFP  SFP+/PX6_20X';
import PX6_20Xi from './Component/PON SFP  SFP+/PX6_20Xi';

import EPON_Products from './Component/PON SFP  SFP+/EPON_Products';
import EPON_10G_SFP from './Component/PON SFP  SFP+/EPON_10G_SFP+';
import EPON_10G_SFPi from './Component/PON SFP  SFP+/EPON_10G_SFPi';

import GPON_SFP_Products from './Component/PON SFP  SFP+/GPON_SFP_Products';
import GPON_PG3_20B from './Component/PON SFP  SFP+/GPON_PG3_20B';
import GPON_PG3_20Bi from './Component/PON SFP  SFP+/GPON_PG3_20Bi';
import GPON_PG4_20B from './Component/PON SFP  SFP+/GPON_PG4_20B';
import GPON_PG4_20Bi from './Component/PON SFP  SFP+/GPON_PG4_20Bi';
import GPON_PG4_201 from './Component/PON SFP  SFP+/GPON_PG4_201';
import GPON_PG4_201i from './Component/PON SFP  SFP+/GPON_PG4_201i';
import GPON_PG4_202 from './Component/PON SFP  SFP+/GPON_PG4_202';
import GPON_PG4_203 from './Component/PON SFP  SFP+/GPON_PG4_203';

import EPON_SFP_Products from './Component/PON SFP  SFP+/EPON_SFP_Products';
import EPON_PE3_201 from './Component/PON SFP  SFP+/EPON_PE3_201';
import EPON_PE3_201i from './Component/PON SFP  SFP+/EPON_PE3_201i';
import EPON_PE4_201 from './Component/PON SFP  SFP+/EPON_PE4_201';
import EPON_PE4_201i from './Component/PON SFP  SFP+/EPON_PE4_201i';
import EPON_PE4_202 from './Component/PON SFP  SFP+/EPON_PE4_202';

import CWDM4_Products from './Component/100G_QSFP28/CWDM4_Products';
import CWDM4_02D from './Component/100G_QSFP28/CWDM4_02D';
import CWDM4_13D from './Component/100G_QSFP28/CWDM4_13D';
import EPON_PE4_203 from './Component/PON SFP  SFP+/EPON_PE4_203';

import BIDI_C33 from './Component/100G_QSFP28/BIDI_C33';

import SFF_2X5_Products from './Component/2X5 SFF/SFF_2X5_Products';
import X5TR_2X5_SFF from './Component/2X5 SFF/X5TR_2X5_SFF';
import X5TR_2X5_SFFi from './Component/2X5 SFF/X5TR_2X5_SFFi';

import BIDI_155M_Products from './Component/125M 155M  SFP/BIDI_155M_Products';
import BIDI_S35_100BX_U from './Component/125M 155M  SFP/BIDI_S35_100BX_U';
import BIDI_S35_100BX_Ui from './Component/125M 155M  SFP/BIDI_S35_100BX_Ui';
import BIDI_S35_100BX_D from './Component/125M 155M  SFP/BIDI_S35_100BX_D';
import BIDI_S35_100BX_Di from './Component/125M 155M  SFP/BIDI_S35_100BX_Di';
import BIDI_A8_35_20D from './Component/125M 155M  SFP/BIDI_A8_35_20D';
import BIDI_A8_35_20Di from './Component/125M 155M  SFP/BIDI_A8_35_20Di';
import BIDI_A8_35_40D from './Component/125M 155M  SFP/BIDI_A8_35_40D';
import BIDI_A8_35_40Di from './Component/125M 155M  SFP/BIDI_A8_35_40Di';
import BIDI_A8_35_60D from './Component/125M 155M  SFP/BIDI_A8_35_60D';
import BIDI_A8_35_60Di from './Component/125M 155M  SFP/BIDI_A8_35_60Di';
import BIDI_A8_45_80D from './Component/125M 155M  SFP/BIDI_A8_S45_80D';
import BIDI_A8_45_80Di from './Component/125M 155M  SFP/BIDI_A8_45_80Di';
import BIDI_A8_S45_A2D from './Component/125M 155M  SFP/BIDI_A8_S45_A2D';
import BIDI_A8_S45_A2Di from './Component/125M 155M  SFP/BIDI_A8_S45_A2Di';
import BIDI_A8_S53_20D from './Component/125M 155M  SFP/BIDI_A8_S53_20D';
import BIDI_A8_S53_20Di from './Component/125M 155M  SFP/BIDI_A8_S53_20Di';
import BIDI_A8_S53_40D from './Component/125M 155M  SFP/BIDI_A8_S53_40D';
import BIDI_A8_S53_40Di from './Component/125M 155M  SFP/BIDI_A8_S53_40Di';
import BIDI_A8_S53_60D from './Component/125M 155M  SFP/BIDI_A8_S53_60D';
import BIDI_A8_S53_60Di from './Component/125M 155M  SFP/BIDI_A8_S53_60Di';
import BIDI_A8_S54_80D from './Component/125M 155M  SFP/BIDI_A8_S54_80D';
import BIDI_A8_S54_80Di from './Component/125M 155M  SFP/BIDI_A8_S54_80Di';
import BIDI_A8_S54_A2D from './Component/125M 155M  SFP/BIDI_A8_S54_A2D';
import BIDI_A8_S54_A2Di from './Component/125M 155M  SFP/BIDI_A8_S54_A2Di';

import Dual_125_155M_1X9 from './Component/1X9/125_155M_1X9_DUAL';
import Dual_155M_M13_02P from './Component/1X9/Dual_155M_M13_02P';
import Dual_155M_M13_02Pi from './Component/1X9/Dual_155M_M13_02Pi';
import Dual_155M_M85_02P from './Component/1X9/Dual_155M_M85_02P';
import Dual_155M_M85_02Pi from './Component/1X9/Dual_155M_M85_02Pi';
import Dual_155M_AM_M13 from './Component/1X9/Dual_155M_AM_M13';
import Dual_155M_AM_M13i from './Component/1X9/Dual_155M_AM_M13i';
import Dual_155M_Ax_M13 from './Component/1X9/Dual_155M_Ax_M13';
import Dual_155M_Ax_M13i from './Component/1X9/Dual_155M_Ax_M13i';
import Dual_155M_Ax_30P from './Component/1X9/Dual_155M_S13_30P';
import Dual_155M_Ax_30Pi from './Component/1X9/Dual_155M_Ax_30Pi';
import Dual_155M_Ax_60P from './Component/1X9/Dual_155M_Ax_60P';
import Dual_155M_Ax_60Pi from './Component/1X9/Dual_155M_Ax_60Pi';
import Dual_155M_Ax_A0P from './Component/1X9/Dual_155M_Ax_A0P';
import Dual_155M_Ax_A0Pi from './Component/1X9/Dual_155M_Ax_A0Pi';
import Dual_155M_Ax_A2P from './Component/1X9/Dual_155M_Ax_A2P';
import Dual_155M_Ax_A2Pi from './Component/1X9/Dual_155M_Ax_A2Pi';
import Dual_A1_S13_20P from './Component/1X9/Dual_A1_S13_20P';
import Dual_A1_S13_20Pi from './Component/1X9/Dual_A1_S13_20Pi';
import Dual_A1_S13_30P from './Component/1X9/Dual_A1_S13_30P';
import Dual_A1_S13_30Pi from './Component/1X9/Dual_A1_S13_30Pi';
import Dual_A1_S13_60P from './Component/1X9/Dual_A1_S13_60P';
import Dual_A1_S13_60Pi from './Component/1X9/Dual_A1_S13_60Pi';
import Dual_A5_S15_80P from './Component/1X9/Dual_A5_S15_80P';
import Dual_A5_S15_80Pi from './Component/1X9/Dual_A5_S15_80Pi';
import Dual_A1_S15_A0P from './Component/1X9/Dual_A1_S15_A0P';
import Dual_A1_S15_A0Pi from './Component/1X9/Dual_A1_S15_A0Pi';
import Dual_A1_S15_A2P from './Component/1X9/Dual_A1_S15_A2P';
import Dual_A1_S15_A2Pi from './Component/1X9/Dual_A1_S15_A2Pi';
import Dual_A3_S13_30P from './Component/1X9/Dual_A3_S13_30P';
import Dual_A3_S13_30Pi from './Component/1X9/Dual_A3_S13_30Pi';
import Dual_A3_S13_60P from './Component/1X9/Dual_A3_S13_60P';
import Dual_A3_S13_60Pi from './Component/1X9/Dual_A3_S13_60Pi';
import Dual_A3_S15_A0P from './Component/1X9/Dual_A3_S15_A0P';
import Dual_A3_S15_A0Pi from './Component/1X9/Dual_A3_S15_A0Pi';
import Dual_A3_S15_A2P from './Component/1X9/Dual_A3_S15_A2P';
import Dual_A3_S15_A2Pi from './Component/1X9/Dual_A3_S15_A2Pi';
import Dual_A5_M13_02P from './Component/1X9/Dual_A5_M13_02P';
import Dual_A5_M13_02Pi from './Component/1X9/Dual_A5_M13_02Pi';
import Dual_A5_M85_02P from './Component/1X9/Dual_A5_M85_02P';
import Dual_A5_M85_02Pi from './Component/1X9/Dual_A5_M85_02Pi';
import Dual_A5_S13_30P from './Component/1X9/Dual_A5_S13_30P';
import Dual_A5_S13_30Pi from './Component/1X9/Dual_A5_S13_30Pi';
import Dual_A5_S13_60P from './Component/1X9/Dual_A5_S13_60P';
import Dual_A5_S13_60Pi from './Component/1X9/Dual_A5_S13_60Pi';
import Dual_A5_S15_A0P from './Component/1X9/Dual_A5_S15_A0P';
import Dual_A5_S15_A0Pi from './Component/1X9/Dual_A5_S15_A0Pi';
import Dual_A5_S15_A2P from './Component/1X9/Dual_A5_S15_A2P';
import Dual_A5_S15_A2Pi from './Component/1X9/Dual_A5_S15_A2Pi';
import Dual_AM_M85_02P from './Component/1X9/Dual_AM_M85_02P';
import Dual_AM_M85_02Pi from './Component/1X9/Dual_AM_M85_02Pi';
import Dual_AM_S13_30P from './Component/1X9/Dual_AM_S13_30P';
import Dual_AM_S13_30Pi from './Component/1X9/Dual_AM_S13_30Pi';
import Dual_AM_S13_60P from './Component/1X9/Dual_AM_S13_60P';
import Dual_AM_S13_60Pi from './Component/1X9/Dual_AM_S13_60Pi';
import Dual_AM_S15_A0P from './Component/1X9/Dual_AM_S15_A0P';
import Dual_AM_S15_A0Pi from './Component/1X9/Dual_AM_S15_A0Pi';
import Dual_AM_S15_A2P from './Component/1X9/Dual_AM_S15_A2P';
import Dual_AM_S15_A2Pi from './Component/1X9/Dual_AM_S15_A2Pi';



import DWDM_SFP_115M_Products from './Component/125M 155M  SFP/DWDM_SFP_115M_Products';
import DWDM_SFP_BOD from './Component/125M 155M  SFP/DWDM_SFP_155M';
import DWDM_SFP_M13_05Bi from './Component/125M 155M  SFP/DWDM_SFP_M13_05Bi';

import CWDW_SFP_155M_Products from './Component/125M 155M  SFP/CWDW_SFP_155M_Products';
import CWDW_SFP_b30D from './Component/125M 155M  SFP/CWDW_SFP_b30D';
import CWDW_SFP_b30Di from './Component/125M 155M  SFP/CWDW_SFP_b30Di';
import CWDW_SFP_b34D from './Component/125M 155M  SFP/CWDW_SFP_b34D';
import CWDW_SFP_b34Di from './Component/125M 155M  SFP/CWDW_SFP_b34Di';
import CWDW_SFP_b36D from './Component/125M 155M  SFP/CWDW_SFP_b36D';
import CWDW_SFP_b36Di from './Component/125M 155M  SFP/CWDW_SFP_b36Di';

import SFP_PLUS_BIDI_Products from './Component/10G SFP+/SFP+_BIDI_Products';
import BIDI_H8_C27_20D from './Component/10G SFP+/BIDI_H8_C27_20D';
import BIDI_H8_C27_20Di from './Component/10G SFP+/BIDI_H8_C27_20Di';
import BIDI_H8_C27_20DM from './Component/10G SFP+/BIDI_H8_C27_20DM';
import BIDI_H8_C27_20DMi from './Component/10G SFP+/BIDI_H8_C27_20DMi';
import BIDI_H8_C27_40D from './Component/10G SFP+/BIDI_H8_C27_40D';
import BIDI_H8_C27_40Di from './Component/10G SFP+/BIDI_H8_C27_40Di';
import BIDI_H8_C27_40DM from './Component/10G SFP+/BIDI_H8_C27_40DM';
import BIDI_H8_C27_40DMi from './Component/10G SFP+/BIDI_H8_C27_40DMi';
import BIDI_H8_C27_60D from './Component/10G SFP+/BIDI_H8_C27_60D';
import BIDI_H8_C27_60Di from './Component/10G SFP+/BIDI_H8_C27_60Di';
import BIDI_H8_C33_20D from './Component/10G SFP+/BIDI_H8_C33_20D';
import BIDI_H8_C33_20Di from './Component/10G SFP+/BIDI_H8_C33_20Di';
import BIDI_H8_C33_20DM from './Component/10G SFP+/BIDI_H8_C33_20DM';
import BIDI_H8_C33_20DMi from './Component/10G SFP+/BIDI_H8_C33_20DMi';
import BIDI_H8_C33_40D from './Component/10G SFP+/BIDI_H8_C33_40D';
import BIDI_H8_C33_40Di from './Component/10G SFP+/BIDI_H8_C33_40Di';
import BIDI_H8_C33_40DM from './Component/10G SFP+/BIDI_H8_C33_40DM';
import BIDI_H8_C33_40DMi from './Component/10G SFP+/BIDI_H8_C33_40DMi';
import BIDI_H8_C33_60D from './Component/10G SFP+/BIDI_H8_C33_60D';
import BIDI_H8_C33_60Di from './Component/10G SFP+/BIDI_H8_C33_60Di';
import BIDI_H8_C49_80D from './Component/10G SFP+/BIDI_H8_C49_80D';
import BIDI_H8_C49_80Di from './Component/10G SFP+/BIDI_H8_C49_80Di';
import BIDI_H8_C55_80D from './Component/10G SFP+/BIDI_H8_C55_80D';
import BIDI_H8_C55_80Di from './Component/10G SFP+/BIDI_H8_C55_80Di';

import Products_Dual_SFP_155M from './Component/125M 155M  SFP/Products_Dual_SFP_155M';
import Dual_155M_02D from './Component/125M 155M  SFP/Dual_155M_02D';
import Dual_155M_02Di from './Component/125M 155M  SFP/Dual_155M_02Di';
import Dual_155M_05D from './Component/125M 155M  SFP/Dual_155M_05D';
import Dual_155M_05Di from './Component/125M 155M  SFP/Dual_155M_05Di';
import Dual_155M_M85_02D from './Component/125M 155M  SFP/Dual_155M_M85_02D';
import Dual_155M_M85_02Di from './Component/125M 155M  SFP/Dual_155M_M85_02Di';
import Dual_155M_S13_20D from './Component/125M 155M  SFP/Dual_155M_S13_20D';
import Dual_155M_S13_20Di from './Component/125M 155M  SFP/Dual_155M_S13_20Di';
import Dual_155M_S13_30D from './Component/125M 155M  SFP/Dual_155M_S13_30D';
import Dual_155M_S13_30Di from './Component/125M 155M  SFP/Dual_155M_S13_30Di';
import Dual_155M_S13_40D from './Component/125M 155M  SFP/Dual_155M_S13_40D';
import Dual_155M_S13_40Di from './Component/125M 155M  SFP/Dual_155M_S13_40Di';
import Dual_155M_S13_60D from './Component/125M 155M  SFP/Dual_155M_S13_60D';
import Dual_155M_S13_60Di from './Component/125M 155M  SFP/Dual_155M_S13_60Di';
import Dual_155M_S15_80D from './Component/125M 155M  SFP/Dual_155M_S15_80D';
import Dual_155M_S15_80Di from './Component/125M 155M  SFP/Dual_155M_S15_80Di';
import Dual_155M_S15_A0D from './Component/125M 155M  SFP/Dual_155M_S15_A0D';
import Dual_155M_S15_A0Di from './Component/125M 155M  SFP/Dual_155M_S15_A0Di';
import Dual_155M_S15_A2D from './Component/125M 155M  SFP/Dual_155M_S15_A2D';
import Dual_155M_S15_A2Di from './Component/125M 155M  SFP/Dual_155M_S15_A2Di';
import Dual_155M_S15_A4D from './Component/125M 155M  SFP/Dual_155M_S15_A4D';
import Dual_155M_S15_A4Di from './Component/125M 155M  SFP/Dual_155M_S15_A4Di';
import Dual_155M_S15_A6D from './Component/125M 155M  SFP/Dual_155M_S15_A6D';
import Dual_155M_S15_A6Di from './Component/125M 155M  SFP/Dual_155M_S15_A6Di';
import Dual_155M_S15_B0D from './Component/125M 155M  SFP/Dual_155M_S15_B0D';
import Dual_155M_S15_B0Di from './Component/125M 155M  SFP/Dual_155M_S15_B0Di';
import Dual_155M_S15_B2D from './Component/125M 155M  SFP/Dual_155M_S15_B2D';
import Tunable_10G_SFP_DWDM from './Component/10G_SFP+/Tunable_10G_SFP_DWDM';
import Products_DWDM_10G_SFP from './Component/10G_SFP+/Products_DWDM_10G_SFP';
import DWDM_10G_40D from './Component/10G_SFP+/DWDM_10G_40D';
import DWDM_10G_40Di from './Component/10G_SFP+/DWDM_10G_40Di';
import DWDM_10G_80D from './Component/10G_SFP+/DWDM_10G_80D';
import DWDM_10G_80Di from './Component/10G_SFP+/DWDM_10G_80Di';
import DWDM_10G_A0D from './Component/10G_SFP+/DWDM_10G_A0D';
import DWDM_H7_40D from './Component/10G_SFP+/DWDM_H7_40D';
import DWDM_H7_40Di from './Component/10G_SFP+/DWDM_H7_40Di';
import DWDM_H7_80D from './Component/10G_SFP+/DWDM_H7_80D';
import DWDM_H7_80Di from './Component/10G_SFP+/DWDM_H7_80Di';
import Products_CWDM_10G_SFP from './Component/10G_SFP+/Products_CWDM_10G_SFP';

import XFP_DWDM_Tunable from './Component/10G XFP/XFP_DWDM_Tunable';

import XFP_DWDM_Products from './Component/10G XFP/XFP_DWDM_Products';
import DWDM_Dxx_40D from './Component/10G XFP/DWDM_Dxx_40D';
import DWDM_Dxx_40Di from './Component/10G XFP/DWDM_Dxx_40Di';
import DWDM_Dxx_80D from './Component/10G XFP/DWDM_Dxx_80D';
import DWDM_Dxx_80Di from './Component/10G XFP/DWDM_Dxx_80Di';

import XFP_CWDM_Products from './Component/10G XFP/XFP_CWDM_Products';
import CWDM_Cxx_40D from './Component/10G XFP/CWDM_Cxx_40D';
import CWDM_Cxx_40Di from './Component/10G XFP/CWDM_Cxx_40Di';
import CWDM_Cxx_80D from './Component/10G XFP/CWDM_Cxx_80D';
import CWDM_Cxx_80Di from './Component/10G XFP/CWDM_Cxx_80Di';

import CWDM_H7_08D from './Component/10G_SFP+/CWDM_H7_08D';
import CWDM_H7_08Di from './Component/10G_SFP+/CWDM_H7_08Di';
import CWDM_H7_40D from './Component/10G_SFP+/CWDM_H7_40D';
import CWDM_H7_40Di from './Component/10G_SFP+/CWDM_H7_40Di';
import CWDM_H7_80D from './Component/10G_SFP+/CWDM_H7_80D';
import CWDM_H7_80Di from './Component/10G_SFP+/CWDM_H7_80Di';
import CWDM_H7_b12D from './Component/10G_SFP+/CWDM_H7_b12D';
import CWDM_H7_b12Di from './Component/10G_SFP+/CWDM_H7_b12Di';
import CWDM_H7_b26D from './Component/10G_SFP+/CWDM_H7_b26D';
import CWDM_H7_b26Di from './Component/10G_SFP+/CWDM_H7_b26Di';
import Products_Dual_10G_SFP from './Component/10G_SFP+/Products_Dual_10G_SFP';
import Dual_M13_X2D from './Component/10G_SFP+/Dual_M13_X2D';
import Dual_M13_X2Di from './Component/10G_SFP+/Dual_M13_X2Di';
import Dual_M85_X3D from './Component/10G_SFP+/Dual_M85_X3D';
import Dual_M85_X3Di from './Component/10G_SFP+/Dual_M85_X3Di';
import Dual_M85_X3DM from './Component/10G_SFP+/Dual_M85_X3DM';
import Dual_M85_X3DMi from './Component/10G_SFP+/Dual_M85_X3DMi';
import Dual_H7_02D from './Component/10G_SFP+/Dual_H7_02D';
import Dual_H7_02Di from './Component/10G_SFP+/Dual_H7_02Di';
import Dual_H7_02DM from './Component/10G_SFP+/Dual_H7_02DM';
import Dual_H7_02DMi from './Component/10G_SFP+/Dual_H7_02DMi';
import Dual_H7_10DQ from './Component/10G_SFP+/Dual_H7_10DQ';
import Dual_H7_10DQi from './Component/10G_SFP+/Dual_H7_10DQi';
import Dual_H7_20DM from './Component/10G_SFP+/Dual_H7_20DM';
import Dual_H7_20DMi from './Component/10G_SFP+/Dual_H7_20DMi';
import Dual_H7_40DM from './Component/10G_SFP+/Dual_H7_40DM';
import Dual_H7_40DMi from './Component/10G_SFP+/Dual_H7_40DMi';
import Dual_H7_S15_40D from './Component/10G_SFP+/Dual_H7_S15_40D';
import Dual_H7_S15_40Di from './Component/10G_SFP+/Dual_H7_S15_40Di';
import Dual_H7_S15_40DM from './Component/10G_SFP+/Dual_H7_S15_40DM';
import Dual_H7_S15_40DMi from './Component/10G_SFP+/Dual_H7_S15_40DMi';
import Dual_H7_40DQ from './Component/10G_SFP+/Dual_H7_40DQ';
import Dual_H7_40DQi from './Component/10G_SFP+/Dual_H7_40DQi';
import Dual_H7_S15_80D from './Component/10G_SFP+/Dual_H7_S15_80D';
import Dual_H7_S15_80Di from './Component/10G_SFP+/Dual_H7_S15_80Di';
import Dual_H7_S15_80DM from './Component/10G_SFP+/Dual_H7_S15_80DM';
import Dual_H7_S15_80DMi from './Component/10G_SFP+/Dual_H7_S15_80DMi';
import Dual_H7_S15_80DQ from './Component/10G_SFP+/Dual_H7_S15_80DQ';
import Dual_H7_S15_80DQi from './Component/10G_SFP+/Dual_H7_S15_80DQi';
import Dual_H7_S15_A0D from './Component/10G_SFP+/Dual_H7_S15_A0D';
import Dual_H7_S15_A0Di from './Component/10G_SFP+/Dual_H7_S15_A0Di';
import Products_4G_SFP from './Component/4G_SFP/Products_4G_SFP';
import Dual_SFP_X1DM from './Component/4G_SFP/Dual_SFP_X1DM';
import Dual_SFP_X1DMi from './Component/4G_SFP/Dual_SFP_X1DMi';
import Products_6G_SFP from './Component/6G_SFP+/Products_6G_SFP';
import Dual_67_X3D from './Component/6G_SFP+/Dual_67_X3D';
import Dual_67_X3Di from './Component/6G_SFP+/Dual_67_X3Di';
import Dual_67_02D from './Component/6G_SFP+/Dual_67_02D';
import Dual_67_02Di from './Component/6G_SFP+/Dual_67_02Di';

import AOC_SPSP from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/AOC_SPSP';
import AOC_SFP28_25G from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/AOC_SFP28_25G';
import Products_40G_QSFP from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/Products_40G_QSFP';
import QSFP_40G_QPDP from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/QSFP_40G_QPDP';
import QSFP_QPQP_40G from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/QSFP_QPQP_40G';
import QSFP_QPSP_40G from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/QSFP_QPSP_40G';
import Products_100G_QSFP28 from './Component/Fiber Optical Cable  Patch-cord/AOC (Active Optical Cable)/Products_100G_QSFP28';


import DAC_10G_SFPS from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/DAC_10G_SFPS';
import DAC_25G_SFP28 from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/DAC_25G_SFP28';

import DAC_40G_QSFP_Products from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/DAC_40G_QSFP_Products';
import QSFP_40G_QPQP from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/QSFP_40G_QPQP';
import QSFP_40G_QPSP from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/QSFP_40G_QPSP';

import DAC_100G_QSFP_Products from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/DAC_100G_QSFP_Products';
import QSFP28_100G_QPQP from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/QSFP28_100G_QPQP';
import QSFP28_100G_QPSP from './Component/Fiber Optical Cable  Patch-cord/DAC (Direct-Attach Cable)/QSFP28_100G_QPSP';

// Armored_Breakout_Cable
import Armored_Breakout_Cable from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/Armored_Breakout_Cable';

// Breakout_Cable
import Breakout_Cable from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/Breakout_Cable';

// Energy_Chain_Cable
import Energy_Chain_Cable from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/Energy_Chain_Cable';

// General_Patch_Cord
import General_Patch_Cord from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/General_Patch_Cord';

// High_Strength_And_Suppleness
import High_Strength_And_Suppleness from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/High_Strength_&_Suppleness';

// Mini_Distribution_Cable
import Mini_Distribution_Cable from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/Mini_Distribution_Cable';

// MPO_PatchCord
import MPO_PatchCord from './Component/Fiber Optical Cable  Patch-cord/Indoor Patch-cord  Cable/MPO_PatchCord';

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
     <Route path="/Products_40G_LR4/LR4_10KM_40G_i" element={<LR4_10KM_40G_i/>}/>
     <Route path="/Products_40G_LR4/LR4_20KM_40G_i" element={<LR4_20KM_40G_i/>}/>
     <Route path="/Products_40G_LR4/LR4_10KM_40G" element={<LR4_10KM_40G/>}/>
     <Route path="/Products_40G_LR4/LR4_20KM_40G" element={<LR4_20KM_40G/>}/>

     <Route path="/Product_40G_ER4" element={<Product_40G_ER4/>}/>
     <Route path="/Product_40G_ER4/ER4_40D" element={<ER4_40D/>}/>
     <Route path="/Product_40G_ER4/ER4_40Di" element={<ER4_40Di/>}/>
     


     <Route path='/Product_40G_eSR4' element={<Product_40G_eSR4/>}/>
    
     <Route path="/Product_40G_ZR4" element={<Product_40G_ZR4/>}/> 
     

     <Route path="/SR4_40G_Products" element={<SR4_40G_Products/>}/>
     <Route path="/SR4_40G_Products/SR4_X1D" element={<SR4_X1D/>}/>
     <Route path="/SR4_40G_Products/SR4_X1Di" element={<SR4_X1Di/>}/>
     

     <Route path="/Product_40G_SRBD" element={<Product_40G_SRBD/>}/>
     <Route path="/IR4_40G" element={<IR4_40G/>}/>
     <Route path="/PSM4_IR_40G" element={<PSM4_IR_40G/>}/>
     <Route path="/PSM4_LR_40G" element={<PSM4_LR_40G/>}/>
     <Route path="/SWDM4_40G" element={<SWDM4_40G/>}/>
     <Route path="/Product_CFP1" element={<Product_CFP1/>}/>

     <Route path="/CFP2_Products_100G" element={<CFP2_Products_100G/>}/>
     <Route path="/CFP2_Products_100G/LR4_Eathernet_100G" element={<LR4_Eathernet_100G/>}/>
     <Route path="/CFP2_Products_100G/Product_CFP4" element={<Product_CFP4/>}/>
     <Route path="/CFP2_Products_100G/Product_100G_QSFP28" element={<Product_100G_QSFP28/>}/>
     <Route path="/CFP2_Products_100G/ER4_DuleRate_100G" element={<ER4_DuleRate_100G/>}/>
     <Route path="/CFP2_Products_100G/SR10_DuleRate_100G" element={<SR10_DuleRate_100G/>}/>
     <Route path="/CFP2_Products_100G/LR4_DualRate_100G" element={<LR4_DualRate_100G/>}/>

     <Route path="/SFP_PLUS_DUAL_Products" element={<SFP_PLUS_DUAL_Products/>}/>
     <Route path="/SFP_PLUS_DUAL_Products/SFP_8GFC_ELR" element={<SFP_8GFC_ELR/>}/>
     <Route path="/SFP_PLUS_DUAL_Products/SFP_8GFC_ELRi" element={<SFP_8GFC_ELRi/>}/>
     

     
     <Route path="/Product_16GFC_SFP" element={<Product_16GFC_SFP/>}/>

     <Route path="/Product_QSFP28_100G_SR4" element={<Product_QSFP28_100G_SR4/>}/>
     <Route path="/Product_QSFP28_100G_SR4/Product_100G_SR4" element={<Product_100G_SR4/>}/>
     <Route path="/Product_QSFP28_100G_SR4/Product_100G_SR4_DualRate" element={<Product_100G_SR4_DualRate/>}/>

     <Route path="/Product_QSFP28_100G_SRBD" element={<Product_QSFP28_100G_SRBD/>}/>
     <Route path="/Product_QSFP28_100G_SRBD/Product_100G_SRBD" element={<Product_100G_SRBD/>}/>
     <Route path="/Product_QSFP28_100G_SRBD/Product_100G_SRBD_DualRate" element={<Product_100G_SRBD_DualRate/>}/>

     <Route path="/ER4_100G_Products" element={<ER4_100G_Products/>}/>
     <Route path="/ER4_100G_Products/ER4_Single_rate_100G" element={<ER4_Single_rate_100G/>}/>
     <Route path="/ER4_100G_Products/ER4_VNTP_Media_100G" element={<ER4_VNTP_Media_100G/>}/>
     <Route path="/ER4_100G_Products/ER4_40Di_100G" element={<ER4_40Di_100G/>}/>

     <Route path="/ESR4_100G" element={<ESR4_100G/>}/>
     <Route path="/ZR4_100G" element={<ZR4_100G/>}/>
     <Route path="/PSM4_Ethernet_100G" element={<PSM4_Ethernet_100G/>}/>

     <Route path="/LR4_100G_Products" element={<LR4_100G_Products/>}/>
     <Route path="/LR4_100G_Products/LR4_Ethernet_OTU4_100G" element={<LR4_Ethernet_OTU4_100G/>}/>
     <Route path="/LR4_100G_Products/LR4_Ethernet_100G" element={<LR4_Ethernet_100G/>}/>

     <Route path="/BIDI_4WDM_Products" element={<BIDI_4WDM_Products/>}/>
     <Route path="/BIDI_4WDM_Products/L13_4WDM" element={<L13_4WDM/>}/>
     <Route path="/BIDI_4WDM_Products/L12_4WDM" element={<L12_4WDM/>}/>
    

     <Route path="/BIDI_10_to_40_Products" element={<BIDI_10_to_40_Products/>}/>
     <Route path="/BIDI_10_to_40_Products/BIDI_C27" element={<BIDI_C27/>}/>
     <Route path="/BIDI_10_to_40_Products/BIDI_C29" element={<BIDI_C29/>}/>
     <Route path="/BIDI_10_to_40_Products/BIDI_C31" element={<BIDI_C31/>}/>
     <Route path="/BIDI_10_to_40_Products/BIDI_L04" element={<BIDI_L04/>}/>
     <Route path="/BIDI_10_to_40_Products/BIDI_L09" element={<BIDI_L09/>}/>
     <Route path="/BIDI_10_to_40_Products/BIDI_C33" element={<BIDI_C33/>}/>

     <Route path="/QSPF28_adaptor" element={<QSPF28_adaptor/>}/>

     <Route path="/SFP28_SR_Products" element={<SFP28_SR_Products/>}/>
     <Route path="/SFP28_SR_Products/SFP28_25G_SR" element={<SFP28_25G_SR/>}/>
     <Route path="/SFP28_SR_Products/SFP28_25G_SR_i" element={<SFP28_25G_SR_i/>}/>
     <Route path="/SFP28_SR_Products/SFP28_25G_eSR" element={<SFP28_25G_eSR/>}/>
     <Route path="/SFP28_SR_Products/SFP28_25G_eSR_i" element={<SFP28_25G_eSR_i/>}/>
     <Route path="/SFP28_SR_Products/SFP28_25G_eSR_DuleRate" element={<SFP28_25G_eSR_DuleRate/>}/>
     <Route path="/SFP28_SR_Products/SFP28_25G_eSR_DuleRate_i" element={<SFP28_25G_eSR_DuleRate_i/>}/>

     <Route path="/SFP28_BIDI_Products" element={<SFP28_BIDI_Products/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX10_27" element={<SFP28_BX10_27/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX20_27" element={<SFP28_BX20_27/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX10_33" element={<SFP28_BX10_33/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX20_33" element={<SFP28_BX20_33/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX10_27_i" element={<SFP28_BX10_27_i/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX20_27_i" element={<SFP28_BX20_27_i/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX10_33_i" element={<SFP28_BX10_33_i/>}/>
     <Route path="/SFP28_BIDI_Products/SFP28_BX20_33_i" element={<SFP28_BX20_33_i/>}/>

     <Route path="/SFP28_25G_CWDM_Products" element={<SFP28_25G_CWDM_Products/>}/>
     <Route path="/SFP28_25G_CWDM_Products/CWDM_10DQ" element={<CWDM_10DQ/>}/>
     <Route path="/SFP28_25G_CWDM_Products/CWDM_10DQ_i" element={<CWDM_10DQ_i/>}/>


     <Route path="/SFP28_LR_25G_Projects" element={<SFP28_LR_25G_Projects/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_2km" element={<SFP28_25G_LR_2km/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_10km" element={<SFP28_25G_LR_10km/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_DualRate" element={<SFP28_25G_LR_DualRate/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_Transceiver" element={<SFP28_25G_LR_Transceiver/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_2km_i" element={<SFP28_25G_LR_2km_i/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_10km_i" element={<SFP28_25G_LR_10km_i/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_DualRate_i" element={<SFP28_25G_LR_DualRate_i/>}/>
     <Route path="/SFP28_LR_25G_Projects/SFP28_25G_LR_Transceiver_i" element={<SFP28_25G_LR_Transceiver_i/>}/>
     <Route path="/SFP28_LR_25G_Projects/LR_S13_20DQ" element={<LR_S13_20DQ/>}/>
     <Route path="/SFP28_LR_25G_Projects/LR_S13_20DQ_i" element={<LR_S13_20DQ_i/>}/>

     <Route path="/SFP28_25G_DWDM" element={<SFP28_25G_DWDM/>}/>

     <Route path="/SFP28_25G__LWDM_products" element={<SFP28_25G__LWDM_products/>}/>
     <Route path="/SFP28_25G__LWDM_products/LWDM_25G_40KM" element={<LWDM_25G_40KM/>}/>
     <Route path="/SFP28_25G__LWDM_products/LWDM_25G_40KM_DuelRate" element={<LWDM_25G_40KM_DuelRate/>}/>

     <Route path="/SFP28_25G_SW" element={<SFP28_25G_SW/>}/>

     <Route path="/SFP_100Tx_Products" element={<SFP_100Tx_Products/>}/>
     <Route path="/SFP_100Tx_Products/SFP_100Tx_T01_X1" element={<SFP_100Tx_T01_X1/>}/>
     <Route path="/SFP_100Tx_Products/SFP_100Tx_T01_X1i" element={<SFP_100Tx_T01_X1i/>}/>
     <Route path="/SFP_100Tx_Products/SFP_100Tx_T11_X1" element={<SFP_100Tx_T11_X1/>}/>
     <Route path="/SFP_100Tx_Products/SFP_100Tx_T11_X1i" element={<SFP_100Tx_T11_X1i/>}/>


     <Route path="/SFP_1000T_Products" element={<SFP_1000T_Products/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T01_Xl" element={<SFP_1000T_T01_Xl/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T01_Xli" element={<SFP_1000T_T01_Xli/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T10_X1" element={<SFP_1000T_T10_X1/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T10_X1i" element={<SFP_1000T_T10_X1i/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T11_X1" element={<SFP_1000T_T11_X1/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T11_X1i" element={<SFP_1000T_T11_X1i/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T20_X1" element={<SFP_1000T_T20_X1/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T20_X1i" element={<SFP_1000T_T20_X1i/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T22_X1" element={<SFP_1000T_T22_X1/>}/>
     <Route path="/SFP_1000T_Products/SFP_1000T_T22_X1i" element={<SFP_1000T_T22_X1i/>}/>

     <Route path="/X2_DUAL_Products" element={<X2_DUAL_Products/>}/>
     <Route path="X2_DUAL_Products/X2_10G_SR" element={<X2_10G_SR/>}/>
     <Route path="X2_DUAL_Products/X2_10G_LR" element={<X2_10G_LR/>}/>
     <Route path="X2_DUAL_Products/X2_10G_ER" element={<X2_10G_ER/>}/>
     <Route path="X2_DUAL_Products/X2_10G_ZR" element={<X2_10G_ZR/>}/>

     <Route path="/Dual_Bidi_LC_Products" element={<Dual_Bidi_LC_Products/>}/>
     <Route path="/Dual_Bidi_LC_Products/CSFP_S34_20D" element={<CSFP_S34_20D/>}/>
     <Route path="/Dual_Bidi_LC_Products/CSFP_S34_20Di" element={<CSFP_S34_20Di/>}/>
     <Route path="/Dual_Bidi_LC_Products/CSFP_S43_20D" element={<CSFP_S43_20D/>}/>
     <Route path="/Dual_Bidi_LC_Products/CSFP_S43_20Di" element={<CSFP_S43_20Di/>}/>
     <Route path="/Dual_Bidi_LC_Products/CSFP_S53_20D" element={<CSFP_S53_20D/>}/>
     <Route path="/Dual_Bidi_LC_Products/CSFP_S53_20Di" element={<CSFP_S53_20Di/>}/>


     <Route path="/Projects_SFP_10G" element={<Projects_SFP_10G/>}/>
     <Route path="/Projects_SFP_10G/SFP_10G_T_Y3" element={<SFP_10G_T_Y3/>}/>
     <Route path="/Projects_SFP_10G/SFP_10G_T11_Y3" element={<SFP_10G_T11_Y3/>}/>
     <Route path="/Projects_SFP_10G/SFP_10G_T12_Y3" element={<SFP_10G_T12_Y3/>}/>
     <Route path="/Projects_SFP_10G/SFP_10G_T13_Y3" element={<SFP_10G_T13_Y3/>}/>
     <Route path="/Projects_SFP_10G/SFP_10G_T_Y3i" element={<SFP_10G_T_Y3i/>}/>
     <Route path="/Projects_SFP_10G/SFP_10G_T_Y38" element={<SFP_10G_T_Y38/>}/>
     <Route path="/Projects_SFP_10G/T22_Y3_10G_T" element={<T22_Y3_10G_T/>}/>
     <Route path="/Projects_SFP_10G/T11_Y8_10G_T" element={<T11_Y8_10G_T/>}/>

     <Route path="/SFP_BIDI_Products" element={<SFP_BIDI_Products/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S35_20D" element={<BIDI_S35_20D/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S53_20D" element={<BIDI_S53_20D/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S35_40D" element={<BIDI_S35_40D/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S53_40D" element={<BIDI_S53_40D/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S35_20Di" element={<BIDI_S35_20Di/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S53_20Di" element={<BIDI_S53_20Di/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S35_40Di" element={<BIDI_S35_40Di/>}/>
     <Route path="/SFP_BIDI_Products/BIDI_S53_40Di" element={<BIDI_S53_40Di/>}/>

     <Route path="/Products_SFP_CWDM" element={<Products_SFP_CWDM/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b20D" element={<CWDM_b20D/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b26D" element={<CWDM_b26D/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b30D" element={<CWDM_b30D/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b30DM" element={<CWDM_b30DM/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b26DM" element={<CWDM_b26DM/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b20Di" element={<CWDM_b20Di/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b26Di" element={<CWDM_b26Di/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b30Di" element={<CWDM_b30Di/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b30DMi" element={<CWDM_b30DMi/>}/>
     <Route path="/Products_SFP_CWDM/CWDM_b26DMi" element={<CWDM_b26DMi/>}/>

     <Route path="/Products_2point5_Dual" element={<Products_2point5_Dual/>}/>
     <Route path="/Products_2point5_Dual/Dual_X3D" element={<Dual_X3D/>}/>
     <Route path="/Products_2point5_Dual/Dual_X3Di" element={<Dual_X3Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_X3DM" element={<Dual_X3DM/>}/>     
     <Route path="/Products_2point5_Dual/Dual_X3DMi" element={<Dual_X3DMi/>}/>
     <Route path="/Products_2point5_Dual/Dual_02D" element={<Dual_02D/>}/>     
     <Route path="/Products_2point5_Dual/Dual_02Di" element={<Dual_02Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_20D" element={<Dual_20D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_20Di" element={<Dual_20Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S13_40D" element={<Dual_S13_40D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_S13_40Di" element={<Dual_S13_40Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S13_60D" element={<Dual_S13_60D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_S13_60Di" element={<Dual_S13_60Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_40D" element={<Dual_S15_40D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_S15_40Di" element={<Dual_S15_40Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_80D" element={<Dual_S15_80D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_S15_80Di" element={<Dual_S15_80Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A0D" element={<Dual_S15_A0D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_S15_A0Di" element={<Dual_S15_A0Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A0DM" element={<Dual_S15_A0DM/>}/>  
        <Route path="/Products_2point5_Dual/Dual_S15_A0DMi" element={<Dual_S15_A0DMi/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A2D" element={<Dual_S15_A2D/>}/>    
      <Route path="/Products_2point5_Dual/Dual_S15_A2Di" element={<Dual_S15_A2Di/>}/>
     <Route path="/Products_2point5_Dual/Dual_S15_A2DM" element={<Dual_S15_A2DM/>}/>   
       <Route path="/Products_2point5_Dual/Dual_S15_A2DMi" element={<Dual_S15_A2DMi/>}/>

     
     
     

     <Route path="/SFP_DWDM_Products" element={<SFP_DWDM_Products/>}/>
     <Route path="/SFP_DWDM_Products/DWDM_80km" element={<DWDM_80km/>}/>
     <Route path="/SFP_DWDM_Products/DWDM_120km" element={<DWDM_120km/>}/>
     <Route path="/SFP_DWDM_Products/DWDM_80km_i" element={<DWDM_80km_i/>}/>
     <Route path="/SFP_DWDM_Products/DWDM_120km_i" element={<DWDM_120km_i/>}/>

     <Route path="/SFP_1_25G_DWDM_Products" element={<SFP_1_25G_DWDM_Products/>}/>
     <Route path="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_80D" element={<SFP_1_25G_DWDM_80D/>}/>
     <Route path="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_80Di" element={<SFP_1_25G_DWDM_80Di/>}/>
     <Route path="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_A2D" element={<SFP_1_25G_DWDM_A2D/>}/>
     <Route path="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_A2Di" element={<SFP_1_25G_DWDM_A2Di/>}/>
     
     
     <Route path="/SFP_CWDM_1_25G_Products" element={<SFP_CWDM_1_25G_Products/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_19D_1_25G" element={<CWDM_19D_1_25G/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_19D_1_25Gi" element={<CWDM_19D_1_25Gi/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_24D_1_25G" element={<CWDM_24D_1_25G/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_24D_1_25Gi" element={<CWDM_24D_1_25Gi/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_32D_1_25G" element={<CWDM_32D_1_25G/>}/>
     <Route path="/SFP_CWDM_1_25G_Products/CWDM_32D_1_25Gi" element={<CWDM_32D_1_25Gi/>}/>
     
     

     <Route path="/XFP_BIDI_Products" element={<XFP_BIDI_Products/>}/>
     <Route path="/XFP_BIDI_Products/BIDI_C27_20D" element={<BIDI_C27_20D/>}/>
     <Route path="/XFP_BIDI_Products/BIDI_C27_20Di" element={<BIDI_C27_20Di/>}/>

     <Route path="/XFP_DUAL_Products" element={<XFP_DUAL_Products/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_M85_X3D" element={<Dual_H7_M85_X3D/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S13_10D" element={<Dual_H7_S13_10D/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S13_10Di" element={<Dual_H7_S13_10Di/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S13_10D_L" element={<Dual_H7_S13_10D_L/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S15_80D_SFP" element={<Dual_H7_S15_80D_SFP/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S15_80Di_SFP" element={<Dual_H7_S15_80Di_SFP/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S15_80D_L_SFP" element={<Dual_H7_S15_80D_L_SFP/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S15_A0D_SFP" element={<Dual_H7_S15_A0D_SFP/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S15_A0Di_SFP" element={<Dual_H7_S15_A0Di_SFP/>}/>
     <Route path="/XFP_DUAL_Products/Dual_H7_S15_A2D_SFP" element={<Dual_H7_S15_A2D_SFP/>}/>

     
     
     
     <Route path="/CWDM4_Products" element={<CWDM4_Products/>}/>
     <Route path="/CWDM4_Products/CWDM4_02D" element={<CWDM4_02D/>}/>
     <Route path="/CWDM4_Products/CWDM4_13D" element={<CWDM4_13D/>}/>
     
     <Route path="/Products_SFP_1_25G_BIDI" element={<Products_SFP_1_25G_BIDI/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_S35_20D" element={<BIDI_1_25_S35_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_S35_20Di" element={<BIDI_1_25_S35_20Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_S53_20D" element={<BIDI_1_25_S53_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_S53_20Di" element={<BIDI_1_25_S53_20Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_M35_X5D" element={<BIDI_M35_X5D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_M35_X5Di" element={<BIDI_M35_X5Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_M53_X5D" element={<BIDI_1_25_M53_X5D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_1_25_M53_X5Di" element={<BIDI_1_25_M53_X5Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_S34_10D" element={<BIDI_S34_10D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_S34_10Di" element={<BIDI_S34_10Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_S34_20D" element={<BIDI_S34_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_S34_20Di" element={<BIDI_S34_20Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S34_40D" element={<BIDI_C8_S34_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S34_40Di" element={<BIDI_C8_S34_40Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_02D" element={<BIDI_C8_S35_02D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_02Di" element={<BIDI_C8_S35_02Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_20D" element={<BIDI_C8_S35_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_20Di" element={<BIDI_C8_S35_20Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_40D" element={<BIDI_C8_S35_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_40Di" element={<BIDI_C8_S35_40Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_60D" element={<BIDI_C8_S35_60D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_60Di" element={<BIDI_C8_S35_60Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_10D" element={<BIDI_C8_S43_10D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_10Di" element={<BIDI_C8_S43_10Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_20D" element={<BIDI_C8_S43_20D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_20Di" element={<BIDI_C8_S43_20Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_40D" element={<BIDI_C8_S43_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_40Di" element={<BIDI_C8_S43_40Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S45_80D" element={<BIDI_C8_S45_80D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S45_80Di" element={<BIDI_C8_S45_80Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S45_A0D" element={<BIDI_C8_S45_A0D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S45_A0Di" element={<BIDI_C8_S45_A0Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_02D" element={<BIDI_C8_S53_02D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_02Di" element={<BIDI_C8_S53_02Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_40D" element={<BIDI_C8_S53_40D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_40Di" element={<BIDI_C8_S53_40Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_60D" element={<BIDI_C8_S53_60D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_60Di" element={<BIDI_C8_S53_60Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_80D" element={<BIDI_C8_S53_80D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_80Di" element={<BIDI_C8_S53_80Di/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_A0D" element={<BIDI_C8_S54_A0D/>}/>
     <Route path="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_A0Di" element={<BIDI_C8_S54_A0Di/>}/>

     
     <Route path="/Dual_1X9_Products" element={<Dual_1X9_Products/>}/>
     <Route path="/Dual_1X9_Products/Dual_1X9_M85_X5P" element={<Dual_1X9_M85_X5P/>}/>
     <Route path="/Dual_1X9_Products/Dual_1X9_M85_X5Pi" element={<Dual_1X9_M85_X5Pi/>}/>

     <Route path="/CWDM_1X9_Products" element={<CWDM_1X9_Products/>}/>
     <Route path="/CWDM_1X9_Products/CWDW_1X9_b31P" element={<CWDW_1X9_b31P/>}/>
     <Route path="/CWDM_1X9_Products/CWDW_1X9_b31Pi" element={<CWDW_1X9_b31Pi/>}/>
     <Route path="/CWDM_1X9_Products/CWDW_1X9_A3_b31P" element={<CWDW_1X9_A3_b31P/>}/>
     <Route path="/CWDM_1X9_Products/CWDW_1X9_A3_b31Pi" element={<CWDW_1X9_A3_b31Pi/>}/>
     <Route path="/CWDM_1X9_Products/CWDW_1X9_AM_b31P" element={<CWDW_1X9_AM_b31P/>}/>
     <Route path="/CWDM_1X9_Products/CWDW_1X9_AM_b31Pi" element={<CWDW_1X9_AM_b31Pi/>}/>
     
     
     

     <Route path="/Ultra_row_1X9_DC" element={<Ultra_row_1X9_DC/>}/>
     <Route path="/Ultra_row_1X9_DC/Ultra_02B" element={<Ultra_02B/>}/>
     <Route path="/Ultra_row_1X9_DC/Ultra_02Bi" element={<Ultra_02Bi/>}/>
     <Route path="/Ultra_row_1X9_DC/Ultra_05B" element={<Ultra_05B/>}/>
     <Route path="/Ultra_row_1X9_DC/Ultra_05Bi" element={<Ultra_05Bi/>}/>

     <Route path="/Dual_125_155M_1X9" element={<Dual_125_155M_1X9/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_M13_02P" element={<Dual_155M_M13_02P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_M13_02Pi" element={<Dual_155M_M13_02Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_M85_02P" element={<Dual_155M_M85_02P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_M85_02Pi" element={<Dual_155M_M85_02Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_AM_M13" element={<Dual_155M_AM_M13/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_AM_M13i" element={<Dual_155M_AM_M13i/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_M13" element={<Dual_155M_Ax_M13/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_M13i" element={<Dual_155M_Ax_M13i/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_30P" element={<Dual_155M_Ax_30P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_30Pi" element={<Dual_155M_Ax_30Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_60P" element={<Dual_155M_Ax_60P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_60Pi" element={<Dual_155M_Ax_60Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_A0P" element={<Dual_155M_Ax_A0P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_A0Pi" element={<Dual_155M_Ax_A0Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_A2P" element={<Dual_155M_Ax_A2P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_155M_Ax_A2Pi" element={<Dual_155M_Ax_A2Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S13_20P" element={<Dual_A1_S13_20P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S13_20Pi" element={<Dual_A1_S13_20Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S13_30P" element={<Dual_A1_S13_30P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S13_30Pi" element={<Dual_A1_S13_30Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S13_60P" element={<Dual_A1_S13_60P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S13_60Pi" element={<Dual_A1_S13_60Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S15_80P" element={<Dual_A5_S15_80P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S15_80Pi" element={<Dual_A5_S15_80Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S15_A0P" element={<Dual_A1_S15_A0P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S15_A0Pi" element={<Dual_A1_S15_A0Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S15_A2P" element={<Dual_A1_S15_A2P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A1_S15_A2Pi" element={<Dual_A1_S15_A2Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S13_30P" element={<Dual_A3_S13_30P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S13_30Pi" element={<Dual_A3_S13_30Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S13_60P" element={<Dual_A3_S13_60P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S13_60Pi" element={<Dual_A3_S13_60Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S15_A0P" element={<Dual_A3_S15_A0P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S15_A0Pi" element={<Dual_A3_S15_A0Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S15_A2P" element={<Dual_A3_S15_A2P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A3_S15_A2Pi" element={<Dual_A3_S15_A2Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_M13_02P" element={<Dual_A5_M13_02P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_M13_02Pi" element={<Dual_A5_M13_02Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_M85_02P" element={<Dual_A5_M85_02P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_M85_02Pi" element={<Dual_A5_M85_02Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S13_30P" element={<Dual_A5_S13_30P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S13_30Pi" element={<Dual_A5_S13_30Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S13_60P" element={<Dual_A5_S13_60P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S13_60Pi" element={<Dual_A5_S13_60Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S15_A0P" element={<Dual_A5_S15_A0P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S15_A0Pi" element={<Dual_A5_S15_A0Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S15_A2P" element={<Dual_A5_S15_A2P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_A5_S15_A2Pi" element={<Dual_A5_S15_A2Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_M85_02P" element={<Dual_AM_M85_02P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_M85_02Pi" element={<Dual_AM_M85_02Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S13_30P" element={<Dual_AM_S13_30P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S13_30Pi" element={<Dual_AM_S13_30Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S13_60P" element={<Dual_AM_S13_60P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S13_60Pi" element={<Dual_AM_S13_60Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S15_A0P" element={<Dual_AM_S15_A0P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S15_A0Pi" element={<Dual_AM_S15_A0Pi/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S15_A2P" element={<Dual_AM_S15_A2P/>}/>
     <Route path="/Dual_125_155M_1X9/Dual_AM_S15_A2Pi" element={<Dual_AM_S15_A2Pi/>}/>
     

     <Route path="/DWDM_SFP_115M_Products" element={<DWDM_SFP_115M_Products/>}/>
     <Route path="/DWDM_SFP_115M_Products/DWDM_SFP_BOD" element={<DWDM_SFP_BOD/>}/>
     <Route path="/DWDM_SFP_115M_Products/DWDM_SFP_M13_05Bi" element={<DWDM_SFP_M13_05Bi/>}/>
     


     <Route path="/CWDW_SFP_155M_Products" element={<CWDW_SFP_155M_Products/>}/>
     <Route path="/CWDW_SFP_155M_Products/CWDW_SFP_b30D" element={<CWDW_SFP_b30D/>}/>
     <Route path="/CWDW_SFP_155M_Products/CWDW_SFP_b30Di" element={<CWDW_SFP_b30Di/>}/>
     <Route path="/CWDW_SFP_155M_Products/CWDW_SFP_b34D" element={<CWDW_SFP_b34D/>}/>
     <Route path="/CWDW_SFP_155M_Products/CWDW_SFP_b34Di" element={<CWDW_SFP_b34Di/>}/>
     <Route path="/CWDW_SFP_155M_Products/CWDW_SFP_b36D" element={<CWDW_SFP_b36D/>}/>
     <Route path="/CWDW_SFP_155M_Products/CWDW_SFP_b36Di" element={<CWDW_SFP_b36Di/>}/>
     
     <Route path="/SFP_Dual_1_25_Products" element={<SFP_Dual_1_25_Products/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_02D_1_25G" element={<Dual_02D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_02D_1_25Gi" element={<Dual_02D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_X5D_1_25G" element={<Dual_X5D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_X5D_1_25Gi" element={<Dual_X5D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_10D_1_25G" element={<Dual_10D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_10D_1_25Gi" element={<Dual_10D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_10DR_1_25G" element={<Dual_10DR_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_10DR_1_25Gi" element={<Dual_10DR_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20D_1_25G" element={<Dual_20D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20D_1_25Gi" element={<Dual_20D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20DM_1_25G" element={<Dual_20DM_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20DM_1_25Gi" element={<Dual_20DM_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20DR_1_25G" element={<Dual_20DR_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_20DR_1_25Gi" element={<Dual_20DR_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_40D_1_25G" element={<Dual_40D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_40D_1_25Gi" element={<Dual_40D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_60D_1_25G" element={<Dual_60D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_60D_1_25Gi" element={<Dual_60D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_50D_1_25G" element={<Dual_50D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_50D_1_25Gi" element={<Dual_50D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_80D_1_25G" element={<Dual_80D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_80D_1_25Gi" element={<Dual_80D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_A0D_1_25G" element={<Dual_A0D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_A0D_1_25Gi" element={<Dual_A0D_1_25Gi/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_A2D_1_25G" element={<Dual_A2D_1_25G/>}/>
     <Route path="/SFP_Dual_1_25_Products/Dual_A2D_1_25Gi" element={<Dual_A2D_1_25Gi/>}/>

     <Route path="/Products_10G_XG_XGS_PON" element={<Products_10G_XG_XGS_PON/>}/>
     <Route path="/Products_10G_XG_XGS_PON/PX5_20X" element={<PX5_20X/>}/>
     <Route path="/Products_10G_XG_XGS_PON/PX5_20Xi" element={<PX5_20Xi/>}/>
     <Route path="/Products_10G_XG_XGS_PON/PX6_20X" element={<PX6_20X/>}/>
     <Route path="/Products_10G_XG_XGS_PON/PX6_20Xi" element={<PX6_20Xi/>}/>

     
     <Route path="/EPON_Products" element={<EPON_Products/>}/>
     <Route path="/EPON_Products/EPON_10G_SFP" element={<EPON_10G_SFP/>}/>
     <Route path="/EPON_Products/EPON_10G_SFPi" element={<EPON_10G_SFPi/>}/>

     <Route path="/GPON_SFP_Products" element={<GPON_SFP_Products/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG3_20B" element={<GPON_PG3_20B/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG3_20Bi" element={<GPON_PG3_20Bi/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_20B" element={<GPON_PG4_20B/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_20Bi" element={<GPON_PG4_20Bi/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_201" element={<GPON_PG4_201/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_201i" element={<GPON_PG4_201i/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_202" element={<GPON_PG4_202/>}/>
     <Route path="/GPON_SFP_Products/GPON_PG4_203" element={<GPON_PG4_203/>}/>
     
     <Route path="/EPON_SFP_Products" element={<EPON_SFP_Products/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE3_201" element={<EPON_PE3_201/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE3_201i" element={<EPON_PE3_201i/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_201" element={<EPON_PE4_201/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_201i" element={<EPON_PE4_201i/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_202" element={<EPON_PE4_202/>}/>
     <Route path="/EPON_SFP_Products/EPON_PE4_203" element={<EPON_PE4_203/>}/>
     
     
     <Route path="/SFF_2X5_Products" element={<SFF_2X5_Products/>}/>
     <Route path="/SFF_2X5_Products/X5TR_2X5_SFF" element={<X5TR_2X5_SFF/>}/>
     <Route path="/SFF_2X5_Products/X5TR_2X5_SFFi" element={<X5TR_2X5_SFFi/>}/>

     
     <Route path="/BIDI_155M_Products" element={<BIDI_155M_Products/>}/>
     <Route path="/BIDI_155M_Products/BIDI_S35_100BX_U" element={<BIDI_S35_100BX_U/>}/>
     <Route path="/BIDI_155M_Products/BIDI_S35_100BX_Ui" element={<BIDI_S35_100BX_Ui/>}/>
     <Route path="/BIDI_155M_Products/BIDI_S35_100BX_D" element={<BIDI_S35_100BX_D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_S35_100BX_Di" element={<BIDI_S35_100BX_Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_20D" element={<BIDI_A8_35_20D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_20Di" element={<BIDI_A8_35_20Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_40D" element={<BIDI_A8_35_40D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_40Di" element={<BIDI_A8_35_40Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_60D" element={<BIDI_A8_35_60D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_35_60Di" element={<BIDI_A8_35_60Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_45_80D" element={<BIDI_A8_45_80D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_45_80Di" element={<BIDI_A8_45_80Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S45_A2D" element={<BIDI_A8_S45_A2D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S45_A2Di" element={<BIDI_A8_S45_A2Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S53_20D" element={<BIDI_A8_S53_20D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S53_20Di" element={<BIDI_A8_S53_20Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S53_40D" element={<BIDI_A8_S53_40D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S53_40Di" element={<BIDI_A8_S53_40Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S53_60D" element={<BIDI_A8_S53_60D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S53_60Di" element={<BIDI_A8_S53_60Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S54_80D" element={<BIDI_A8_S54_80D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S54_80Di" element={<BIDI_A8_S54_80Di/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S54_A2D" element={<BIDI_A8_S54_A2D/>}/>
     <Route path="/BIDI_155M_Products/BIDI_A8_S54_A2Di" element={<BIDI_A8_S54_A2Di/>}/>

     <Route path="/SFP_PLUS_BIDI_Products" element={<SFP_PLUS_BIDI_Products/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_20D" element={<BIDI_H8_C27_20D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_20Di" element={<BIDI_H8_C27_20Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_20DM" element={<BIDI_H8_C27_20DM/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_20DMi" element={<BIDI_H8_C27_20DMi/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_40D" element={<BIDI_H8_C27_40D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_40Di" element={<BIDI_H8_C27_40Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_40DM" element={<BIDI_H8_C27_40DM/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_40DMi" element={<BIDI_H8_C27_40DMi/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_60D" element={<BIDI_H8_C27_60D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_60Di" element={<BIDI_H8_C27_60Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_20D" element={<BIDI_H8_C33_20D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_20Di" element={<BIDI_H8_C33_20Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_20DM" element={<BIDI_H8_C33_20DM/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_20DMi" element={<BIDI_H8_C33_20DMi/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_40D" element={<BIDI_H8_C33_40D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_40Di" element={<BIDI_H8_C33_40Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_40DM" element={<BIDI_H8_C33_40DM/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_40DMi" element={<BIDI_H8_C33_40DMi/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_60D" element={<BIDI_H8_C33_60D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C33_60Di" element={<BIDI_H8_C33_60Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C49_80D" element={<BIDI_H8_C49_80D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C49_80Di" element={<BIDI_H8_C49_80Di/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C55_80D" element={<BIDI_H8_C55_80D/>}/>
     <Route path="/SFP_PLUS_BIDI_Products/BIDI_H8_C55_80Di" element={<BIDI_H8_C55_80Di/>}/>
     
     
     
     <Route path="/Products_Dual_SFP_155M" element={<Products_Dual_SFP_155M/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_02D" element={<Dual_155M_02D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_02Di" element={<Dual_155M_02Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_05D" element={<Dual_155M_05D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_05Di" element={<Dual_155M_05Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_M85_02D" element={<Dual_155M_M85_02D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_M85_02Di" element={<Dual_155M_M85_02Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_20D" element={<Dual_155M_S13_20D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_20Di" element={<Dual_155M_S13_20Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_30D" element={<Dual_155M_S13_30D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_30Di" element={<Dual_155M_S13_30Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_40D" element={<Dual_155M_S13_40D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_40Di" element={<Dual_155M_S13_40Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_60D" element={<Dual_155M_S13_60D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S13_60Di" element={<Dual_155M_S13_60Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_80D" element={<Dual_155M_S15_80D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_80Di" element={<Dual_155M_S15_80Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A0D" element={<Dual_155M_S15_A0D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A0Di" element={<Dual_155M_S15_A0Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A2D" element={<Dual_155M_S15_A2D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A2Di" element={<Dual_155M_S15_A2Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A4D" element={<Dual_155M_S15_A4D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A4Di" element={<Dual_155M_S15_A4Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A6D" element={<Dual_155M_S15_A6D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_A6Di" element={<Dual_155M_S15_A6Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_B0D" element={<Dual_155M_S15_B0D/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_B0Di" element={<Dual_155M_S15_B0Di/>}/>
     <Route path="/Products_Dual_SFP_155M/Dual_155M_S15_B2D" element={<Dual_155M_S15_B2D/>}/>
     <Route path="/Tunable_10G_SFP_DWDM" element={<Tunable_10G_SFP_DWDM/>}/>
     <Route path="/Products_DWDM_10G_SFP" element={<Products_DWDM_10G_SFP/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_10G_40D" element={<DWDM_10G_40D/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_10G_40Di" element={<DWDM_10G_40Di/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_10G_80D" element={<DWDM_10G_80D/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_10G_80Di" element={<DWDM_10G_80Di/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_10G_A0D" element={<DWDM_10G_A0D/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_H7_40D" element={<DWDM_H7_40D/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_H7_40Di" element={<DWDM_H7_40Di/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_H7_80D" element={<DWDM_H7_80D/>}/>
     <Route path="/Products_DWDM_10G_SFP/DWDM_H7_80Di" element={<DWDM_H7_80Di/>}/>
    
     <Route path="/XFP_DWDM_Tunable" element={<XFP_DWDM_Tunable/>}/>


     <Route path="/XFP_DWDM_Products" element={<XFP_DWDM_Products/>}/>
     <Route path="/XFP_DWDM_Products/DWDM_Dxx_40D" element={<DWDM_Dxx_40D/>}/>
     <Route path="/XFP_DWDM_Products/DWDM_Dxx_40Di" element={<DWDM_Dxx_40Di/>}/>
     <Route path="/XFP_DWDM_Products/DWDM_Dxx_80D" element={<DWDM_Dxx_80D/>}/>
     <Route path="/XFP_DWDM_Products/DWDM_Dxx_80Di" element={<DWDM_Dxx_80Di/>}/>

     
     <Route path="/XFP_CWDM_Products" element={<XFP_CWDM_Products/>}/>
     <Route path="/XFP_CWDM_Products/CWDM_Cxx_40D" element={<CWDM_Cxx_40D/>}/>
     <Route path="/XFP_CWDM_Products/CWDM_Cxx_40Di" element={<CWDM_Cxx_40Di/>}/>
     <Route path="/XFP_CWDM_Products/CWDM_Cxx_80D" element={<CWDM_Cxx_80D/>}/>
     <Route path="/XFP_CWDM_Products/CWDM_Cxx_80Di" element={<CWDM_Cxx_80Di/>}/>

     

     <Route path="/Products_CWDM_10G_SFP" element={<Products_CWDM_10G_SFP/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_08D" element={<CWDM_H7_08D/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_08Di" element={<CWDM_H7_08Di/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_40D" element={<CWDM_H7_40D/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_40Di" element={<CWDM_H7_40Di/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_80D" element={<CWDM_H7_80D/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_80Di" element={<CWDM_H7_80Di/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_b12D" element={<CWDM_H7_b12D/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_b12Di" element={<CWDM_H7_b12Di/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_b26D" element={<CWDM_H7_b26D/>}/>
     <Route path="/Products_CWDM_10G_SFP/CWDM_H7_b26Di" element={<CWDM_H7_b26Di/>}/>
     <Route path="/Products_Dual_10G_SFP" element={<Products_Dual_10G_SFP/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_M13_X2D" element={<Dual_M13_X2D/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_M13_X2Di" element={<Dual_M13_X2Di/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_M85_X3D" element={<Dual_M85_X3D/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_M85_X3Di" element={<Dual_M85_X3Di/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_M85_X3DM" element={<Dual_M85_X3DM/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_M85_X3DMi" element={<Dual_M85_X3DMi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_02D" element={<Dual_H7_02D/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_02Di" element={<Dual_H7_02Di/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_02DM" element={<Dual_H7_02DM/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_02DMi" element={<Dual_H7_02DMi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_10DQ" element={<Dual_H7_10DQ/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_10DQi" element={<Dual_H7_10DQi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_20DM" element={<Dual_H7_20DM/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_20DMi" element={<Dual_H7_20DMi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_40DM" element={<Dual_H7_40DM/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_40DMi" element={<Dual_H7_40DMi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_40D" element={<Dual_H7_S15_40D/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_40Di" element={<Dual_H7_S15_40Di/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_40DM" element={<Dual_H7_S15_40DM/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_40DMi" element={<Dual_H7_S15_40DMi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_40DQ" element={<Dual_H7_40DQ/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_40DQi" element={<Dual_H7_40DQi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_80D" element={<Dual_H7_S15_80D/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_80Di" element={<Dual_H7_S15_80Di/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_80DM" element={<Dual_H7_S15_80DM/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_80DMi" element={<Dual_H7_S15_80DMi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_80DQ" element={<Dual_H7_S15_80DQ/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_80DQi" element={<Dual_H7_S15_80DQi/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_A0D" element={<Dual_H7_S15_A0D/>}/>
     <Route path="/Products_Dual_10G_SFP/Dual_H7_S15_A0Di" element={<Dual_H7_S15_A0Di/>}/>
     <Route path="/Products_4G_SFP" element={<Products_4G_SFP/>}/>
     <Route path="/Products_4G_SFP/Dual_SFP_X1DM" element={<Dual_SFP_X1DM/>}/>
     <Route path="/Products_4G_SFP/Dual_SFP_X1DMi" element={<Dual_SFP_X1DMi/>}/>
     <Route path="/Products_6G_SFP" element={<Products_6G_SFP/>}/>
     <Route path="/Products_6G_SFP" element={<Products_6G_SFP/>}/>
     <Route path="/Products_6G_SFP/Dual_67_X3D" element={<Dual_67_X3D/>}/>
     <Route path="/Products_6G_SFP/Dual_67_X3Di" element={<Dual_67_X3Di/>}/>
     <Route path="/Products_6G_SFP/Dual_67_02D" element={<Dual_67_02D/>}/>
     <Route path="/Products_6G_SFP/Dual_67_02Di" element={<Dual_67_02Di/>}/>

     {/* FIBER OPTICAL CABLE */}
     <Route path="/AOC_SPSP" element={<AOC_SPSP/>}/>
     <Route path="/AOC_SFP28_25G" element={<AOC_SFP28_25G/>}/>
     <Route path="/Products_40G_QSFP" element={<Products_40G_QSFP/>}/>
     <Route path="/Products_40G_QSFP/QSFP_40G_QPDP" element={<QSFP_40G_QPDP/>}/>
     <Route path="/Products_40G_QSFP/QSFP_QPQP_40G" element={<QSFP_QPQP_40G/>}/>
     <Route path="/Products_40G_QSFP/QSFP_QPSP_40G" element={<QSFP_QPSP_40G/>}/>
     <Route path="/Products_100G_QSFP28" element={<Products_100G_QSFP28/>}/>


     <Route path="/DAC_10G_SFPS" element={<DAC_10G_SFPS/>}/>
     <Route path="/DAC_25G_SFP28" element={<DAC_25G_SFP28/>}/>

     <Route path="/DAC_40G_QSFP_Products" element={<DAC_40G_QSFP_Products/>}/>
     <Route path="/DAC_40G_QSFP_Products/QSFP_40G_QPQP" element={<QSFP_40G_QPQP/>}/>
     <Route path="/DAC_40G_QSFP_Products/QSFP_40G_QPSP" element={<QSFP_40G_QPSP/>}/>
     

     <Route path="/DAC_100G_QSFP_Products" element={<DAC_100G_QSFP_Products/>}/>
     <Route path="/DAC_100G_QSFP_Products/QSFP28_100G_QPQP" element={<QSFP28_100G_QPQP/>}/>
     <Route path="/DAC_100G_QSFP_Products/QSFP28_100G_QPSP" element={<QSFP28_100G_QPSP/>}/>
     
     {/* Armored_Breakout_Cable */}
     <Route path="/Armored_Breakout_Cable" element={<Armored_Breakout_Cable/>}/>

     {/* Breakout_Cable */}
     <Route path="/Breakout_Cable" element={<Breakout_Cable/>}/>

     {/* Energy_Chain_Cable */}
     <Route path="/Energy_Chain_Cable" element={<Energy_Chain_Cable/>}/>
<<<<<<< HEAD
     
=======

     {/* General_Patch_Cord */}
     <Route path="/General_Patch_Cord" element={<General_Patch_Cord/>}/>

     {/* High_Strength_And_Suppleness */}
     <Route path="/High_Strength_And_Suppleness" element={<High_Strength_And_Suppleness/>}/>

     {/* Mini_Distribution_Cable */}     
     <Route path="/Mini_Distribution_Cable" element={<Mini_Distribution_Cable/>}/>

     {/* MPO_PatchCord */}
     
     <Route path="/MPO_PatchCord" element={<MPO_PatchCord/>}/>
>>>>>>> edc9132db0de74404b78ea3bb0393f9e661a601b

    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
