import React from 'react'

function Test1({banner}) {


console.log(banner)


    return (
        <div>
            {banner && banner.map((item)=>{
         return <img
         src={`http://18.221.20.254:1337${item.desktopImage.url}`}
         className="js-img"
       />
            })}
        </div>
    )
}

export default Test1
