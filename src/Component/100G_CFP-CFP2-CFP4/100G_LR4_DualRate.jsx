import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
import memorymapimg from '../../img/products/100G CFP CFP2 CFP4/pinAssisment.jpg'
import mchdimensionImg from '../../img/products/100G CFP CFP2 CFP4/macdimensionLR4Eathernet.jpg'
import Transceiverimg from "../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg"
import powersupply from "../../img/products/40GQSFP+/SRBD_4.jpg"

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck,BsCartPlus } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const LR4_DualRate_100G = () => {
   
  let PartNumber = "NXO-K7-L13-10DR";
  let productName = "100G CFP2 LR4 Dual Rate Transceiver Hot Pluggable, Duplex LC, EML LAN-WDM, Single Mode, 10KM, DDM";
  
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
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal" ><BsCartCheck style={{marginBottom:"5px"}}/>Request a Quote</Link>
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

<div className='sub-content'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> 54 In Global Warehouse</p>
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>




<p className='listFeture'>Compliant to CFP2 MSA


</p>
<p className='listFeture'>Compliant to IEEE802.3ba 100GBase-LR4 and OTN OTU4 OTL4.4 standard

</p>
<p className='listFeture'>Electrical interface compliant with CFP2 MSA

</p>
<p className='listFeture'>4-CH optical Mux/DeMux design

</p>
<p className='listFeture'>Electrical serial data rate up to 27.9525Gbps



</p>
<p className='listFeture'>EML LAN-WDM array transmitter



</p>
<p className='listFeture'> 
Duplex LC connector


</p>
<p className='listFeture'>
MDIO interface for management and diagnostic monitor



</p>
<p className='listFeture'>
Built in quad TX CDR and RX CDR



</p>

<p className='listFeture'>Single 3.3V power supply


</p>

<p className='listFeture'>
Low power consumption, less than 9W

</p>
<p className='listFeture'>
Link length up to 10km over single mode fiber

</p>
<p className='listFeture'>
All metal housing for superior EMI performance

</p>
<p className='listFeture'>
RoHS compliant

</p>

<h5 className='pt-5'>Applications</h5>


<p className='listFeture'>100GBASE-LR4 Ethernet



</p>
<p className='listFeture'>OTN OTU4 Application



</p>
<p className='listFeture'>Data Center
</p>
<p className='listFeture'>
Datacom/ Telecom Switch & Router

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
 NXO-K7-L13-10DR is a parallel fiber optical transceiver module for 100Gbit/s data transmission applications at 1300nm LAN-WDM. It is ideally suited for 100GbE Datacom, Storage Area Network (SAN) and OTN Telecom applications based on IEEE 802.3ba 100GBase Ethernet and OTN OTU4 standards.
The transceiver incorporates a 4-channel laser driver circuit together with a 4-channel EML LAN-WDM array coupled with an optical multiplexer. On the receiver side. an optical de-multiplexer is coupled with a 4-channel photodiode array and a 4-channel TIA array resulting in a compact module for an aggregate bandwidth of 111.8Gb/s
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
          <td>+3.135</td>
          <td>+3.3</td>
          <td>+3.465</td>
          <td>V</td>
        </tr>


        <tr>
          <td>Supply Current</td>
          <td>ICC</td>
          <td></td>
          <td></td>
          <td>2500</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Module Total Power</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>9</td>
          <td>W</td>
        </tr>

        <tr>
          <td>Aggregate Bit Rate</td>
          <td>BRAVE</td>
          <td></td>
          <td>103.125</td>
          <td></td>
          <td>Gb/s</td>
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

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg4' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}


{/* {Transceiver Block Diagram} */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* Memory Map Section End */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment  </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={memorymapimg} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>
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
<div className='col-6'>
<label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' value={PartNumber} name='Partno' readOnly/>
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

export default LR4_DualRate_100G;