import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Footer() {

    const[data,setData] = useState()

    useEffect(()=>{
        axios.get("https://strapi.amada.ae/global")
        .then(res => setData(res.data.footer))
        .catch(err => console.log(err))
    },[])

    
if(data){
    console.log(data.footerMenu)
}else{
 return null
}    
    
    

return (
        <>
        <div className="bs-footer">
    <div className="container">
        <ul className="quicklink-item-wrap top">
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <ul className="wrap">
                        <li className="item">
                            <a href="index.shtml" className="title">home</a>
                        </li>
                        <li className="item">
                            <a href="newsevents.shtml" className="title">news &amp; events</a>
                        </li>
                        <li className="item">
                            <a href="careers.shtml" className="title">careers</a>
                        </li>
                        <li className="item">
                            <a href="enquiry.shtml" className="title">contact / enquiry</a>
                        </li>
                        <li className="item">
                            <a href="#https://www.amada.com/" target="_blank" className="title">amada global</a>
                        </li>
                        <li className="item">
                            <a href="#" className="title">sitemap</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">company profile</h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="company-overview.shtml" className="link">introduction</a>
                        </li>
                        <li className="item">
                            <a href="presidents-message.shtml" className="link">Presidents Message</a>
                        </li>
                        <li className="item">
                            <a href="corporate-video.shtml" className="link">Corporate Video</a>
                        </li>
                        <li className="item">
                            <a href="customer-details.shtml" className="link">customer details</a>
                        </li>
                        <li className="item">
                            <a href="https://www.amada.com/" target="_blank" className="link">amada worldwide</a>
                        </li>
                        <li className="item">
                            <a href="csr.shtml" className="link">corporate social responsibility</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">vocational center</h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="trainingabout.shtml" className="link">about</a>
                        </li>
                        <li className="item">
                            <a href="trainingcourses.shtml" className="link">training courses offered</a>
                        </li>
                        <li className="item">
                            <a href="precision_sheetmetal.shtml" className="link">precision sheet metal technology fair</a>
                        </li>
                        {/* <!-- <li className="item">
                            <a href="trainingschedule.shtml" className="link">schedule</a>
                        </li> --> */}
                        <li className="item">
                            <a href="trainingcontact.shtml" className="link">contact</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">services</h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="service-support.shtml" className="link">Service Support</a>
                        </li>
                        <li className="item">
                            <a href="service-extended-warranty.shtml" className="link">Service Extended Warranty</a>
                        </li>
                        <li className="item">
                            <a href="service-adss.shtml" className="link">Service ADSS</a>
                        </li>
                        {/* <!-- <li className="item">
                            <a href="faq.shtml" className="link">service faqs</a>
                        </li> --> */}
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">
                        <a href="laser-machines.shtml">laser machines</a></h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="laser-machines-ventis-aj-product-details.shtml" className="link">VENTIS-AJ series</a>
                        </li>
                        <li className="item">
                            <a href="laser-machines-ensis-aj-product-details.shtml" className="link">ENSIS-AJ series</a>
                        </li>
                        <li className="item">
                            <a href="laser-machines-ensis-3015-ri-product-details.shtml" className="link">ENSIS-3015 RI</a>
                        </li>
                        <li className="item">
                            <a href="laser-machines-lcg-3015-product-details.shtml" className="link">LCG-3015 AJ II</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">
                        <a href="combination-machines.shtml">Combination machines</a>
                    </h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="combination-machines-lc-c1aj-product-details.shtml" className="link">LC-C1AJ series</a>
                        </li>
                        <li className="item">
                            <a href="combination-machines-eml-aj-product-details.shtml" className="link">EML-AJ series</a>
                        </li>
                        <li className="item">
                            <a href="combination-machines-acies-aj-product-details.shtml" className="link">ACIES-AJ series</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul className="quicklink-item-wrap bottom">
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">
                        <a href="punching-machines.shtml">Punching machines</a>
                    </h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="punching-machines-em-zr-product-details.shtml" className="link">EM-ZR series</a>
                        </li>
                        <li className="item">
                            <a href="punching-machines-em-mii-product-details.shtml" className="link">EM-MII series</a>
                        </li>
                        <li className="item">
                            <a href="punching-machines-ae-nt-product-details.shtml" className="link">AE-NT series</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">
                        <a href="press-brakes.shtml">Press Brakes</a>
                    </h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="press-brake-machines-hg-product-details.shtml" className="link">HG Series</a>
                        </li>
                        <li className="item">
                            <a href="press-brake-machines-hg-atc-product-details.shtml" className="link">HG-ATC Series</a>
                        </li>
                        <li className="item">
                            <a href="press-brake-machines-hg-1303rm-product-details.shtml" className="link">HG-1303Rm</a>
                        </li>
                        <li className="item">
                            <a href="press-brake-machines-hrb-product-details.shtml" className="link">HRB Series</a>
                        </li>
                        <li className="item">
                            <a href="press-brake-machines-eg-product-details.shtml" className="link">EG Series</a>
                        </li>
                        <li className="item">
                            <a href="press-brake-machines-rgm2-product-details.shtml" className="link">RGM2 Series</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">
                        <a href="automation.shtml">Automation</a>
                    </h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="automation-rmp-ntk-product-details.shtml" className="link">Takeout Loader (RMP-NTK)</a>
                        </li>
                        <li className="item">
                            <a href="automation-as-ntk-product-details.shtml" className="link">Takeout Loader (AS-NTK)</a>
                        </li>
                        <li className="item">
                            <a href="automation-asr-n-product-details.shtml" className="link">Cycle Loader (ASR-N)</a>
                        </li>
                        <li className="item">
                            <a href="automation-mars-product-details.shtml" className="link">MARS</a>
                        </li>
                        <li className="item">
                            <a href="automation-fork-pallet-product-details.shtml" className="link">Fork Pallet Changer (ASF/ASFH)</a>
                        </li>
                        <li className="item">
                            <a href="automation-pallet-as-product-details.shtml" className="link">Pallet Changer (AS)</a>
                        </li>
                        <li className="item">
                            <a href="automation-manipulator-product-details.shtml" className="link">Manipulator (MPL)</a>
                        </li>
                        <li className="item">
                            <a href="automation-lst-product-details.shtml" className="link">Shuttle Table (LST)</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">Tooling</h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="#" className="link">AITS</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">NEX III</a>
                        </li>
                        <li className="item">
                            <a href="tooling-contouring-product-details.shtml" className="link">Contouring</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">ARFT</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">V-Cut</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">MPT Tapping</a>
                        </li>
                        <li className="item">
                            <a href="tooling-high-speed-product-details.shtml" className="link">High Speed Marking</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Standard</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Special Order</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">AMADA Modular</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Hydraulic Clamping Holder A GRIP</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">AFH</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">Software</h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="software-production-design-product-details.shtml" className="link">VPSS 3i</a>
                        </li>
                        <li className="item">
                            <a href="software-bend-plus-product-details.shtml" className="link">Bend Plus</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Blank Plus</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">AP100 LE</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">SheetWorks for Unfold</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Kaizen</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Dr. Abe Tube</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">vLot Manager</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">AITS Software</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">PeuWin</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">vFactory</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="quicklink-item">
                <div className="mod-quicklink">
                    <h2 className="title mb-accord-title">fabricating machines</h2>
                    <ul className="wrap mb-accord-body">
                        <li className="item">
                            <a href="fabricating-machine-id-togu-product-details.shtml" className="link">ID-TOGU</a>
                        </li>
                        <li className="item">
                            <a href="fabricating-machine-togu-iii-product-details.shtml" className="link">TOGU III</a>
                        </li>
                        <li className="item">
                            <a href="fabricating-machine-flw-product-details.shtml" className="link">FLW series</a>
                        </li>
                        <li className="item">
                            <a href="fabricating-machine-ylr-product-details.shtml" className="link">YLR series</a>
                        </li>
                        <li className="item">
                            <a href="fabricating-machine-ylm-product-details.shtml" className="link">YLM series</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">ID series</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">TS series</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">NC Stud welding machine</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div className="copy-wright">
            <div className="mod-social-links">
                <a href="#" className="icon icon-youtube"><img src="assets/images/youtube.svg"/></a>
                <a href="#" className="icon icon-linkedin-o"><img src="assets/images/linkedin.svg"/></a>
            </div>
            <p>Amada (India) Pvt. Ltd CIN Number :- U74140KA2000PTC078927</p>
            <p>&copy; Copyright, Amada (India) Pvt. Ltd., All Rights Reserved.</p>
        </div>
    </div>
</div>

{/* <div className="bs-news-fly">
    <div className="nf-head">
        <h3 className="nf-title">flash news</h3>
    </div>
    <div className="nf-body">
        <ul className="list">
            <li className="item">
                <div className="nf-item">
                    <a href="#" className="nf-link"></a>
                    <span className="nf-shape"></span>
                    <div className="nf-bullet">
                        <time className="date" datetime="2021-07-20"><span className="text-lg">20</span>jul 2021</time>
                    </div>
                    <p className="nf-text">AMS Single Pallet Automation Webinar - LATC</p>
                </div>
            </li>
            <li className="item">
                <div className="nf-item">
                    <a href="#" className="nf-link"></a>
                    <span className="nf-shape"></span>
                    <div className="nf-bullet">
                        <time className="date" datetime="2021-07-20"><span className="text-lg">21</span>jul 2021</time>
                    </div>
                    <p className="nf-text">AMS Single Pallet Automation Webinar - CTC</p>
                </div>
            </li>
            <li className="item">
                <div className="nf-item">
                    <a href="#" className="nf-link"></a>
                    <span className="nf-shape"></span>
                    <div className="nf-bullet">
                        <time className="date" datetime="2021-07-20"><span className="text-lg">22</span>jul 2021</time>
                    </div>
                    <p className="nf-text">AMS Single Pallet Automation Webinar - SSC</p>
                </div>
            </li>
        </ul>
    </div>
    <button className="nf-trigger js-news-fly-trigger" type="button"><span className="icon icon-file"></span></button>
</div> */}
</>
    )
}

export default Footer
