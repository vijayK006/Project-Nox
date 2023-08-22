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

import productImg1 from '../../img/products/25G SFP28/SFP28_LR.jpg';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const SFP28_LR_25G_Projects = () => {
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


<h2 className='pt-5'>25G SFP28 LR</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_2km" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR-Lite Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 2KM, DDM


</h5>
<p>Part Number : NXO-N7-S13-02DQ</p>
<h4>Feature's</h4>

<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>Data Rate up to 25.78Gbps
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_2km_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR-Lite Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 2KM, DDM


</h5>
<p>Part Number : NXO-N7-S13-02DQi</p>
<h4>Feature's</h4>

<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>Data Rate up to 25.78Gbps
</p>
</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_10km" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 10KM, DDM

</h5>
<p>Part Number : NXO-N7-S13-10DQ</p>
<h4>Feature's</h4>

<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>Data Rate up to 25.78Gbps
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_10km_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 10KM, DDM

</h5>
<p>Part Number : NXO-N7-S13-10DQi</p>
<h4>Feature's</h4>

<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>Data Rate up to 25.78Gbps
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_DualRate" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G / 25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 10KM, DDM, Dual-Rate

</h5>
<p>Part Number : NXO-N7-S13-10DR</p>
<h4>Feature's</h4>

<p>Compatible with IEEE802.3ae 10GBASE-LR/LW
</p>
<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_DualRate_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G / 25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 10KM, DDM, Dual-Rate

</h5>
<p>Part Number : NXO-N7-S13-10DRi</p>
<h4>Feature's</h4>

<p>Compatible with IEEE802.3ae 10GBASE-LR/LW
</p>
<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>

</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_Transceiver" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM
</h5>
<p>Part Number : NXO-N7-S13-10DR</p>
<h4>Feature's</h4>


<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>
Data Rate up to 25.78Gbps
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/SFP28_25G_LR_Transceiver_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM
</h5>
<p>Part Number : NXO-N7-S13-10DRi</p>
<h4>Feature's</h4>


<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>
Data Rate up to 25.78Gbps
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/LR_S13_20DQ" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-N7-S13-20DQ</p>
<h4>Feature's</h4>


<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>
Data Rate up to 25.78Gbps
</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_LR_25G_Projects/LR_S13_20DQ_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>25G SFP28 LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, SMF 20KM, DDM

</h5>
<p>Part Number : NXO-N7-S13-20DQi</p>
<h4>Feature's</h4>


<p>Compliant with CPRI option10
</p>
<p>Compliant with SFF-8402 SFP28 MSA
</p>
<p>
Data Rate up to 25.78Gbps
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

export default SFP28_LR_25G_Projects;