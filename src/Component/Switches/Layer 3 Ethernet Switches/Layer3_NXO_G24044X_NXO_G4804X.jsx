import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Switches/Layer 3 ethernet switches/NXO-G24044X _ NXO-G4804X.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Switches/Layer3_NOX-G24044X_Application.png';
import dime1 from '../../../img/products/Switches/Layer3_NOX-G24044X_Dimenssoin.png';
import dime2 from '../../../img/products/Switches/Layer3_NOX-G24044X_Dimenssoin2.png';


import {TiTickOutline} from 'react-icons/ti';



import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Layer3_NXO_G24044X_NXO_G4804X = () => { 

  let PartNumber = "NXO-G24044X & NXO-G4804X";
  let productName1 ="Layer 3 24x GbE RJ45 +4x FE/GbE SFP + 4x 1G/2.5G/10G SFP";
  let productName2 ="Layer 3 48x GbE RJ45 + 4x 1G/2.5G/10G SFP+  ";

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
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt="lightBox-img"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt="lightBox-img"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="lightBox-img" />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="lightBox-img" />
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
{productName1}
</h4>

<h4>
{productName2}
</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<p className='sell-text'>{PartNumber}</p>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Redundant isolated 24/48/-48VDC (18~60VDC), or/and isolated 110/220VAC power inputs</p>
<p className='listFeture'>Supports negative voltage power input</p>
<p className='listFeture'>2.25K VDC Hi-pot isolation protection for Ethernet ports and power</p>
<p className='listFeture'>STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for network redundancy</p>
<p className='listFeture'>Provides 14 instances each can support μ-Ring, μ-Chain or Sub-Ring for flexible networking applications</p>
<p className='listFeture'>µ-Ring for Redundant Cabling, recovery time {'<20ms'} in 250 devices</p>
<p className='listFeture'>Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, 
Peer to Peer Transparent Clock, End to End 	Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>L3 IPV4/IPV6 Static Routing, RIP v2 Dynamic Routing, OSPF v2/v3 Dynamic Routing</p>
<p className='listFeture'>Supports u-Ring, ERPS, EPS, MSTP, RSTP, STP for redundant cabling</p> 
<p className='listFeture'>Supports maximum up to 14 u-rings in one device</p> 
<p className='listFeture'>Supports negative voltage power input</p> 
<p className='listFeture'>EN62368-1, CE, FCC certified</p> 
<p className='listFeture'>4KV surge protection for PoE, RJ45 and SFP ports</p> 
</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='resp-overflow'>
    <div className='d-flex justify-content-center'>
       <ul class="navs nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

  </ul> 
</div>
</div>



  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
    <div class="container mt-3">
  <h2>Overview</h2>
  
 <p>{PartNumber} are industrial grade, hardened design, Layer 3 switches, built for the rigorous demands of centralized
and critical applications. The switch supports 4-ports 10GbE SFP+ and 24 / 48 GbE (10/100/1000BaseTX) RJ-45 ports, plus 4 dual  speed (100/1000Base-X) SFP fiber optical slots. The series models are all fan-less designs with redundant, isolated power supplies (2  AC, 2 DC, AC + DC) and can be mounted in 19-inch EIA standard rack. The Series are certified with many industrial-grade standards
and are ideal for deployments in harsh environments to deliver mission-critical network services. This product is ideal for Smart  City, surveillance, Intelligent traffic control systems and production automation applications.



</p>
</div>
</div>

  </div>
</div>

{/* Application Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='sectionImg2_6' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

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
<div className='col-md-12 col-sm-12'>
<label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' value={PartNumber} id='setName' name='Partno' readOnly/>
</div>
<div className='col-md-6 col-sm-12'>
<label>Your Product Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productName1}  name="productname" readOnly/>

      </div>

      <div className='col-md-6 col-sm-12'>
<label>Your Product Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productName2}  name="productname" readOnly/>

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

export default Layer3_NXO_G24044X_NXO_G4804X;