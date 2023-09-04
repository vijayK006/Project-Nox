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

import productImg2 from '../../img/products/1.25G SFP/SFP_Dual_X5DImg.jpg'
import productImg3 from '../../img/products/1.25G SFP/SFP_Dual_50D.jpg'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP_Dual_1_25_Products = () => {
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


<h2 className='pt-5'>1.25G SFP DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_02D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-SX2 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, MMF 2KM, DDM
</h5>
<p>Part Numebr : NXOSFP-C7-M13-02D</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>1310nm FP laser transmitter</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_02D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-SX2 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, MMF 2KM, DDM
</h5>
<p>Part Numebr : NXOSFP-C7-M13-02Di</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Compliant with INF-8074i SFP MSA</p>
<p>1310nm FP laser transmitter</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_X5D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-SX Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 550M, DDM
</h5>
<p>Part Number : NXOSFP-C7-M85-X5D</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_X5D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-SX Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 550M, DDM
</h5>
<p>Part Number : NXOSFP-C7-M85-X5Di</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_10D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 10KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S13-10D</p>
<h4>Feature's</h4> 
<p>Duplex LC connector</p>
<p>Link distance 10km over SM fiber</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_10D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 10KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S13-10Di</p>
<h4>Feature's</h4> 
<p>Duplex LC connector</p>
<p>Link distance 10km over SM fiber</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_10DR_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 1.25G SFP 100BASE-LX10 / 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 10KM, DDM


</h5>
<p>Part Number : NXOSFP-C7-S13-10DR</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Duplex LC connector</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_10DR_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 1.25G SFP 100BASE-LX10 / 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 10KM, DDM


</h5>
<p>Part Number : NXOSFP-C7-S13-10DRi</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Duplex LC connector</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_20D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S13-20D</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>1310nm FP laser transmitter</p>
<p>Link distance 20km over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_20D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S13-20Di</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>1310nm FP laser transmitter</p>
<p>Link distance 20km over SM fiber</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_20DM_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S13-20DM</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Link distance 20km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_20DM_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S13-20DMi</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Link distance 20km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_20DR_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 1.25G SFP 100BASE-LX10 / 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSFP-C7-S13-20DR</p>
<h4>Feature's</h4> 
<p>Compliant with IEEE802.3z Gigabit Ethernet</p>
<p>1310nm FP laser transmitter</p>
<p>Duplex LC connector</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_20DR_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 1.25G SFP 100BASE-LX10 / 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSFP-C7-S13-20DRi</p>
<h4>Feature's</h4> 
<p>Compliant with IEEE802.3z Gigabit Ethernet</p>
<p>1310nm FP laser transmitter</p>
<p>Duplex LC connector</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_40D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 1.25G SFP 100BASE-LX10 / 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSFP-C7-S13-40D</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Link distance 40km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_40D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 1.25G SFP 100BASE-LX10 / 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSFP-C7-S13-40Di</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Link distance 40km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_60D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LHX(EX) Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 60KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-S13-60D</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Link distance 60km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_60D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LHX(EX) Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 60KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-S13-60Di</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Link distance 60km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_50D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-XD Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 50KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S15-50D</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Compatible with Fiber Channel 100-SM-LL-V</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_50D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-XD Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 50KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S15-50Di</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Compatible with Fiber Channel 100-SM-LL-V</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_80D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-S15-80D</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Compatible with Fiber Channel 100-SM-LL-V</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_80D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-S15-80Di</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Compatible with Fiber Channel 100-SM-LL-V</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_A0D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S15-A0D</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 100km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_A0D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM

</h5>
<p>Part Number : NXOSFP-C7-S15-A0Di</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 100km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_A2D_1_25G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-S15-A2D</p>
<h4>Feature's</h4> 
<p>APD receiver</p>
<p>Link distance 120km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_Dual_1_25_Products/Dual_A2D_1_25Gi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-S15-A2Di</p>
<h4>Feature's</h4> 
<p>APD receiver</p>
<p>Link distance 120km over SM fiber</p>
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

export default SFP_Dual_1_25_Products;