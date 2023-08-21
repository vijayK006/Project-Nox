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

import productImg1 from '../../img/products/25G SFP28/SFP28Img.jpg';

import { TiTickOutline } from 'react-icons/ti';

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP28_SR_Products = () => {
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


<h2 className='pt-5'>25G SFP28 SR</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_SR_Products/SFP28_25G_SR" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 SR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM4 100M, DDM

</h5>
<p>Part Number : NXO-N7-M85-X1DQ</p>
<h4>Feature's</h4>
<p>Hot Pluggable</p>
<p>850nm VCSEL laser transmitter</p>
<p>Maximum Power consumption 1.0W</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_SR_Products/SFP28_25G_SR_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 SR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM4 100M, DDM

</h5>
<p>Part Number : NXO-N7-M85-X1DQi</p>
<h4>Feature's</h4>
<p>Hot Pluggable</p>
<p>850nm VCSEL laser transmitter</p>
<p>Maximum Power consumption 1.0W</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_SR_Products/SFP28_25G_eSR" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 eSR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM4 300M, DDM
</h5>
<p>Part Number : NXO-N7-M85-X3DQ</p>
<h4>Feature's</h4>
<p>Compliant with CPRI option10</p>
<p>Data Rate up to 25.78Gbps</p>
<p>Duplex LC connector</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_SR_Products/SFP28_25G_eSR_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 eSR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM4 300M, DDM
</h5>
<p>Part Number : NXO-N7-M85-X3DQi</p>
<h4>Feature's</h4>
<p>Compliant with CPRI option10</p>
<p>Data Rate up to 25.78Gbps</p>
<p>Duplex LC connector</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_SR_Products/SFP28_25G_eSR_DuleRate" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G / 25G SFP28 eSR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM4 300M, DDM, Dual-Rate
</h5>
<p>Part Number : NXO-N7-M85-X3DR</p>
<h4>Feature's</h4>
<p>Compliant with CPRI option10</p>
<p>Compliant with SFF-8402 SFP28 MSA</p>
<p>850nm VCSEL laser transmitter</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_SR_Products/SFP28_25G_eSR_DuleRate_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G / 25G SFP28 eSR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM4 300M, DDM, Dual-Rate
</h5>
<p>Part Number : NXO-N7-M85-X3DRi</p>
<h4>Feature's</h4>
<p>Compliant with CPRI option10</p>
<p>Compliant with SFF-8402 SFP28 MSA</p>
<p>850nm VCSEL laser transmitter</p>
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

export default SFP28_SR_Products;