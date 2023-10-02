import Footer from "../components/Footer";
import NexusNav from "../components/NexusNav";
const Nexus = () => {
  return (
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
          <h1 className="font-miso text-3xl -mb-5 sm:text-4xl sm:-mb-5  lg:text-5xl lg:-mb-10">
            36 hour hackathon
          </h1>
          <h1
            className=" font-majormono text-8xl sm:text-10xl lg:text-12xl m-0 p-0 text-center text-white font-normal"
            id="NEXUS"
          >
            neXus
          </h1>
          <p className=" font-miso text-3xl sm:text-5xl sm:- lg:text-7xl lg:-mt-5 text-center ">
            CODE, CREATE, CONNECT
          </p>
        </div>
      </div>

      {/* <div className="flex justify-center items-center mt-72 sm:mt-36 2xl:mt-48">
        <h1 className="text-white font-miso border-2 px-8 py-3 text-4xl lg:text-6xl rounded-2xl tracking-wide ">
          REGISTER
        </h1>
      </div> */}
      <Footer textColor="white" />
    </div>
  );
};

export default Nexus;
