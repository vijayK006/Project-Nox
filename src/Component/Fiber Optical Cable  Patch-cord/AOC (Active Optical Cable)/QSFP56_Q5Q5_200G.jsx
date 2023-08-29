import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Fiber Optical Cable/AOC/QSFP28.jpg'

// import TransceiverBlock from '../../img/products/10SFP+/Transciever.jpg';
import pinassisment from '../../../img/products/Fiber Optical Cable/AOC/pinAssignment2_3.jpg';
import pinassisment2 from '../../../img/products/Fiber Optical Cable/AOC/pinAssignment2_4.jpg';
import machdimenssion from '../../../img/products/Fiber Optical Cable/AOC/dimension7.jpg';
import machdimenssion2 from '../../../img/products/Fiber Optical Cable/AOC/dimension8.jpg';
import Memorymap from '../../../img/products/Fiber Optical Cable/AOC/Q5Q5Memory.jpg';
import Memorymap2 from '../../../img/products/Fiber Optical Cable/AOC/Q6Q6Memory2.jpg';
import handling from '../../../img/products/Fiber Optical Cable/AOC/schematic.jpg';
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

const QSFP56_Q5Q5_200G = () => {

    let PartNumber = "NXOAOC-B0G-Q5Q5-xxx-xx";
    let productName = "200G QSFP56 Active Optical Cable ( AOC ) Hot Pluggable, 850nm VCSEL, MMF OM4 1~100M, DDM";

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

       <p className='listFeture'>     Compliant with IEEE 802.3cd </p>
        <p className='listFeture'>    Compliant with SFF-8679 </p>
        <p className='listFeture'>    4 independent full-duplex channels </p>
        <p className='listFeture'>    Aggregate Data Rate 212.5Gbps </p>
        <p className='listFeture'>    Hot Pluggable </p>
        <p className='listFeture'>    4x50G PAM4 VCSEL / PIN array </p>
       <p className='listFeture'>     Compliant to Class 1M Laser Safety </p>
        <p className='listFeture'>    CMIS4.0 Management Interface  </p>
        <p className='listFeture'>    Single 3.3V power supply </p>
         <p className='listFeture'>   Link distance up to 100m over OM4 fiber Recommended MAX Length 30m </p>
        <p className='listFeture'>    Low Power Consumption, Typical 5.0W each End </p>
         <p className='listFeture'>   RoHS Compliant </p>

                    <h5 className='pt-5'>Applications</h5>

                    <p className='listFeture'> 200GBASE-SR4 Ethernet Link </p>
                    <p className='listFeture'> Data Center & Storage</p>
                    <p className='listFeture'> Datacom / Telecom Switch & Router</p>


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
                                <a class="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
                            </li>

                          
                        </ul>
                    </div>
                </div>



                <div class="tab-content">
                    <div id="home" class="container tab-pane active"><br />
                        <div class="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} 200G QSFP+ Active Optical Cables (AOC) are direct-attach fiber assemblies with QSFP56 form factor. The AOC utilize multi-mode fiber with 850nm VCSEL and PIN PD. It could be used as an alternative solution to QSFP56 passive and active copper cables, while providing improved signal integrity, longer distances, superior electro-magnetic immunity & better bit error rate performance. They are suitable for 1~100 meters distances and offer a cost-effective way for very high port density connections.




                            </p>
                        </div>
                    </div>

                    <div id="menu1" class="container tab-pane fade"><br />
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
                                            <td>5</td>
                                            <td>85</td>
                                            <td>%</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc</td>
                                            <td>-0.5</td>
                                            <td>+3.6</td>
                                            <td>V</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu2" class="container tab-pane fade"><br />
                        <div class="container mt-3">
                            <h2>Recommended Operating Conditions</h2>

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th></th>
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
                                            <td></td>

                                            <td>Top</td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td>+70</td>
                                            <td>°C</td>

                                        </tr>


                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td></td>

                                            <td>Vcc</td>
                                            <td>+3.13</td>
                                            <td>+3.3</td>
                                            <td>+3.47</td>
                                            <td>V</td>

                                        </tr>

                                        <tr>
                                            <td>Data Rate, per Lane </td>
                                            <td></td>

                                            <td>DR</td>
                                            <td></td>
                                            <td>26.5625</td>
                                            <td></td>
                                            <td>GBd</td>


                                        </tr>
                                        <tr>
                                            <td>Data Rate Accuracy</td>
                                            <td></td>

                                            <td>DR</td>
                                            <td>-100</td>
                                            <td></td>
                                            <td>+100</td>
                                            <td>ppm</td>

                                        </tr>
                                        <tr>
                                            <td>Optical Center Wavelength</td>
                                            <td></td>

                                            <td>λc</td>
                                            <td>840</td>
                                            <td></td>
                                            <td>860</td>
                                            <td>nm</td>

                                        </tr>
                                        <tr>
                                            <td>Power Consumption, per End</td>
                                            <td></td>

                                            <td>P</td>
                                            <td></td>
                                            <td>5</td>
                                            <td></td>
                                            <td>W</td>

                                        </tr>
                                        <tr>
                                            <td>Logic Input Voltage High</td>
                                            <td></td>

                                            <td>Vin</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>Vcc+0.3</td>
                                            <td>V</td>

                                        </tr>
                                        <tr>
                                            <td>Logic Input Voltage Low</td>
                                            <td></td>

                                            <td>vil</td>

                                            <td>-0.3</td>
                                            <td></td>
                                            <td>0.8</td>
                                            <td>V</td>
                                          

                                        </tr>
                                        <tr>
                                            <td>Management Interface, as defined by CMI4.0 </td>

                                            <td>Serial I2C-Based, MAX Frequency 400KHz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                     
                                        <tr>
                                            <td>Electrical Interface and Pin-out </td>

                                            <td>38-pin edge connector defined by SFF-8679</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>

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
                <h1 className='pb-4'>Pin Assignment</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={pinassisment} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>
            {/* Memory Map Section Start */}
            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>SFP+ Pin Assignment</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={pinassisment2} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div> */}
            {/* handling */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Recommended Host Board Schematic</h1>
                {/* <p>Care should be taken to restrict exposure to the conditions defined in the Absolute Maximum Ratings and Recommended Operating Conditions. Put the product in an even and stable location. If the product falls down or drops, it may cause an injury or malfunction. The cable must not be subject to extreme bends during installation or while in operation. If you bend the cable at a radius less than the cable minimum bend radius, then the cable may get damaged. Don’t twist or pull by force ends of the cable, which might cause malfunction. In addition, the bending direction should be perpendicular to the flat surface of the ribbon cable. Please do not bend or kink the cable in lateral directions of flat surface of the ribbon.
                </p> */}
                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={handling} className='sectionImg2_1' alt="Transceiver Block Diagram" />
                </div>

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Memory Map</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Memorymap} className='sectionImg2' alt="memorymapImg" />
                </div>
                <br />
                <br />
                <div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ Memorymap2 } className='sectionImg2_1' alt="memorymapImg"/>
</div>

            </div>


            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Mechanical Dimensions </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={machdimenssion} className='sectionImg4' alt="Transceiver Block Diagram" />
                </div>
                <br/>
                <br/>
                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={machdimenssion2} className='sectionImg3' alt="Transceiver Block Diagram" />
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

export default QSFP56_Q5Q5_200G;