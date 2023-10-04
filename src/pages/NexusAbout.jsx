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

      <section className="about">
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
              us for an unforgettable journey where coding meets camaraderie,
              and brilliant minds converge to build solutions that can change
              the world.
            </p>
            <p>
              Race to Solve: In this high-stakes competition, participants race
              to solve a series of challenging problems. The clock is ticking,
              and every second counts. Are you quick enough to outsmart your
              opponent?
            </p>
            <p className="text-center pt-8">
              Get ready to code, create, and conquer at Nexus Hackathon!
            </p>
          </div>
        </div>
      </section>

      <NexusTimeline />

      <section className="topics">
        <div className="flex flex-col md:hidden py-16 space-y-8">
          <div className="flex items-center justify-center">
            <img
              src="/images/nexustopics.png"
              alt="schedule"
              className="w-7/12 md:w-98/12"
            />
          </div>
          <div>
            <ul className="text-4xl sm:text-5xl text-center space-y-4 uppercase font-miso text-white justify-center rounded shadow">
              <li>Healthcare</li>
              <li>WEB 3.0</li>
              <li>ED TECH</li>
              <li>ML / AI</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col hidden md:block py-16 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:9xl text-center uppercase text-white justify-center rounded shadow">
          <div className="flex justify-between font-miso p-16 flex">
            <div className="flex justify-center mx-8">
              <div>Healthcare</div>
            </div>
            <div className="flex justify-center mx-8">
              <div>WEB 3.0</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/nexustopics.png"
              alt="schedule"
              className="w-1/3 md:w-5/12"
            />
          </div>
          <div className="flex justify-between font-miso p-16 flex">
            <div className="flex justify-center mx-8">
              <div>ED TECH</div>
            </div>
            <div className="flex justify-center mx-8">
              <div>ML / AI</div>
            </div>
          </div>
        </div>
      </section>
      <Footer textColor="white" />
    </div>
  );
};
export default NexusAbout;
