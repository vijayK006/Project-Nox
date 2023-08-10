import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../img/products/100G QSFP28/100G_SR4_1.jpg'

import transcrve from '../../img/products/100G QSFP28/TransciverSR4-2.jpg';
import pinassisment from '../../img/products/100G QSFP28/AssesmentSR4_3.jpg';
import machdimenssion from '../../img/products/100G QSFP28/mechanical-5.jpg';
import Memorymap from '../../img/products/100G QSFP28/memorymap_4.jpg';
import opticalInterface from "../../img/products/40GQSFP+/optical.png";
import powersupply from "../../img/products/100G QSFP28/powersupply_7.jpg";

import Navbar from '../../Navbar';
import Footer from '../../Footer';



import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Product_100G_SR4 = () => { 

  let pathNumber = "NXOQ28-K9-M85-X1D";
  let productName ="100G QSFP28 SR4 Transceiver Hot Pluggable, MPO / MTP, 850nm VCSEL, MMF 100M, DDM";

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s6yscqg', 'template_nnkudli', form.current, 'ctLMl35oWO-hYo21q')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent :)");

      }, (error) => {
          console.log(error.text);
      });
  }; 
  return (
<>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={productImg1} className='img-main' alt="product-40GLoobBack"/>

</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' />
      )}
    </Item>
   
  </Gallery>
</div>


<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal"><BsCartCheck style={{marginBottom:"5px"}}/> Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>
{productName}
</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<p className='sell-text'>{pathNumber}</p>
</div>

<div className='sub-content'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> 54 In Global Warehouse</p>
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>



<p className='listFeture'>Compliant with IEEE802.3bm 100GBASE-SR4

</p>
<p className='listFeture'>Compliant with SFF-8665 QSFP28 MSA

</p>
<p className='listFeture'>Compliant with IEEE 802.3bm CAUI-4 Interface

</p>
<p className='listFeture'>4 independent full-duplex channels

</p>
<p className='listFeture'>Data Rate 25.78125Gbps per Lane
</p>
<p className='listFeture'>850nm VCSEL laser transmitter
</p>
<p className='listFeture'>Built in quad TX CDR and RX CDR

</p>
<p className='listFeture'>Hot Pluggable QSFP28 footprint
</p>
<p className='listFeture'>4CH 850nm VCSEL array transmitter

</p>
<p className='listFeture'>4CH PIN array receiver

</p>
<p className='listFeture'>MPO-12 receptacle connector

</p>
<p className='listFeture'>2-wire interface for management and diagnostic monitor compliant with SFF-8636

</p>
<p className='listFeture'>
Single 3.3V power supply

</p>
<p className='listFeture'>
Link distance 100m over OM4 fiber and 70m over MM OM3 fiber

</p>
<p className='listFeture'>
Maximum power consumption 2.5W

</p>
<p className='listFeture'>
RoHS compliant

</p>



<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>100GBASE-SR4 Ethernet @103.1G


</p>
<p className='listFeture'>Breakout to 4 x 25GBASE-SR Ethernet

</p>
<p className='listFeture'>Data Centers Switch Interconnect


</p>
<p className='listFeture'>Server and Storage Area Network Interconnect


</p>



</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='resp-overflow'>
    <div className='d-flex justify-content-center'>
       <ul class="navs nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

 

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
    </li>

  </ul> 
</div>
</div>



  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
    <div class="container mt-3">
  <h2>Overview</h2>
  
 <p>
NXOQ28-K9-M85-X1D is a parallel fiber optical transceiver module for 103.1Gbps data transmission applications at 850nm. It is ideally suited for datacom & storage area network (SAN/NAS) applications based on IEEE 802.3ba 100GBASE-SR4 standard. Designed for short range multi-lane data communication, the QSFP28 full-duplex optical module with MPO-12 receptacle integrates four independent transmitter and receiver channels each capable 25.78125Gbps operation for an aggregate data rate of 103.1Gbps up to MMF OM4 100m optical links.

</p>
</div>
</div>

<div id="menu1" class="container tab-pane fade"><br/>
    <div class="container mt-3">
  <h2>Absolute Maximum Ratings</h2>
  
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min.</th>
          <th>Max.</th>
          <th>Unit</th>


        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Storage Temperature</td>
          <td>TST</td>
          <td>-40</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Storage Relative Humidity</td>
          <td>RH</td>
          <td>0</td>
          <td>85</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>VCC3</td>
          <td>-0.5</td>
          <td>+3.6</td>
          <td>V</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
</div>

 <div id="menu2" class="container tab-pane fade"><br/>
    <div class="container mt-3">
  <h2>Recommended Operating Conditions</h2>
  
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min.</th>
          <th>Typ.</th>
          <th>Max.</th>
          <th>Unit</th>


        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Case Operating Temperature</td>
          <td>TOP</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>VCC</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Data Rate, per Lane</td>
          <td>DR</td>
          <td>10.3125</td>
          <td>25.78125</td>
          <td></td>
          <td>Gb/s</td>
        </tr>

        <tr>
          <td>Data Rate Accuracy</td>
          <td>ΔDR</td>
          <td>-100</td>
          <td></td>
          <td>+100</td>
          <td>ppm</td>
        </tr>
          
        <tr>
          <td>Bit Error Rate</td>
          <td>BER</td>
          <td></td>
          <td></td>
          <td>5x5^-5</td>
          <td></td>
        </tr>

        <tr>
          <td>Supply Current</td>
          <td>ICC</td>
          <td></td>
          <td></td>
          <td>700</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Power Consumption</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>2.5</td>
          <td>W</td>
        </tr>
        
        <tr>
          <td>Transceiver Power-on Initialization Time</td>
          <td></td>
          <td></td>
          <td></td>
          <td>2000</td>
          <td>ms</td>
        </tr>
        <tr>
          <td>Control Input Voltage High</td>
          <td>VIH</td>
          <td>2.0</td>
          <td></td>
          <td>Vcc+0.3</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Control Input Voltage Low</td>
          <td>VIL</td>
          <td>VEE-0.3</td>
          <td></td>
          <td>0.8</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Control output Voltage High</td>
          <td>V0H</td>
          <td>2.0</td>
          <td></td>
          <td>Vcc+0.3</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Control Input Voltage Low</td>
          <td>VOL</td>
          <td>GND</td>
          <td></td>
          <td>0.4</td>
          <td>V</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
 </div>

  </div>
</div>


{/* Memory Map Section End */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={transcrve} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>
{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assisment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ pinassisment} className='sectionImg2_1' alt="memorymapImg"/>
</div>

</div>
{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Memory Map
</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Memorymap} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Transivers Block Diagram Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={machdimenssion} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>


{/* Transivers Block Diagram Section End */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Optical Interface Lanes and Assignment </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={opticalInterface} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* power supply */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powersupply} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>
<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<div class="modal fade" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
        <h4 class="modal-title">Enquire Now</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div class="modal-body">
      <form ref={form} onSubmit={sendEmail}>

      <div className='row'>
<div className='col-6'>
<label>Your Product Path Number</label>
<input type='text' className='form-control mt-2 mb-2' value={pathNumber} name='pathno' readOnly/>
</div>
<div className='col-6'>
<label>Your Product Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productName} name="productname" readOnly/>

      </div>
    </div>

 <input type='text' className='form-control mt-2 mb-2' placeholder='Enter Your Name' name="user_name" required/>
        <div className='row'>
<div className='col-6'>
<input type='number' className='form-control mt-2 mb-2' placeholder='Enter Your Mobile Number' name="mobileno" required/>
</div>
<div className='col-6'>
<input type='email' className='form-control mt-2 mb-2' placeholder='Enter Your Email' name="email" required/>

      </div>
    </div>
      
       <textarea rows="2" cols='2' className='form-control' placeholder='Enter Your Message' name='message' required></textarea>
<input type='submit' className='btn btn-danger mt-2' value="Send" style={{width:"200px"}}/>
      </form>
       </div>



    </div>
  </div>
</div>
    </>
  )
}

export default Product_100G_SR4;