import SliderContext from "@/app/context/slidercontext";
import { useContext } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";
export default function Content() {
    const index=useSelector((state:{changeBackground: {index: number}})=>state.changeBackground.index)
    const images=useContext(SliderContext);
    const dispatch=useDispatch();
    return (<div className="content">
    <div className="pageContent">
        <p>D E S I G N</p>
        <p style={{
            fontSize:"5vw",
            fontWeight:"800",
        }}>Slider 0{index+1}</p>
        <p  className="contentText" style={{
            width:"30%",
            fontSize:"14px",
            fontWeight:"500",
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum amet nostrum voluptatem obcaecati labore qui laborum consectetur corporis enim recusandae, suscipit distinctio culpa fugiat, vel nihil unde fugit et.</p>
    </div>
    <div className="sliderbu">
        <div onClick={()=>{
            const newIndex=index-1<0?images.length-1:index-1;
            dispatch({type:"changeBackground/changeBackground",payload:{background:images[newIndex],index:newIndex}})
        }}>
        <MdArrowBackIosNew /></div>
        <div onClick={()=>{
            const newIndex=index+1>=images.length?0:index+1;
            dispatch({type:"changeBackground/changeBackground",payload:{background:images[newIndex],index:newIndex}})
        }}>
        <MdArrowForwardIos /></div>
    </div>
    </div>)
}