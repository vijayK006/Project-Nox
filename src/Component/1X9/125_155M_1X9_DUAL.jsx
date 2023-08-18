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

import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

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


<h2 className='pt-5'>125 155M 1X9 DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_125_155M_1X9/Dual_155M_M13_02P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>125M / 155M 1X9-100FX Transceiver
Duplex SC, 1310nm FP, MMF 2KM, LVPECL / PECL Signal Detection


</h5>

<h4>Feature's</h4>
<p>Industry Standard 1x9 Footprint</p>
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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>850nm VCSEL laser transmitter</p>
<p>Duplex Plastic ST connector</p>
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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>1310nm FP laser transmitter
</p>
<p>Duplex Metal ST optical connector
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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>
1310nm FP laser transmitter and PIN-TIA receiver.


</p>
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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>
1310nm FP laser transmitter and PIN-TIA receiver.


</p>
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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>
1310nm FP laser transmitter and PIN-TIA receiver.


</p>
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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>
1550nm DFB laser transmitter



</p>

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

<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>
1550nm DFB laser transmitter



</p>

<p>Duplex SC/ST/FC optical connector

</p>
<p>RoHS Compliant


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