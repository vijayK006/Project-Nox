import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

// about us Images
import aboutsectionImg from '../img/aboutus-Img.jpg';

const AboutUs = () => {
  return (
    <>
<Navbar/>
<div className='leave-navbar'>
<div className='about-bg'>

<div className='heading-banner'>
<h1>About Us</h1>
</div>

</div>

{/* Section Start */}

<section className='container pt-lg-5 pb-lg-5 pt-3 pb-3'>
<div className='row'>
 
  <div className='col-lg-6 col-md-6 col-sm-12'>
<img src={aboutsectionImg} className='sectionImg' alt="aboutImg"/>
  </div>

  <div className='col-lg-6 col-md-6 col-sm-12'>
    <h2>Netware Systems Pvt. Ltd, an ISO 9001 / 20000 & 27001 Certified company</h2>

<div className='sub-content'>

<p>
We started the journey in IT industry with the sole aim of innovating brilliant 
ideas and bringing them to life with the help of industry experts leveraging 
advanced tools & technologies.
<br/>
<br/>
For more than 22 years we have been doing exactly what we 
have promised! Delivering innovative, smart solutions without 
compromising affordability, and meeting  our customer’s Network & 
IT challenges successfully.
</p>

</div>
  </div>

</div>
</section>

{/* Section End */}

{/* Section two Start */}

<section className='bg-img1 '>
<div className='container'>
  <p className='bg-content'>We have been assisting organizations for addressing their end to end need for 
  high-performing networking products and services, without increasing their infra cost. 
  The end-to-end SLA guarantee with agility and flexibility assures reduced operational 
  expenses, while delivering highly consistent and satisfactory level of services. 
  Our partnerships with leading brands and a well organized supply chain helps our clients 
  to meet their demands in a shorter time.  
</p>
</div>
</section>

{/* Section two End */}

{/* Addressing Todays Challenges  Section Start */}

<section className='container pt-lg-5 pb-lg-5 pt-3 pb-3'>
  <div className='row align-items-center'>
    <div className='col-lg-6 col-sm-12'>

    <div className='section-header2'>
    <h1 className='pb-4'>Addressing Today’s Challenges</h1>
    <p>With next generation technology adoption at varying stages across the global  telecoms landscape, operators are faced with meeting the dynamic demands of high capacity across a complex mix of hybrid networks and a mature multi-vendor ecosystem. 
</p>
<p>This is coupled with the need to support new feature set. This comes the challenge of ensuring compatibility between the legacy and next generation protocol technologies. 
</p>
<p>Netware strives to make your transition from legacy to next generation a seamless with zero disruption journey.
</p>
    </div>

    </div>
    <div className='col-lg-6 col-sm-12'>
      <div className='row'>

        <div className='col-lg-6 col-md-6 col-sm-12 pt-2 pb-2'>
          <div className='section-card2'>
            <p>Multi-Generation Networks</p>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 pt-2 pb-2'>
          <div className='section-card2'>
            <p>Multi-Vendor Networks</p>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 pt-2 pb-2'>
          <div className='section-card2'>
            <p>Multi-Segment Networks</p>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 pt-2 pb-2'>
          <div className='section-card2'>
            <p>Multi-SLA Networks</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* Addressing Todays Challenges  Section End */}

</div>

<Footer/>
    </>
  )
}

export default AboutUs;