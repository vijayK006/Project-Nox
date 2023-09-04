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

import productImg1 from '../../img/products/RJ45 Copper Series/SFP_10-T_Y.jpg';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Projects_SFP_10G = () => {
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


<h2 className='pt-5'>SFP+ 10G-T</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Projects_SFP_10G/SFP_10G_T11_Y3" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M


</h5>
<p>Part Number : NXOSPP-HJ-T11-Y3</p>
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
        <Link to="/Projects_SFP_10G/SFP_10G_T12_Y3" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M


</h5>
<p>Part Number : NXOSPP-HJ-T12-Y3</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
<p>I2C 2-wire interface for serial ID


</p>
<p>Auto-detect MDI/MDI-X

</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        {/* <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Projects_SFP_10G/SFP_10G_T13_Y3" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M


</h5>

<p>Part Number : NXOSPP-HJ-T13-Y3</p>


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

        </div> */}

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Projects_SFP_10G/SFP_10G_T_Y3i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M, I-Temp


</h5>
<p>Part Number : NXOSPP-HJ-T11-Y3i</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
<p>I2C 2-wire interface for serial ID


</p>

<p>RJ-45 connector


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Projects_SFP_10G/T22_Y3_10G_T" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M, I-Temp


</h5>
<p>Part Number : NXOSPP-HJ-T22-Y3</p>
<h4>Feature's</h4>
<p>I2C 2-wire interface for serial ID
</p>
<p>10G link length up to 80m with Cat.6a/7


</p>

<p>Support RX_LOS function


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Projects_SFP_10G/T11_Y8_10G_T" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M, I-Temp


</h5>
<p>Part Number : NXOSPP-HJ-T11-Y8 </p>
<h4>Feature's</h4>
<p>I2C 2-wire interface for serial ID
</p>
<p>RJ-45 connector


</p>

<p>Single +3.3V power supply


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        {/* <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Projects_SFP_10G/SFP_10G_T_Y38" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 80M


</h5>
<p>Part Number : NXOSPP-HJ-Txx-Y3</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
<p>I2C 2-wire interface for serial ID


</p>

<p>RJ-45 connector


</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div> */}

       
      </div>
</div>

<EnquireForm/>

<Footer/>
    </>
  )
}

export default Projects_SFP_10G;