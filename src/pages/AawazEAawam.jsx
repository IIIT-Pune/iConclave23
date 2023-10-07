import AawamNav from "../components/AawamNav";
import Footer from "../components/Footer";
import AawamAbout from "../components/AawamAbout";
import AawamGuide from "../components/AawamGuide";
const AawazEAawam = () => {
  return (
    <div className="bg-black">
      <div
        className="min-h-screen "
        style={{
          background: "url(/images/aawazeaawam.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <AawamNav />
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col justify-center items-center mt-40 md:mt-32 lg:mt-10">
            <h1 className="text-white font-monoton text-3xl sm:text-7xl lg:text-8xl">
              aawaz-E-aawam
            </h1>
            <p className="text-white font-majormono text-2xl sm:text-4xl lg:text-6xl">
              lights street action
            </p>
          </div>

          {/* <div className="flex justify-center items-center -mt-20">
        <h1 className="font-majormono text-white border-2 border-white px-5 py-1 text-4xl rounded-lg">
        register
        </h1>
      </div> */}
        </div>
      </div>
      <AawamAbout />
      <AawamGuide/>
      <Footer
        textColor="white"
        socialMediaLinks={{
          mail: "mailto:abhinay@iiitp.ac.in",
          instagram: "https://www.instagram.com/abhinay.iiitp/",
        }}
      />
    </div>
  );
};

export default AawazEAawam;
