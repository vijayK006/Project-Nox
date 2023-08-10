import {React} from 'react'
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/100G CFP CFP2 CFP4/100GCFP2.jpg'
import memorymapimg from '../../img/products/40G_eSR4/eSR4_2.jpg'
import mchdimensionImg from '../../img/products/40GQSFP+/p28_2.jpg'
import Transceiverimg from "../../img/products/100G CFP CFP2 CFP4/adopterBlock.png"
import powersupply from "../../img/products/100G CFP CFP2 CFP4/CFP2Assisment.png"

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck,BsCartPlus } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Product_100G_QSFP28 = () => {
   
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
<Link className='btn-buy_now' to=''><BsCartCheck style={{marginBottom:"5px"}}/>Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>100G CFP2 to QSFP28 Adapter Module, Dual-Rate






</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Path Number</p>

<div className='sell-text'>NXO-AS8-C2QP-Nx



</div>
</div>

<div className='sub-content'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> 54 In Global Warehouse</p>
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with CFP2 Hardware Specification Version 1.0


</p>
<p className='listFeture'>Compliant with CFP Management Interface Specification Version 2.4

</p>
<p className='listFeture'>4 Full-Duplex channels

</p>
<p className='listFeture'>Internal CDR on Transmitters and Receivers
</p>
<p className='listFeture'>Transmission data rate up to 28Gpbs per channel


</p>
<p className='listFeture'>OTU4 compatible



</p>
<p className='listFeture'> 
Without FEC
</p>
<p className='listFeture'>
1 port QSFP28 TX&RX
</p>
<p className='listFeture'>
Interoperability with G.709 FEC
</p>

<p className='listFeture'>MDIO digital diagnostic interface
</p>
<p className='listFeture'>
Single +3.3V power supply

</p>
<p className='listFeture'>
Power Class 3

</p>
<p className='listFeture'>
Operating case temperature 0 ~ +70°C

</p>
<p className='listFeture'>
RoHS compliant

</p>


<h5 className='pt-5'>Applications</h5>


<p className='listFeture'>IEEE 802.3ba 100GBASE-LR4 / ER4 Ethernet


</p>
<p className='listFeture'>100GE interconnects for QSFP28 SR4 / PSM4 / CWDM4, CLR4 when CFP2 port with FEC.


</p>
<p className='listFeture'>Data aggregation and backplane application



</p>

<p className='listFeture'>High speed core router connection and Datacom / Telcom switch
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
 The 100G CFP2 to QSFP28 Adapter module,
NXO-AS8-C2QP, is a four-channel, high performance, hot pluggable and ideal interconnect solution supporting 100G Ethernet and OTN OTU4. It converts CFP MSA interface to 1-port 100GE QSFP28 and integrates four data lanes in each direction with operating data rate up to 28Gbps per lane. NXO-AS8-C2QP has no FEC function itself but it could support 100G QSFP28 LR4 / ER4 modules without FEC. When the 100GE host equipment has FEC function on CFP2 port, it could support 100G QSFP28 SR4 / PSM4 / CWDM4 / CLR4
modules. NXO-AS8-C2QP work with Low power consumption less than 2W and is RoHS compliant.

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
          <td>VCC</td>
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
          <th>Typ.</th>
          <th>Min.</th>
          <th>Max.</th>
          <th>Unit</th>
          <th>Note</th>
          


        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Operating Case Temperature
</td>
          <td>Top</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
          <td> </td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
          <td></td>
        </tr>
        <tr>
          <td>Maximum Power Dissipation</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>2</td>
          <td>W</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Data Rate per Lane</td>
          <td></td>
          <td></td>
          <td>25.78125</td>
          <td>27.952</td>
          <td>GBPS</td>
          <td></td>
        </tr>
        
        <tr>
          <td>Aggregate Data Rate</td>
          <td></td>
          <td></td>
          <td>103.125</td>
          <td>111.8</td>
          <td>Gbps</td>
          <td></td>
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

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Adapter Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>

{/* Recommended Power Supply Filter */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>CFP2 Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powersupply} className='sectionImg2_1' alt="Transceiver Block Diagram"/>

</div>

</div>

<Footer/>
    </>
  )
}

export default Product_100G_QSFP28;