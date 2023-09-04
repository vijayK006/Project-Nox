// import {React} from 'react'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { TiTickOutline } from 'react-icons/ti';

import loopbackImg1 from '../../img/products/100G CFP CFP2 CFP4/CFP1_1.jpg'
import memorymapimg from '../../img/products/40G_eSR4/eSR4_2.jpg'
import mchdimensionImg from '../../img/products/100G CFP CFP2 CFP4/CFP1_2.jpg'
import Transceiverimg from "../../img/products/40GQSFP+/SRBD_3.jpg"
import powersupply from "../../img/products/40GQSFP+/SRBD_4.jpg"

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck,BsCartPlus } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Product_CFP1 = () => {
   
  let PartNumber = "NXOCFP-K7-DCO-12KD";
  let productName ="100G CFP-DCO coherent Dual Rate Transceiver Hot Pluggable, Duplex LC, Micro-ITLA LD, NDSF reach 1200KM, DDM";
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
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal"><BsCartCheck style={{marginBottom:"5px"}}/>Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>{productName}





</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<div className='sell-text'>{PartNumber}


</div>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>



<p className='listFeture'>Compliant with NXO MSA and CAUI 100GE host

</p>
<p className='listFeture'>interface
</p>
<p className='listFeture'>Compliant with OTL4.10 for OTU4 host interface
</p>
<p className='listFeture'>DNDSF reach distance 1200km without in-line Dispersion Compensation ( with Optical Amplifier )
</p>
<p className='listFeture'>98 Channels DWDM 50GHz Tunable in the rage of THz 191.25 (H12) to THz196.10 (C61)

</p>
<p className='listFeture'>Transmission with mixed 10G/40G traffic


</p>
<p className='listFeture'> 
Low latency soft-decision FEC

</p>
<p className='listFeture'>
Built-in OTN Processing


</p>
<p className='listFeture'>
Interoperability with G.709 FEC


</p>

<p className='listFeture'>PRBS generation and detection for line and host interfaces

</p>



<h5 className='pt-5'>Applications</h5>


<p className='listFeture'>Metro 100G DWDM transmission


</p>
<p className='listFeture'>Cloud / Data Center interconnection


</p>
<p className='listFeture'>Long-Haul transmission system


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

  
  </ul> 
</div>


  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
    <div class="container mt-3">
  <h2>Overview</h2>
  
 <p>
 NXOCFP-K7-DCO-12KD supports 100 Gbps transmission speeds in an industry-standard, pluggable CFP form factor, which is optimized for power sensitive applications. With a rich feature set, it enables cost effective system architectures. The integration of power saving DSP technology and silicon photonic integrated circuit (PIC) technologies optimize the balance of power and performance. Widely adopted in metro carrier and Cloud/DCI applications, NXOCFP-K7-DCO-12KD support a range of applications from up to 1200km DWDM links without Dispersion compensation. ( with Optical Amplifier ). Various features can also be configured to optimize the power dissipation for any given application.

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
          <td>Operating Temperature</td>
          <td>Top</td>
          <td>-10</td>
          <td>+80</td>
          <td>°C</td>
        </tr>
        <tr>
          <td>Storage Relative Humidity</td>
          <td>RH</td>
          <td>5</td>
          <td>85</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>VCC3</td>
          <td>-0.3</td>
          <td>+3.7</td>
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
          <td>-5</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>

        </tr>
       
        <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>+3.2</td>
          <td>+3.3</td>
          <td>+3.4</td>
          <td>V</td>

        </tr>
        <tr>
          <td>Rx Input Power</td>
          <td>TOP</td>
          <td></td>
          <td></td>
          <td>10</td>
          <td>dBm</td>

        </tr>
        <tr>
          <td>Total Rx Input Power</td>
          <td>TOP</td>
          <td></td>
          <td></td>
          <td>17</td>
          <td>dBm</td>

        </tr>
        
       
      </tbody>
    </table>
  </div>
</div>
 </div>

  </div>
  
</div>


{/* Memory Map Section Start */}
{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Memory Map
</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={memorymapimg} className=' sectionImg2' alt="memorymapImg"/>
</div>

</div> */}
{/* Memory Map Section End */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}


{/* {Transceiver Block Diagram} */}

{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div> */}

{/* Recommended Power Supply Filter */}
{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powersupply} className='sectionImg2_1' alt="Transceiver Block Diagram"/>

</div>

</div> */}

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

export default Product_CFP1;