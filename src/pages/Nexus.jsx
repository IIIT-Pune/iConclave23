import NexusNav from "../components/NexusNav";
const Nexus = () => {
  return (
    <div
      style={{
        background: "url(/images/nexus_bg.png)",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="min-h-screen"
    >
      <NexusNav/>
      <div className="flex justify-center -mt-[3%]">
        <div className="text-white pt-20 flex-col items-center">
          <h1 className="font-miso text-4xl -mb-[9%]">36 hour hackathon</h1>
          <h1 className=" font-majormono text-12xl m-0 p-0 text-center text-white font-normal" id="NEXUS">
            neXus
          </h1>
          <p className=" font-miso text-6xl -m-[6%] text-center ">
            CODE, CREATE, CONNECT
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[20%]">
        <h1 className="text-white font-miso border-2 px-8 py-3 text-6xl rounded-2xl tracking-wide ">
          REGISTER
        </h1>
      </div>
    </div>
  );
};

export default Nexus;
