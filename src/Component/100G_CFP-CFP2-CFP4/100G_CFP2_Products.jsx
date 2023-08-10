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

import productImg1 from '../../img/products/100G CFP CFP2 CFP4/100GCFP2.jpg'
import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const CFP2_Products_100G = () => {
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


<h2 className='pt-5'>100G CFP2 </h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Product_100G_QSFP28" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G CFP2 to QSFP28 Adapter Module, Dual-Rate
</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply</p>
<p>Hot Pluggable</p>
<p>1 port QSFP28 TX&RX</p>
<p>RoHS compliant</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>100G CFP2 ER4 Dual Rate Transceiver
Hot Pluggable, Duplex LC, EML LAN-WDM, Single Mode, 40KM, DDM
</h5>

<h4>Feature's</h4>
<p>APD receiver</p>
<p>Duplex LC connector</p>
<p>Low power consumption, {'<'}12W</p>
<p>Single 3.3V power supply</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/LR4_Eathernet_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>100G CFP2 LR4 Transceiver
Hot Pluggable, Duplex LC, DML LAN-WDM, Single Mode, 10KM, DDM

</h5>

<h4>Feature's</h4>
<p>Compliant to CFP2 MSA</p>
<p>Duplex LC connector</p>
<p>Built in quad TX CDR and RX CDR</p>
<p>Single 3.3V power supply</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/LR4_DualRate_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>100G CFP2 LR4 Dual Rate Transceiver
Hot Pluggable, Duplex LC, EML LAN-WDM, Single Mode, 10KM, DDM
</h5>

<h4>Feature's</h4>
<p>Compliant to CFP2 MSA</p>
<p>4-CH optical Mux/DeMux design</p>
<p>Support up to 111.8Gb/s aggregate bit rate</p>
<p>Built in quad TX CDR and RX CDR</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>100G CFP2 SR10 Dual Rate Transceiver
Hot Pluggable, MPO / MTP-24, 850nm VCSEL, MMF, 100M, DDM
</h5>

<h4>Feature's</h4>
<p>Compliant to CFP2 MSA</p>
<p>Compliant to ITU G.709 OTU4</p>
<p>Single 3.3V power supply</p>
<p>RoHS compliant</p>
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

export default CFP2_Products_100G;