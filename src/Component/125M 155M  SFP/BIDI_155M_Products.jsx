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

import productImg1 from '../../img/products/125M 155M  SFP/S35_100BX_U_Img.jpg';
import productImg2 from '../../img/products/125M 155M  SFP/S35_100BX_D_Img.jpg';
import productImg3 from '../../img/products/125M 155M  SFP/BIDI_A8_35_20D.jpg';
import productImg4 from '../../img/products/125M 155M  SFP/A8_S45_80D_Img.jpg'
import productImg5 from '../../img/products/125M 155M  SFP/A8_S53_20DImg.jpg'
import productImg6 from '../../img/products/125M 155M  SFP/A8_S54_80D.jpg';

// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const BIDI_155M_Products = () => {
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


<h2 className='pt-5'>125M/155M SFP BIDI</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_S35_100BX_U" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi SC, 1310nm FP / Rx1550nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-A2-S35-20D</p>
<h4>Feature's</h4> 
<p>Simplex SC connector</p>
<p>1310nm FP laser transmitter</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_S35_100BX_Ui" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi SC, 1310nm FP / Rx1550nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-A2-S35-20Di</p>
<h4>Feature's</h4> 
<p>Simplex SC connector</p>
<p>1310nm FP laser transmitter</p>
<p>RoHS Compliant</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_S35_100BX_D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi SC, 1550nm FP / Rx1310nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-A2-S53-20D</p>
<h4>Feature's</h4> 
<p>1550nm FP laser transmitter</p>
<p>Simplex SC connector</p>
<p>Link distance 20km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_S35_100BX_Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi SC, 1550nm FP / Rx1310nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-A2-S53-20Di</p>
<h4>Feature's</h4> 
<p>1550nm FP laser transmitter</p>
<p>Simplex SC connector</p>
<p>Link distance 20km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_35_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-A8-S35-20D</p>
<h4>Feature's</h4> 
<p>1310nm FP laser transmitter</p>
<p>Simplex LC connector</p>
<p>Link distance 20km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_35_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-A8-S35-20Di</p>
<h4>Feature's</h4> 
<p>1310nm FP laser transmitter</p>
<p>Simplex LC connector</p>
<p>Link distance 20km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_35_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 40KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S35-40D</p>
<h4>Feature's</h4> 
<p>1310nm FP laser transmitter</p>
<p>Link distance 40km over SM fiber</p>
<p>Single +3.3V power supply</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_35_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 40KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S35-40Di</p>
<h4>Feature's</h4> 
<p>1310nm FP laser transmitter</p>
<p>Link distance 40km over SM fiber</p>
<p>Single +3.3V power supply</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_35_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 60KM, DDM


</h5>
<p>Part Number : NXOSFP-A8-S35-60D</p>
<h4>Feature's</h4> 
<p>1310nm FP laser transmitter</p>
<p>Simplex LC connector</p>
<p>Link distance 60km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_35_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-U Transceiver
Hot Pluggable, Bidi LC, Tx1310nm FP / Rx1550nm, SMF 60KM, DDM


</h5>
<p>Part Number : NXOSFP-A8-S35-60Di</p>
<h4>Feature's</h4> 
<p>1310nm FP laser transmitter</p>
<p>Simplex LC connector</p>
<p>Link distance 60km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_45_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-U Transceiver
Hot Pluggable, LC, Tx1490nm DFB/Rx1550nm, Single-Fiber, 80KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S45-80D</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Hot Pluggable</p>
<p>RoHS Compliant</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_45_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-U Transceiver
Hot Pluggable, LC, Tx1490nm DFB/Rx1550nm, Single-Fiber, 80KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S45-80Di</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Hot Pluggable</p>
<p>RoHS Compliant</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S45_A2D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-U Transceiver
Hot Pluggable, LC, Tx1490nm DFB/Rx1550nm, Single-Fiber, 120KM, DDM


</h5>
<p>Part Number : NXOSFP-A8-S45-A2D</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex LC connector</p>
<p>RoHS Compliant</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S45_A2Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-U Transceiver
Hot Pluggable, LC, Tx1490nm DFB/Rx1550nm, Single-Fiber, 120KM, DDM


</h5>
<p>Part Number : NXOSFP-A8-S45-A2Di</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex LC connector</p>
<p>RoHS Compliant</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S53_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm FP / Rx1310nm, SMF 20KM, DDM



</h5>
<p>Part Number : NXOSFP-A8-S53-20D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>Link distance 20km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S53_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm FP / Rx1310nm, SMF 20KM, DDM



</h5>
<p>Part Number : NXOSFP-A8-S53-20Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>Link distance 20km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S53_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 40KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S53-40D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>Link distance 40km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S53_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 40KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S53-40Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>Link distance 40km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S53_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 60KM, DDM


</h5>
<p>Part Number : NXOSFP-A8-S53-60D</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S53_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg5} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP 100BX-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm DFB / Rx1310nm, SMF 60KM, DDM


</h5>
<p>Part Number : NXOSFP-A8-S53-60Di</p>
<h4>Feature's</h4> 
<p>1550nm DFB laser transmitter</p>
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S54_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg6} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-D Transceiver
Hot Pluggable, LC, Tx1550nm DFB/Rx1490nm, Single-Fiber, 80KM, DDM



</h5>
<p>Part Number : NXOSFP-A8-S54-80D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>Link distance 80km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S54_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg6} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-D Transceiver
Hot Pluggable, LC, Tx1550nm DFB/Rx1490nm, Single-Fiber, 80KM, DDM



</h5>
<p>Part Number : NXOSFP-A8-S54-80Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>Link distance 80km over SM fiber</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S54_A2D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg6} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-D Transceiver
Hot Pluggable, LC, Tx1550nm DFB/Rx1490nm, Single-Fiber, 120KM, DDM

</h5>
<p>Part Number : NXOSFP-A8-S54-A2D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
<p>RoHS Compliant</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/BIDI_155M_Products/BIDI_A8_S54_A2Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg6} className='productImg3'/>

<div className='product-dec'>
  <h5>
  125/155M SFP-100BX-D Transceiver
Hot Pluggable, LC, Tx1550nm DFB/Rx1490nm, Single-Fiber, 120KM, DDM

</h5>
<p>Part Number : NXO-A8-S54-A2Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Simplex LC connector</p>
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

export default BIDI_155M_Products;