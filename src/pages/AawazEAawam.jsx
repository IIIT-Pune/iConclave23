import AawamNav from "../components/AawamNav";
import AawamAbout from "../components/AawamAbout";
import AawamGuide from "../components/AawamGuide";
const AawazEAawam = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* <GNavBar club="ABHINAY" color="white" hcolor="white"/> */}
      <AawamNav/>
      <div>
      <div className="flex flex-col justify-center items-center mt-[3%]">
        <h1 className="text-white font-monoton text-8xl">aawaz-E-aawam</h1>
        <p className="text-white font-majormono text-6xl">
          lights street action
        </p>
      </div>
      <div className="flex justify-center ">
        <img src="./images/aawazeaawam.png" alt="" className="-mt-[8%] w-196 ml-16  " />
      </div>

      <div className="flex justify-center items-center -mt-[3%]">
        <h1 className="font-majormono text-white border-2 border-white px-5 py-1 text-4xl rounded-lg">
          register
        </h1>
      </div>
      </div>
      <AawamAbout/>
      <AawamGuide/>
    </div>
  );
};

export default AawazEAawam;
