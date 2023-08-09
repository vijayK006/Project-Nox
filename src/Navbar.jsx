import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { PiPhoneCall } from 'react-icons/pi';
import { AiOutlineGlobal, AiOutlineMenu } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsPersonGear,  BsCart3 } from 'react-icons/bs';
import { TiBackspaceOutline } from 'react-icons/ti';

import logoIcon from './img/logo/navlogo.png'; 

const Navbar = () => {

const OpenCloseMenu =()=>{
    document.getElementById('mobile_Setting').classList.toggle("openmenu");

}

const allProduct =()=>{
    document.getElementById('mobile_Setting_all_product').style.left="0%";
}

const series1btn =()=>{
    document.getElementById('series1').style.left="0%";
}

const series2btn =()=>{
    document.getElementById('series2').style.left="0%";
}

const series3btn =()=>{
    document.getElementById('series3').style.left="0%";
}

const series4btn =()=>{
    document.getElementById('series4').style.left="0%";
}

const series5btn =()=>{
    document.getElementById('series5').style.left="0%";
}

const series6btn =()=>{
    document.getElementById('series6').style.left="0%";
}

const series7btn =()=>{
    document.getElementById('series7').style.left="0%";
}

const series8btn =()=>{
    document.getElementById('series8').style.left="0%";
}

const series9btn =()=>{
    document.getElementById('series9').style.left="0%";
}

const series10btn =()=>{
    document.getElementById('series10').style.left="0%";
}

const series11btn =()=>{
    document.getElementById('series11').style.left="0%";
}

const series12btn =()=>{
    document.getElementById('series12').style.left="0%";
}

const series13btn =()=>{
    document.getElementById('series13').style.left="0%";
}

const series14btn =()=>{
    document.getElementById('series14').style.left="0%";
}

const series15btn =()=>{
    document.getElementById('series15').style.left="0%";
}

const series16btn =()=>{
    document.getElementById('series16').style.left="0%";
}

const series17btn =()=>{
    document.getElementById('series17').style.left="0%";
}

const series18btn =()=>{
    document.getElementById('series18').style.left="0%";
}

const series19btn =()=>{
    document.getElementById('series19').style.left="0%";
}

const series20btn =()=>{
    document.getElementById('series20').style.left="0%";
}

const series21btn =()=>{
    document.getElementById('series21').style.left="0%";
}

const series22btn =()=>{
    document.getElementById('series22').style.left="0%";
}

const series23btn =()=>{
    document.getElementById('series23').style.left="0%";
}

const series24btn =()=>{
    document.getElementById('series24').style.left="0%";
}

const series25btn =()=>{
    document.getElementById('series25').style.left="0%";
}

const series26btn =()=>{
    document.getElementById('series26').style.left="0%";
}

const series27btn =()=>{
    document.getElementById('series27').style.left="0%";
}

const series28btn =()=>{
    document.getElementById('series28').style.left="0%";
}

const series29btn =()=>{
    document.getElementById('series29').style.left="0%";
}

const series30btn =()=>{
    document.getElementById('series30').style.left="0%";
}



const close_menu =()=>{
    document.getElementById('mobile_Setting_all_product').style.left="-100%";
}

const close_menu1 =()=>{
    document.getElementById('series1').style.left="-100%";
}

const close_menu2 =()=>{
    document.getElementById('series2').style.left="-100%";
}

const close_menu3 =()=>{
    document.getElementById('series3').style.left="-100%";
}

const close_menu4 =()=>{
    document.getElementById('series4').style.left="-100%";
}

const close_menu5 =()=>{
    document.getElementById('series5').style.left="-100%";
}

const close_menu6 =()=>{
    document.getElementById('series6').style.left="-100%";
}

const close_menu7 =()=>{
    document.getElementById('series7').style.left="-100%";
}

const close_menu8 =()=>{
    document.getElementById('series8').style.left="-100%";
}

const close_menu9 =()=>{
    document.getElementById('series9').style.left="-100%";
}

const close_menu10 =()=>{
    document.getElementById('series10').style.left="-100%";
}

const close_menu11 =()=>{
    document.getElementById('series11').style.left="-100%";
}

const close_menu12 =()=>{
    document.getElementById('series12').style.left="-100%";
}

const close_menu13 =()=>{
    document.getElementById('series13').style.left="-100%";
}

const close_menu14 =()=>{
    document.getElementById('series14').style.left="-100%";
}

const close_menu15 =()=>{
    document.getElementById('series15').style.left="-100%";
}

const close_menu16 =()=>{
    document.getElementById('series16').style.left="-100%";
}

const close_menu17 =()=>{
    document.getElementById('series17').style.left="-100%";
}

const close_menu18 =()=>{
    document.getElementById('series18').style.left="-100%";
}

const close_menu19 =()=>{
    document.getElementById('series19').style.left="-100%";
}

const close_menu20 =()=>{
    document.getElementById('series20').style.left="-100%";
}

const close_menu21 =()=>{
    document.getElementById('series21').style.left="-100%";
}

const close_menu22 =()=>{
    document.getElementById('series22').style.left="-100%";
}

const close_menu23 =()=>{
    document.getElementById('series23').style.left="-100%";
}

const close_menu24 =()=>{
    document.getElementById('series24').style.left="-100%";
}

const close_menu25 =()=>{
    document.getElementById('series25').style.left="-100%";
}

const close_menu26 =()=>{
    document.getElementById('series26').style.left="-100%";
}

const close_menu27 =()=>{
    document.getElementById('series27').style.left="-100%";
}

const close_menu28 =()=>{
    document.getElementById('series28').style.left="-100%";
}

const close_menu29=()=>{
    document.getElementById('series29').style.left="-100%";
}

const close_menu30=()=>{
    document.getElementById('series30').style.left="-100%";
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
<a href='tel:+91 80-41622171' style={{textDecoration:"none"}}>
<p className='margin-0-lineHeight'><PiPhoneCall style={{marginBottom:"5px", fontSize:"18px"}}/> Contact Us</p>
</a>
    </div>

</div>
</div>
    </div>


<div className='navbar-top'>

<div className='nav-icon-tab'>
<Link to="/">

    <img src={logoIcon} className='logo_icon' alt='logo'/>
    </Link>
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
<Link to="/10G-Loopback-Product" style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP+ 10G Loopback</p></Link>
<Link to="/25G-Loopback-Product" style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP28 25G Loopback</p></Link>
<Link to="/100G-Loopback-Product" style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP28 100G Loopback</p></Link>
<Link to="/200G-Loopback-Product" style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP56 200G Loopback</p></Link>
<Link  to="/400G-Loopback-Product" style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP-DD 400G Loopback</p></Link>
<Link to="/40G-Loopback-Product" style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP+ 40G Loopback</p></Link>


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
<Link to="/Product_40G_eSR4" style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-eSR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SRBD</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-IR4</p></Link>
<Link to="/Products_40G_LR4" style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-LR4</p></Link>
    </div>
    <div className='col-lg-6'>
    <Link to="/Product_40G_ER4" style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-ER4</p></Link>
<Link  style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-ZR4</p></Link>
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
<Link to="/DualDuplex1X9" style={{textDecoration:"none"}}><p className='menu-inner-items'>1.25G 1X9 DUAL</p></Link>
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

   <Link to="" style={{color:"black", textDecoration:"none"}}><li className='n-items'>Solution</li></Link> 
   <Link to="" style={{color:"black", textDecoration:"none"}}><li className='n-items'>Service</li></Link> 
   <Link to="" style={{color:"black", textDecoration:"none"}}><li className='n-items'>Support</li></Link> 

   <Link to="/AboutUs" style={{color:"black", textDecoration:"none"}}><li className='n-items'>About Us</li></Link> 


</ul>


<div className='n'>

<div className='position-relative hover-parent'>
<IoNotificationsOutline className='nav-icons'/>

<div className='notification_card-hover'>
<h5>Notifications</h5>
</div>
</div>

<div className='position-relative hover-parent'>
<BsPersonGear className='nav-icons'/>

<div className='sign_card-hover'>
<Link to="" style={{textDecoration:"none"}}><p className='sign-content-link'>My Account</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='sign-content-link'>Orders</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='sign-content-link'>Invoice & Credits</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='sign-content-link'>Saved Carts</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='sign-content-link'>Quotes</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='sign-content-link'>Returns</p></Link>

<Link style={{textDecoration:"none"}} to=""><p className='button-sign-red'>Sign In</p></Link>
<Link style={{textDecoration:"none"}} to=""><p className='button-sign-default'>Create Account</p></Link>
</div>
</div>

<div className='position-relative hover-parent'>
<BsCart3 className='nav-icons'/>

<div className='cart_card-hover'>
</div>
</div>

<AiOutlineMenu className='nav-icons only-small' onClick={OpenCloseMenu}/>
</div>

</div>
    </div>



<div className='mobile-navbar' id='mobile_Setting'>

<div className="mobile-navbarcontent">
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={allProduct}>All Products</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Solution</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Service</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Support</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Company</p></Link>
</div>

<div className='mobile-nav-all_product' id='mobile_Setting_all_product'>
<TiBackspaceOutline className='close_icon' onClick={close_menu}/>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series1btn}>LOOPBACK SERIES</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series2btn}>400G QSFP-DD OSFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series3btn}>200G QSFP56 QSFP-DD</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series4btn}>100G CFP CFP2 CFP4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series5btn}>100G QSFP28</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series6btn}>40G QSFP+</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series7btn}>25G SFP28</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series8btn}>16GFC SFP+ ( 14.025G )</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series9btn}>RJ45 Copper Series</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series10btn}>10G X2</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series11btn}>10G Xenpak</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series12btn}>10G XFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series13btn}>8GFC SFP+</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series14btn}>6G SFP+</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series15btn}>4G SFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series16btn}>2.5G SFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series17btn}>1.25G SFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series18btn}>1.25G CSFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series19btn}>1.25G GBIC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series20btn}>2X5 SFF</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series21btn}>PON SFP   SFP+</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series22btn}>1X9</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series23btn}>125M 155M SFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series24btn}>10G SFP+</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series25btn}>622M SFP</p></Link>

<h4 className='mob-nav-items'>FIBER OPTICAL CABLE CONTENT</h4>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series26btn}>AOC (Active Optical Cable)</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series27btn}>DAC (Direct-Attach Cable)</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series28btn}>Indoor Patch-cord   Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series29btn}>Outdoor Patch-cord   Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={series30btn}>MPO Patch-cord   Cassette</p></Link>


</div>

<div className='mobile-nav-all_product' id='series1'>
<TiBackspaceOutline className='close_icon' onClick={close_menu1}/>

<Link to="/10G-Loopback-Product" style={{textDecoration:"none"}}><p className='mob-nav-items'>SFP+ 10G Loopback</p></Link>
<Link to="/25G-Loopback-Product" style={{textDecoration:"none"}}><p className='mob-nav-items'>SFP28 25G Loopback</p></Link>
<Link to="/40G-Loopback-Product" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G Loopback</p></Link>
<Link to="/100G-Loopback-Product" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28 100G Loopback</p></Link>
<Link to="/200G-Loopback-Product" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP56 200G Loopback</p></Link>
<Link to="/400G-Loopback-Product" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP-DD 400G Loopback</p></Link>
</div>

<div className='mobile-nav-all_product' id='series2'>
<TiBackspaceOutline className='close_icon' onClick={close_menu2}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>400G OSFP SR8</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>400G QSFP-DD SR8 PAM4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>400G QSFP-DD DR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>400G QSFP-DD FR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>400G QSFP-DD LR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>400G QSFP-DD ER4</p></Link>
</div>

<div className='mobile-nav-all_product' id='series3'>
<TiBackspaceOutline className='close_icon' onClick={close_menu3}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>200G QSFP-DD SR8</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>200G QSFP56 SR4</p></Link>

</div>

<div className='mobile-nav-all_product' id='series4'>
<TiBackspaceOutline className='close_icon' onClick={close_menu4}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>100G CFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>100G CFP2</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>100G CFP4</p></Link>

</div>

<div className='mobile-nav-all_product' id='series5'>
<TiBackspaceOutline className='close_icon' onClick={close_menu5}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-SR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-eSR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-SRBD</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-PSM4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-DR1/FR1/LR1</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-LR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-ER4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-ZR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-CWDM4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-BIDI-4WDM-20</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28-100G-BIDI-10 / 20 / 30 / 40</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP28 to SFP28 Adapter</p></Link>

</div>

<div className='mobile-nav-all_product' id='series6'>
<TiBackspaceOutline className='close_icon' onClick={close_menu6}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-SR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-eSR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-SRBD</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-IR4</p></Link>
<Link to="/Products_40G_LR4" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-LR4</p></Link>
<Link to="/Product_40G_ER4" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-ER4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-ZR4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-SWDM4</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-PSM4-IR</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>QSFP+ 40G-PSM4-LR</p></Link>

</div>

<div className='mobile-nav-all_product' id='series7'>
<TiBackspaceOutline className='close_icon' onClick={close_menu7}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 SR</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 LR</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 LWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 DWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>32GFC SFP28 SW</p></Link>


</div>

<div className='mobile-nav-all_product' id='series8'>
<TiBackspaceOutline className='close_icon' onClick={close_menu8}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>16GFC SFP+ SW</p></Link>


</div>

<div className='mobile-nav-all_product' id='series9'>
<TiBackspaceOutline className='close_icon' onClick={close_menu9}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>SFP-100TX</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>SFP-1000T</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>SFP+ 10G-T</p></Link>


</div>

<div className='mobile-nav-all_product' id='series10'>
<TiBackspaceOutline className='close_icon' onClick={close_menu10}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G X2 DUAL</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G X2 CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G X2 DWDM</p></Link>


</div>

<div className='mobile-nav-all_product' id='series11'>
<TiBackspaceOutline className='close_icon' onClick={close_menu11}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XENPAK DUAL</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XENPAK CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XENPAK DWDM</p></Link>


</div>

<div className='mobile-nav-all_product' id='series12'>
<TiBackspaceOutline className='close_icon' onClick={close_menu12}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XFP DWDM Tunable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XFP DWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XFP CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XFP BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XFP DUAL</p></Link>


</div>

<div className='mobile-nav-all_product' id='series13'>
<TiBackspaceOutline className='close_icon' onClick={close_menu13}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>8GFC SFP+ DUAL</p></Link>



</div>

<div className='mobile-nav-all_product' id='series14'>
<TiBackspaceOutline className='close_icon' onClick={close_menu14}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>6G SFP+ DUAL</p></Link>



</div>

<div className='mobile-nav-all_product' id='series15'>
<TiBackspaceOutline className='close_icon' onClick={close_menu15}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>4.25G SFP DUAL</p></Link>



</div>

<div className='mobile-nav-all_product' id='series16'>
<TiBackspaceOutline className='close_icon' onClick={close_menu16}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>2.5G SFP DWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>2.5G SFP CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>2.5G SFP BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>2.5G SFP DUAL</p></Link>



</div>

<div className='mobile-nav-all_product' id='series17'>
<TiBackspaceOutline className='close_icon' onClick={close_menu17}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G SFP DWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G SFP CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G SFP BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G SFP BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G SFP DUAL</p></Link>



</div>

<div className='mobile-nav-all_product' id='series18'>
<TiBackspaceOutline className='close_icon' onClick={close_menu18}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G CSFP Dual Bidi LC</p></Link>



</div>

<div className='mobile-nav-all_product' id='series19'>
<TiBackspaceOutline className='close_icon' onClick={close_menu19}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G GBIC SC</p></Link>



</div>

<div className='mobile-nav-all_product' id='series20'>
<TiBackspaceOutline className='close_icon' onClick={close_menu20}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>125M/1.25G 2X5 SFF</p></Link>



</div>

<div className='mobile-nav-all_product' id='series21'>
<TiBackspaceOutline className='close_icon' onClick={close_menu21}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G XG/XGS PON</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G EPON</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>2.5G GPON SFP</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G EPON SFP</p></Link>



</div>

<div className='mobile-nav-all_product' id='series22'>
<TiBackspaceOutline className='close_icon' onClick={close_menu22}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G 1X9 BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>1.25G 1X9 DUAL</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>125/155M 1X9 CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>125/155M 1X9 BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Ultra-Low Data-Rate 1X9 DC~10Mbps</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>125/155M 1X9 DUAL</p></Link>

</div>

<div className='mobile-nav-all_product' id='series24'>
<TiBackspaceOutline className='close_icon' onClick={close_menu24}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>SFP+ DWDM Tunable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G SFP+ DWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G SFP+ CWDM</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G SFP+ BIDI</p></Link>

</div>



<div className='mobile-nav-all_product' id='series25'>
<TiBackspaceOutline className='close_icon' onClick={close_menu25}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>622M SFP BIDI</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>622M SFP DUAL</p></Link>


</div>

<div className='mobile-nav-all_product' id='series26'>
<TiBackspaceOutline className='close_icon' onClick={close_menu26}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G SFP+ AOC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 AOC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>40G QSFP+ AOC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>100G QSFP28 AOC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>200G QSFP56 AOC</p></Link>

</div>

<div className='mobile-nav-all_product' id='series27'>
<TiBackspaceOutline className='close_icon' onClick={close_menu27}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>10G SFP+ DAC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>25G SFP28 DAC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>40G QSFP+ DAC</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>100G QSFP28 DAC</p></Link>


</div>

<div className='mobile-nav-all_product' id='series28'>
<TiBackspaceOutline className='close_icon' onClick={close_menu28}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Armored Breakout Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Breakout Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Mini Distribution Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>General Patch-cord</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Energy Chain Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>High Strength and Suppleness Patch-cord</p></Link>

</div>

<div className='mobile-nav-all_product' id='series29'>
<TiBackspaceOutline className='close_icon' onClick={close_menu29}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Armored Patch-cord / Armored Breakout Cable</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>FTTA Waterproof Cable for Mobile Base Station</p></Link>
<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>Military Tactical Waterproof Cable</p></Link>


</div>

<div className='mobile-nav-all_product' id='series30'>
<TiBackspaceOutline className='close_icon' onClick={close_menu30}/>

<Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items'>MPO PatchCord</p></Link>



</div>

</div>



    </>
  )
}

export default Navbar;