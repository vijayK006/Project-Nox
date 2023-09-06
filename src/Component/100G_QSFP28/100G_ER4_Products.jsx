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

import productImg1 from '../../img/products/100G QSFP28/100G_ER4.jpg';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const ER4_100G_Products = () => {
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


<h2 className='pt-5'>QSFP28-100G-ER4</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/ER4_100G_Products/ER4_Single_rate_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 ER4 Transceiver
Hot Pluggable, Duplex LC, LAN-WDM DFB, SMF 40KM, DDM
</h5>
<p>Part Number : NXOQ28-K7-L13-40D</p>
<h4>Feature's</h4>
<p>APD receiver</p>
<p>Duplex LC connector</p>
<p>O-Band LWDM DFB transmitter</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/ER4_100G_Products/ER4_40Di_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 ER4 Transceiver
Hot Pluggable, Duplex LC, LAN-WDM DFB, SMF 40KM, DDM
</h5>
<p>Part Number : NXOQ28-K7-L13-40Di</p>
<h4>Feature's</h4>
<p>Data Rate 25.78125Gbps per Lane</p>
<p>LAN-WDM DFB transmitter</p>
<p>Compliant with SFF-8665 QSFP28 MSA</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/ER4_100G_Products/ER4_VNTP_Media_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 ER4 Transceiver
Hot Pluggable, Duplex LC, LAN-WDM DFB, SMF 40KM, DDM
</h5>
<p>Part Number : NXOQ28-K7-L13-40D(Media corporation)</p>
<h4>Feature's</h4>
<p>Data Rate 25.78125Gbps per Lane</p>
<p>Built-in digital diagnostic function</p>
<p>Link distance 40km over SM fiber</p>
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

export default ER4_100G_Products;