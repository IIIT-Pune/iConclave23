import About from "./About";
import Home from "./Home";
import Sponsor from "./Sponsor";

const Landing = () => {
  return (
    <div className="flex flex-nowrap h-screen w-[400%]">
        <Home />
        <About />
        <Sponsor />
    </div>
  );
};

export default Landing;
