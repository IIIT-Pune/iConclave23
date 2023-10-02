import Footer from "../components/Footer";
import OffRoadNav from "../components/OffRoadNav";

const Rofies1 = () => {
  return (
    <div
      style={{
        background: "url(/images/bg_off.png), #000000 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex flex-col"
    >
      <div className="sticky">
        <OffRoadNav />
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="text-white text-center">
          <h1 className="font-silkroad text-7xl lg:text-9xl lg:block sm:text-8xl lg:text-11xl">
            OFF - ROAD BANDIT
          </h1>
          <p className="font-miso text-4xl lg:text-8xl mt-6">
            NAVIGATE, RELAY, TRIUMPH
          </p>
        </div>
      </div>
      <Footer textColor="white" />
    </div>
  );
};

export default Rofies1;
