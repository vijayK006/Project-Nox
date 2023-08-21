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

import productImg1 from '../../img/products/2.5_SFP/CWDM_2.5G.jpg'
import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_SFP_CWDM = () => {
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


<h2 className='pt-5'>2.5 SFP CWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>

  2.5G SFP OC-48 / STM-16 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 20dB(40KM), DDM
</h5>
<p>Part Number : NXO-E7-Cxx-b20D</p>
<h4>Feature's</h4> 

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>

  2.5G SFP OC-48 / STM-16 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 20dB(40KM), DDM
</h5>
<p>Part Number : NXO-E7-Cxx-b20Di</p>
<h4>Feature's</h4> 

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b26D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 26dB(80KM), DDM



</h5>
<p>Part Number : NXO-E7-Cxx-b26D</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b26Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 26dB(80KM), DDM



</h5>
<p>Part Number : NXO-E7-Cxx-b26Di</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b30D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 30dB(100KM), DDM




</h5>
<p>Part Number : NXO-E7-Cxx-b30D</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b30Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 30dB(100KM), DDM




</h5>
<p>Part Number : NXO-E7-Cxx-b30Di</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b30DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 30dB(100KM), DDM, Multi-Rate


</h5>
<p>Part Number : NXO-E7-Cxx-b30D</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b30DMi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 30dB(100KM), DDM, Multi-Rate


</h5>
<p>Part Number : NXO-E7-Cxx-b30Di</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b26DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 26dB(80KM), DDM, Multi-Rate



</h5>
<p>Part Number : NXO-E7-Cxx-b26DM</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_CWDM/CWDM_b26DMi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 26dB(80KM), DDM, Multi-Rate



</h5>
<p>Part Number : NXO-E7-Cxx-b26DMi</p>
<h4>Feature's</h4>

<p>Link budget 30dB over SM fiber at 2.5G
</p>
<p>Link distance 100km over SM fiber for 1470~1610nm
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

export default Products_SFP_CWDM;