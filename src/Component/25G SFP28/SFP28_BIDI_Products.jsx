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

import productImg1 from '../../img/products/25G SFP28/SFP_BX10_27Img.jpg';
import productImg2 from '../../img/products/25G SFP28/SFP_BX10_33Img.jpg';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP28_BIDI_Products = () => {
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


<h2 className='pt-5'>25G SFP28 BIDI</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX10_27" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 10KM, DDM


</h5>
<p>Part Number : NXOSPP-N8-C27-10DQ</p>

<h4>Feature's</h4>
<p>Data Rate up to 25.78Gbps</p>
<p>1270nm DFB laser transmitter</p>
<p>Simplex LC connector</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX10_27_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 10KM, DDM


</h5>
<p>Part Number : NXOSPP-N8-C27-10DQi</p>
<h4>Feature's</h4>
<p>Data Rate up to 25.78Gbps</p>
<p>1270nm DFB laser transmitter</p>
<p>Simplex LC connector</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX20_27" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-N8-C27-20DQ</p>
<h4>Feature's</h4>
<p>1270nm DFB laser transmitter</p>
<p>Data Rate up to 25.78Gbps</p>
<p>Link distance 20km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX20_27_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-N8-C27-20DQi</p>
<h4>Feature's</h4>
<p>1270nm DFB laser transmitter</p>
<p>Data Rate up to 25.78Gbps</p>
<p>Link distance 20km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX10_33" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 10KM, DDM</h5>
<p>Part Number : NXOSPP-N8-C33-10DQ</p>

<h4>Feature's</h4>
<p>1330nm DFB laser transmitter</p>
<p>Link distance 10km over SM fiber</p>
<p>Compliant with CPRI option10</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX10_33_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 10KM, DDM</h5>
<p>Part Number : NXOSPP-N8-C33-10DQi</p>

<h4>Feature's</h4>
<p>1330nm DFB laser transmitter</p>
<p>Simplex LC connector</p>
<p>Link distance 10km over SM fiber</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX20_33" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-N8-C33-20DQ</p>

<h4>Feature's</h4>
<p>Compliant with CPRI option10</p>
<p>Compliant with SFF-8402 SFP28 MSA</p>
<p>RoHS Compliant</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_BIDI_Products/SFP28_BX20_33_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-N8-C33-20DQi</p>
<h4>Feature's</h4>
<p>Compliant with CPRI option10</p>
<p>Compliant with SFF-8402 SFP28 MSA</p>
<p>RoHS Compliant</p>
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

export default SFP28_BIDI_Products;