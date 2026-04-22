"use client"
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import sliderContext from "../../context/slidercontext";
import "../style.css";
export default function ImageSlider() {
    const dispatch=useDispatch()
    const state=useSelector((state:{changeBackground: {background: string}})=>state.changeBackground);
    const images=useContext(sliderContext)
    const sliderImage=images.map((image,index)=>{
        return <img onClick={()=>{
            dispatch({type:"changeBackground/changeBackground",payload:{background:image,index:index}})
        }} key={index} src={image} alt="" />
    });
    return (<div className="slider">
        <div className="sliderImage">
           {sliderImage}
        </div>
    </div>)
}