import LockoutNav from "../components/LockoutNav";

const Lockout = () => {
  return (
    <div
      style={{
        background: "url(/images/lockout_bg.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <LockoutNav />

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex justify-center">
          <img
            src="./images/lockout_logo.png"
            alt="lockoutlogo"
            className="w-192 p-10"
          />
        </div>

        <div className="flex justify-center items-center">
          <h1 className="text-white font-captainamerica tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-4 md:border-6 lg:border-8 px-2 sm:px-4 md:px-10 lg:px-10 py-1 md:py-2 lg:py-3">
            REGISTER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Lockout;
