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
import productImg5 from '../../img/products/125M 155M  SFP/Dual_S15_155M.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_Dual_SFP_155M = () => {
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


<h2 className='pt-5'>125M/155M SFP DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-FX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, MMF 2KM, DDM

</h5>
<p>Part Number : NXO-A7-M13-02D</p>

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
        <Link to="/Products_Dual_SFP_155M/Dual_155M_02Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-FX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, MMF 2KM, DDM

</h5>
<p>Part Number : NXO-A7-M13-02Di</p>

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
        <Link to="/Products_Dual_SFP_155M/Dual_155M_05D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
125M / 155M SFP 100BASE-FX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, MMF 5KM, DDM
</h5>
<p>Part Number : NXO-A7-M13-05D</p>

<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_05Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
125M / 155M SFP 100BASE-FX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, MMF 5KM, DDM
</h5>
<p>Part Number : NXO-A7-M13-05Di</p>

<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Duplex LC connector</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_M85_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100SX Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 2KM, DDM


</h5>
<p>Part Number : NXO-A7-M85-02D</p>
<h4>Feature's</h4> 
{/* <p>850nm VCSEL laser transmitter
</p> */}
<p>Duplex LC connector</p>
<p>Link distance 2km over SM fiber</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
     
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_M85_02Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100SX Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 2KM, DDM


</h5>
<p>Part Number : NXO-A7-M85-02Di</p>
<h4>Feature's</h4> 
{/* <p>850nm VCSEL laser transmitter
</p> */}
<p>Duplex LC connector</p>
<p>Link distance 2km over SM fiber</p>
<p>Compliant with INF-8074i SFP MSA</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-LX10 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM



</h5>
<p>Part Number : NXO-A7-S13-20D</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Duplex LC connector</p>
{/* <p>Link distance 20km over SM fiber</p> */}
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-LX10 Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM



</h5>
<p>Part Number : NXO-A7-S13-20Di</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Duplex LC connector</p>
{/* <p>Link distance 20km over SM fiber</p> */}
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_30D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-A7-S13-30D</p>

<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Link distance 20km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_30Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BASE-LX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-A7-S13-30Di</p>

<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Link distance 20km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 40KM, DDM


</h5>
<p>Part Number : NXO-A7-S13-40D</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Link distance 40km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 40KM, DDM


</h5>
<p>Part Number : NXO-A7-S13-40Di</p>
<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Link distance 40km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 60KM, DDM



</h5>
<p>Part Number : NXO-A7-S13-60D</p>

<h4>Feature's</h4> 

<p>Single +3.3V power supply
</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Link distance 60km over SM fiber</p>
<p>Duplex LC connector</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S13_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EX Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 60KM, DDM



</h5>
<p>Part Number : NXO-A7-S13-60Di</p>

<h4>Feature's</h4> 

<p>Single +3.3V power supply
</p>
{/* <p>1310nm FP laser transmitter</p> */}
<p>Link distance 60km over SM fiber</p>
<p>Duplex LC connector</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM



</h5>
<p>Part Number : NXO-A7-S13-80D</p>

<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Single +3.3V power supply</p>
{/* <p>Link distance 80km over SM fiber</p> */}
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 80KM, DDM



</h5>
<p>Part Number : NXO-A7-S13-80Di</p>

<h4>Feature's</h4> 
<p>Compliant with INF-8074i SFP MSA</p>
<p>Single +3.3V power supply</p>
{/* <p>Link distance 80km over SM fiber</p> */}
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A0D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM

</h5>
<p>Part Number : NXO-A7-S13-A0D</p>

<h4>Feature's</h4> 
{/* <p>Compliant with INF-8074i SFP MSA</p> */}
<p>Single +3.3V power supply</p>
<p>Link distance 100km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A0Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-ZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 100KM, DDM

</h5>
<p>Part Number : NXO-A7-S13-A0Di</p>

<h4>Feature's</h4> 
{/* <p>Compliant with INF-8074i SFP MSA</p> */}
<p>Single +3.3V power supply</p>
<p>Link distance 100km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A2D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM


</h5>
<p>Part Number : NXO-A7-S13-A2D</p>

<h4>Feature's</h4> 
{/* <p>Compliant with INF-8074i SFP MSA</p> */}
<p>Single +3.3V power supply</p>
<p>Link distance 120km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

       

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A2Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 120KM, DDM


</h5>
<p>Part Number : NXO-A7-S13-A2Di</p>

<h4>Feature's</h4> 
{/* <p>Compliant with INF-8074i SFP MSA</p> */}
<p>Single +3.3V power supply</p>
<p>Link distance 120km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A4D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 140KM, DDM
</h5>
<p>Part Number : NXO-A7-S15-A4D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Link distance 140km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A4Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 140KM, DDM
</h5>
<p>Part Number : NXO-A7-S15-A4Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Link distance 140km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>      

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A6D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 160KM, DDM

</h5>
<p>Part Number : NXO-A7-S15-A6D</p>

<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 160km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_A6Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 160KM, DDM

</h5>
<p>Part Number : NXO-A7-S15-A6Di</p>

<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 160km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_B0D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 200KM(46dB), DDM


</h5>
<p>Part Number : NXO-A7-S15-B0D</p>

<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 200km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_B0Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 200KM(46dB), DDM


</h5>
<p>Part Number : NXO-A7-S15-B0Di</p>

<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 200km over SM fiber</p>
<p>Single +3.3V power supply</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_Dual_SFP_155M/Dual_155M_S15_B2D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BASE-EZX Transceiver
Hot Pluggable, Duplex LC, 1550nm DFB, SMF 220KM(50dB), DDM



</h5>
<p>Part Number : NXO-A7-S15-B2D</p>

<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Link distance 220km(50dB) over SM fiber
</p>
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

export default Products_Dual_SFP_155M;