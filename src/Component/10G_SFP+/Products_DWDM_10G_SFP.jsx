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

import productImg1 from '../../img/products/2.5_SFP/Dual_02D.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/10SFP+/DWDM_1.jpg'
import productImg3 from '../../img/products/10SFP+/DWDM_3.jpg'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'
import productImg5 from '../../img/products/125M 155M  SFP/Dual_S15_155M.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_DWDM_10G_SFP = () => {
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


<h2 className='pt-5'>10G SFP+ DWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_10G_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 40KM, DDM


</h5>
<p>Part Number : NXOSPP-H7-Dxx-40D</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_10G_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 40KM, DDM


</h5>
<p>Part Number : NXOSPP-H7-Dxx-40Di</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_10G_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 80KM, DDM

</h5>
<p>Part Number : NXOSPP-H7-Dxx-80D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_10G_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 80KM, DDM

</h5>
<p>Part Number : NXOSPP-H7-Dxx-80Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_10G_A0D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 100GHz DWDM EML, SMF 100KM, DDM
</h5>
<p>Part Number : NXOSPP-H7-Dxx-A0D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_H7_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 50GHz DWDM EML, SMF 40KM, DDM
</h5>
<p>Part Number : NXOSPP-H7-Dxxx-40D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_H7_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 50GHz DWDM EML, SMF 40KM, DDM
</h5>
<p>Part Number : NXOSPP-H7-Dxxx-40Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_H7_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 50GHz DWDM EML, SMF 80KM, DDM

</h5>
<p>Part Number : NXOSPP-H7-Dxxx-80D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_DWDM_10G_SFP/DWDM_H7_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  10G SFP+ DWDM Transceiver
Hot Pluggable, Duplex LC, 50GHz DWDM EML, SMF 80KM, DDM

</h5>
<p>Part Number : NXOSPP-H7-Dxxx-80Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
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

export default Products_DWDM_10G_SFP;