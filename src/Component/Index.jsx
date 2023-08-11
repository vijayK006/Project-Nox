import React from 'react'

import { Link } from 'react-router-dom';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from '../Navbar';
import Footer from '../Footer';

import bannerImg1 from '../img/banner1.jpg'
import bannerImg2 from '../img/banner2.jpg'
import bannerImg3 from '../img/banner3.jpg'

// FiberOptical Images
import aocImg from '../img/products/AOC.jpg';
import dacImg from '../img/products/DAC.jpg';
import ipcImg from '../img/products/indoorPathCord.jpg';
import mpoImg from '../img/products/mpoPactCord.jpg';
import opcImg from '../img/products/outdoorPathCord.jpg';
import loopbackcableImg from '../img/products/loopbackcable.jpg';
import tcable1 from '../img/products/transceiverCable1.jpg';
import tcable3 from '../img/products/transceiverCable2.jpg';
import tcable2 from '../img/products/transceiverCable3.jpg';



// Certification
import houseImg from '../img/wherehouse.jpg';
import randdImg from '../img/RandD.jpg';
import envtestingImg from '../img/environmenttest.jpg';
import qtyassureImg from '../img/qualityasssurance.jpg';
import compatibilityImg from '../img/compatibility.jpg';
import solutionTestImg from '../img/solutionTest.jpg';

// Customer
import customer1Img from '../img/customer1.jpg'
import customer2Img from '../img/customer2.jpg'
import customer3Img from '../img/customer3.jpg'

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
        <h3>NX Optics</h3>
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
   <ul class="navs nav-pills" role="tablist">
   
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Fiber Optical Cable / Patch-cord</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Loop-back Series</a>
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
        <img src={aocImg} className='product-cart-img' alt="myproducts"/>
      <h5>AOC (Active Optical Cable)</h5>

      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={dacImg} className='product-cart-img' alt="myproducts"/>
      <h5>DAC (Direct-Attach Cable)</h5>
   
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={ipcImg} className='product-cart-img' alt="myproducts"/>
      <h5>Indoor Patch-cord / Cable</h5>
 
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={opcImg} className='product-cart-img' alt="myproducts"/>
      <h5>Outdoor Patch-cord / Cable</h5>

      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={mpoImg} className='product-cart-img' alt="myproducts"/>
      <h5>MPO Patch-cord / Cassette</h5>

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
        <img src={loopbackcableImg} className='product-cart-img' alt="myproducts"/>
      <h5>QSFP+ 40G Loopback</h5>

      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={loopbackcableImg} className='product-cart-img' alt="myproducts"/>
      <h5>QSFP28 100G Loopback</h5>
 
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={loopbackcableImg} className='product-cart-img' alt="myproducts"/>
      <h5>QSFP56 200G Loopback</h5>

      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={loopbackcableImg} className='product-cart-img' alt="myproducts"/>
      <h5>QSFP-DD 400G Loopback</h5>

      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={loopbackcableImg} className='product-cart-img' alt="myproducts"/>
      <h5>SFP+ 10G Loopback</h5>

      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={loopbackcableImg} className='product-cart-img' alt="myproducts"/>
      <h5>SFP28 25G Loopback</h5>
 
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
        <img src={tcable1} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className='product-card'>
        <img src={tcable2} className='product-cart-img' alt="myproducts"/>
      <h5>Compact 2CH Bidi Transceiver</h5>
      <p> - Compliant with IEEE802.3ah 1000BASE-BX10-D</p>
      <p> - Compliant with Fiber Channel 100-SM-LZ-L</p>
      <p> - Hot Pluggable</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={tcable3} className='product-cart-img' alt="myproducts"/>
      <h5>BX-U Transceiver</h5>
      <p> - Compliant with IEEE802.3z Gigabit Ethernet</p>
      <p> - Compatible with Fiber Channel 100-SM-LC-L</p>
      <p> - Link budget 19dB over SM fiber</p>
      </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='product-card'>
        <img src={tcable2} className='product-cart-img' alt="myproducts"/>
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

{/* Certification Section Start */}

<section className='container pt-lg-5 pb-lg-5 pt-3 pb-3'>
<h3 className='text-center section-heading pt-4 pb-4'>NX Optics Certified</h3>

<div className='row'>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={houseImg} alt="Avatar" className='certifyImg'/>
      <p className='flip-heading'>World-class Warehouses</p>
    </div>
    <div class="flip-card-back">
    <div className='content'>
      <p style={{textAlign:"justify"}}>As a global top-tier optical manufacturer, FS has 500,000+ sq. 
ft warehouses in more than 200 countries to meet 
urgent and unpredictable needs around the world.</p>
    </div>

<div className='d-flex justify-content-center content-btn'>
<button type='button' className='btn btn-danger'>Learn More</button>

</div>

    </div>
  </div>
</div>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={randdImg} alt="Avatar" className='certifyImg'/>
      <p className='flip-heading'>Advanced R & D Center</p>
    </div>
    <div class="flip-card-back">
    <div className='content'>
      <p style={{textAlign:"justify"}}>FS R&D center focuses on analyzing 
      customer and market demands. Collaborating with leading strategic 
      R&D partners contributed to advanced outcomes.</p>
    </div>

<div className='d-flex justify-content-center content-btn'>
<button type='button' className='btn btn-danger'>Learn More</button>

</div>

    </div>
  </div>
</div>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={envtestingImg} alt="Avatar" className='certifyImg'/>
      <p className='flip-heading'>Environment Testing</p>
    </div>
    <div class="flip-card-back">
    <div className='content'>
      <p style={{textAlign:"justify"}}>All products have passed stability, 
      compatibility and performance tests in industry authoritative-equipment 
      to ensure high quality.</p>
    </div>

<div className='d-flex justify-content-center content-btn'>
<button type='button' className='btn btn-danger'>Learn More</button>

</div>

    </div>
  </div>
</div>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={qtyassureImg} alt="Avatar" className='certifyImg'/>
      <p className='flip-heading'>Quality Assurance</p>
    </div>
    <div class="flip-card-back">
    <div className='content'>
      <p style={{textAlign:"justify"}}>Each product has been tested for 
      compatibility and performance on host devices and obtained many international 
      certifications such as ISO, CE, RoHS, etc.</p>
    </div>

<div className='d-flex justify-content-center content-btn'>
<button type='button' className='btn btn-danger'>Learn More</button>

</div>

    </div>
  </div>
</div>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={compatibilityImg} alt="Avatar" className='certifyImg'/>
      <p className='flip-heading'>Perfect Compatibility</p>
    </div>
    <div class="flip-card-back">
    <div className='content'>
      <p style={{textAlign:"justify"}}>Our in-house coding facility programs 
      all of our parts to standard OEM specs, and creates unique coding for 
      customized networking solutions.</p>
    </div>

<div className='d-flex justify-content-center content-btn'>
<button type='button' className='btn btn-danger'>Learn More</button>

</div>

    </div>
  </div>
</div>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={solutionTestImg} alt="Avatar" className='certifyImg'/>
      <p className='flip-heading'>Standard Solution Test</p>
    </div>
    <div class="flip-card-back">
    <div className='content'>
      <p style={{textAlign:"justify"}}>Adopt professional instruments to 
      solve test requirements with high quality. Verify the feasibility of 
      the solutions in real test scenarios with abundant products and devices.</p>
    </div>

<div className='d-flex justify-content-center content-btn'>
<button type='button' className='btn btn-danger'>Learn More</button>

</div>

    </div>
  </div>
</div>
  </div>


</div>

</section>

{/* Customer Section End */}



<section className='container pt-lg-5 pb-lg-5 pt-3 pb-3'>
<h3 className='text-center section-heading pt-4 pb-4'>Customer Successs</h3>

<div className='row pt-lg-5 pt-2'>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
<div className='customer-card'>
<img src={customer1Img} alt='avatr' className='customerImgstl'/>
<div className='cus-content pt-2'>
  <span>Internet Service | Germany</span>

  <p className='pt-4'>Efficient and High-quality Enterprise Network at NSK GmbH & Co. KG</p>

  <Link to="/" className='btn btn-danger'>Learn More</Link>
</div>
</div>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
<div className='customer-card'>
<img src={customer2Img} alt='avatr' className='customerImgstl'/>
<div className='cus-content pt-2'>
  <span>Internet Service | Netherland</span>

  <p className='pt-4'>Copaco NV Enjoyed Great Experiences with Data Center Connectivity Solution</p>

  <Link to="/" className='btn btn-danger'>Learn More</Link>
</div>
</div>
  </div>


  <div className='col-lg-4 col-md-6 col-sm-12 pt-1 pb-1'>
<div className='customer-card'>
<img src={customer3Img} alt='avatr' className='customerImgstl'/>
<div className='cus-content pt-2'>
  <span>Retail | United Kingdom</span>

  <p className='pt-4'>Buy it Direct Optimized Warehouse Network Reliability under Cabling Limitations</p>

  <Link to="/" className='btn btn-danger'>Learn More</Link>
</div>
</div>
  </div>

 

</div>

</section>

{/* Customer Section End */}


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

<Footer/>

    </>
 
  )
}

export default Index;