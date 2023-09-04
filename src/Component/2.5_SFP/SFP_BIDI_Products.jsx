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

import productImg1 from '../../img/products/2.5_SFP/BIDI_S53_20D.jpg'
import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP_BIDI_Products = () => {
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


<h2 className='pt-5'>2.5 SFP BIDI</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S35_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
2.5G SFP OC-48 IR-1 / STM-16 S16.1 Transceiver
Hot Pluggable, Bidi LC, Tx1310nm DFB / Rx1550nm, SMF 20km, DDM

</h5>
<p>Part Number : NXOSFP-E8-S35-20D</p>
<h4>Feature's</h4>
<p>1310nm DFB transmitter</p>
<p>Duplex SC connector</p>
<p>Compliant to X2 MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S35_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
2.5G SFP OC-48 IR-1 / STM-16 S16.1 Transceiver
Hot Pluggable, Bidi LC, Tx1310nm DFB / Rx1550nm, SMF 20km, DDM

</h5>
<p>Part Number : NXOSFP-E8-S35-20Di</p>
<h4>Feature's</h4>
<p>1310nm DFB transmitter</p>
<p>Duplex SC connector</p>
<p>Compliant to X2 MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S53_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 IR-2 / STM-16 S16.2 Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 20km, DDM

</h5>
<p>Part Number : NXOSFP-E8-S53-20D</p>
<h4>Feature's</h4>
<p>Compliant with INF-8074i SFP MSA
</p>

<p>1550nm DFB laser transmitter
</p>
<p>Simplex LC connector
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S53_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 IR-2 / STM-16 S16.2 Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 20km, DDM

</h5>
<p>Part Number : NXOSFP-E8-S53-20Di</p>
<h4>Feature's</h4>
<p>Compliant with INF-8074i SFP MSA
</p>

<p>1550nm DFB laser transmitter
</p>
<p>Simplex LC connector
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S35_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-1 / STM-16 L16.1 Transceiver
Hot Pluggable, Bidi LC, Tx1310nm DFB / Rx1550nm, SMF 40KM, DDM
</h5>
<p>Part Number : NXOSFP-E8-S35-40D</p>
<h4>Feature's</h4>
<p>Compliant with INF-8074i SFP MSA
</p>

<p>1310nm DFB laser transmitter

</p>
<p>Simplex LC connector
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S35_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-1 / STM-16 L16.1 Transceiver
Hot Pluggable, Bidi LC, Tx1310nm DFB / Rx1550nm, SMF 40KM, DDM
</h5>
<p>Part Number : NXOSFP-E8-S35-40Di</p>
<h4>Feature's</h4>
<p>Compliant with INF-8074i SFP MSA
</p>

<p>1310nm DFB laser transmitter

</p>
<p>Simplex LC connector
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S53_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 40KM, DDM

</h5>
<p>Part Number : NXOSFP-E8-S53-40D</p>
<h4>Feature's</h4>

<p>Hot Pluggable
</p>
<p>1550nm DFB laser transmitter

</p>
<p>Simplex LC connector
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_BIDI_Products/BIDI_S53_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 LR-2 / STM-16 L16.2 Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 40KM, DDM

</h5>
<p>Part Number : NXOSFP-E8-S53-40Di</p>
<h4>Feature's</h4>

<p>Hot Pluggable
</p>
<p>1550nm DFB laser transmitter

</p>
<p>Simplex LC connector
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

export default SFP_BIDI_Products;