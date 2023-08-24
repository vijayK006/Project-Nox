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

import productImg1 from '../../img/products/4G_SFP/Dual_4G.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/10SFP+/Dual_2.jpg'
import productImg3 from '../../img/products/1.25G SFP/SFP_Dual_50D.jpg'
import productImg4 from '../../img/products/10SFP+/Dual_3.jpg'
import productImg5 from '../../img/products/10SFP+/Dual_4.jpg'
import productImg6 from '../../img/products/10SFP+/Dual_5.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_4G_SFP = () => {
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


<h2 className='pt-5'>10G SFP+ DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_4G_SFP/Dual_SFP_X1DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  4GFC SFP SW Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM2 150M, DDM, Multi-Rate



</h5>
<p>Part Number : NXO-F7-M85-X1DM
</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Hot Pluggable
</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_4G_SFP/Dual_SFP_X1DMi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  4GFC SFP SW Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM2 150M, DDM, Multi-Rate



</h5>
<p>Part Number : NXO-F7-M85-X1DMi
</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Hot Pluggable
</p>
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

export default Products_4G_SFP;