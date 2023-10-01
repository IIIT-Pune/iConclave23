import GNavBar from "../components/GNavBar";

const AawazEAawam = () => {
  return (
    <div className="h-screen bg-black">
      <GNavBar club="ABHINAY" color="white" hcolor="white"/>

      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-white font-monoton text-8xl">Aawaz-E-Aawam</h1>
        <p className="text-white font-majormono text-6xl">
          lights street action
        </p>
      </div>
      <div className="flex justify-center">
        <img src="./images/aawazeaawam.png" alt="" className="-mt-52 w-128  " />
      </div>

      <div className="flex justify-center items-center -m-10">
        <h1 className="font-majormono text-white border-2 border-white px-5 py-1 text-4xl rounded-lg">
          register
        </h1>
      </div>
    </div>
  );
};

export default AawazEAawam;
