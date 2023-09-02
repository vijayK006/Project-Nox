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

import productImg1 from '../../img/products/10G XFP/C27_20D.jpg'
import productImg2 from '../../img/products/10G XFP/Dxx_40D.jpg'
import productImg3 from '../../img/products/10G XFP/C43_80D.jpg'
import productImg4 from '../../img/products/10G XFP/C55_80D.jpg'



import { TfiHeadphoneAlt } from 'react-icons/tfi';

const XFP_BIDI_Products = () => {
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


<h2 className='pt-5'>10G XFP BIDI</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C27_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 40KM, DDM</h5>
<p>Part Number : NXO-H8-C27-X20D</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 20km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C27_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 40KM, DDM</h5>
<p>Part Number : NXO-H8-C27-X20Di</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 20km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C27_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 40KM, DDM</h5>
<p>Part Number : NXO-H8-C27-X40D</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 40km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C27_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM 1470~1610nm EML, SMF 40KM, DDM</h5>
<p>Part Number : NXO-H8-C27-X40Di</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 40km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C27_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 60KM, DDM
</h5>
<p>Part Number : NXO-H8-C27-X60D</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 60km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C27_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 60KM, DDM
</h5>
<p>Part Number : NXO-H8-C27-X60Di</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 60km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C33_20D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-H8-C33-X20D</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 60km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C33_20Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-H8-C33-X20Di</p>
<h4>Feature's</h4> 
<p>1270nm DFB laser transmitter</p>
<p>Link distance 20km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C33_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 40KM, DDM


</h5>
<p>Part Number : NXO-H8-C33-X40D</p>
<h4>Feature's</h4> 
<p>1330nm DFB laser transmitter</p>
<p>Link distance 40km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C33_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 40KM, DDM


</h5>
<p>Part Number : NXO-H8-C33-X40Di</p>
<h4>Feature's</h4> 
<p>1330nm DFB laser transmitter</p>
<p>Link distance 40km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C33_60D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 40KM, DDM


</h5>
<p>Part Number : NXO-H8-C33-X60D</p>
<h4>Feature's</h4> 
<p>1330nm DFB laser transmitter</p>
<p>Link distance 60km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C33_60Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1330nm DFB / Rx1270nm, SMF 40KM, DDM


</h5>
<p>Part Number : NXO-H8-C33-X60Di</p>
<h4>Feature's</h4> 
<p>1330nm DFB laser transmitter</p>
<p>Link distance 60km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C49_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1490nm EML / Rx1550nm, SMF 80KM, DDM

</h5>
<p>Part Number : NXO-H8-C49-X80D</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Link distance 80km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C49_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1490nm EML / Rx1550nm, SMF 80KM, DDM

</h5>
<p>Part Number : NXO-H8-C49-X80Di</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Link distance 80km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C55_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm EML / Rx1490nm, SMF 80KM, DDM


</h5>
<p>Part Number : NXO-H8-C55-X80D</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Link distance 80km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_BIDI_Products/BIDI_C55_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP BX(BR)-D Transceiver
Hot Pluggable, Bidi LC, Tx1550nm EML / Rx1490nm, SMF 80KM, DDM


</h5>
<p>Part Number : NXO-H8-C55-X80Di</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Link distance 80km over SM fiber</p>
<p>Hot Pluggable XFP footprint</p>


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

export default XFP_BIDI_Products;