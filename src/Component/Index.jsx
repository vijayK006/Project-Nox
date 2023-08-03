import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from '../Navbar';
import bannerImg1 from '../img/banner1.jpg'
import bannerImg2 from '../img/banner2.jpg'
import bannerImg3 from '../img/banner3.jpg'

// Cart Products
import product1 from '../img/products/pro1.jpg';
import product2 from '../img/products/pro2.jpg';
import product3 from '../img/products/pro3.jpg';
import product4 from '../img/products/pro4.jpg';

import { MdOutlineEngineering, MdOutlineAssuredWorkload, MdOutlineSwitchAccessShortcutAdd} from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';
import { TbTruckDelivery, TbMessageChatbot, TbMessage2 } from 'react-icons/tb';


 const Index =()=> {
  return (
    <>
<Navbar/>


{/*Carousel Banner Start*/}

<div id="demo" class="carousel slide leave-navbar" data-bs-ride="carousel">


  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bannerImg3} alt="Los Angeles" class="d-block bannerImgcover"/>
      <div class="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={bannerImg2} alt="Chicago" class="d-block bannerImgcover"/>
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div> 
    </div>
    <div class="carousel-item">
      <img src={bannerImg1} alt="New York" class="d-block bannerImgcover"/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>  
    </div>
  </div>
  

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

{/*Carousel Banner End*/}


{/* Tool */}

<div className='container-fluid pt-5 mt-5 pb-2'>

<div className='resp-overflow'>
<div className='d-flex justify-content-center'>
   <ul class="nav nav-pills" role="tablist">
   
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Networking</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Switching</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu2">Optical Transceivers</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu3">Fiber Optic Cables</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu4">Panels, Enclosures & Racks</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu5">WDM, OTN & PON</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu6">Copper Systems</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu7">Testers & Tools</a>
    </li>

  </ul>
</div>
</div>

 

  {/* <!-- Tab panes --> */}
  <div class="tab-content">

    <div id="home" class="container tab-pane active"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu1" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu2" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu3" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu4" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu5" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu6" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>

    <div id="menu7" class="container tab-pane fade"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
    </div>
  </div>
</div>



{/* Tool */}

{/* Why Us Section Start */}

<section className='container pt-lg-5 pb-lg-5 pt-3 pb-3'>
  <h3 className='text-center section-heading pt-4 pb-4'>Why Us?</h3>

  <div className='row'>

  <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <MdOutlineEngineering className="content-card-icon"/>

      </div>

<h5>Engineering Team</h5>

<p>With more than 1000 inherent experts, we help create smart networks 
that make optical operations easier, 
faster and more reliable.</p>
      </div>
    </div>
  

    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <MdOutlineAssuredWorkload className="content-card-icon"/>


      </div>

<h5>Reliability Assurance</h5>

<p>200+ precision testing equipments ensure each FS's products are tested to the exact 
specifications of our customer's environment 
with a significant level of reliability.</p>
      </div>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <MdOutlineSwitchAccessShortcutAdd className="content-card-icon"/>


      </div>

<h5>Cutting Edge</h5>

<p>FS prominently remains on the forefront of the latest fiber optic technologies, 
bringing third-party options in the latest 
advancements in 200G, 400G, 800G, PON, and more.</p>
      </div>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <BiPurchaseTag className="content-card-icon"/>


      </div>

<h5>Guarantee Purchase</h5>

<p>High-quality pre-sales, including solution customization, sample request, test reports, 
and perfect warranty & return policies 
allow you to enjoy worry-free experience.</p>
      </div>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <GrUserExpert className="content-card-icon"/>


      </div>

<h5>Expert Support</h5>

<p>24/5 around-the-clock customer service and technical support for tackling any complex issue anytime.</p>
      </div>
    </div>


    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <TbTruckDelivery className="content-card-icon"/>


      </div>

<h5>Delivery Excellence</h5>

<p>Fast shipping to India. Adequate stock is maintained, and timely & efficient shipping methods are supported.</p>
      </div>
    </div>

 
  </div>
</section>

{/* Why Us Section End */}

{/* Products Items Sections Start */}
<section className='bg-def2 pb-4 pt-4'>
  <div className='container pt-5 pb-5'>
<div className='row align-items-center'>
  <div className='col-lg-4 col-md-12 col-sm-12'>
  <h1 style={{    fontSize: '50px', color: '#bd0000'}}>The Products <br/> We Offer </h1>

  <button type='button' className='btn btn-outline-danger mt-5'>View More</button> 
  </div>
  <div className='col-lg-8 col-md-12 col-sm-12'>

  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
        }}
    >

      <SwiperSlide>
      <div className='product-card'>
        <img src={product1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={product2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={product4} className='product-cart-img' alt="myproducts"/>
      <h5>BASE-SX2 Transceiver</h5>
      <p> - Compatible with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-M5-LC-I</p>
      <p> - Duplex LC connector</p>
      </div>
      </SwiperSlide>
      

    </Swiper>
  </div>
</div>

</div>
</section>
{/* Products Items Sections End */}



{/* Question Section Start */}

<section className='bg-dif'>
<div className='container'>
  <div className='row align-items-center' >
    
    <div className='col-lg-4 col-md-12 col-sm-12'>
<h2>Question? <br/> We'r here to help.</h2>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12'>
<div className='d-felx '>
<TbMessage2 className="content-card-icon"/>
</div>
  <p>Contact Sales</p>
  <p>Get expert sales advice within 12 hours.</p>

    </div>

    <div className='col-lg-4 col-md-6 col-sm-12'>
<div className='d-felx '>
<TbMessageChatbot className="content-card-icon"/>

</div>
  <p>Chat with Us</p>
  <p>Chat with us now for a quick response.</p>

    </div>

    

  </div>
</div>
</section>

{/* Question Section End */}
    </>
 
  )
}

export default Index;