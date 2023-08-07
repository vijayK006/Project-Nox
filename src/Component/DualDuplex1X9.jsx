import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';

import Dualduplex from "../img/products/Dualduplex.jpg"
import { Link } from 'react-router-dom';

import { BiDollar } from 'react-icons/bi';

const DualDuplex1X9 = () => {
  return (
    <>
    <Navbar/>

<div className=' d-flex product-contain flex-wrap'>
<div className='product-img'>

<div className='section-fixed'>
<img src={Dualduplex} alt='40GLoopBack' className='mainproduct-img'/>

<div className='container-fluid pt-lg-5 pt-2'>
    <div className='row'>

        <div className='col-4'>
<img src={Dualduplex} alt='40GLoopBack' className='light-box-img'/>

        </div>
        <div className='col-4'>
<img src={Dualduplex} alt='40GLoopBack' className='light-box-img'/>

        </div>

        <div className='col-4'>
<img src={Dualduplex} alt='40GLoopBack' className='light-box-img'/>

        </div>


    </div>
</div>


<p className='pricing'><BiDollar/> 1.0 USD</p>
<div className='but-button d-flex'>
<Link to='/' className='btn btn-primary btn-cover'><p className='product-btn'>Buy Now</p></Link> &nbsp;&nbsp;
<Link to='/' className='btn btn-warning btn-cover'><p className='product-btn'>Add To Cart</p></Link>
</div>



</div>

</div>

<div className='product-content'>
<h1>1.25G 1X9 1000BASE-SX Transceiver
Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h1>

<span>Path Number : NXO-C1-M85-X5P
</span>


<div className='product-overview pt-4 pb-2'>
<h5>Overview</h5>
    <p>NXO-C1-M85-X5P 1X9 SIP package style transceivers are compliant with the industrial standard specification. The high performance uncooled 850nm VCEL transmitter and high sensitivity PIN receiver provide superior
performance for Gigabit Ethernet 1000BASE-SX and Fiber Channel 1GFC applications up to MMF OM2 550m optical links.
</p>
</div>


<div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
<div className='product-contain-col-two pt-4 pb-2'>
<h5>Applications</h5>
    <p>Gigabit Ethernet 1000BASE-SX @1.25G

</p>
    <p>Fiber Channel 1GFC @1.0625G</p>
    {/* <p>Switch / Router Chamber Test</p>
    <p>Power Consumption Validation</p> */}
     
</div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
<div className='product-contain-col-two pt-4 pb-2'>
<h5>Features</h5>
    <p>Compliant with IEEE802.3z Gigabit Ethernet</p>
    <p>Compliant with Fiber Channel 100-M5-SN-I</p>
    <p>Industry Standard 1x9 Footprint
</p>
    <p>850nm VCSEL laser transmitter
</p>
    <p>
Duplex SC connector

    </p>
    {/* <p>
Single 3.3V or 5V Power Supply

    </p>
    <p>
DC-coupled Differential PECL inputs and outputs

    </p> */}
    {/* <p>
LVPECL / PECL Signal Detection Output

    </p>
    <p>
Wave Solderable and Aqueous Washable

    </p>
<p>
Link distance 275m over MM OM1 fiber and 550m over MM OM2 fiber

</p>
<p>
RoHS Compliant

</p> */}

</div>
        </div>

    </div>
</div>




</div>


</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Absolute Maximum Ratings</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
    </li>

  </ul> 
</div>


  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
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

  </div>
</div>

<Footer/>
    </>
  )
}

export default DualDuplex1X9;
