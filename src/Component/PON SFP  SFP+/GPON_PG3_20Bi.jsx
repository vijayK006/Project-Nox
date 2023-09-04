
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../img/products/PON SFP  SFP+/GPON_PG3_20BImg.jpg'

import funcDiagram from '../../img/products/PON SFP  SFP+/FunctionDiagram_PG3_20B.png';
import pinassisment from '../../img/products/PON SFP  SFP+/PinAssigment.jpg';
import machdimenssion from '../../img/products/PON SFP  SFP+/mechDimenssion_PG3_20B.png';
import Memorymap from '../../img/products/2.5_SFP/CWDM_MemoryMap.jpg';
import timingSeq from '../../img/products/PON SFP  SFP+/TranmitterTiming.png';
import applicationCiruit from '../../img/products/PON SFP  SFP+/applicationCircuit.png';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import {TiTickOutline} from 'react-icons/ti';


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const GPON_PG3_20Bi = () => { 

  let PartNumber = "NXOSPP-Cx-PG3-20Bi";
  let productName ="GPON ONU B+ 1.244G-Tx / 2.488G-Rx SFP Transceiver Hot Pluggable, Bidi SC, Tx1310nm DFB / Rx1490nm APD, SMF 20KM, DDM";

  const [name, setName] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userMessage, setuserMessage] = useState("");

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s6yscqg', 'template_nnkudli', form.current, 'ctLMl35oWO-hYo21q')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent :)");
          document.getElementById('successMsg').style.top="0px";
    
          setName("");
          setmobNumber("");
          setuserEmail("");
          setuserMessage("");

      }, (error) => {
          console.log(error.text);
      });
  }; 


  const hidePop = ()=>{
    document.getElementById("successMsg").style.top="-100%";
      }

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

<p className='sell-text'>{PartNumber}</p>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/>  In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with ITU-T G.984.2/984.5 GPON</p>
<p className='listFeture'>Compliant with SFP MSA</p>
<p className='listFeture'>Compliant with SFF8472 diagnostic monitoring interface</p>
<p className='listFeture'>1244 Mbps Burst mode transmission</p>
<p className='listFeture'>2488 Mbps Continuous mode receiver</p>
<p className='listFeture'>1310nm DFB laser transmitter</p>
<p className='listFeture'>1490nm APD-TIA receiver</p>
<p className='listFeture'>Simplex SC/UPC or SC/APC connector</p>
<p className='listFeture'>Transmitter Burst On (optional high active or low active)</p>
<p className='listFeture'>Transmitter state indication (TX_SD)</p>
<p className='listFeture'>Receiver state indication (optional RX_SD or Rx_LOS)</p>
<p className='listFeture'>Industrial temperature -40~85°C available</p>
<p className='listFeture'>Single +3.3V power supply</p>
<p className='listFeture'>Link distance 20km over SM fiber</p>
<p className='listFeture'>RoHS Compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>GPON ONU for P2MP Application</p>
<p className='listFeture'>FTTx Application</p>



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

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostic Functions</a>
    </li>

  </ul> 
</div>
</div>



  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
    <div class="container mt-3">
  <h2>Overview</h2>
  
 <p>
{PartNumber} Small Form Factor Pluggable SFP transceivers are compliant with the current SFP
Multi-Source Agreement (MSA) Specification. The high performance uncooled 1310nm DFB transmitter and high sensitivity 1490nm APD receiver provide
superior performance for GPON ONU Class B+ applications.
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
          <td>5</td>
          <td>95</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>-0.5</td>
          <td>+4.0</td>
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
          <td>Case Operating Temp.(NXOSPP-Cx-PG3-20B)</td>
          <td>Top</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Case Operating Temp.(NXOSPP-Cx-PG3-20Bi)</td>
          <td>Top</td>
          <td>-40</td>
          <td>-</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Current </td>
          <td>Icc</td>
          <td></td>
          <td>200</td>
          <td>400</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Damage Threshold for Receiver </td>
          <td></td>
          <td>+4</td>
          <td></td>
          <td></td>
          <td>dBm</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" class="container tab-pane fade"><br/>
    <div class="container mt-3">
  <h2>Digital Diagnostic Functions</h2>

  <p>As defined by the SFP MSA (SFF-8472) NXO SFP transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters
</p>
 
  <ul>
    <li>Transceiver temperature</li>
    <li>Laser bias current</li>
    <li>Transmitted optical power</li>
    <li>Received optical power</li>
    <li>Transceiver supply voltage</li>
  </ul>

  <p>It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range.
</p>

<p>

The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the SFP transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the SFP transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The memories are organized as a series of 8-bit data words that can be addressed individually or sequentially.

</p>

<p><b>For more detailed information including memory map definitions, please see the SFP MSA (SFF-8472) Specification.
</b></p>

</div>
 </div>

  </div>
</div>


{/* Function Diagram*/}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Function Diagram</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={funcDiagram} className='sectionImg2_2' alt="memorymapImg"/>
</div>

</div>


{/* Timing Sequence */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Burst Mode Transmitter Timing</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={timingSeq} className='sectionImg2_2' alt="memorymapImg"/>
</div>

</div>

{/* Pin Assigment*/}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ pinassisment} className='sectionImg2_1' alt="memorymapImg"/>
</div>

</div>

{/* Application Circuit Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Application Circuit</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ applicationCiruit} className='sectionImg2_1' alt="memorymapImg"/>
</div>

</div>

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Digital Diagnostic Memory Map</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ Memorymap} className='sectionImg2_1' alt="memorymapImg"/>
</div>
<br/>
<br/>

</div>


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={machdimenssion} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



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
<div className='col-md-6 col-sm-12'>
<label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' value={PartNumber} id='setName' name='Partno' readOnly/>
</div>
<div className='col-md-6 col-sm-12'>
<label>Your Product Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productName} name="productname" readOnly/>

      </div>
    </div>

 <input type='text' className='form-control mt-2 mb-2'  value={name}  onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' name="user_name" required/>
        <div className='row'>
<div className='col-6'>
<input type='number' className='form-control mt-2 mb-2' value={mobNumber}  onChange={(e) => setmobNumber(e.target.value)} placeholder='Enter Your Mobile Number' name="mobileno" required/>
</div>
<div className='col-6'>
<input type='email' className='form-control mt-2 mb-2' value={userEmail}  onChange={(e) => setuserEmail(e.target.value)} placeholder='Enter Your Email' name="email" required/>

      </div>
    </div>
      
       <textarea rows="2" cols='2' className='form-control' value={userMessage}  onChange={(e) => setuserMessage(e.target.value)} placeholder='Enter Your Message' name='message' required></textarea>
<input type='submit' className='btn btn-danger mt-2' value="Send" style={{width:"200px"}}/>
      </form>
       </div>



    </div>
  </div>

  <div className="message-sent" id="successMsg">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
  </div>

</div>


</div>

</div>
    </>
  )
}

export default GPON_PG3_20Bi;