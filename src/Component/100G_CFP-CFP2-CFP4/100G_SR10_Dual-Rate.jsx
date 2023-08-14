import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from "../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg";
import opticals from '../../img/products/100G CFP CFP2 CFP4/sr10_Opticals.jpg';
import mchdimensionImg from '../../img/products/100G CFP CFP2 CFP4/ER4_dulerateMecdimension.png'
import Transceiverimg from "../../img/products/100G CFP CFP2 CFP4/SR10_Transicvers.jpg"
import pinassisment from "../../img/products/100G CFP CFP2 CFP4/SR10_pinAssisment.png";

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck,BsCartPlus } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const SR10_DuleRate_100G = () => {
   
  let PartNumber = "NXO-K9-M85-X1DR";
  let productName = "100G CFP2 SR10 Dual Rate Transceiver Hot Pluggable, MPO / MTP-24, 850nm VCSEL, MMF, 100M, DDM";
  
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

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>



<p className='listFeture'>Compliant to CFP2 MSA</p>
<p className='listFeture'>Compliant to IEEE802.3ba 100GBase-SR10 and CAUI-10 electrical interface</p>
<p className='listFeture'>Compliant to ITU G.709 OTU4
</p>
<p className='listFeture'>10 independent full-duplex channels
</p>
<p className='listFeture'>Aggregate Data Rate 103.1Gbps to 112Gbps
</p>
<p className='listFeture'>850nm VCSEL array transmitter



</p>
<p className='listFeture'> 
MPO-24 receptacle connector


</p>
<p className='listFeture'>
MDIO interface for management and diagnostic monitor
</p>
<p className='listFeture'>
Link length up to 100m over OM3 MMF and 



</p>

<p className='listFeture'>150m over OM4 MMF


</p>

<p className='listFeture'>Maximum Power consumption 4.0W

</p>

<p className='listFeture'>Single 3.3V power supply
</p>

<p className='listFeture'>RoHS compliant
</p>


<h5 className='pt-5'>Applications</h5>


<p className='listFeture'>100GBASE-SR10 Ethernet @103.1G
</p>
<p className='listFeture'>OTN OTU4  @112.1G

</p>
<p className='listFeture'>Data Centers Switch Interconnect
</p>

<p className='listFeture'>Server and Storage Area Network Interconnect
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
 NXO-K9-M85-X1DR is a parallel fiber optical transceiver module for dual rate 103.1Gbps / 112Gbps data transmission applications with uncooled 850nm VCSEL array transmitter and PIN array receiver. It is Ideally suited for datacom, storage area network (SAN/NAS) and OTN networks applications based on IEEE 802.3ba 100GBASE-SR10 and OTN standards. Designed for short range multi-lane data communication, the CFP2 optical module with MPO-24 receptacle integrates ten independent transmitter and receiver channels each capable 10.3125G to 11.181Gbps operation for 
 an aggregate data rate of 103.1Gbps to 112Gbps up to MMF OM4 100m optical links.
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
          <td>Vcc</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>

        </tr>

        <tr>
          <td>Bit Error Rate</td>
          <td>BER</td>
          <td></td>
          <td></td>
          <td>5X10-5</td>
          <td></td>

        </tr>

        <tr>
          <td>Supply Current</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>1500</td>
          <td>mA</td>

        </tr>

        
        <tr>
          <td>Power Consumption</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>4.0</td>
          <td>W</td>

        </tr>

        <tr>
          <td>Control Input Voltage High</td>
          <td>ViH</td>
          <td>2.0</td>
          <td></td>
          <td>VCC+0.7</td>
          <td>V</td>

        </tr>

 
        <tr>
          <td>Control Input Voltage Low</td>
          <td>Vil</td>
          <td>-0.3</td>
          <td></td>
          <td>0.8</td>
          <td>V</td>

        </tr>

        <tr>
          <td>Control Output Voltage High</td>
          <td>VoH</td>
          <td>2.0</td>
          <td></td>
          <td>VCC+0.7</td>
          <td>V</td>

        </tr>

 
        <tr>
          <td>Control Output Voltage Low</td>
          <td>Vol</td>
          <td>-0.3</td>
          <td></td>
          <td>0.8</td>
          <td>V</td>

        </tr>
        
       
      </tbody>
    </table>
  </div>
</div>
 </div>

  </div>
  
</div>



<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assisment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={pinassisment} className='sectionImg2' alt="Transceiver Block Diagram"/>
</div>

</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg3' alt="memorymapImg"/>
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

{/* {Optical Interface  Diagram} */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-5'>
  <h1 className='pb-4'>Optical Interface Lanes and Assignment </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={opticals} className='sectionImg2_2' alt="Transceiver Block Diagram"/>
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

export default SR10_DuleRate_100G;