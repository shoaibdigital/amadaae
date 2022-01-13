import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function Chest({ banner }) {
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
    <div className="bs-banner homeSwiper">
      <Swiper {...params}>
        {banner &&
          banner.map((item, index) => {
            return (
              <div key={item.id}>
                <SwiperSlide>
                {item.isProduct ? (  <div className="banner-title-wrap" key={index}  style={{  top:"-2rem", left:"-4rem",transform:"scale(.7)"}}> 
                    <h2 className="banner-title">{item.title}</h2>
                    <p className="banner-sub-title">{item.subtitle}</p>
                    <a
                        href={`http://18.221.20.254:1337${item.productURL}`}
                        className="bs-btn btn-default"
                      >
                        click here for details
                      </a>
                      </div>
                    ) : (  <div className="banner-title-wrap" key={index}>
                    <h2 className="banner-title">{item.title}</h2>
                    <p className="banner-sub-title">{item.subtitle}</p>
                      </div>
                    ) }
                  {item.video ? (
                    <div className="lozad-background hidden-xs js-video-slide typ-video">
                      <video
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        src={
                          "http://18.221.20.254:1337/uploads/banner_video_5c03dc2691.mp4"
                        }
                        className="lozad-picture"
                      />
                      <button
                        className="btn-play js-modal-btn"
                        data-target="videoModal"
                      >
                        <span className="icon icon-full"></span>
                        <span className="text" style={{ color: "white" }}>
                          View full video
                        </span>
                      </button>
                      <span className="corner-shape"></span>
                    </div>
                  ) : (
                    <img
                      src={`http://18.221.20.254:1337${item.desktopImage.url}`}
                      className="js-img"
                    />
                  )}
                  <div className="banner-info mod-count-text">
                    <div className="count">{item.step}</div>
                    <div className="text">{item.stepName}</div>
                  </div>
                  <span className="corner-shape"></span>
                </SwiperSlide>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Chest;


