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

import productImg1 from '../../img/products/10G XFP/H7_M85_X3D.jgp.jpg';
import productImg2 from '../../img/products/10G XFP/C27_20D.jpg';
import productImg3 from '../../img/products/10G XFP/DTU_80D.jpg';
import productImg4 from '../../img/products/10G XFP/Dxx_40D.jpg';



import { TfiHeadphoneAlt } from 'react-icons/tfi';

const XFP_DUAL_Products = () => {
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


<h2 className='pt-5'>10G XFP Dual</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_M85_X3D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-SR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, Multi-Mode, 300M, DDM
</h5>
<p>Part Number : NXOXFP-H7-M85-XX3D</p>
<h4>Feature's</h4> 
<p>850nm VCSEL Laser</p>
<p>Built-in digital diagnostic function</p>
<p>Power consumption less than 1.5W</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S13_10D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, Single Mode, 10KM, DDM
</h5>
<p>Part Number : NXOXFP-H7-S13-X10D</p>
<h4>Feature's</h4> 
<p>Compliant with XFP MSA INF-8077i</p>
<p>Hot-pluggable XFP footprint</p>
<p>No Reference Clock required</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S13_10Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, Single Mode, 10KM, DDM
</h5>
<p>Part Number : NXOXFP-H7-S13-X10Di</p>
<h4>Feature's</h4> 
<p>Compliant with XFP MSA INF-8077i</p>
<p>Hot-pluggable XFP footprint</p>
<p>No Reference Clock required</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S13_10D_L
" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-LR Transceiver
Hot Pluggable, Duplex LC, 1310nm DFB, Single Mode, 10KM, DDM Low Power Consumption
</h5>
<p>Part Number : NXOXFP-H7-S13-X10D-L</p>
<h4>Feature's</h4> 
<p>No Reference Clock required</p>
<p>Link length for 10km over SM fiber</p>
<p>Low power consumption {'(<1.3W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DUAL_Products/Dual_NXO_H7_S15_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ER Transceiver
Hot Pluggable, Duplex LC, 1550nm EML-LD, Single Mode, 40KM, DDM


</h5>
<p>Part Number : NXOXFP-H7-S15-X40D</p>
<h4>Feature's</h4> 
<p>Compliant with 10G Fiber Channel</p>
<p>Compliant with XFP MSA INF-8077i</p>
<p>Low power consumption {'(<1.8W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DUAL_Products/Dual_NXO_H7_S15_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ER Transceiver
Hot Pluggable, Duplex LC, 1550nm EML-LD, Single Mode, 40KM, DDM


</h5>
<p>Part Number : NXOXFP-H7-S15-X40Di</p>
<h4>Feature's</h4> 
<p>Compliant with 10G Fiber Channel</p>
<p>Compliant with XFP MSA INF-8077i</p>
<p>Low power consumption {'(<1.8W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_DUAL_Products/Dual_NXO_H7_S15_40D_L" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ER Transceiver
Hot Pluggable, Duplex LC, 1550nm EML-LD, Single Mode, 40KM, DDM


</h5>
<p>Part Number : NXOXFP-H7-S15-X40D-L</p>
<h4>Feature's</h4> 
<p>Compliant with 10G Fiber Channel</p>
<p>Compliant with XFP MSA INF-8077i</p>
<p>Low power consumption {'(<1.8W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S15_80D_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ZR Transceiver
Hot Pluggable, Duplex LC, 1550nm EML-LD, Single Mode, 80KM, DDM

</h5>
<p>Part Number : NXOXFP-H7-S15-X80D</p>
<h4>Feature's</h4> 
<p>Compliant with 10G Fiber Channel</p>
<p>Compliant with XFP MSA INF-8077i</p>
<p>Low power consumption {'(<2.0W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S15_80Di_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ZR Transceiver
Hot Pluggable, Duplex LC, 1550nm EML-LD, Single Mode, 80KM, DDM

</h5>
<p>Part Number : NXOXFP-H7-S15-X80Di</p>
<h4>Feature's</h4> 
<p>Compliant with 10G Fiber Channel</p>
<p>Compliant with XFP MSA INF-8077i</p>
<p>Low power consumption {'(<2.0W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S15_80D_L_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ZR Transceiver
Hot Pluggable, Duplex LC, 1550nm EML-LD, Single Mode, 80KM, DDM Low Power Consumption, Rx Protection

</h5>
<p>Part Number : NXOXFP-H7-S15-X80D-L</p>
<h4>Feature's</h4> 
<p>Compliant with 10G Fiber Channel</p>
<p>Compliant with XFP MSA INF-8077i</p>
<p>Low power consumption {'(<2.0W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S15_A0D_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ZR Transceiver
Hot Pluggable, Duplex LC, 1550nm EML, SMF 100KM, DDM


</h5>
<p>Part Number : NXOXFP-H7-S15-XA0D</p>
<h4>Feature's</h4> 
<p>Dual +3.3V and 5.0V power supply</p>
<p>Link distance 100km over SM fiber</p>
<p>Low power consumption {'(<3.5W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S15_A0Di_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-ZR Transceiver
Hot Pluggable, Duplex LC, 1550nm EML, SMF 100KM, DDM


</h5>
<p>Part Number : NXOXFP-H7-S15-XA0Di</p>
<h4>Feature's</h4> 
<p>Dual +3.3V and 5.0V power supply</p>
<p>Link distance 100km over SM fiber</p>
<p>Low power consumption {'(<3.5W)'}</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/XFP_Dual_Products/Dual_H7_S15_A2D_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3'/>

<div className='product-dec'>
  <h5>10G XFP-EZR Transceiver
Hot Pluggable, Duplex LC, 1550nm CML, SMF 120KM, DDM

</h5>
<p>Part Number : NXOXFP-H7-S15-XA2D</p>
<h4>Feature's</h4> 
<p>Dispersion Tolerance {'>2400ps/nm'}</p>
<p>Dual +3.3V and 5.0V power supply</p>
<p>Low power consumption {'(<3.5W)'}</p>


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

export default XFP_DUAL_Products;