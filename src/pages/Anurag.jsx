import AnuragNav from "../components/AnuragNav";
import Footer from "../components/Footer";

const Anurag = () => {
  return (
    <div className="bg-[url('/images/saaz_bg.png')] text-white h-screen flex flex-col bg-cover bg-center">
      <AnuragNav />
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-col">
          <h1 className="text-8xl lg:text-12xl mt-20 font-smarkan lg:mt-10">
            anurag
          </h1>
          <p className="text-4xl lg:text-7xl font-miso lg:-mt-10 lg:-ml-5 text-center">
            BATTLE OF BANDS
          </p>
        </div>

        {/* <div className="flex justify-center items-center mt-48 m-10">
          <h1 className="text-white font-miso border-2 px-5 py-3 text-4xl lg:text-5xl rounded-2xl tracking-wider ">
            REGISTER
          </h1>
        </div> */}
      </div>
      <Footer textColor="white"/>

      {/* <div className="bg-[url('/images/anuragbg.png')] text-white min-h-screen flex flex-col bg-cover bg-center"></div> */}
    </div>
  );
};

export default Anurag;
