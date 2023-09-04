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

import productImg1 from '../../img/products/1.25G CSFP/S34_20D.jpg'
import productImg2 from '../../img/products/1.25G CSFP/dualBX_img.jpg'



import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Dual_Bidi_LC_Products = () => {
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


<h2 className='pt-5'>1.25G CSFP Dual Bidi LC</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_Bidi_LC_Products/CSFP_S34_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G CSFP 1000BX-U Compact 2CH Bidi Transceiver
Hot Pluggable, Dual Bidi LC, Tx1310nm FP / Rx1490nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-CC-S34-20D</p>

<h4>Feature's</h4> 

<p>Compliant with CSFP MSA Option 2
</p>

<p>Dual Bidi LC connector
</p>
<p>Single +3.3V power supply
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_Bidi_LC_Products/CSFP_S34_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G CSFP 1000BX-U Compact 2CH Bidi Transceiver
Hot Pluggable, Dual Bidi LC, Tx1310nm FP / Rx1490nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-CC-S34-20Di</p>

<h4>Feature's</h4> 

<p>Compliant with CSFP MSA Option 2
</p>

<p>Dual Bidi LC connector
</p>
<p>Single +3.3V power supply
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_Bidi_LC_Products/CSFP_S43_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G CSFP 1000BX-U Compact 2CH Bidi Transceiver  Hot Pluggable, Dual Bidi LC, Tx1310nm FP / Rx1490nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-CC-S43-20D</p>

<h4>Feature's</h4> 

<p>Compliant with CSFP MSA Option 2
</p>

<p>Hot Pluggable
</p>
<p>Single +3.3V power supply
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_Bidi_LC_Products/CSFP_S43_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G CSFP 1000BX-U Compact 2CH Bidi Transceiver  Hot Pluggable, Dual Bidi LC, Tx1310nm FP / Rx1490nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-CC-S43-20Di</p>

<h4>Feature's</h4> 

<p>Compliant with CSFP MSA Option 2
</p>

<p>Hot Pluggable
</p>
<p>Single +3.3V power supply
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_Bidi_LC_Products/CSFP_S53_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G CSFP 1000BX-D Compact 2CH Bidi Transceiver
Hot Pluggable, Dual Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-CC-S53-20D</p>

<h4>Feature's</h4> 

<p>Single +3.3V power supply
</p>

<p>Hot Pluggable
</p>
<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_Bidi_LC_Products/CSFP_S53_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G CSFP 1000BX-D Compact 2CH Bidi Transceiver
Hot Pluggable, Dual Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-CC-S53-20Di</p>

<h4>Feature's</h4> 

<p>Single +3.3V power supply
</p>

<p>Hot Pluggable
</p>
<p>RoHS Compliant
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

export default Dual_Bidi_LC_Products;