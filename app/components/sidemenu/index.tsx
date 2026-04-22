import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../features/drawerSlice";
import { RootState } from "@reduxjs/toolkit/query/react";
export default function Sidemenu() {
    const dispatch=useDispatch()
    const state = useSelector((state: { drawer: { open: boolean } }) => state.drawer.open);
  return (
    <div
      className="sidemenu"
      style={{
        display: state?"block":"none",
        position: "absolute",
        right: "0px",
        top: "0px",
        height: "100vh",
        width: "50%",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderLeft: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "-10px 0 30px rgba(0,0,0,0.2)",
        padding: "30px",
        color: "#111",
        fontFamily: "Arial",
        transition: "0.3s",
      }}
      
    >
      <div className="drawer"  style={{
        display:"flex",
        justifyContent: "space-between"
      }}>
        <h1 style={{ marginBottom: "30px", fontSize: "28px" ,color: "white"}}>Menu</h1>
      <IoCloseSharp onClick={()=>{
        dispatch(close());
      }}  size={40} color="white"/>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={itemStyle}>🏠 Home</li>
        <li style={itemStyle}>🏠 Blog</li>
        <li style={itemStyle}>ℹ️ About</li>
        <li style={itemStyle}>📞 Contact</li>
      </ul>
    </div>
  );
}

const itemStyle = {
  padding: "12px 10px",
  marginBottom: "10px",
  cursor: "pointer",
  borderRadius: "8px",
  color: "white",
  transition: "0.3s",
};