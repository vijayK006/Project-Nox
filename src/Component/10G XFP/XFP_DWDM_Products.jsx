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

import productImg1 from '../../img/products/10G XFP/Dxx_40D.jpg'
import productImg2 from '../../img/products/10G XFP/DTU_80D.jpg'



import { TfiHeadphoneAlt } from 'react-icons/tfi';

const XFP_DWDM_Products = () => {
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


<h2 className='pt-5'>10G XFP DWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DWDM_Products/DWDM_Dxx_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP DWDM Transceiver Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 40KM, DDM </h5>
<p>Part Number : NXOXFP-H7-Dxx-X40D</p>
<h4>Feature's</h4> 
<p>No Reference Clock required</p>
<p>Link distance 40km over SM fiber</p>
<p>Duplex LC connector</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DWDM_Products/DWDM_Dxx_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP DWDM Transceiver Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 40KM, DDM </h5>
<p>Part Number : NXOXFP-H7-Dxx-X40Di</p>
<h4>Feature's</h4> 
<p>No Reference Clock required</p>
<p>Link distance 40km over SM fiber</p>
<p>Duplex LC connector</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DWDM_Products/DWDM_Dxx_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP DWDM Transceiver Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 80KM, DDM, DDM </h5>
<p>Part Number : NXOXFP-H7-Dxx-X80D</p>
<h4>Feature's</h4> 
<p>Dual +3.3V and 5.0V power supply</p>
<p>Link distance 80km over SM fiber</p>
<p>Maximum Power consumption 3.5W</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DWDM_Products/DWDM_Dxx_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP DWDM Transceiver Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 80KM, DDM, DDM </h5>
<p>Part Number : NXOXFP-H7-Dxx-X80Di</p>
<h4>Feature's</h4> 
<p>Dual +3.3V and 5.0V power supply</p>
<p>Link distance 80km over SM fiber</p>
<p>Maximum Power consumption 3.5W</p>


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

export default XFP_DWDM_Products;