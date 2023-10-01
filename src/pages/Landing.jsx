import About from "./About";
import Events from "./Events";
import Home from "./Home";
import Sponsor from "./Sponsor";

const Landing = () => {
  return (
    <div className="flex flex-nowrap h-screen w-[400%]">
        <Home />
        <About />
        <Events />
        <Sponsor />
    </div>
  );
};

export default Landing;
