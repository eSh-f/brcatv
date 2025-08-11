import Header from "./components/header/Header.jsx";
import "../src/styles/global.scss";
import Hero from "./components/hero/Hero.jsx";
import ModelATV from "./components/modelATV/ModelATV.jsx";
import Advantages from "./components/advantages/Advantages.jsx";
import ATVInfo from "./components/ATVInfo/ATVInfo.jsx";
import ATVSpecification from "./components/ATVSpecification/ATVSpecification.jsx";
import SelectColor from "./components/SelectColor/SelectColor.jsx";
import VideoBlock from "./components/VideoBlock/VideoBlock.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import DealersMap from "./components/DealersMap/DealersMap.jsx";
import Dillers from "./components/Dilers/Dillers.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ModelATV />
      <ATVInfo />
      <Advantages />
      <ATVSpecification />
      <SelectColor />
      <VideoBlock />
      <Gallery />
      <DealersMap />
      <Dillers />
    </>
  );
}

export default App;
