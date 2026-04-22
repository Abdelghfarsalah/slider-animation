"use client";


import { Provider } from "react-redux";
import Homecontent from "./components/Home";
import SliderContext from "./context/slidercontext";
import { SliderStore } from "./store";
export default function Home() {
  return (
<Provider store={SliderStore}> <SliderContext.Provider
      value={[
        "/images/download.jpg",
        "/images/download1.jpg",
        "/images/download2.jpg",
        "/images/download3.jpg",
        "/images/download4.jpg",
        "/images/download5.jpg",
        "/images/download6.jpg",
        "/images/images.jpg",
        "/images/images2.jpg"
      ]}
    >
     <Homecontent/>
    </SliderContext.Provider> </Provider>
    
  );
}