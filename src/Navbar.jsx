import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { PiPhoneCall } from 'react-icons/pi';
import { AiOutlineGlobal, AiOutlineMenu } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsPersonGear,  BsCart3 } from 'react-icons/bs';


const Navbar = () => {

const OpenCloseMenu =()=>{
    document.getElementById('mobile_Setting').classList.toggle("openmenu");
}

  return (
    <>
    <div className='navbar-position-fixed'>
            <div className='bg-gray'>
        <div className='container'>
<div className='d-flex justify-content-between' style={{flexWrap:"wrap"}}>
    <p className='margin-0-lineHeight text-center'>Fast shipping to India</p>

    <div className='d-flex'>
<p className='margin-0-lineHeight mobile-screen-noneed'> India (English/ $ USD)</p>
&nbsp;
&nbsp;
&nbsp;
<p className='margin-0-lineHeight'><PiPhoneCall style={{marginBottom:"5px", fontSize:"18px"}}/> Contact Us</p>
    </div>

</div>
</div>
    </div>


<div className='navbar-top'>

<div className='nav-icon-tab'>
    <h5 style={{margin:"0px"}}>NX Optics</h5>
</div>


<ul className='n mobile-screen-noneed'>
    <li className='n-items hover-item'>All Products

    <div className='inner-menu'>
<h4>Fiber Optical Transceiver</h4>
<Swiper
      modules={[Navigation, Scrollbar]}
      navigation={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"
 >
<SwiperSlide>

    <div className='container'>
<div className='row'>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>Loop Back Series</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP+ 10G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP28 25G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP28 100G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP56 200G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP-DD 400G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP+ 40G Loopback</p></Link>


</div>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>400G QSFP-DD OSFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G OSFP SR8</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD SR8 PAM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD DR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD FR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD LR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD ER4</p></Link>

</div>


<div className='col-lg-2 col-md-4'>
<p className='menu-title '>100G CFP CFP2 CFP4</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G CFP</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G CFP2</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G CFP4</p></Link>

</div>

<div className='col-lg-2'>
    <p className='menu-title '>10G Xenpak</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK DUAL</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK DWDM</p></Link>

<p className='menu-title pt-2'>8GFC SFP+</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>8GFC SFP+ DUAL</p></Link>

</div>


<div className='col-lg-3 col-md-4'>
<p className='menu-title '>200G QSFP56 QSFP-DD</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>200G QSFP-DD SR8</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>200G QSFP56 SR4</p></Link>

<p className='menu-title pt-3'>16GFC SFP+( 14.025G )</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>16GFC SFP+ SW</p></Link>

</div>

<div className='col-lg-3 col-md-4'>
<p className='menu-title text-center'>40G QSFP+</p>
<div className='row'>
    <div className='col-lg-6'>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-eSR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SRBD</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-IR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-LR4</p></Link>
    </div>
    <div className='col-lg-6'>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-ER4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-ZR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SWDM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-PSM4-IR</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-PSM4-LR</p></Link>
    </div>
</div>



</div>

<div className='col-lg-4 col-md-4'>
<p className='menu-title text-center'>100G QSFP28</p>
<div className="row">
    <div className='col-lg-6 '>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-SR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-eSR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-SRBD</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-PSM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-DR1/FR1/LR1</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-LR4</p></Link>
    </div>
    <div className='col-lg-6 '>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-ER4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-ZR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-CWDM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-BIDI-4WDM-20</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-BIDI-10/20/30/40</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28 to SFP28 Adapter</p></Link>
    </div>
</div>



</div>

<div className='col-lg-2'>
<p className='menu-title '>25G SFP28</p>

<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 SR</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 LR</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 LWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>32GFC SFP28 SW</p></Link>

</div>

<div className='col-lg-2'>
<p className='menu-title '>RJ45 Copper Series</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP-100TX</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP-1000T</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP+ 10G-T</p></Link>


<p className='menu-title pt-2'>10G X2</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G X2 DUAL</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G X2 CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G X2 DWDM</p></Link>

</div>



</div>
</div>
</SwiperSlide>

<SwiperSlide>

    <div className='container'>
<div className='row'>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>2.5G SFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>2.5G SFP DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>2.5G SFP CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>2.5G SFP BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>2.5G SFP DUAL</p></Link>

<p className='menu-title pt-2'>1.25G CSFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G CSFP Dual Bidi LC</p></Link>

</div>

<div className='col-lg-2 col-md-4'>

<p className='menu-title '>1.25G SFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G SFP DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G SFP CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G SFP BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G SFP DUAL</p></Link>

<p className='menu-title pt-2'>1.25G GBIC</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G GBIC SC</p></Link>

</div>


<div className='col-lg-2 col-md-4'>

<p className='menu-title '>PON SFP   SFP+</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XG/XGS PON</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G EPON</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>2.5G GPON SFP</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G EPON SFP</p></Link>

<p className='menu-title pt-2'>2X5 SFF</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125M/1.25G 2X5 SFF</p></Link>

</div>

<div className='col-lg-2 col-md-4'>

<p className='menu-title '>1X9</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G 1X9 BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G 1X9 DUAL</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125/155M 1X9 CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125/155M 1X9 BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Ultra-Low Data-Rate 1X9 DC~10Mbps </p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125/155M 1X9 DUAL</p></Link>
</div>

<div className='col-lg-2 col-md-4'>

<p className='menu-title '>125M 155M SFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125M/155M SFP DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125M/155M SFP CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125M/155M SFP BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>125M/155M SFP DUAL</p></Link>

<p className='menu-title '>622M SFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>622M SFP BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>622M SFP DUAL</p></Link>


</div>

<div className='col-lg-2 col-md-4'>

<p className='menu-title '>10G SFP+</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP+ DWDM Tunable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G SFP+ DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G SFP+ CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G SFP+ BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G SFP+ DUAL</p></Link>

<p className='menu-title pt-2'>4G SFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>4.25G SFP DUAL</p></Link>

</div>

<div className='col-lg-2'>
    <p className='menu-title '>10G XFP </p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP DWDM Tunable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP DUAL</p></Link>

<p className='menu-title pt-2'>6G SFP+ </p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>6G SFP+ DUAL</p></Link>

</div>

<div className='col-lg-2'>
    <p className='menu-title '>10G Xenpak</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK DUAL</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK DWDM</p></Link>

<p className='menu-title pt-2'>8GFC SFP+</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>8GFC SFP+ DUAL</p></Link>


</div>


</div>
</div>
</SwiperSlide>


<SwiperSlide>

    <div className='container'>
    <h5 className='pb-5'>Fiber Optical Cable / Patch-cord</h5>
<div className='row'>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>AOC (Active Optical Cable)</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G SFP+ AOC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 AOC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>40G QSFP+ AOC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G QSFP28 AOC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>200G QSFP56 AOC</p></Link>

</div>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>DAC (Direct-Attach Cable)</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G SFP+ DAC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 DAC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>40G QSFP+ DAC</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G QSFP28 DAC</p></Link>

</div>

<div className='col-lg-3 col-md-4'>
<p className='menu-title '>Indoor Patch-cord   Cable</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Armored Breakout Cable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Breakout Cable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Mini Distribution Cable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>General Patch-cord</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Energy Chain Cable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>High Strength and Suppleness Patch-cord</p></Link>

</div>

<div className='col-lg-3 col-md-4'>
<p className='menu-title '>Outdoor Patch-cord   Cable</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Armored Patch-cord / Armored Breakout Cable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>FTTA Waterproof Cable for Mobile Base Station</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>Military Tactical Waterproof Cable</p></Link>

</div>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>MPO Patch-cord   Cassette</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>MPO PatchCord</p></Link>

</div>


</div>
</div>
</SwiperSlide>

</Swiper>


    </div>
    </li>
    
    <li className='n-items'>Solution</li>

    <li className='n-items'>Service</li>
    <li className='n-items'>Support</li>
    <li className='n-items'>Company</li>


</ul>


<div className='n'>
<IoNotificationsOutline className='nav-icons'/>
<BsPersonGear className='nav-icons'/>
<BsCart3 className='nav-icons'/>
<AiOutlineMenu className='nav-icons only-small' onClick={OpenCloseMenu}/>
</div>

</div>
    </div>



<div className='mobile-navbar' id='mobile_Setting'>

<div className="mobile-navbarcontent">
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>All Products</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Solution</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Service</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Support</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Company</p></Link>
</div>

</div>



    </>
  )
}

export default Navbar;