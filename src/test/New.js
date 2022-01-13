import axios from "axios";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  FreeMode,Navigation,Thumbs
} from 'swiper';


SwiperCore.use([FreeMode,Navigation,Thumbs]);


export default function New() {
  
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data,setData] = useState({})
  

  useEffect(() => {
    axios
      .get("https://frontend.amadaindia.co.in/news-events-details")
      .then((res) => setData(res.data[3].gallery))
      .catch((err) => console.log(err));
  }, []);



  return (
    data && 
    
    <div className="main lyt-content js-bg">
      <section>
      <div className="bs-section">
      <div className="container">
      <div className="bs-blog-detail">
      <div className="bd-body">
      <div className="bs-gallery">
      <div className="gallery-head">
      <Swiper  style={{height:"450px",'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
  {
    data && data.map((item)=>{
      return <SwiperSlide  className='lozad-background' style={{ backgroundImage:"url(" + `https://frontend.amadaindia.co.in/${item.image[0].url}` + ")" }} >
      </SwiperSlide>
    })
}
  </Swiper>
  </div>
  <div className="gallery-footer">
  <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
  {data && data.map((item)=>{
     return <SwiperSlide  className='lozad-background'  >
       <div  style={{ backgroundImage:"url(" + `https://frontend.amadaindia.co.in/${item.image[0].formats.thumbnail.url}` + ")" }} ></div>
      </SwiperSlide>
  }) 
}
</Swiper>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  </div>
  )
}

{/* <img src={ `https://frontend.amadaindia.co.in/${item.image[0].url}`}/> */}


{/* <img src={ `https://frontend.amadaindia.co.in/${item.image[0].formats.thumbnail.url}`} /> */}