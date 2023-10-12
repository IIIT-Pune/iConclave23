import { useEffect } from "react";
import NexusNav from "../components/NexusNav";
import NexusAbout from "./NexusAbout";
import { Element } from "react-scroll";
// import 'animate.css';


const Nexus = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        style={{
          background: "url(/images/nexus_bg.png)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        className="h-screen flex flex-col"
      >
        <NexusNav />
        <div className="flex justify-center flex-grow">
          <div className="text-white pt-32 sm:pt-12 lg:pt-5 flex-col items-center">
            <h1 className="font-miso text-3xl -mb-2 sm:text-4xl sm:-mb-4 lg:text-5xl lg:-mb-8 ">
              36 hour hackathon
            </h1>
            <h1
              className=" font-majormono text-8xl sm:text-10xl lg:text-12xl m-0 p-0 text-center text-white font-normal animate__animated animate__zoomIn"
              id="NEXUS"
            >
              neXus
            </h1>
            <p className=" font-miso text-3xl sm:text-5xl lg:text-7xl lg:-mt-5 text-center ">
              CODE, CREATE, CONNECT
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-10 sm:mb-10 2xl:mb-20">
          <div
            className="apply-button"
            data-hackathon-slug="nexus"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
      <Element id="aboutsection">
        <NexusAbout />
      </Element>
    </>
  );
};

export default Nexus;
