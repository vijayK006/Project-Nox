import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<div className='navbar-top'>

<div className='nav-icon-tab'>
    <h5 style={{margin:"0px"}}>NX Optics</h5>
</div>


<ul className='n'>
    <li className='n-items hover-item'>All Products

    <div className='inner-menu'>
<h4>Fiber Optical Transceiver</h4>

<div className='container'>
<div className='row'>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>Loop Back Series</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP+ 10G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP28 25G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP28 100G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP56 200G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP-DD 400G Loopback</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>QSFP+ 40G Loopback</p></Link>


</div>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>400G QSFP-DD OSFP</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G OSFP SR8</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD SR8 PAM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD DR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD FR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD LR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>400G QSFP-DD ER4</p></Link>

</div>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>200G QSFP56 QSFP-DD</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>200G QSFP-DD SR8</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>200G QSFP56 SR4</p></Link>

<p className='menu-title pt-3'>16GFC SFP+( 14.025G )</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>16GFC SFP+ SW</p></Link>

</div>

<div className='col-lg-2 col-md-4'>
<p className='menu-title '>100G CFP CFP2 CFP4</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G CFP</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G CFP2</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>100G CFP4</p></Link>

</div>

<div className='col-lg-3 col-md-4'>
<p className='menu-title text-center'>40G QSFP+</p>
<div className='row'>
    <div className='col-lg-6'>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-eSR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SRBD</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-IR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-LR4</p></Link>
    </div>
    <div className='col-lg-6'>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-ER4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-ZR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-SWDM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-PSM4-IR</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP+ 40G-PSM4-LR</p></Link>
    </div>
</div>



</div>

<div className='col-lg-4 col-md-4'>
<p className='menu-title text-center'>100G QSFP28</p>
<div className="row">
    <div className='col-lg-6 '>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-SR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-eSR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-SRBD</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-PSM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-DR1/FR1/LR1</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-LR4</p></Link>
    </div>
    <div className='col-lg-6 '>
    <Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-ER4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-ZR4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-CWDM4</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-BIDI-4WDM-20</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28-100G-BIDI-10/20/30/40</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items text-center'>QSFP28 to SFP28 Adapter</p></Link>
    </div>
</div>



</div>

<div className='col-lg-2'>
<p className='menu-title '>25G SFP28</p>

<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 SR</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 LR</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 LWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>25G SFP28 DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>32GFC SFP28 SW</p></Link>

</div>

<div className='col-lg-2'>
<p className='menu-title '>RJ45 Copper Series</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP-100TX</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP-1000T</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>SFP+ 10G-T</p></Link>


<p className='menu-title pt-2'>10G X2</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G X2 DUAL</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G X2 CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G X2 DWDM</p></Link>

</div>

<div className='col-lg-2'>
    <p className='menu-title '>10G XFP </p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP DWDM Tunable</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP DWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP BIDI</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XFP DUAL</p></Link>

</div>

<div className='col-lg-2'>
    <p className='menu-title '>10G Xenpak</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK DUAL</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK CWDM</p></Link>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>10G XENPAK DWDM</p></Link>

<p className='menu-title pt-2'>8GFC SFP+</p>
<Link style={{textDecoration:"none"}}><p className='menu-inner-items'>8GFC SFP+ DUAL</p></Link>

</div>

</div>
</div>

    </div>
    </li>
    
    <li className='n-items '>Solution

    </li>

    <li className='n-items'>Service</li>
    <li className='n-items'>Support</li>
    <li className='n-items'>Company</li>
</ul>


{/* <ul className='n'>
    <li className='n-items'></li>
</ul>  This is for 3rd section*/}
</div>
    </>
  )
}

export default Navbar;