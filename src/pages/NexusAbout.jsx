import Footer from "../components/Footer";
import NexusNav from "../components/NexusNav";
import NexusTimeline from "../components/NexusTimeline";

const NexusAbout = () => {
  return (
    <div
      style={{
        background: "url(/images/nexusabout_bg1.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full overflow-y-auto flex flex-col"
    >
      <NexusNav />
      <div className="flex-grow">
        <div
          className="font-newshape flex justify-center lg:justify-start pt-12 md:pt-16 md:px-20"
          style={{ fontSize: "7rem" }}
        >
          <img
            src="/images/nexusabout.png"
            className="h-16 sm:h-20 md:h-24 lg:h-36"
            alt=""
          />
        </div>

        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            Get ready for an electrifying 36-hour Offline Hackathon that will
            push the boundaries of your creativity and technical prowess. Join
            us for an unforgettable journey where coding meets camaraderie, and
            brilliant minds converge to build solutions that can change the
            world.
          </p>
          <p>
            Race to Solve: In this high-stakes competition, participants race to
            solve a series of challenging problems. The clock is ticking, and
            every second counts. Are you quick enough to outsmart your opponent?
          </p>
          <p className="text-center pt-8">
            Get ready to code, create, and conquer at Nexus Hackathon!
          </p>
        </div>
      </div>
      <NexusTimeline />
      <Footer textColor="white" />
    </div>
  );
};
export default NexusAbout;
