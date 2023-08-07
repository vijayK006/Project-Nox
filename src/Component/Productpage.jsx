import {React,useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import loopbackImg1 from '../img/products/40GLoopbackImg.jpg'

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';


import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const Productpage = () => {
   
  return (

    <>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<img src={loopbackImg1} className='img-main' alt="product-40GLoobBack"/>

<p className='text-center'>Click to open expanded view</p>
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

<div className="d-flex justify-content-center flex-wrap cart-btn pt-5">
    <Link to="" className="btn btn-warning">Buy Now</Link> &nbsp;
    <Link to="" className="btn btn-warning">Add To Cart</Link>
</div>

</div>



</div>

<div className='product-content'>
<h4>40G QSFP+ Electrical Passive Loopback Hot Pluggable, 0~5dB Internal Attenuation, 
0~3.5W Power Consumption</h4>

<span>Path Number : NXO-IX-XLB-xx-xx</span>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>US $149.00</p>

<div className='sell-text'>629 Sold | 19 Reviews | 50 Questions</div>
</div>

<div className='sub-content'>
<p><LiaWarehouseSolid/> 54 In Global Warehouse</p>
<p><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p>Compliant with SFF-8436 QSFP28 MSA</p>

<p>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
<p>Electrical Data Rate up to 10.5Gbps per Lane</p>
<p>Hot Pluggable QSFP+ footprint</p>

<h5>Features</h5>

<p>Compliant with SFF-8436 QSFP28 MSA</p>

<p>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
<p>Electrical Data Rate up to 10.5Gbps per Lane</p>
<p>Hot Pluggable QSFP+ footprint</p>

<h5>Features</h5>

<p>Compliant with SFF-8436 QSFP28 MSA</p>

<p>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
<p>Electrical Data Rate up to 10.5Gbps per Lane</p>
<p>Hot Pluggable QSFP+ footprint</p>

<h5>Features</h5>

<p>Compliant with SFF-8436 QSFP28 MSA</p>

<p>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
<p>Electrical Data Rate up to 10.5Gbps per Lane</p>
<p>Hot Pluggable QSFP+ footprint</p>

</div>





</div>


    </>
  )
}

export default Productpage;