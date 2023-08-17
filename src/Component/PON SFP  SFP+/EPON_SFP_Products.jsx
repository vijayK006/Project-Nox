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

import productImg1 from '../../img/products/PON SFP  SFP+/GPON_PG3_20BImg.jpg';
import productImg2 from '../../img/products/PON SFP  SFP+/GPON_PG4_20B.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg3 from '../../img/products/1.25G SFP/SFP_Dual_50D.jpg'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const EPON_SFP_Products = () => {
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


<h2 className='pt-5'>1.25G EPON SFP</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE3_201" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  EPON ONU PX20+ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1310nm FP / Rx1490nm PIN-TIA, SMF 20KM, DDM
</h5>

<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Industrial temperature -40~85°C available</p>
<p>Link distance 20km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE4_201" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  EPON OLT PX20+ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM
</h5>

<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex SC/UPC connector</p>
<p>Link distance 20km over SM fiber</p>
<p>1.25 Gbps Burst mode receiver</p>


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

export default EPON_SFP_Products;