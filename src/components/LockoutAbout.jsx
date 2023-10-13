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

        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            Are you ready for the most thrilling intellectual showdown? Join us
            for the Lockout Tournament, where participants go head-to-head in a
            battle of wits like no other.
          </p>
          <p>
            Race to Solve: In this high-stakes competition, participants race to
            solve a series of challenging problems. The clock is ticking, and
            every second counts. Are you quick enough to outsmart your opponent?
          </p>
          <p>
            Point-Based Scoring: The rules are simple but the competition is
            fierce. The first person to successfully solve a problem earns
            points for that particular challenge. Accumulate points to claim
            victory and prove your intellectual prowess.
          </p>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};
export default LockoutAbout;
