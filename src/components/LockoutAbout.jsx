import LockoutNav from "./LockoutNav";
import Footer from "./Footer";

const LockoutAbout = () => {
  return (
    <div
      style={{
        background: "url(/images/lockoutbg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full overflow-y-auto flex flex-col"
    >
      <LockoutNav />
      <div className="flex-grow">
        <div
          className="font-newshape flex justify-center lg:justify-start pt-12 md:pt-16 md:px-20"
          style={{ fontSize: "7rem" }}
        >
          <img
            src="/images/aboutimage.png"
            className="h-16 sm:h-20 md:h-24 lg:h-36"
            alt=""
          />
        </div>

        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6  text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            Are you ready for the most thrilling intellectual showdown? Join us
            for the Lockout Tournament, where participants go head-to-head in a
            battle of wits like no other.
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              Race to Solve:
            </span>
            <p>
              In this high-stakes competition, participants race to solve a
              series of challenging problems. The clock is ticking, and every
              second counts. Are you quick enough to outsmart your opponent?
            </p>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              Point-Based Scoring:
            </span>
            <p>
              The rules are simple but the competition is fierce. The first
              person to successfully solve a problem earns points for that
              particular challenge. Accumulate points to claim victory and prove
              your intellectual prowess.
            </p>
          </p>
        </div>
        <div className="text-center text-white mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-miso">
            PRIZE POOL
          </h3>
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-9xl py-2 text-center text-white font-normal font-miso">
            INR 8K
          </h1>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};
export default LockoutAbout;
