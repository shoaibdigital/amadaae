import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';




function Banner() {

    SwiperCore.use([Autoplay,Navigation,Pagination])   

    const [data,setData] = useState("")

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      


      useEffect(()=>{  
          fetch("http://localhost:1337/api/home?populate[banner][populate]=*", requestOptions)
            .then(response => response.json())
            .then(result => setData(result.data.attributes.banner))
            .catch(error => console.log('error', error));
      },[])
    

     console.log(data)

    return (
<div className='bs-banner homeSwiper js-bg'>   
 <Swiper navigation pagination autoplay={{ delay: 1000 }} >
     {
         data && data.map((item,index)=>{
          return  <div>
                <SwiperSlide>
            <div className="banner-title-wrap" key={index}>
                              <h2 className="banner-title">{item.bannerTitle}<span className="cm-line-break">{item.bannerTitle2}</span></h2>
                              <p className="banner-sub-title">{item.bannerSubtitle}</p>
                          </div>
                          <img src={`http://localhost:1337${item.bannerImage.data[0].attributes.url}`}  className="js-img"/>
                          <div className="banner-info mod-count-text">
                              <div className="count">{item.step}</div>
                              <div className="text">{item.stepDesc}<span className="cm-line-break">{item.stepDesc2}</span></div>
                          </div>
                          <span className="corner-shape"></span>
           </SwiperSlide>
           </div> 
         })
 
//   <SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
     }
  </Swiper>

</div>
  )
}




export default Banner
