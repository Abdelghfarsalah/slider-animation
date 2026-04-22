"use client";

import Content from "./components/content";
import Header from "./components/header";
import ImageSlider from "./components/imageslider";
import SliderContext from "./context/slidercontext";

export default function Home() {
  return (
    <SliderContext.Provider
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
      <div className="home">
        <Header />
        <Content />
        <ImageSlider />
      </div>
    </SliderContext.Provider>
  );
}