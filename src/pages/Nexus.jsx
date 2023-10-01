const Nexus = () => {
  return (
    <div
      style={{
        background: "url(/images/nexus_bg.png)",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <div className="flex justify-center">
        <div className="text-white pt-20 flex-col items-center">
          <h1 className="font-miso text-5xl -mb-20">36 hour hackathon</h1>
          <h1 className=" font-majormono text-12xl m-0 p-0 text-center">
            neXus
          </h1>
          <p className=" font-miso text-7xl -m-16 text-center ">
            CODE, CREATE, CONNECT
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-52">
        <h1 className="text-white font-miso border-2 px-8 py-3 text-6xl rounded-2xl tracking-wide ">
          REGISTER
        </h1>
      </div>
    </div>
  );
};

export default Nexus;
