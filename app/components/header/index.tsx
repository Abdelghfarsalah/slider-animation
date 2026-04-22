import { CiSearch } from "react-icons/ci";
import "../style.css";
export default function Header() {
    return (<>
    <header >
        <div className="title">Slider Animation</div>
        <div className="actions">
            <div className="home">Home</div>
            <div className="blog">Blog</div>
            <div className="contact">Contact</div>
            <div className="about">About</div>
        </div>
        <div className="SearchIcon">
            <CiSearch size={20}  fontWeight={900}/>
        </div>
    </header>
    </>)
    
}