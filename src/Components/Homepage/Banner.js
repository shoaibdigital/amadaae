import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function Banner({ banner }) {
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
    banner && 
    <div className="bs-banner homeSwiper js-bg">
      <Swiper {...params}>
        {banner &&
          banner.map((item) => {
            return (
                <SwiperSlide className={item.isProduct ?"typ-product js-addto":"js-addto" } key={item.id}>
             <div className="banner-title-wrap" >
                              <h2 className="banner-title">{item.title}<span className="cm-line-break">{item.bannerTitle2}</span></h2>
                              <p className="banner-sub-title">{item.subtitle}</p>
                              {item.isProduct?<a href={`http://18.221.20.254:1337${item.productURL}`} className="bs-btn btn-default">
        click here for details
      </a> : null } 
                          </div>
                          <img src={`http://18.221.20.254:1337${item.desktopImage.url}`} />
                          <div className="banner-info mod-count-text">
                              <div className="count">{item.step}</div>
                              <div className="text">{item.stepName}</div>
                          </div>
                          <span className="corner-shape"></span>
                </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Banner;               




                // {item.isProduct ? (  
                // <div className="banner-title-wrap" key={index}  > 
                //     <h2 className="banner-title">{item.title}</h2>
                //     <p className="banner-sub-title">{item.subtitle}</p>
                //     <a
                //         href={`http://18.221.20.254:1337${item.productURL}`}
                //         className="bs-btn btn-default"
                //       >
                //         click here for details
                //       </a>
                //       </div>
                //     ) : (
                //     <div className="banner-title-wrap" key={index}>
                //     <h2 className="banner-title">{item.title}</h2>
                //     <p className="banner-sub-title">{item.subtitle}</p>
                //       </div>
                //     ) }
                //   <img
                //       src={`http://18.221.20.254:1337${item.desktopImage.url}`}
                //       className="js-img"
                //     />
                //   <div className="banner-info mod-count-text">
                //     <div className="count">{item.step}</div>
                //     <div className="text">{item.stepName}</div>
                //   </div>
                //   <span className="corner-shape"></span>
             


// style={{  top:"-2rem", left:"-4rem",transform:"scale(.7)"}}
















{/* <div className="banner-title-wrap" key={index}  >                    
<h2 className="banner-title">{item.title}</h2>
<p className="banner-sub-title">{item.subtitle}</p>
 {item.isProduct?<a href={`http://18.221.20.254:1337${item.productURL}`} className="bs-btn btn-default">
        click here for details
      </a> : null } 
    </div>  
  <div className="banner-info mod-count-text">
  <div className="count">{item.step}</div>
  <div className="text">{item.stepName}</div>
</div>
<img src={`http://18.221.20.254:1337${item.desktopImage.url}`} className="js-img"/>
<span className="corner-shape"></span> */}