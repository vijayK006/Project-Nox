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


<div className='product-overview pt-4 pb-2'>
<h5>Features</h5>
    <p>Compliant with SFF-8436 QSFP28 MSA</p>
    <p>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
    <p>Electrical Data Rate up to 10.5Gbps per Lane</p>
    <p>Hot Pluggable QSFP+ footprint</p>
    <p>2-wire interface for management</p>
    <p>Single 3.3V power supply</p>
    <p>Different Option for Internal Attenuation and Power Consumption</p>
    <p>RoHS compliant</p>
</div>




</div>


</div>

<Footer/>
    </>
  )
}

export default FourtyGLoopbackProduct