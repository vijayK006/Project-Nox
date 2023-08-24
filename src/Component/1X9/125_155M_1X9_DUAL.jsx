import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '../../img/products/productbanner.jpg'
import bannerImg2 from '../../img/products/productbanner2.jpg'
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import EnquireForm from '../EnquireForm';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import productImg1 from '../../img/products/1X9/155M_dual.jpg'
import productImg1_2 from '../../img/products/1X9/ultra.jpg'
import productImg1_3 from '../../img/products/1X9/155M_dual_3.jpg'
import productImg1_4 from '../../img/products/1X9/155M_dual_4.jpg'
import productImg1_5 from '../../img/products/1X9/155M_dual_5.jpg'
import productImg1_6 from '../../img/products/1X9/AM_02P.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Dual_125_155M_1X9 = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>
<Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper pt-lg-5" style={{borderRadius:"10px"}}
      >
        <SwiperSlide>
          <img src={bannerImg} className='banner_img2'/>
          <p className='banner-heading'>Find the Right Product Quicker</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={bannerImg2} className='banner_img2'/>
          <p className='banner-heading'>Revolute Your Wireless Experience with Wi-Fi Solution</p>
        </SwiperSlide>
      
      </Swiper>


<h2 className='pt-5'>125/155M 1X9 DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_M13_02P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100FX Transceiver
Duplex SC, 1310nm FP, MMF 2KM, LVPECL / PECL Signal Detection


</h5>
<p>Part Number : NXO-A1-M13-02P</p>
<h4>Feature's</h4>
<p>1310nm FP laser transmitter</p>
<p>Duplex SC optical connector</p>
<p>Single 3.3V or 5V Power Supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_M13_02Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100FX Transceiver
Duplex SC, 1310nm FP, MMF 2KM, LVPECL / PECL Signal Detection


</h5>
<p>Part Number : NXO-A1-M13-02Pi</p>
<h4>Feature's</h4>
<p>1310nm FP laser transmitter</p>
<p>Duplex SC optical connector</p>
<p>Single 3.3V or 5V Power Supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_M85_02P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100SX Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVPECL / PECL Signal Detection



</h5>
<p>Part Number : NXO-A1-M85-02P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>850nm VCSEL laser transmitter</p>
<p>Single 3.3V or 5V Power Supply
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_M85_02Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100SX Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVPECL / PECL Signal Detection



</h5>
<p>Part Number : NXO-A1-M85-02Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>850nm VCSEL laser transmitter</p>
<p>Single 3.3V or 5V Power Supply
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_AM_M13" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100FX Transceiver
Duplex Metal ST, 1310nm FP, MMF 2KM, LVPECL / PECL Signal Detection




</h5>
<p>Part Number : NXO-AM-M13-02P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>1310nm FP laser transmitter
</p>

<p>Single 3.3V or 5V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_AM_M13i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100FX Transceiver
Duplex Metal ST, 1310nm FP, MMF 2KM, LVPECL / PECL Signal Detection




</h5>
<p>Part Number : NXO-AM-M13-02Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>1310nm FP laser transmitter
</p>

<p>Single 3.3V or 5V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_M13" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100FX Transceiver
Duplex SC/ST/FC, 1310nm FP, Multi Mode, 2KM
</h5>
<p>Part Number : NXO-Ax-M13-02P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_M13i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100FX Transceiver
Duplex SC/ST/FC, 1310nm FP, Multi Mode, 2KM
</h5>
<p>Part Number : NXO-Ax-M13-02Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_30P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-Ax-S13-30P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_30Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-Ax-S13-30Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
 
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_60P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM

</h5>
<p>Part Number : NXO-Ax-S13-60P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_60Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM

</h5>
<p>Part Number : NXO-Ax-S13-60Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_A0P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection


</h5>
<p>Part Number : NXO-Ax-S15-A0P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>


<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_A0Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection


</h5>
<p>Part Number : NXO-Ax-S15-A0Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>


<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_A2P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection



</h5>
<p>Part Number : NXO-Ax-S15-A2P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_Ax_A2Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection



</h5>
<p>Part Number : NXO-Ax-S15-A2Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S13_20P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100LX20 Transceiver
Duplex SC, 1310nm FP, SMF 20KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A1-S13-20P</p>
<h4>Feature's</h4>

<p>Duplex SC optical connector</p>
<p>Wave Solderable and Aqueous Washable</p>
<p>Link distance 20km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S13_20Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100LX20 Transceiver
Duplex SC, 1310nm FP, SMF 20KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A1-S13-20Pi</p>
<h4>Feature's</h4>

<p>Duplex SC optical connector</p>
<p>Wave Solderable and Aqueous Washable</p>
<p>Link distance 20km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S13_30P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-A1-S13-30P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface</p>
<p>LVPECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S13_30Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-A1-S13-30Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface</p>
<p>LVPECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S13_60P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-A1-S13-60P</p>
<h4>Feature's</h4>

<p>Single 3.3V Power Supply</p>
<p>Industry Standard 1x9 Footprint</p>
<p>RoHS Compliant</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S13_60Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-A1-S13-60Pi</p>
<h4>Feature's</h4>

<p>Single 3.3V Power Supply</p>
<p>Industry Standard 1x9 Footprint</p>
<p>RoHS Compliant</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S15_80P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9 100BASE-ZX Transceiver
Duplex Plastic ST, 1550nm DFB, SMF 80KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A5-S15-80P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>1550nm DFB laser transmitter</p>
<p>Link distance 80km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S15_80Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9 100BASE-ZX Transceiver
Duplex Plastic ST, 1550nm DFB, SMF 80KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A5-S15-80Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>1550nm DFB laser transmitter</p>
<p>Link distance 80km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S15_A0P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection

</h5>
<p>Part Number : NXO-A1-S15-A0P</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>
<p>1550nm DFB laser transmitter</p>
<p>Link distance 100km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S15_A0Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection

</h5>
<p>Part Number : NXO-A1-S15-A0Pi</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>
<p>1550nm DFB laser transmitter</p>
<p>Link distance 100km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S15_A2P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection

</h5>
<p>Part Number : NXO-Ax-S15-A2P</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>
<p>1550nm DFB laser transmitter</p>
<p>Link distance 120km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A1_S15_A2Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection

</h5>
<p>Part Number : NXO-Ax-S15-A2Pi</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>
<p>1550nm DFB laser transmitter</p>
<p>Link distance 120km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S13_30P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-A3-S13-30P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S13_30Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-A3-S13-30Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S13_60P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-A3-S13-60P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>LVPECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S13_60Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-A3-S13-60Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>LVPECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S15_A0P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A3-S15-A0P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>LVPECL / PECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S15_A0Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A3-S15-A0Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>LVPECL / PECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S15_A2P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A3-S15-A2P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Link distance 120km over SM fiber
</p>
<p>LVPECL / PECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A3_S15_A2Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A3-S15-A2Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Link distance 120km over SM fiber
</p>
<p>LVPECL / PECL Signal Detection Output</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_M13_02P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100FX Transceiver
Duplex SC/ST/FC, 1310nm FP, Multi Mode, 2KM
</h5>
<p>Part Number : NXO-A5-M13-02P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_M13_02Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100FX Transceiver
Duplex SC/ST/FC, 1310nm FP, Multi Mode, 2KM
</h5>
<p>Part Number : NXO-A5-M13-02Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_M85_02P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100SX Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A5-M85-02P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>850nm VCSEL laser transmitter
</p>
<p>Single 3.3V or 5V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_M85_02Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100SX Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-A5-M85-02Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>850nm VCSEL laser transmitter
</p>
<p>Single 3.3V or 5V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S13_30P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-A5-S13-30P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S13_30Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-A5-S13-30Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S13_60P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-A5-S13-60P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S13_60Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-A5-S13-60Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S15_A0P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection


</h5>
<p>Part Number : NXO-A5-S15-A0P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>


<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S15_A0Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection


</h5>
<p>Part Number : NXO-A5-S15-A0Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>


<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S15_A2P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection



</h5>
<p>Part Number : NXO-A5-S15-A2P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_A5_S15_A2Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection



</h5>
<p>Part Number : NXO-A5-S15-A2Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_M85_02P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_6} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100SX Transceiver
Duplex Metal ST, 850nm VCSEL, MMF 2KM, LVPECL / PECL Signal Detection </h5>
<p>Part Number : NXO-AM-M85-02P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Link distance 2km over MM fiber</p>
<p>LVPECL/ PECL Signal Detection Output </p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_M85_02Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_6} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100SX Transceiver
Duplex Metal ST, 850nm VCSEL, MMF 2KM, LVPECL / PECL Signal Detection </h5>
<p>Part Number : NXO-AM-M85-02Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Link distance 2km over MM fiber</p>
<p>LVPECL/ PECL Signal Detection Output </p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S13_30P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-AM-S13-30P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S13_30Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 30KM
</h5>
<p>Part Number : NXO-AM-S13-30Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S13_60P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-AM-S13-60P</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S13_60Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>125/155Mbps 1x9-100LX Transceiver
Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM
</h5>
<p>Part Number : NXO-AM-S13-60Pi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>

<p>Duplex SC/ST/FC optical interface
</p>
<p>Single 3.3V Power Supply

</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S15_A0P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection

</h5>
<p>Part Number : NXO-AM-S15-A0P</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>

<p>Link distance 100km over SM fiber
</p>
<p>Wave Solderable and Aqueous Washable
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S15_A0Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100ZX100 Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 100KM, LVPECL / PECL Signal Detection

</h5>
<p>Part Number : NXO-AM-S15-A0Pi</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>

<p>Link distance 100km over SM fiber
</p>
<p>Wave Solderable and Aqueous Washable
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S15_A2P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-AM-S15-A2P</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>

<p>Link distance 120km over SM fiber
</p>
<p>Wave Solderable and Aqueous Washable
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_AM_S15_A2Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100EZX Transceiver
Duplex SC/FC/ST, 1550nm DFB, SMF 120KM, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO-AM-S15-A2Pi</p>
<h4>Feature's</h4>

<p>LVPECL / PECL Signal Detection Output</p>

<p>Link distance 120km over SM fiber
</p>
<p>Wave Solderable and Aqueous Washable
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
      </div>
</div>

<EnquireForm/>

<Footer/>
    </>
  )
}

export default Dual_125_155M_1X9;