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

import productImg1 from '../../img/products/1X9/ultra.jpg'
import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Ultra_row_1X9_DC = () => {
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


<h2 className='pt-5'>Ultra-Low Data-Rate 1X9</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_02B" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVTTL / TTL Signal Detection

</h5>
<p>Part Number : NXO1X9-05-M85-02B</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_02Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVTTL / TTL Signal Detection

</h5>
<p>Part Number : NXO1X9-05-M85-02Bi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_05B" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 1310nm FP, MMF 5KM, LVTTL / TTL Signal Detection


</h5>
<p>Part Number : NXO1X9-05-M13-05B</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_05Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 1310nm FP, MMF 5KM, LVTTL / TTL Signal Detection


</h5>
<p>Part Number : NXO1X9-05-M13-05Bi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply
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

export default Ultra_row_1X9_DC;