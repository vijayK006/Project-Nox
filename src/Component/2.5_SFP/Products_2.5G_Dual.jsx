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

import productImg1 from '../../img/products/2.5_SFP/Dual_1.jpg'
import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'
import productImg1_3 from '../../img/products/2.5_SFP/Dual_3.jpg'

import productImg2 from '../../img/products/2.5_SFP/Dual_02D.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_2point5_Dual = () => {
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


<h2 className='pt-5'>2.5 SFP Dual</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_X3D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5> 
2.5G SFP OC-48 / STM-16 Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 300M, DDM
</h5>
<p>Part Number : NXOSFP-E7-M85-X3D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply
</p>


<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_X3Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5> 
2.5G SFP OC-48 / STM-16 Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 300M, DDM
</h5>
<p>Part Number : NXOSFP-E7-M85-X3Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply
</p>


<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_X3DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 / STM-16 Multi-Rate Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 300M, DDM




</h5>
<p>Part Number : NXOSFP-E7-M85-X3DM</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>


<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_X3DMi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 / STM-16 Multi-Rate Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 300M, DDM




</h5>
<p>Part Number : NXOSFP-E7-M85-X3DMi</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>


<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 SR / STM-16 I-16 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 2KM, DDM





</h5>
<p>Part Number : NXOSFP-E7-S13-02D</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>Duplex LC connector

</p>

<p>RoHS Compliant
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_02Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 SR / STM-16 I-16 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 2KM, DDM





</h5>
<p>Part Number : NXOSFP-E7-S13-02Di</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>Duplex LC connector

</p>

<p>RoHS Compliant
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
    
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 IR-1 / STM-16 S16.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM



</h5>
<p>Part Number : NXOSFP-E7-S13-20D</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 IR-1 / STM-16 S16.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM



</h5>
<p>Part Number : NXOSFP-E7-S13-20Di</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S13_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-1 / STM-16 L16.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 40KM, DDM




</h5>
<p>Part Number : NXOSFP-E7-S13-40D</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S13_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-1 / STM-16 L16.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 40KM, DDM




</h5>
<p>Part Number : NXOSFP-E7-S13-40Di</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S13_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-1 / STM-16 L16.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 60KM, DDM





</h5>
<p>Part Number : NXOSFP-E7-S13-60D</p>
<h4>Feature's</h4>
<p>1310nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S13_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-1 / STM-16 L16.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 60KM, DDM





</h5>
<p>Part Number : NXOSFP-E7-S13-60Di</p>
<h4>Feature's</h4>
<p>1310nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 40KM, DDM






</h5>
<p>Part Number : NXOSFP-E7-S15-40D</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 40KM, DDM






</h5>
<p>Part Number : NXOSFP-E7-S15-40Di</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM







</h5>
<p>Part Number : NXOSFP-E7-S15-80D</p>
<h4>Feature's</h4>

<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM







</h5>
<p>Part Number : NXOSFP-E7-S15-80Di</p>
<h4>Feature's</h4>

<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A0D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM








</h5>
<p>Part Number : NXOSFP-E7-S15-A0D</p>
<h4>Feature's</h4>
<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A0Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM








</h5>
<p>Part Number : NXOSFP-E7-S15-A0Di</p>
<h4>Feature's</h4>
<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A0DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM, Multi-Rate









</h5>
<p>Part Number : NXOSFP-E7-S15-A0DM</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A0DMi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM, Multi-Rate
</h5>
<p>Part Number : NXOSFP-E7-S15-A0DMi</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A2D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM


</h5>
<p>Part Number : NXOSFP-E7-S15-A2D</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A2Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM


</h5>
<p>Part Number : NXOSFP-E7-S15-A2Di</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A2DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM, Multi-Rate



</h5>
<p>Part Number : NXOSFP-E7-S15-A2DM</p>
<h4>Feature's</h4>

<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_2point5_Dual/Dual_S15_A2DMi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM, Multi-Rate



</h5>
<p>Part Number : NXOSFP-E7-S15-A2DMi</p>
<h4>Feature's</h4>

<p>1550nm DFB laser transmitter

</p>

<p>Duplex LC connector

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

export default Products_2point5_Dual;