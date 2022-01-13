import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function Darshan3() {

    const params = {
        style: {
          height: "550px",
        },
        modules: [Pagination, Autoplay],
        pagination: { clickable: true },
        autoplay: {
          delay: 5000,
          stopOnLastSlide: true,
        },
      };


    return (
        <div className="bs-banner homeSwiper js-bg">
        <Swiper {...params}>
        <SwiperSlide className="typ-product js-addto">
                <div className="banner-title-wrap">
                    <h2 className="banner-title" style={{color:"black"}}>VENTIS3015 AJ</h2>
                    <p className="banner-sub-title"  style={{color:"black"}}>World’s First Fiber Laser with LBC Technology</p>
                    <a href="laser-machines-ventis-aj-product-details.shtml" className="bs-btn btn-default">click here for details</a>
                </div>
                <img src={"http://18.221.20.254:1337/uploads/New_Project_5_d7659170a0.jpg"} className="js-img" />
                <div className="banner-info mod-count-text">
                    <div className="count"  style={{color:"black"}}>03</div>
                    <div className="text"  style={{color:"black"}}>Laser Solutions</div>
                </div>
                <span className="corner-shape"></span>
            </SwiperSlide>
            </Swiper>
            </div>
    )
}

export default Darshan3
