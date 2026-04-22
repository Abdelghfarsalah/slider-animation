"use client";


import { Provider } from "react-redux";
import Homecontent from "./components/Home";
import SliderContext from "./context/slidercontext";
import { SliderStore } from "./store";
export default function Home() {
  return (
<Provider store={SliderStore}> <SliderContext.Provider
      value={[
        "/images/spiderman-cartoon-chromebook-wallpaper.jpg",
        "/images/wp3061378-marvel-infinity-war-wallpapers.jpg",
        "/images/wp3802811-iron-spider-man-wallpapers.jpg",
        "/images/wp3802822-iron-spider-man-wallpapers.jpg",
        "/images/wp4140977-spider-man-4k-wallpapers.jpg",
        "/images/wp4140983-spider-man-4k-wallpapers.jpg",
        "/images/wp4140993-spider-man-4k-wallpapers.jpg",
        "/images/wp12931040-superheroes-4k-pc-wallpapers.jpg",
      ]}
    >
     <Homecontent/>
    </SliderContext.Provider> </Provider>
    
  );
}