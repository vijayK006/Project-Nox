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

import productImg1 from '../../img/products/100G QSFP28/BIDI_C27.png';
import productImg2 from '../../img/products/100G QSFP28/BIDI_C31.png';
import productImg3 from '../../img/products/100G QSFP28/BIDI_L04.png';
import productImg4 from '../../img/products/100G QSFP28/BIDI_L09.png';

import productImg5 from  '../../img/products/100G QSFP28/BIDI_C31.png'


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const BIDI_10_to_40_Products = () => {
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


<h2 className='pt-5'>QSFP28-100G-BIDI-10 / 20 / 30 / 40</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_C27" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 Single Lambda LR1-BiDi Transceiver
Hot Pluggable, Bidi LC, Tx1271nm EML / Rx1331nm, SMF 10KM, DDM
</h5>

<h4>Feature's</h4>
<p>Compliant with SFF-8665 QSFP28 MSA</p>
<p>Built in TX CDR and RX CDR</p>
<p>Hot Pluggable QSFP28 footprint</p>
<p>Operating Temperature 0~70°C</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_C29" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 Single Lambda LR1-20-BiDi Transceiver
Hot Pluggable, Bidi LC, Tx1291nm EML / Rx1311nm, SMF 20KM, DDM
</h5>

<h4>Feature's</h4>
<p>Single 3.3V power supply</p>
<p>Link distance 20km over SM fiber with FEC</p>
<p>Hot Pluggable QSFP28 footprint</p>
<p>CWDM 1291nm EML transmitter</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_C31" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 Single Lambda LR1-20-BiDi Transceiver
Hot Pluggable, Bidi LC, Tx1311nm EML / Rx1291nm, SMF 20KM, DDM
</h5>

<h4>Feature's</h4>
<p>CWDM 1311nm EML transmitter</p>
<p>Link distance 20km over SM fiber with FEC</p>
<p>Operating Temperature 0~70°C</p>
<p>Maximum Power consumption 4.5W</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_L04" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 Single Lambda ER1-30-BiDi Transceiver
Hot Pluggable, Bidi LC, Tx1304nm EML / Rx1309nm, SMF 30KM, DDM
</h5>

<h4>Feature's</h4>
<p>APD receiver</p>
<p>Compatible with 100GBASE-ER1-30</p>
<p>Single 3.3V power supply</p>
<p>Maximum Power consumption 4.5W</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_L09" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 Single Lambda ER1-30-BiDi Transceiver
Hot Pluggable, Bidi LC, Tx1309nm EML / Rx1304nm, SMF 30KM, DDM
</h5>

<h4>Feature's</h4>
<p>Built in TX CDR and RX CDR</p>
<p>LWDM 1309nm EML transmitter</p>
<p>Operating Temperature 0~70°C</p>
<p>Maximum Power consumption 4.5W</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_C33" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 Single Lambda LR1-BiDi Transceiver
Hot Pluggable, Bidi LC, Tx1331nm EML / Rx1271nm, SMF 10KM, DDM
</h5>

<h4>Feature's</h4>
<p>Built in TX CDR and RX CDR</p>
<p>CWDM 1331nm EML transmitter</p>
<p>Operating Temperature 0~70°C</p>
<p>Maximum Power consumption 4.5W</p>
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

export default BIDI_10_to_40_Products;