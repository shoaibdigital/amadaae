import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import Test1 from './Test1';

function Test() {

// const [obj,setObj] = useState({})
// const [info,setInfo] = useState("")
const[arr,setArr] = useState({})


// useEffect(() => {
//     axios
//       .get("http://18.221.20.254:1337/home-page")
//       .then((res) => setObj(res.data))
//       .catch((err) => console.log(err));
//   }, []);


  useEffect(() => {
    axios
      .get("http://18.221.20.254:1337/home-page")
      .then((res) => setArr(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://18.221.20.254:1337/home-page")
  //     .then((res) => setArr(res.data.banner))
  //     .catch((err) => console.log(err));
  //  }, []);


  //  useEffect(() => {
  //    if(arr){
  //     setInfo(arr)
  //    }
  //  }, []);



// console.log("Obj",obj)
// console.log("Arr",arr)
// console.log("Info",info)

  return (
    <div>   
      <Test1 banner={arr?.banner}/>   
    </div>
  )
}

export default Test
