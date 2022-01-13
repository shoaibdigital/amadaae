import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function Darshan4({ banner }) {
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
        {banner && banner.map((item) => {
            return  <div key={item.id}>
                {item.isProduct ? <SwiperSlide className="typ-product js-addto">
                <img src={`http://18.221.20.254:1337${item.desktopImage.url}`}className="js-img" />
                    <div className="banner-title-wrap" >
                      <h2 className="banner-title">{item.title}</h2>
                      <p className="banner-sub-title">{item.subtitle}</p>
                      <a
                        href={`http://18.221.20.254:1337${item.productURL}`}
                        className="bs-btn btn-default"
                      >
                        click here for details
                      </a>
                    </div>
                    <div className="banner-info mod-count-text">
                      <div className="count">{item.step}</div>
                      <div className="text">{item.stepName}</div>
                    </div>
                    <span className="corner-shape"></span>
                  </SwiperSlide> : <SwiperSlide className="js-addto">
                  <img src={`http://18.221.20.254:1337${item.desktopImage.url}`} className="js-img"/>
                      <div className="banner-title-wrap">
                      <h2 className="banner-title">{item.title}</h2>
                      <p className="banner-sub-title">{item.subtitle}</p>
                    </div>
                    <div className="banner-info mod-count-text">
                      <div className="count">{item.step}</div>
                      <div className="text">{item.stepName}</div>
                    </div>
                    <span className="corner-shape"></span>
                  </SwiperSlide>
                }
              </div>
            ;
          })}
      </Swiper>
    </div>
  );
}

export default Darshan4;
