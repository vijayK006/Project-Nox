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

import productImg1 from '../../img/products/2.5_SFP/Dual_02D.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/10SFP+/CWDM_1.jpg'
import productImg3 from '../../img/products/10SFP+/CWDM_1.jpg'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'
import productImg5 from '../../img/products/125M 155M  SFP/Dual_S15_155M.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_CWDM_10G_SFP = () => {
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


<h2 className='pt-5'>10G SFP+ CWDM</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_08D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1270~1610nm DFB, SMF 8dB(10KM), DDM


</h5>
<p>Part Number : NXO-H7-Cxx-b08D</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_08Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1270~1610nm DFB, SMF 8dB(10KM), DDM


</h5>
<p>Part Number : NXO-H7-Cxx-b08Di</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 40KM, DDM



</h5>
<p>Part Number : NXO-H7-Cxx-40D</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 40KM, DDM



</h5>
<p>Part Number : NXO-H7-Cxx-40Di</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 80KM, DDM


</h5>
<p>Part Number : NXO-H7-Cxx-80D</p>


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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 80KM, DDM


</h5>
<p>Part Number : NXO-H7-Cxx-80Di</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_b12D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1270~1450nm DFB, SMF 12dB(20KM), DDM

</h5>
<p>Part Number :NXO-H7-Cxx-b12D</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_b12Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1270~1450nm DFB, SMF 12dB(20KM), DDM

</h5>
<p>Part Number :NXO-H7-Cxx-b12Di</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_b26D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 26dB, DDM


</h5>
<p>Part Number : NXO-H7-Cxx-b26D</p>

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
        <Link to="/Products_CWDM_10G_SFP/CWDM_H7_b26Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 26dB, DDM


</h5>
<p>Part Number : NXO-H7-Cxx-b26Di</p>

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

export default Products_CWDM_10G_SFP;