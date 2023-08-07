import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


//product Images 
import loopbackImg1 from '../img/products/40GLoopbackImg.jpg'
import { Link } from 'react-router-dom';

import { BiDollar } from 'react-icons/bi';


const FourtyGLoopbackProduct = () => {
 
  return (
    <>
<Navbar/>

<div className=' d-flex product-contain flex-wrap'>
<div className='product-img'>

<div className='section-fixed'>
<img src={loopbackImg1} alt='40GLoopBack' className='mainproduct-img'/>

<div className='container-fluid pt-lg-5 pt-2'>
    <div className='row'>

        <div className='col-4'>
<img src={loopbackImg1} alt='40GLoopBack' className='light-box-img'/>

        </div>
        <div className='col-4'>
<img src={loopbackImg1} alt='40GLoopBack' className='light-box-img'/>

        </div>

        <div className='col-4'>
<img src={loopbackImg1} alt='40GLoopBack' className='light-box-img'/>

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
<h1>40G QSFP+ Electrical Passive Loopback
Hot Pluggable, 0~5dB Internal Attenuation, 0~3.5W Power Consumption</h1>

<span>Path Number : NXO-IX-XLB-xx-xx</span>


<div className='product-overview pt-4 pb-2'>
<h5>Overview</h5>
    <p>NXO-IX-XLB QSFP+ Loopback modules are compliant with the current QSFP+ Multi-Source Agreement
( MSA ) specification. The Loopback modules provide an effective way of testing the QSFP+ port in the host
system by looping back the electrical signal (optics are excluded). It provides an economical way to mimic 40G Ethernet in simulation testing environments.
</p>
</div>

<div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
<div className='product-contain-col-two pt-4 pb-2'>
<h5>Applications</h5>
    <p>Board and System Level Testing</p>
    <p>System Test and Measurement</p>
    <p>Switch / Router Chamber Test</p>
    <p>Power Consumption Validation</p>
 
</div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
<div className='product-contain-col-two pt-4 pb-2'>
<h5>Features</h5>
    <p>Compliant with SFF-8436 QSFP28 MSA</p>
    <p>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
    <p>Electrical Data Rate up to 10.5Gbps per Lane</p>
    <p>Hot Pluggable QSFP+ footprint</p>
 
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
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Recommended Operating Conditions</a>
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
          <td>-20</td>
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
          <td>0.1</td>
          <td>-</td>
          <td>10.5</td>
          <td>Gb/s</td>
        </tr>

        <tr>
          <td>Differential Impedance</td>
          <td>Z</td>
          <td>90</td>
          <td>100</td>
          <td>110</td>
          <td>Ohm</td>
        </tr>

        <tr>
          <td>Durability Cycles</td>
          <td></td>
          <td></td>
          <td>100</td>
          <td>200</td>
          <td>Times</td>
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

export default FourtyGLoopbackProduct