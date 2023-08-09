import {React} from 'react'
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/40G-ER4/40G_ER4.jpg'
import memorymapimg from '../../img/products/40G-ER4/40G_ER4(3).jpg'
import mchdimensionImg from '../../img/products/40G-ER4/40G_ER4(2).jpg'
import Transceiverimg from "../../img/products/40G-ER4/40G_ER4(1).jpg"
import powersupply from "../../img/products/40G-ER4/40G_ER4(4).jpg"

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck,BsCartPlus } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Product_40G_ER4 = () => {
   
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
<Link className='btn-buy_now' to=''><BsCartCheck style={{marginBottom:"5px"}}/> Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>40G QSFP+ ER4 Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 40KM, DDM

</h4>

<span>Path Number : NXO-I7-C13-40D
</span>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>US $149.00</p>

<div className='sell-text'>629 Sold | 19 Reviews | 50 Questions</div>
</div>

<div className='sub-content'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> 54 In Global Warehouse</p>
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with IEEE802.3bm 40GBASE-ER4
</p>
<p className='listFeture'>Compliant to SFF-8436 QSFP+ MSA
</p>
<p className='listFeture'>Supports QDR / DDR InfiniBand
</p>
<p className='listFeture'>Up to 11.2Gbps data rate per CWDM channel
</p>
<p className='listFeture'>Hot Pluggable
</p>
<p className='listFeture'>CWDM DFB array transmitter
</p>
<p className='listFeture'>APD receiver</p>
<p className='listFeture'>2-wire interface for management and diagnostic monitor compliant with SFF-8436, SFF-8636
</p>
<p className='listFeture'>Single 3.3V power supply
</p>
<p className='listFeture'>Link distance 40km over SM fiber
</p>
<p className='listFeture'>Maximum Power consumption 4.5W
</p>
<p className='listFeture'>RoHS compliant
</p>

<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>40GBASE-ER4 Ethernet
</p>
<p className='listFeture'>OTN OTU3 @43.01G, OTU3e2 @44.58G
</p>
<p className='listFeture'>Data Centers Switch Interconnect</p>
<p className='listFeture'>Server and Storage Area Network Interconnect</p>
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

      <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostic Functions</a>
    </li>
 
  </ul> 
</div>


  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
    <div class="container mt-3">
  <h2>Overview</h2>
  
 <p>NXO-I7-C13-40D is a 4-Channel CWDM 1300nm
QSFP+ transceiver for 40GbE and InfiniBand DDR, QDR applications especially in Data Center & Storage networks. The transmitter converts 4-Channel 10G electrical input data to four CWDM optical signals and multiplex that into one 40G signal. The receiver
de-multiplex the 40G signal reversely and converts that to 4-Channel 10G electrical output data. The techniques bring a compact transceiver module for an aggregate bandwidth of 40Gbps up to SMF 40km optical links
</p>
</div>
</div>

<div id="menu1" class="container tab-pane active"><br/>
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
          <td>Case Operating Temperature</td>
          <td>TOP</td>
          <td>-40</td>
          <td>-</td>
          <td>+85</td>
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
          <td></td>
          <td>10.3125</td>
          <td>11.2</td>
          <td>Gb/s</td>
        </tr>
        <tr>
          <td>Data Rate Accuracy</td>
          <td>DR</td>
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
          <td>10^-12</td>
          <td></td>
        </tr>

        <tr>
          <td>Supply Current</td>
          <td>icc</td>
          <td></td>
          <td></td>
          <td>1000</td>
          <td>mA</td>
        </tr>
        
        <tr>
          <td>Power Consumption</td>
          <td>p</td>
          <td></td>
          <td></td>
          <td>3.5</td>
          <td>W</td>
        </tr>
        <tr>
          <td>Power Consumption(NXO-I7-C13-40Di)</td>
          <td>p</td>
          <td></td>
          <td></td>
          <td>4.5</td>
          <td>W</td>
        </tr>
        <tr>
          <td>Transceiver Power-on Initialization Time
</td>
          <td></td>
          <td></td>
          <td></td>
          <td>2000</td>
          <td>ms</td>
        </tr>
        <tr>
          <td>Control Input Voltage High</td>
          <td>ViH</td>
          <td>2.0</td>
          <td></td>
          <td>Vcc</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Control Input Voltage Low</td>
          <td>ViL</td>
          <td>GND</td>
          <td></td>
          <td>0.7</td>
          <td>V</td>
        </tr>
        
        <tr>
          <td>Control Output Voltage High</td>
          <td>VoH</td>
          <td>2.0</td>
          <td></td>
          <td>Vcc</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Control Output Voltage Low</td>
          <td>VoL</td>
          <td>GND</td>
          <td></td>
          <td>0.7</td>
          <td>V</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
 </div>
 <div id="menu3" class="container tab-pane fade"><br/>
 
 <div class="container mt-3">
 <h2>Digital Diagnostic Functions</h2>
 
<p>NXO-I7-C13-40D is a 4-Channel CWDM 1300nm
As defined by the QSFP+ MSA, NXO QSFP+ transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters
</p>
<p className='listFeture'> Transceiver temperature
</p>
<p className='listFeture'>Transmitted optical power </p>
<p className='listFeture'>Received optical power
</p>
<p className='listFeture'>Transceiver supply voltage
</p>
<p >
It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range.
</p>
<p>
The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the QSFP+ transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the QSFP+ transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The  memories are organized as a series of 8-bit data words that can be addressed individually or sequentially. The 2-wire serial interface provides sequential or random access to the 8 bit parameters, addressed from 000h to  the maximum address of the memory.
</p>
</div>
</div>
  </div>
  
</div>


{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Memory Map
</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={memorymapimg} className=' sectionImg2' alt="memorymapImg"/>
</div>

</div>
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

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>

{/* Recommended Power Supply Filter */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powersupply} className='sectionImg2_1' alt="Transceiver Block Diagram"/>

</div>

</div>

<Footer/>
    </>
  )
}

export default Product_40G_ER4;