import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energy_Cable1.jpg'
import productImg2 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energy_Cable2.jpg'
import productImg3 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energy_Cable3.jpg'

import orderInfo from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energyChainOrderInfo.jpeg';
import cablestrut from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/cable.jpg';

// import Memorymap2 from '../../img/products/1.25G CSFP/memoryMap2.png';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import { TiTickOutline } from 'react-icons/ti';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Energy_Chain_Cable = () => {

    let PartNumber = "NXOPCD-3D5L-xxxx-xxx-EC ";
    let productName = "Fiber Optical OM3 5.0mm Round Duplex Energy Chain Cable Patch-cord";

    const [name, setName] = useState("");
    const [mobNumber, setmobNumber] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userMessage, setuserMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s6yscqg', 'template_nnkudli', form.current, 'ctLMl35oWO-hYo21q')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent :)");
                document.getElementById('successMsg').style.top = "0px";

                setName("");
                setmobNumber("");
                setuserEmail("");
                setuserMessage("");

            }, (error) => {
                console.log(error.text);
            });
    };


    const hidePop = () => {
        document.getElementById("successMsg").style.top = "-100%";
    }

    return (
        <>
            <Navbar />

            <div className='product-struct'>
                <div className='productImgLightBox'>

                    <div className='LightBox'>

                        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                            <img src={productImg1} className='img-main' alt="product-40GLoobBack" />

                        </div>

                        <p className='text-center' style={{ color: "gray", fontWeight: "200", fontSize: "15px", marginBottom: "0px" }}>Click to open expanded view</p>

                        <div className="d-flex justify-content-center">
                            <Gallery>


                                <Item
                                    original={productImg2}
                                    thumbnail={productImg2}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg2} className='lightbox-img' />
                                    )}
                                </Item>

                                <Item
                                    original={productImg3}
                                    thumbnail={productImg3}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg3} className='lightbox-img' />
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' />
                                    )}
                                </Item>

                                <Item
                                    original={productImg2}
                                    thumbnail={productImg2}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg2} className='lightbox-img' />
                                    )}
                                </Item>

                            </Gallery>
                        </div>


                        <div className="d-flex justify-content-center flex-wrap cart-btn">
                            <Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal"><BsCartCheck style={{ marginBottom: "5px" }} /> Request a Quote</Link>
                        </div>

                    </div>

                </div>

                <div className='product-content'>
                    <h4>
                        {productName}
                    </h4>

                    <div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
                        <p>Part Number</p>

                        <p className='sell-text'>{PartNumber}</p>
                    </div>

                    <div className='sub-content d-flex justify-content-start'>
                        <p style={{ fontWeight: "500" }}><LiaWarehouseSolid />  In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
                        <p style={{ fontWeight: "500" }}><MdSecurity /> Test Support </p>
                    </div>

                    <h5>Features</h5>

<p className='listFeture'>Low Insertion Loss & Return Loss</p>
<p className='listFeture'>High compressive, Light weight</p>
<p className='listFeture'>Small Diameter, Multi Fiber Cores</p>
<p className='listFeture'>High Reliability & Stability</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'>Energy Chain system</p>
                       <p className='listFeture'>Robotic Assembly system</p>
                       <p className='listFeture'>Industrial data communication</p>
                </div>

            </div>

            <div className='container pt-lg-5  pb-lg-5'>
                <div className='resp-overflow'>
                    <div className='d-flex justify-content-center'>
                        <ul class="navs nav-pills" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="pill" href="#menu2">Specification</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div class="tab-content">
                    <div id="home" class="container tab-pane active"><br />
                        <div class="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} TNXO Patch-cord provides sundry and cost effective solution for connection between Fiber Optical equipment and components. It has the benefits including easy installation, environmentally stable and excellent loading performance. The EC cable series have advantages of mechanical bending performance which are specifically designed for Energy Chain and Robotic Assembly system used in automatic production factory and various industrial application.

                            </p>
                        </div>
                    </div>

                    <div id="menu2" class="container tab-pane fade"><br />
                        <div class="container mt-3">
                            <h2>Optical Parameters</h2>

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th></th>
                                            <th>Min.</th>
                                            <th>Typ.</th>
                                            <th>Max</th>
                                            <th>Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Fiber Type</td>
                                            <td>MMF 50μm OM3</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Fiber Attenuation @850nm</td>
                                            <td></td>
                                            <td></td>
                                            <td>3.0</td>
                                            <td></td>
                                            <td>dB/KM+</td>
                                        </tr>

                                        <tr>
                                            <td>Fiber Attenuation @1300nm</td>
                                            <td></td>
                                            <td></td>
                                            <td>1.2</td>
                                            <td></td>
                                            <td>dB/KM+</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Tight Buffer</td>
                                            <td>0.6mm x 2</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Cable Outer Diameter</td>
                                            <td></td>
                                            <td>2.8</td>
                                            <td>3.0</td>
                                            <td>3.2</td>
                                            <td>mm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Weight</td>
                                            <td></td>
                                            <td></td>
                                            <td>8.0</td>
                                            <td></td>
                                            <td>Kg/Km</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Fiber Resistance</td>
                                            <td>IEC60332-1</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                            <tr>
                                            <td>Cable Tensile Long Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>60</td>
                                            <td>N</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Tensile Short Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>100</td>
                                            <td>N</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Crush Long Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>60</td>
                                            <td>N/10cm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Crush Short Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>100</td>
                                            <td>N/10cm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Bending Radius </td>

                                            <td>Static <hr/> Dynamic</td>

                                            <td>50 <hr/> 100</td>
                                            <td></td>
                                            <td></td>
                                            <td>mm<hr/>mm</td>
                                        </tr>

                                        <tr>
                                            <td>Connector Type</td>
                                            <td>LC/PC</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Insertion Loss</td>
                                            <td></td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>0.5</td>
                                            <td>dB</td>
                                        </tr>

                                       

                                        <tr>
                                            <td>Mating Durability (500 cycles)</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>0.2</td>
                                            <td>dB</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Temperature Stability</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>dB</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Operating Temperature °C</td>
                                            <td></td>
                                            <td>-20</td>
                                            <td></td>
                                            <td>70</td>
                                            <td>°C</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Storage Temperature °C</td>
                                            <td></td>
                                            <td>-20</td>
                                            <td></td>
                                            <td>70</td>
                                            <td>°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={TransceiverBlock} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div> */}

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Cable Structure</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={cablestrut} className='sectionImg2_5' alt="memorymapImg" />
                </div>

            </div>



            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Ordering Information</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={orderInfo} className='sectionImg2' alt="Transceiver Block Diagram" />
                </div>

            </div>
            {/* Mechanical Dimensions section end */}



            <Footer />
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
                                    <div className='col-md-6 col-sm-12'>
                                        <label>Your Product Part Number</label>
                                        <input type='text' className='form-control mt-2 mb-2' value={PartNumber} id='setName' name='Partno' readOnly />
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <label>Your Product Name</label>
                                        <input type='text' className='form-control mt-2 mb-2' value={productName} name="productname" readOnly />

                                    </div>
                                </div>

                                <input type='text' className='form-control mt-2 mb-2' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' name="user_name" required />
                                <div className='row'>
                                    <div className='col-6'>
                                        <input type='number' className='form-control mt-2 mb-2' value={mobNumber} onChange={(e) => setmobNumber(e.target.value)} placeholder='Enter Your Mobile Number' name="mobileno" required />
                                    </div>
                                    <div className='col-6'>
                                        <input type='email' className='form-control mt-2 mb-2' value={userEmail} onChange={(e) => setuserEmail(e.target.value)} placeholder='Enter Your Email' name="email" required />

                                    </div>
                                </div>

                                <textarea rows="2" cols='2' className='form-control' value={userMessage} onChange={(e) => setuserMessage(e.target.value)} placeholder='Enter Your Message' name='message' required></textarea>
                                <input type='submit' className='btn btn-danger mt-2' value="Send" style={{ width: "200px" }} />
                            </form>
                        </div>



                    </div>
                </div>

                <div className="message-sent" id="successMsg">

                    <div className="card-message">

                        <div className="d-flex justify-content-center">
                            <TiTickOutline className="messagetick-mark" />
                        </div>

                        <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services.
                            Your inquiry is valuable to us, and our team shall get back to you soon.</p>

                        <div className="d-flex justify-content-center pt-5 pb-1">
                            <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Energy_Chain_Cable;