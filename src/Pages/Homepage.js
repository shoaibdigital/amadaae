import React from "react";
import About from "../Components/Homepage/About";
import Banner from "../Components/Homepage/Banner";
import Products from "../Components/Homepage/Products";
import WhatsNew from "../Components/Homepage/WhatsNew";
import axios from "axios";
import { useEffect, useState } from "react";
import Chest from "../test/Chest";
import New from "../test/New";
import Darshan4 from "../test/Darshan4";

function Homepage() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://strapi.amada.ae/home-page")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
      {
        data && 
        <>
        <Banner banner={data.banner? data.banner: null}/>
        <Products  product={data.productCategorySection? data.productCategorySection.product_categories: null}/>
        <About info={data.infoSection ? data.infoSection.info: null} />
        <WhatsNew event={data.whatsNewSection? data.whatsNewSection.news_events: null} />     
          {/* <Darshan4 banner={data?.banner} /> */}
        </>
      }
      
    </div>
  );
}

export default Homepage;
