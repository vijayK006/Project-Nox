import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/RJ45 Copper Series/SFP_10-T_Y.jpg';


import memorymapimg from '../../img/products/25G SFP28/memoryMap.png'
import mchdimensionImg from '../../img/products/RJ45 Copper Series/SFP_10-T_Y_3.jpg'
import powerSupply from '../../img/products/100G QSFP28/PowerSupply.jpg'
import pinAssisment from '../../img/products/RJ45 Copper Series/SFP_10-T_Y_2.jpg'
import transcerve from '../../img/products/RJ45 Copper Series/SFP_100Tx_2.jpg'
import {TiTickOutline} from 'react-icons/ti';

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck,BsCartPlus } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'


const SFP_10G_T_Y38 = () => {
  let PartNumber = "NXO-HJ-T11-Y3";
  let productName = "10GBASE-T SFP+ Transceiver Hot Pluggable, RJ-45, Active Copper SFP+, 30M";

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
<img src={loopbackImg1} className='img-main' alt="product-40GLoobBack"/>
{/* <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'nox product image',
                            isFluidWidth: true,
                            src: loopbackImg1,
                        },
                        largeImage: {
                            src: loopbackImg1,
                            width: 1200,
                            height: 1800,
                            // opacity:1
                          
                        },
                        enlargedImageContainerDimensions: {
                          width: '150%',
                          height: '100%'
                      }
                    }} className='img-main'/> */}
</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' />
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
<h4>{productName}</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<div className='sell-text'>{PartNumber}</div>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with IEEE 802.3an, 802.3ab and 802.3z</p>
<p className='listFeture'>Compliant with SFF-8431, 8432 SFP+ MSA</p>
<p className='listFeture'>Support 10GBASE-T/ 5GBASE-T/ 2.5GBASE-T/ 1000BASE-T/ 100BASE-TX</p>
<p className='listFeture'>Hot Pluggable</p>
<p className='listFeture'>Auto-negotiates with other 10GBASE-T PHYs</p>
<p className='listFeture'>Auto-detect MDI/MDI-X</p>
<p className='listFeture'>Support RX_LOS function</p>
<p className='listFeture'>I2C 2-wire interface for serial ID</p>
<p className='listFeture'>RJ-45 connector</p>
<p className='listFeture'>Single +3.3V power supply</p>
<p className='listFeture'>10G link length up to 30m with Cat.6a/7, 2.5G/5G link length up to 50m with Cat.5E, 100M/1G link length up to 100m with Cat.5E</p>
<p className='listFeture'>RoHS Compliant</p>



<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>10GBASE-T Application


</p>



</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

 

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
    </li>


    {/* <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu4">Digital Diagnostic Functions</a>
    </li> */}

  </ul> 
</div>


  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
    <div class="container mt-3">
  <h2>Overview</h2>
  
 <p>

The NXO-HJ-Txx-Y3 Small Form Factor Pluggable SFP+ Copper transceivers are compliant with the current SFP+ Multi-Source Agreement (MSA)
Specification. The High performance designed is integrated full duplex data link at 10Gbps over four pair Category 6a/7 cable up to 30m links. It is specifically
designed for high speed communication links that require 10 Gigabit Ethernet over copper cable.


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
          <td>VCC</td>
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
          <td> Case Operating Temp.</td>
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
          <td>Maximum Voltage</td>
          <td>Vmax</td>
          <td></td>
          <td></td>
          <td>4</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Data Rate</td>
          <td>DR</td>
          <td></td>
          <td>10.3125</td>
          <td></td>
          <td>Gb/s</td>
        </tr>
        <tr>
          <td>Bit Error Rate</td>
          <td>BER</td>
          <td></td>
          <td></td>
          <td>10^-12</td>
          <td></td>
        </tr>
        <tr>
          <td>Supply Current</td>
          <td>Icc</td>
          <td></td>
          <td>570</td>
          <td>750</td>
          <td>mA</td>
        </tr>
        <tr>
          <td>Surge Current</td>
          <td>Isurge
</td>
          <td></td>
          <td></td>
          <td>30</td>
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
        
       

      </tbody>
    </table>
  </div>
</div>
 </div>

 


 {/* <div id="menu4" class="container tab-pane fade"><br/>
    <div class="container mt-3">
  <h2>Digital Diagnostic Functions</h2>
  <p>As defined by the QSFP28 MSA(SFF-8472) , NXO QSFP28 transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters:
</p>

<ul>
    <li>Transceiver temperature</li>
    <li>Laser bias current </li>
    <li>Transmitted optical power </li>
    <li>Received optical power </li>
    <li>Transceiver supply voltage</li>
</ul>
<p>It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range.</p>
<p>
The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the QSFP28 transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the QSFP28 transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The memories are organized as a series of 8-bit data words that can be addressed individually or sequentially. The 2-wire serial interface provides sequential or random access to the 8 bit parameters, addressed from 000h to the maximum address of the memory.
</p>
<p><b>For more detailed information including memory map definitions, please see the SFP MSA (SFF-8472) Specification.
</b></p>
</div>
 </div> */}

  </div>
</div>

{/* Memory Map Section Start */}
    {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
    <h1 className='pb-4'>Digital Diagnostic Memory Map
    </h1>

    <div className='d-flex justify-content-center' style={{width:"100%"}}>
    <img src={memorymapimg} className='sectionImg2_1' alt="memorymapImg"/>
    </div>

    </div> */}
{/* Memory Map Section End */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Power Supply section start */}

{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powerSupply} className='sectionImg3' alt="memorymapImg"/>
</div>

</div> */}

{/* Power Supply section end */}

{/* Pin Assisment section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assisment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={pinAssisment} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Pin Assisment section end */}

{/* Transcrve Block section start */}

{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2 mb-4'>
  <h1 className='pb-4'>Transceiver Block Diagram:</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={transcerve} className='sectionImg2_2' alt="memorymapImg"/>
</div>

</div> */}

{/* Transcrve Block section end */}

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

export default SFP_10G_T_Y38;

