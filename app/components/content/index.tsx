import { MdArrowBackIosNew } from "react-icons/md";

import { MdArrowForwardIos } from "react-icons/md";
import "../style.css";
export default function Content() {
    return (<div className="content">
    <div className="pageContent">
        <p>D E S I G N</p>
        <p style={{
            fontSize:"5vw",
            fontWeight:"800",
        }}>Slider 05</p>
        <p  className="contentText" style={{
            width:"30%",
            fontSize:"14px",
            fontWeight:"500",
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum amet nostrum voluptatem obcaecati labore qui laborum consectetur corporis enim recusandae, suscipit distinctio culpa fugiat, vel nihil unde fugit et.</p>
    </div>
    <div className="sliderbu">
        <div>
        <MdArrowBackIosNew /></div>
        <div>
        <MdArrowForwardIos /></div>
    </div>
    </div>)
}