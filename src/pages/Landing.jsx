import LandingPageNav from "../components/LandingPageNav";

const Landing = () => {
  return (
    <div
      style={{
        background: "url(/images/longpost.png)",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <LandingPageNav/>
      <div className="flex h-[calc(100vh-10rem)] flex-col justify-center items-center">
        <div className="flex flex-col flex-grow justify-center items-center pb-10">
          <img
            src="./images/IClogo.png"
            alt="Logo"
            className="w-128 -translate-y-5 "
          />
          <div className="text-white font-miso flex flex-col lg:flex-row lg:gap-80 lg:text-6xl">
            <div className="border-2 bg-black border-white px-4 py-2 rounded-2xl">
              Technical Events
            </div>
            <div className="border-2 bg-black border-white px-4 py-2 rounded-2xl">
              Cultural Events
            </div>
          </div>
        </div>
        <p className="text-white text-6xl uppercase font-Horrors">
          26-28 October
        </p>
        <h4 className="text-white text-4xl font-miso uppercase ">
          Indian Institute of Information Technology Pune
        </h4>
      </div>
    </div>
  );
};

export default Landing;
