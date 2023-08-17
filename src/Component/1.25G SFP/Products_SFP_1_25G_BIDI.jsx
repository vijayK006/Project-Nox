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

import productImg1 from '../../img/products/1.25G SFP/SFP_BIDI_Img.jpg'
import productImg1_2 from '../../img/products/1.25G SFP/SFP_BIDI_2.jpg'
import productImg1_3 from '../../img/products/1.25G SFP/SFP_BIDI_3.jpg'
import productImg1_4 from '../../img/products/1.25G SFP/SFP_BIDI_4.jpg'
import productImg1_5 from '../../img/products/1.25G SFP/SFP_BIDI_5.jpg'

import productImg2 from '../../img/products/2.5_SFP/Dual_02D.jpg'
import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'

import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Products_SFP_1_25G_BIDI = () => {
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


<h2 className='pt-5'>1.25G SFP BIDI</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_1_25_S35_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 20KM, DDM

</h5>

<h4>Feature's</h4> 
<p>Hot Pluggable

</p>
<p>1310nm FP laser transmitter

</p>

<p>Simplex SC connector

</p>


<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_1_25_S53_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_2} className='productImg3'/>

<div className='product-dec'>
  <h5>2.5G SFP OC-48 / STM-16 Multi-Rate Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF 300M, DDM




</h5>

<h4>Feature's</h4>
<p>Hot Pluggable

</p>
<p>1550nm DFP laser transmitter

</p>

<p>Simplex SC connector

</p>


<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_M35_X5D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>
1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, MMF 500M, DDM





</h5>

<h4>Feature's</h4>
<p>Hot Pluggable

</p>
<p>1310nm DFP laser transmitter

</p>

<p>Simplex LC connector

</p>


<p>RoHS Compliant
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
    
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_S34_10D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1490nm, SMF 10KM, DDM




</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm FB laser transmitter

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
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_S34_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1490nm, SMF 20KM, DDM





</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm FB laser transmitter

</p>

<p>Duplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S34_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1490nm, SMF 40KM, DDM
</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm FB laser transmitter

</p>

<p>Simplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 2KM, DDM







</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm FP laser transmitter


</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 20KM, DDM








</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm FP laser transmitter


</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm DFB / Rx1550nm, SMF 40KM, DDM

</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm DFB laser transmitter


</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S35_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_3} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm DFB / Rx1550nm, SMF 60KM, DDM

</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1310nm DFB laser transmitter


</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_10D" style={{textDecoration:"none", color:"black"}}>
        
<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1490nm DFB / Rx1310nm, SMF 10KM, DDM



</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1490nm DFB laser transmitter


</p>

<p>Simplex LC connector

</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1490nm DFB / Rx1310nm, SMF 20KM, DDM




</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1490nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1490nm DFB / Rx1310nm, SMF 40KM, DDM





</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1490nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1490nm DFB / Rx1550nm, SMF 80KM, DDM






</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1490nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S43_A0D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_4} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1490nm DFB / Rx1550nm, SMF 100KM, DDM







</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1490nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm FP / Rx1310nm, SMF 2KM, DDM








</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 40KM, DDM

</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S53_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 60KM, DDM


</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver  
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1490nm, SMF 80KM, DDM



</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Simplex LC connector


</p>
<p>RoHS Compliant
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_SFP_1_25G_BIDI/BIDI_C8_S54_A0D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1_5} className='productImg3'/>

<div className='product-dec'>
  <h5>1.25G SFP 1000BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1490nm, SMF 100KM, DDM
        



</h5>

<h4>Feature's</h4>
<p>Single +3.3V power supply
</p>
<p>1550nm DFB laser transmitter

</p>

<p>Simplex LC connector


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

export default Products_SFP_1_25G_BIDI;