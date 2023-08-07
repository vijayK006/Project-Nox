import React from 'react'
import { Link } from 'react-router-dom';

// react icons
import { BiLogoFacebook } from 'react-icons/bi';
import { MdAddIcCall } from 'react-icons/md';
import { RiMailAddLine } from 'react-icons/ri';
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { AiFillYoutube, AiOutlineGlobal } from 'react-icons/ai';

import logoIcon from './img/logo/navlogo.png'; 


const Footer = () => {
  return (
    <>
<div className='footer pt-5'>
    <div className='container'>

    <div className='row'>

      <div className='col-lg-4 col-md-4 col-sm-12'>
     <Link to="/">
      <img src={logoIcon} className='logo_footer' alt='logo'/>
     </Link> 


<p className='pt-3 pb-1'>No. 52, 1st Floor, 
Above Indian Overseas Bank,
St Johns Road, Bangalore – 42
India.
</p>

<div className='d-flex flex-wrap pb-2'>
  <a href='tel:+91 80-41622171' style={{textDecoration:"none"}}><p className='childone'><MdAddIcCall className='footerIcons'/> 80-41622171 |&nbsp;</p></a>
<a href='tel:+91-80-41622171' style={{textDecoration:"none"}}><p className='childone'> 80-41622171 |&nbsp;</p></a>
<a href='tel:+91 9945052666' style={{textDecoration:"none"}}><p className='childone'> 9945052666.</p></a>

</div>

<div className='d-flex flex-wrap pb-2'>
  <a href='tel:+91 80-41622171' style={{textDecoration:"none"}}><p className='childone'><RiMailAddLine className="footerIcons"/> sales@netwaresystems.biz |&nbsp;</p></a>
<a href='tel:+91-80-41622171' style={{textDecoration:"none"}}><p className='childone'> Info@netwaresystems.biz |&nbsp;</p></a>
<a href='tel:+91 9945052666' style={{textDecoration:"none"}}><p className='childone'> nsm@netwaresystems.biz</p></a>

</div>

<div className='d-flex pb-4'>

<a href="#"><BiLogoFacebook className="social-icons"/></a>
<a href="#"><GrTwitter className="social-icons"/></a>
<a href="#"><AiFillYoutube className="social-icons"/></a>
<a href="#"><GrLinkedinOption className="social-icons"/></a>

</div>
</div>

    <div className='col-lg-2 col-md-4 col-sm-12'>
    <p className='footer-headline'>Company</p>

    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>About Us</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Global Warehouse</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Compliance Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Advanced R&D Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Test Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Contact Us</p></Link>
    </div>

    <div className='col-lg-2 col-md-4 col-sm-12'>
    <p className='footer-headline'>User Center</p>
      
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>My Account</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Message Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Orders</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Quotes</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Cases</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Returns</p></Link>

      </div>

      <div className='col-lg-2 col-md-4 col-sm-12'>
    <p className='footer-headline'>Services</p>
      
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Service Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>FAQ</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Shipping & Delivery</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Payment Method</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Warranty</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Contact Sales</p></Link>

      </div>

      <div className='col-lg-2 col-md-4 col-sm-12'>
    <p className='footer-headline'>Support</p>
      
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Help Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Technical Documents</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Support Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Tech Support</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Test Support Center</p></Link>
    <Link to="" style={{textDecoration:"none"}}><p className='footer-items'>Request Solution Design</p></Link>

      </div>
    </div>
<hr/>

<div className='d-flex justify-content-between' style={{flexWrap:"wrap"}}>
<p className='copy-rightText'>Copyright © Netware All Rights Reserved | Design & Hosted by Web Universals </p>

<div className='d-flex' style={{flexWrap:"wrap"}}>
<p className='footer-end-text'><AiOutlineGlobal /> India (English/ $ USD)</p>&nbsp; &nbsp;
<Link to="" className='footer-end-text'>|  &nbsp; Privacy & Cookies  &nbsp; |</Link>&nbsp; &nbsp;
<Link to="" className='footer-end-text'>Terms & Condition</Link>&nbsp; &nbsp;
</div>
</div>

    </div>
</div>
    
    </>
  )
}

export default Footer;