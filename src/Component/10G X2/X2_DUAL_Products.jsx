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

import productImg1 from '../../img/products/10G X2/10G_X2Img.jpg'
import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { TiTickOutline } from 'react-icons/ti';

const X2_DUAL_Products = () => {
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


<h2 className='pt-5'>10G X2 Dual</h2>

      <div className='row pt-5  pb-5'>

       

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/X2_DUAL_Products/X2_10G_LR" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G X2-LR Transceiver
Hot Pluggable, Duplex SC, 1310nm DFB, Single Mode, 10KM, DDM
</h5>
<p>Part Number : NXO-H1-S13-10D</p>
<h4>Feature's</h4>
<p>Duplex SC connector</p>
<p>Support DDM function</p>
<p>Compliant to X2 MSA</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/X2_DUAL_Products/X2_10G_ER" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G X2-ER Transceiver
Hot Pluggable, Duplex SC, 1550nm EA-DFB, Single Mode, 40KM, DDM
</h5>
<p>Part Number : NXO-H1-S15-40D</p>
<h4>Feature's</h4>
<p>Duplex SC connector</p>
<p>Support DDM function</p>
<p>Compliant to X2 MSA</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/X2_DUAL_Products/X2_10G_ZR" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G X2-ZR Transceiver
Hot Pluggable, Duplex SC, 1550nm EA-DFB, Single Mode, 80KM, DDM
</h5>
<p>Part Number : NXO-H1-S15-80D</p>
<h4>Feature's</h4>
<p>Cooled 1550nm EA-DFB transmitter</p>
<p>Support DDM function</p>
<p>Compliant to X2 MSA</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/X2_DUAL_Products/X2_10G_SR" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G CFP2 to QSFP28 Adapter Module, Dual-Rate
</h5>
<p>Part Number : NXO-H1-M85-X3D</p>
<h4>Feature's</h4>
<p>Hot Pluggable</p>
<p>1 port QSFP28 TX&RX</p>
<p>RoHS compliant</p>
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

export default X2_DUAL_Products;