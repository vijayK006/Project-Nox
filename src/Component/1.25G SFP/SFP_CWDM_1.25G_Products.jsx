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

import productImg1 from '../../img/products/2.5_SFP/CWDM_2.5G.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP_CWDM_1_25G_Products = () => {
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


<h2 className='pt-5'>1.25G SFP CWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_CWDM_1_25G_Products/CWDM_19D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>

  1.25G SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 19dB(40KM), DDM

</h5>

<h4>Feature's</h4> 
<p>Link budget 19dB over SM fiber</p>
<p>18 CWDM Wavelength 1270~1610nm available</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_CWDM_1_25G_Products/CWDM_24D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 24dB(80KM), DDM
</h5>

<h4>Feature's</h4> 
<p>Link budget 24dB over SM fiber</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>Hot Pluggable</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_CWDM_1_25G_Products/CWDM_32D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 32dB(120KM), DDM
</h5>

<h4>Feature's</h4> 
<p>Link budget 32dB over SM fiber</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>Hot Pluggable</p>
<p>Compliant with IEEE802.3z Gigabit Ethernet</p>


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

export default SFP_CWDM_1_25G_Products;