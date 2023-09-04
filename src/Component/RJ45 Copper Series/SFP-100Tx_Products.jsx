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

import productImg1 from '../../img/products/RJ45 Copper Series/SFP_100Tx_1.jpg';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP_100T_Products = () => {
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


<h2 className='pt-5'>SFP 100TX</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T01_X1" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T01-X1</p>
<h4>Feature's</h4>
<p>Support RX_LOS function</p>

<p>Auto-detect MDI/MDI-X</p>

<p>RJ-45 connector</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T01_X1i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T01-X1i</p>
<h4>Feature's</h4>

<p>I2C 2-wire interface for serial ID


</p>
<p>Auto-detect MDI/MDI-X

</p>
<p>RJ-45 connector


</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T11_X1" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T11-X1</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>

<p>Auto-detect MDI/MDI-X

</p>
<p>RJ-45 connector


</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T11_X1i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T11-X1i</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>

<p>Auto-detect MDI/MDI-X

</p>
<p>RJ-45 connector


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

export default SFP_100T_Products;