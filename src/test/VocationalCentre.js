import React, { useEffect, useState } from 'react'
import axios from "axios"

function VocationalCentre() {


const [data,setData] = useState("")


useEffect(()=>{
axios.get("http://localhost:8000/data")
.then(res => setData(res.data))
.catch(err => console.log(err))
},[])


 
    return (
        <div className="main lyt-content js-bg">
        <div className="bs-banner typ-sm lozad-background" style ={{  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}} >
    <div className="banner-title-wrap">
        <h2 className="banner-title">Vocational Center<span className="cm-line-break">About</span></h2>
    </div>
    <span className="corner-shape"></span>
</div>
            <div className="bs-breadcrum">
                <div className="container">
                    <ul className="list">
                        <li className="item"><a href="#" className="link">amada</a></li>
                        <li className="item"><a href="#" className="link">Vocational Center</a></li>
                        <li className="item">About</li>
                    </ul>
                </div>
            </div>
            <section>
               <div className="bs-section sec-first">
                    <div className="container">
                        <div className="sec-cont">
                   {
                    data &&  data.map((item)=>{
                       return <ul className="bs-chain-info typ-img-lg">
                        <li className="item">
                            <div className="bs-img-desc">
                                <div className="left-side">
                                    <h2 className="title">{item.title}</h2>
                                    <div className="img-wrap">
                                        <img className="lozad" src={item.image}/>
                                    </div>
                                    <div className="sec-desc">
   {item.is? item.desc.info.map((items)=>{
          return  <ul className="mod-list">
           <li className="item">{items.in}</li>
       </ul> }): <p>{item.desc}</p>
   }                                            
 </div>
                                </div>
                                <div className="right-side">
                                    <div className="img-wrap">
                                        {/* <img className="lozad" src={item.image} /> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                        </ul>
                     })
                   }
              </div>        
             </div>
            </div>
            </section> 
  </div>
   )
   }         

export default VocationalCentre



