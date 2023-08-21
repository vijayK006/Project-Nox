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

import productImg1 from '../../img/products/10G SFP+/c27_20D.jpg'


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP_PLUS_BIDI_Products = () => {
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


<h2 className='pt-5'>10G SFP+ BIDI</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
 
  10G SFP+ BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 20KM, DDM


</h5>

<h4>Feature's</h4> 
<p>Compliant with CPRI Option 7, 8
</p>
<p>1270nm DFB laser transmitter
</p>

<p>Simplex LC connector
</p>
<p>Link distance 20km over SM fiber
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_20DM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
 
  1G~10G Multi-Rate SFP+ BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 20KM, DDM



</h5>

<h4>Feature's</h4> 
<p>Compliant with SFF-8431 SFP+ MSA
</p>
<p>1270nm DFB laser transmitter
</p>

<p>Simplex LC connector
</p>
<p>Link distance 20km over SM fiber
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_PLUS_BIDI_Products/BIDI_H8_C27_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
 
  10G SFP+ BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 40KM, DDM




</h5>

<h4>Feature's</h4> 
<p>Compliant with CPRI Option 7, 8
</p>
<p>1270nm DFB laser transmitter
</p>

<p>Simplex LC connector
</p>
<p>Link distance 40km over SM fiber
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

export default SFP_PLUS_BIDI_Products;