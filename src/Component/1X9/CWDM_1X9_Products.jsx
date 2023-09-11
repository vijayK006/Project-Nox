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

import productImg1 from '../../img/products/1X9/1X9_CWDW.jpg'
import productImg1_2 from '../../img/products/1X9/ultra.jpg'
import productImg1_3 from '../../img/products/1X9/155M_dual_3.jpg'
import productImg1_4 from '../../img/products/1X9/155M_dual_4.jpg'
import productImg1_5 from '../../img/products/1X9/155M_dual_5.jpg'

import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const CWDM_1X9_Products = () => {
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


<h2 className='pt-5'>125/155M 1X9 CWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_b31P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-Ax-Cxx-b31P</p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_b31Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-Ax-Cxx-b31Pi</p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_A3_b31P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-A3-Cxx-b31P </p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_A3_b31Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-A3-Cxx-b31Pi</p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_AM_b31P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-Ax-Cxx-b31P </p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_AM_b31Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-Ax-Cxx-b31Pi </p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


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

export default CWDM_1X9_Products;