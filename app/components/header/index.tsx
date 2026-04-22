import { FaSearch } from "react-icons/fa";

import { TiThMenu } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";
import { open } from "../../features/drawerSlice";
import "../style.css";
export default function Header() {
        const dispatch=useDispatch()
        const state = useSelector((state: { drawer: { open: boolean } }) => state.drawer.open);
    return (<>
    <header >
        <div className="title">Slider Animation</div>
        <div className="actions">
            <div className="home">Home</div>
            <div className="blog">Blog</div>
            <div className="contact">Contact</div>
            <div className="about">About</div>
        </div>
        <div className="SearchIcon" style={{display:"flex",
        alignItems:"center",
            gap:"10px",
            justifyContent:"center",
        }}>
        <FaSearch />
            <div className="menu" onClick={()=>{
                    dispatch(open());
                  }}>
            <TiThMenu  />
            </div>
        </div>
        
    </header>
    </>)
    
}