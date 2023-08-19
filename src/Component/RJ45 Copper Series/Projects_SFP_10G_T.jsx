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
        <Link to="/SFP_10G_T11_Y3" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M


</h5>

<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
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
        <Link to="/SFP_10G_T12_Y3" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M


</h5>

<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
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
        <Link to="/SFP_10G_T13_Y3" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M


</h5>

<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
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
        <Link to="/SFP_10G_T_Y3i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 30M, I-Temp


</h5>

<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
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
        <Link to="/SFP_10G_T_Y38" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10GBASE-T SFP+ Transceiver
Hot Pluggable, RJ-45, Active Copper SFP+, 80M


</h5>

<h4>Feature's</h4>
<p>Support RX_LOS function


</p>
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

        {/* <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_25G_LR_Transceiver" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM


</h5>

<h4>Feature's</h4>
<p>Compliant with IEEE802.3cc 25GBASE-LR
</p>

<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>
Data Rate up to 25.78Gbps
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