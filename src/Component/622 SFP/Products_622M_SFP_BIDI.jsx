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

import productImg1 from '../../img/products/622M_SFP/622_BIDI.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/10SFP+/CWDM_1.jpg'
import productImg3 from '../../img/products/10SFP+/CWDM_1.jpg'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'
import productImg5 from '../../img/products/125M 155M  SFP/Dual_S15_155M.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_622M_SFP_BIDI = () => {
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


<h2 className='pt-5'>622M SFP BIDI</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_BIDI/BIDI_622M_S35" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 IR-1 / STM-4 S4.1 BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 20KM, DDM



</h5>
<p>Part Number : NXOSFP-B8-S35-20D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_BIDI/BIDI_622M_S35i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 IR-1 / STM-4 S4.1 BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 20KM, DDM



</h5>
<p>Part Number : NXOSFP-B8-S35-20Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_BIDI/BIDI_622M_S53" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 IR-2 / STM-4 S4.2 BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 20KM, DDM




</h5>
<p>Part Number : NXOSFP-B8-S53-20D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_BIDI/BIDI_622M_S53i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 IR-2 / STM-4 S4.2 BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 20KM, DDM




</h5>
<p>Part Number : NXOSFP-B8-S53-20Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


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

export default Products_622M_SFP_BIDI;