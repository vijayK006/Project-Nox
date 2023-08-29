import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Switches/NOX_402XSM.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Switches/Layer3_NOX-G24044X_Application.png';
import dime1 from '../../../img/products/Switches/NOX_402XSM_Dimenssions.png';


import {TiTickOutline} from 'react-icons/ti';



import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';

const NXO_402XSM = () => { 

  let PartNumber = "NXO-402XSM";
  let productName ="4x 2.5G N-Base-TX + 2x 10G Base-X SFP+ Compact Size";

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
<img src={productImg1} className='img-main2' alt="product-40GLoobBack"/>

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
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>4x 10M/100M/1G/2.5GBase-T RJ-45+ 2x 1G/2.5G/10GBase-X SFP</p>
<p className='listFeture'>Provides 3 ring instances that each can support μ-Ring, μ-Chain or Sub-Ring type for flexible uses.</p>
<p className='listFeture'>Supports up to 3 rings in one device (Please see CTC μ-Ring white paper for more details and more topology application)</p>
<p className='listFeture'>DHCP Server/Client/Relay/Snooping/Snooping option 82/Relay option 82</p>
<p className='listFeture'>QoS, Traffic classification QoS, CoS, bandwidth control for Ingress and Egress, Storm Control, DiffServ</p>
<p className='listFeture'>IEEE802.1q VLAN, MAC based VLAN, IP subnet based VLAN, Protocol based VLAN, VLAN translation, GVRP, MVR</p>
<p className='listFeture'>Dynamic IEEE 802.3ad LACP Link Aggregation, Static Link Aggregation</p>
<p className='listFeture'>IGMP snooping V1/V2/V3, IGMP Filtering/ Throttling, IGMP query, IGMP proxy reporting, MLD snooping V1/V2</p>
<p className='listFeture'>Flexibility security: Port based and MAC based IEEE802.1X, RADIUS, ACL, TACACS+, HTTP/HTTPS, SSL/SSH v2</p>
<p className='listFeture'>Software upgrade via TFTP and HTTP, redundant firmware to avoid upgrade failure</p>
<p className='listFeture'>RMON, MIB II, Port mirroring, Event syslog, DNS, NTP, SNTP, IEEE802.1ab LLDP</p>
<p className='listFeture'>Supports IPv6 Telnet server /ICMP v6</p>
<p className='listFeture'>CLI, Web based management, SNMP v1/v2c/v3, Telnet server for management</p>


<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>Redundant 12/24/48VDC power input</p>
<p className='listFeture'>Supports μ-Ring, ERPS, EPS, MSTP, RSTP, STP for redundant cabling</p> 
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
  
 <p>{PartNumber} NXO-402XSM is an 1G/2.5G/10G managed Layer 2 Ethernet switch. It provides 4 port of electrical 10M/100M/1G/2.5GBase-T via  RJ-45s plus 2 ports SFP slots of 100M/1G/2.5G/10GBase-X which provide stable and reliable long-distance Ethernet transmission over  optical fiber. Built to Industrial grade standards, the FANLESS design provides high MTBF in indoor environments of operating  temperature from -10 to 60°C (14 to 160°F), and incorporates redundant 12/24/48VDC power input. With Din-Rail or wall mounting  metal housings, these switches are perfect choices for heavy duty use in harsh environments, such as Industrial Factory  Automation, Data Center Networking, Intelligent Transportation Systems (ITS) and are also suitable for many military and utility  market applications where environmental conditions exceed commercial product specifications.
<br/>
<br/>
These managed switches also support a wide variety of Ethernet Layer 2 functions, including NXO proprietary μ-Ring, ERPS,  MSTP, RSTP and STP. They also support Layer 2 IGMP, VLAN, QoS, ACL, Security, IPv6, bandwidth control, and port mirroring. Additionally,  these switches can also be managed by NXO SmartView™ Element Management System, which offers a user-friendly and  centralized device management platform and provides administrators the ability to monitor and configure these connected switches  remotely.

</p>
</div>
</div>

  </div>
</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
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
<div className='col-md-6 col-sm-12'>
<label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' value={PartNumber} id='setName' name='Partno' readOnly/>
</div>
<div className='col-md-6 col-sm-12'>
<label>Your Product Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productName}  name="productname" readOnly/>

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

export default NXO_402XSM;