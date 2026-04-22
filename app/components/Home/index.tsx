"use client";
import { useSelector } from "react-redux";
import Content from "../content";
import Header from "../header";
import ImageSlider from "../imageslider";
import Sidemenu from "../sidemenu";
export default function Homecontent() {
    const state=useSelector((state:{changeBackground: {background: string}})=>state.changeBackground);
    
    return <>
     <div className="home" style={{
        backgroundImage: `url(${state.background})`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}>
        <Header />
        <Content />
        <ImageSlider />
        <Sidemenu/>
      </div>
    </>
}