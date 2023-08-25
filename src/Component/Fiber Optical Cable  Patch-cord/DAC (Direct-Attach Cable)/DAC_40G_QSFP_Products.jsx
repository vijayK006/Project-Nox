import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '../../../img/products/productbanner.jpg'
import bannerImg2 from '../../../img/products/productbanner2.jpg'
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';
import EnquireForm from '../../../Component/EnquireForm';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import productImg1 from '../../../img/products/Fiber Optical Cable/DAC/40G_QPQP.jpg';
import productImg2 from '../../../img/products/Fiber Optical Cable/DAC/40G_QPSP.jpg';

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const DAC_40G_QSFP_Products = () => {
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


<h2 className='pt-5'>40G QSFP+ DAC</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/DAC_40G_QSFP_Products/QSFP_40G_QPQP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  40G QSFP+ Direct Attach Cable (DAC)
Hot Pluggable, Twinax Copper Cables, Passive 0.5~7M
</h5>
<p>Part Number : NXODAC-40G-QPQP-Pxx-xx</p>

<h4>Feature's</h4> 

<p>Link distance up to 7m
</p>

<p>Enhanced EMI / EMC performance
</p>
<p>4 Independent Duplex Lanes
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/DAC_40G_QSFP_Products/QSFP_40G_QPSP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  40G QSFP+ to 4 x SFP+ Passive Direct Attach Cable (DAC) Hot Pluggable, Copper Cable, 1M~5M
</h5>
<p>Part Number : NXODAC-40G-QPSP-Pxx-yy</p>

<h4>Feature's</h4> 

<p>RoHS Compliant</p>
<p>Low Near-End crosstalk</p>
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

export default DAC_40G_QSFP_Products;