import OffRoadNav from "../components/OffRoadNav";

const Rofies1 = () => {
  return (
    <div
      style={{
        background: "url(/images/bg_off.png), #000000 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <OffRoadNav />
      <div className="flex justify-center">
        <div className="text-white pt-20 flex-col">
          <img src="/images/logo.png" alt="offroad" className="w-52 -mb-24" />
          <h1 className=" font-silkroad text-10xl m-0 p-0 text-center">
            OFF - Road Bandit
          </h1>
          <p className=" font-miso text-8xl -m-16 text-center ">
            Navigate, Relay, Triumph
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-40">
        <h1 className="text-white font-newshape border-2 px-5 py-3 text-4xl rounded-2xl tracking-wider ">
          REGISTER
        </h1>
      </div>
    </div>
  );
};

export default Rofies1;
