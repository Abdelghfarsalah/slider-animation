
import Content from "./components/content";
import Header from "./components/header";
// import sliderContext from "./context/slidercontext";
export default function Home() {
  return (
  // <sliderContext.Provider value={}>
    <div className="home">
    <Header />
    <Content  />
  </div>
  // {/* </sliderContext.Provider> */}
  
  );
}
