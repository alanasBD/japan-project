import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SectionThree from "./components/SectionThree/SectionThree";
import Button from "./components/Common/Button";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;
