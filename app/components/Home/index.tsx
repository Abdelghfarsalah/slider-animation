
import { useSelector } from "react-redux";
import Content from "../content";
import Header from "../header";
import ImageSlider from "../imageslider";
export default function Homecontent() {
    const state=useSelector((state:{changeBackground: {background: string}})=>state.changeBackground);

    return <>
     <div className="home" style={{
        backgroundImage: `url(${state.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}>
        <Header />
        <Content />
        <ImageSlider />
      </div>
    </>
}