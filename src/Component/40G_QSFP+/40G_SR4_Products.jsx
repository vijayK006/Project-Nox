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

import productImg1 from '../../img/products/40G_eSR4/eSR4_1.jpg'


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SR4_40G_Products = () => {
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


<h2 className='pt-5'>QSFP+ 40G-SR4</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SR4_40G_Products/SR4_X1D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
 
  40G QSFP+ SR4 Transceiver Hot Pluggable, MPO / MTP, 850nm VCSEL, MMF 100M, DDM


</h5>

<p>Part Number : NXOQFP-I9-M85-X1D</p>

<h4>Feature's</h4> 
<p>Support InfiniBand QDR
</p>
<p>Hot Pluggable
</p>

<p>MPO-12 receptacle connector

</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SR4_40G_Products/SR4_X1Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
 
  40G QSFP+ SR4 Transceiver Hot Pluggable, MPO / MTP, 850nm VCSEL, MMF 100M, DDM
</h5>

<p>Part Number : NXOQFP-I9-M85-X1Di</p>

<h4>Feature's</h4> 
<p>Support InfiniBand QDR
</p>
<p>Hot Pluggable
</p>

<p>MPO-12 receptacle connector

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

export default SR4_40G_Products;