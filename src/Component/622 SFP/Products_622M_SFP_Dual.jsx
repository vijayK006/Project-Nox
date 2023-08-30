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

import productImg1 from '../../img/products/622M_SFP/622_BIDI.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/622M_SFP/622_Dual.jpg'
import productImg3 from '../../img/products/622M_SFP/622M_20D.jpg'
import productImg4 from '../../img/products/622M_SFP/622M_80D.jpg'
import productImg5 from '../../img/products/125M 155M  SFP/Dual_S15_155M.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_622M_SFP_Dual = () => {
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


<h2 className='pt-5'>622M SFP BIDI</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_X5D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 / STM-4 Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 550M, DDM




</h5>
<p>Part Number : NXO-B7-M85-X5D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_X5Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 / STM-4 Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 550M, DDM




</h5>
<p>Part Number : NXO-B7-M85-X5Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 IR-1 / STM-4 S4.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-B7-S13-20D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 IR-1 / STM-4 S4.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-B7-S13-20Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 LR-1 / STM-4 L4.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 60KM, DDM


</h5>
<p>Part Number : NXO-B7-S13-60D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 LR-1 / STM-4 L4.1 Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 60KM, DDM


</h5>
<p>Part Number : NXO-B7-S13-60Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 LR-2 / STM-4 L4.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM

</h5>
<p>Part Number : NXO-B7-S15-80D</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>

</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_622M_SFP_Dual/Dual_622M_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>
  622M SFP OC-12 LR-2 / STM-4 L4.2 Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM

</h5>
<p>Part Number : NXO-B7-S15-80Di</p>

<h4>Feature's</h4> 
<p>Hot Pluggable
</p>
<p>RoHS Compliant</p>

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

export default Products_622M_SFP_Dual;