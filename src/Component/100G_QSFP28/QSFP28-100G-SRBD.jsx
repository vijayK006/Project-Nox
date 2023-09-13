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

import productImg1 from '../../img/products/100G QSFP28/100G_SRBD_card1.jpg';
import productImg2 from '../../img/products/100G QSFP28/100G_SRBD_card2.jpg';


import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Product_QSFP28_100G_SRBD = () => {
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


<h2 className='pt-5'>QSFP28-100G-SRBD</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Product_QSFP28_100G_SRBD/Product_100G_SRBD" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 SR2-BiDi Transceiver
Hot Pluggable, Dual Bidi LC, 850 / 908nm VCSEL, MMF 100M, DDM


</h5>
<p>Part Number : NXOQ28-KC-C85-X1D-T10</p>
<h4>Feature's</h4>
<p>Compliant with 100GBASE-SR2 BiDi

</p>
<p>Compliant with SFF-8665 QSFP28 MSA

</p>
<p>Compliant with IEEE 802.3bm CAUI-4 Interface

</p>


</div>

<TfiHeadphoneAlt className="enquire-btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Product_QSFP28_100G_SRBD/Product_100G_SRBD_DualRate" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3'/>

<div className='product-dec'>
  <h5>100G QSFP28 SR4 Transceiver
Hot Pluggable, MPO / MTP, 850nm VCSEL, MMF 100M, DDM, Dual-Rate
</h5>
<p>Part Number : NXOQ28-KC-C85-X1DR</p>

<h4>Feature's</h4>
<p>Compliant with 100GBASE-SR2 BiDi and

</p>
<p>40GBASE-SR2 BiDi

</p>
<p>Compliant with SFF-8665 QSFP28 MSA

</p>

<p>
Hot Pluggable QSFP28 footprint


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

export default Product_QSFP28_100G_SRBD;