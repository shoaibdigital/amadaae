import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function FooterTest() {

    const[info,setInfo] = useState()
    const[data,setData] = useState()
    const [size,setSize] = useState()
    const[first,setFirst] = useState()
    const[second,setSecond] = useState()
    const[head,setHead] = useState()


    useEffect(()=>{
        axios.get("https://strapi.amada.ae/global")
        .then(res => setInfo(res.data.footer))
        .catch(err => console.log(err))
    },[])

    
useEffect(()=>{
if(info){    
setData(info.footerMenu)
// console.log(size)
// let size = data.length/2

}
},[info])

useEffect(()=>{
if(data){
    setSize(data.length/2)
    }
},[data])


useEffect(()=>{
    if(size){
        setSecond(data.slice(size))
        setFirst(data.slice(0,size))
    }
},[size])

useEffect(()=>{
if(first){
setHead(first.shift())
}
},[first])


console.log(data)
console.log(size)
console.log("first",first)
console.log("second",second)
console.log(head)
// console.log(length)


// if(data){
// console.log(data.footerMenu)
// let a = data.footerMenu
// let b = a.length/2
// console.log(a.length)
// console.log(b)
// let c = a.slice(b)
// console.log(c) 
// let d = a.slice(0,b)
// console.log(d)
// let e = d.shift()
// console.log(d)
// console.log(e)
// }else{
//  return null
// }    
    
    

return (
    
    info && info.length !== 0 ?
    <>
    <div className="bs-footer">
    <div className="container">
    <ul className="quicklink-item-wrap top"> 
    <li class="quicklink-item">
    <div class="mod-quicklink">  
    {
        <ul className="wrap">
            {
                 head && head.footerSubmenu && head.footerSubmenu.map((item)=>{
                     return (
                         <>
                         <li className="item">
                         <a href="#" className="title">{item.subMenu}</a>
                             </li>
                         </>
                     ) 
                    })
                    }    
        </ul>
    }
    </div>
    </li>   
    <li class="quicklink-item">
    <div class="mod-quicklink">  
    {
            first && first.length !== 0 && first.map((item)=>{
              return(
                  <>
                    <h2 class="title mb-accord-title">{item.menuName}</h2>
                    <ul class="wrap mb-accord-body">
                        <li class="item">
                        <a href="company-overview.shtml" class="link"></a>
                        </li>
                        </ul>
                  </>
              )
            })
    }
     </div>
    </li>   
    </ul>
    <ul class="quicklink-item-wrap bottom">
     {
         second && second.length !== 0 && second.map((item)=>{
               return (
                   <>
          <li class="quicklink-item">
          <div class="mod-quicklink">
          <h2 class="title mb-accord-title">
            <a href="punching-machines.shtml">{item.menuName}</a>
            </h2>
            <ul className="wrap mb-accord-body">
               {
                   item && item.footerSubmenu && item.footerSubmenu.map((list)=>{
                       return(
                           <>
                            <li className="item">
                            <a href="#" className="link">{list.subMenu}</a>
                        </li>
                           </>
                       )
                   })
               } 
            </ul>
          </div>
          </li>
                   </>
               )
         })
     }   
     </ul>
     <div className="copy-wright">
            <p>&copy; Copyright, Amada (India) Pvt. Ltd., All Rights Reserved.</p>
        </div>
    </div>
    </div>
      </>: 
    <div>
    <h1>Loading....</h1>
    </div>
    )
}

export default FooterTest
