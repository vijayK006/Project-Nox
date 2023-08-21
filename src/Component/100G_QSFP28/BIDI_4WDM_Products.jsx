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

import productImg1 from '../../img/products/100G QSFP28/4DWM_20.png';
import productImg2 from '../../img/products/100G QSFP28/4DWM_20e.png';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const BIDI_4WDM_Products = () => {
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


<h2 className='pt-5'>QSFP28-100G-BIDI-4WDM-20</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_4WDM_Products/L12_4WDM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 BIDI 4WDM-20 Transceiver
Hot Pluggable, Bidi LC, LAN-WDM
Tx 1273.55~1286.66nm DFB / Rx 1295.56~1309.14nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXO-K8-L13-20De</p>
<h4>Feature's</h4>
<p>O-Band LWDM DFB transmitter</p>
<p>Single 3.3V power supply</p>
<p>Operating Temperature -20~85°C</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_4WDM_Products/L13_4WDM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 BIDI 4WDM-20 Transceiver
Hot Pluggable, Bidi LC, LAN-WDM
Tx 1295.56~1309.14nm DFB / Rx 1273.55~1286.66nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXO-K8-L12-20De</p>
<h4>Feature's</h4>
<p>Compatible with 4WDM-20 MSA</p>
<p>Simplex LC connector</p>
<p>Operating Temperature -20~85°C</p>
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

export default BIDI_4WDM_Products;