import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/MPO_PathCoard.jpg'

import orderInfo from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/MPO_PathCoard_Info.jpeg';

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

const MPO_PatchCord = () => {

    let PartNumber = "NXOPCD-xxxx-xxxx-xxx";
    let productName = "Fiber Optical Mini Distribution Cable";

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
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' />
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
<p className='listFeture'>Single Mode & Multi-Mode</p>
<p className='listFeture'>Standard & Customized configurations</p>
<p className='listFeture'>Physical contact polishing mode</p>
<p className='listFeture'>High Reliability & Stability</p>
<p className='listFeture'>Very Compact Size of Cable Diameter</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'>NXOTTH /  NXOTTB</p>
                       <p className='listFeture'>Telecommunication</p>
                       <p className='listFeture'>Testing instruments</p>
                       <p className='listFeture'>LAN / WAN</p>
                       <p className='listFeture'>CATV</p>


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
                                <a class="nav-link" data-bs-toggle="pill" href="#menu1">Specification</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div class="tab-content">
                    <div id="home" class="container tab-pane active"><br />
                        <div class="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} NXO Mini Distribution Cable provides sundry and cost effective solution for connection between Fiber Optical equipment and components. It has the benefits including easy installation, very compact size and excellent loading performance. It reduce the cable diameter significantly. It is the most convenient and flexible answer for system cable deploying.

                            </p>
                        </div>
                    </div>

                    <div id="menu1" class="container tab-pane fade"><br />
                        <div class="container mt-3">
                            <h2>Optical Parameters</h2>

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Fiber Type</th>
                                            <th></th>
                                            <th>Single-mode</th>
                                            <th>Multi-mode</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Nominal Fiber OD</td>
                                            <td></td>
                                            <td>125.3 ~126.5μm</td>
                                            <td>126 ~ 127.5μm</td>
                                        </tr>


                                        <tr>
                                            <td>Connector Type</td>
                                            <td></td>
                                            <td>SC, FC, ST, E2000, LC, MU, CS | MTRJ</td>
                                            <td>SC, FC, ST, E2000, LC, MU | MTRJ</td>
                                        </tr>

                                        <tr>
                                            <td>Insertion Loss ( Typical )( dB )</td>
                                            <td></td>
                                            <td>0.2 | 0.5</td>
                                            <td>0.3 | 0.45</td>
                                        </tr>

                                        <tr>
                                            <td>Insertion Loss ( Max. )( dB )</td>
                                            <td></td>
                                            <td>0.3 | 0.8</td>
                                            <td>0.5 | 0.7</td>
                                        </tr>

                                        <tr>
                                            <td>Return Loss ( dB ) </td>

                                            <td>PC <hr/> UPC <hr/> APC </td>

                                            <td>≦-40 | ≦-30 <hr/> ≦-50 | - <hr/> ≦-60 | -</td>
                                            <td>-<hr/>- <hr/>-</td>
                                        </tr>

                                        <tr>
                                            <td>Mating Durability (500 cycles)</td>
                                            <td>≦ 0.2dB</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Temperature Stability</td>
                                            <td>≦ 0.3dB</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Operating Temperature °C</td>
                                            <td>-40°C ~ 70°C</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Storage Temperature °C</td>
                                            <td>-40°C ~ 85°C</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu3" class="container tab-pane fade"><br />
                        <div class="container mt-3">
                            <h2>Cable Parameters </h2>

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{textAlign:"center"}}>Cable Type</th>
                                            <th></th>
                                            <th style={{textAlign:"center"}}>Simplex</th>
                                            <th style={{textAlign:"center"}}>Round Duplex</th>
                                            <th style={{textAlign:"center"}}>Duplex</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Cable Diameter</td>
                                            <td></td>
                                            <td style={{textAlign:"center"}}>2.0mm | 3.0mm</td>
                                            <td style={{textAlign:"center"}}>3.0mm | 4.8mm</td>
                                            <td style={{textAlign:"center"}}>2.0mm*2 | 3.0mm*2</td>
                                        </tr>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Cable Weight ( Kg / Km )</td>
                                            <td></td>
                                            <td style={{textAlign:"center"}}>6.5 | 10.5</td>
                                            <td style={{textAlign:"center"}}>15.5 | 27.0</td>
                                            <td style={{textAlign:"center"}}>12.0 | 22.0</td>
                                        </tr>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Cable Weight ( Kg / Km )</td>
                                            <td>Short Time <hr/> Long Time</td>
                                            <td style={{textAlign:"center"}}>200 | 200 <hr/> 100 | 100</td>
                                            <td style={{textAlign:"center"}}>600 | 800 <hr/> 300 | 400</td>
                                            <td style={{textAlign:"center"}}>400 | 600 <hr/> 200 | 300 </td>
                                        </tr>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Crush resistant ( N / 100mm )</td>
                                            <td></td>
                                            <td style={{textAlign:"center"}}>4500 | 4500</td>
                                            <td style={{textAlign:"center"}}>3000 | 3000</td>
                                            <td style={{textAlign:"center"}}>5000 | 5000</td>
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

export default MPO_PatchCord;