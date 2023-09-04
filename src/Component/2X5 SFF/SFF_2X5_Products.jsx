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

import productImg1 from '../../img/products/2X5 SFF/2X5_SFF_img.jpg'


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFF_2X5_Products = () => {
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


<h2 className='pt-5'>125M/1.25G 2X5 SFF</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFF_2X5_Products/X5TR_2X5_SFF" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5> 
  125M / 1.25G 2x5 SFF 100BASE-SX /1000BASE-SX Dual-Rate Transceiver Duplex LC, 850nm VCSEL, MMF OM2 2KM(100SX) / 550M(1000SX) 
</h5>
<p>Part Number : NXOSF1-C7-M85-X5TR</p>
<h4>Feature's</h4> 
<p>LVTTL Signal Detection Output
</p>


<p>Wave Solderable and Aqueous Washable

</p>
<p>Duplex LC connector
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFF_2X5_Products/X5TR_2X5_SFFi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5> 
  125M / 1.25G 2x5 SFF 100BASE-SX /1000BASE-SX Dual-Rate Transceiver Duplex LC, 850nm VCSEL, MMF OM2 2KM(100SX) / 550M(1000SX) 
</h5>
<p>Part Number : NXOSF1-C7-M85-X5TRi</p>
<h4>Feature's</h4> 
<p>LVTTL Signal Detection Output
</p>


<p>Wave Solderable and Aqueous Washable

</p>
<p>Duplex LC connector
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

export default SFF_2X5_Products;