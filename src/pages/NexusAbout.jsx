import Footer from "../components/Footer";
import NexusTimeline from "../components/NexusTimeline";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NexusAbout = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #020B16 0%, #0D1F35 52.7%, #010B17 100%)",
      }}
      className="flex flex-col"
    >
      {/* <NexusNav /> */}

      <section className="about">
        <div className="flex-grow">
          <div
            className="font-newshape flex justify-center lg:justify-start pt-12 md:pt-16 md:px-20"
            style={{
              textShadow:
                "0px 0px 76.0838394165039px #FFF, 0px 0px 152.1676788330078px #FFF, 0px 0px 532.5868530273438px #FFF, 0px 0px 1065.1737060546875px #FFF, 0px 0px 1826.011962890625px #FFF, 0px 0px 3195.52099609375px #FFF",
            }}
          >
            <h1
              className=" font-majormono text-6xl sm:text-8xl lg:text-10xl m-0 p-0 text-center text-white font-normal"
              id="NEXUS"
            >
              about
            </h1>
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
            <p className="text-center pt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Get ready to code, create, and conquer at Nexus Hackathon!
            </p>
          </div>
        </div>
      </section>

      <NexusTimeline />

      <section className="topics">
        <div className="flex flex-col md:hidden py-16 space-y-8">
          <div className="flex items-center justify-center">
            <h1 className=" font-majormono text-6xl sm:text-8xl lg:text-10xl m-0 p-0 text-center text-white font-normal">
              topics
            </h1>
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

        <div className="flex-col hidden md:block py-16 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:9xl text-center uppercase text-white justify-center rounded shadow">
          <div className="flex justify-between font-miso p-16 ">
            <div className="flex justify-center mx-8">
              <div>Healthcare</div>
            </div>
            <div className="flex justify-center mx-8">
              <div>WEB 3.0</div>
            </div>
          </div>
          <div className="flex items-center justify-center lowercase">
            <h1 className=" font-majormono text-6xl sm:text-8xl lg:text-10xl m-0 p-0 text-center text-white font-normal">
              TOPICS
            </h1>
          </div>
          <div className="flex justify-between font-miso p-16">
            <div className="flex justify-center mx-8">
              <div>ED TECH</div>
            </div>
            <div className="flex justify-center mx-8">
              <div>ML / AI</div>
            </div>
          </div>
        </div>
      </section>

      <section id="topic">
        <div className="font-newshape flex justify-center lg:justify-start md:px-20">
          <h1 className=" font-majormono text-6xl sm:text-8xl lg:text-10xl m-0 p-0 text-center text-white font-normal">
            sponsors
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" my-10 lg:mx-20 lg:my-10 grid lg:grid-cols-3 grid-flow-row gap-10 items-center">
            <img
              src="/images/nexussponsor1.png"
              alt="DEVFOLIO LOGO"
              className="w-60 lg:w-96"
            />
            <img
              src="/images/nexussponsor2.png"
              alt="POLYGON LOGO"
              className="w-60 lg:w-96"
            />
            <img
              src="/images/nexussponsor3.png"
              alt="REPLIT LOGO"
              className="w-60 lg:w-96"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center">
          <h1 className=" font-majormono text-6xl sm:text-8xl lg:text-10xl m-0 p-0 text-center text-white font-normal">
            faq
          </h1>
        </div>
        <div className="mx-10 my-10 lg:mx-40">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>1. What is the team size?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>- 1-4</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>2. Registration Fee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>- No Registration Fee</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                3. When and where is the hackathon taking place?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                - Provide the 26 October, 4 pm, and Indian Institute of Information Technology Pune details for the
                hackathon.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <Footer textColor="white" />
    </div>
  );
};
export default NexusAbout;
