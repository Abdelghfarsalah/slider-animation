"use client"
import { useContext } from "react";
import sliderContext from "../../context/slidercontext";
import "../style.css";
export default function ImageSlider() {
    const images=useContext(sliderContext)
    const sliderImage=images.map((image,index)=>{
        return <img key={index} src={image} alt="" />
    });
    return (<div className="slider">
        <div className="sliderImage">
           {sliderImage}
        </div>
    </div>)
}