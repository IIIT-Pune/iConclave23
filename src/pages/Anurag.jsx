/* eslint-disable react/no-unescaped-entities */
import AnuragNav from "../components/AnuragNav";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

const Anurag = () => {
  return (
    <>
      <div className="bg-[url('/images/saaz_bg.png')] text-white h-screen flex flex-col bg-cover bg-center">
        <AnuragNav />
        <div className="flex flex-col items-center flex-grow">
          <div className="flex flex-col">
            <h1 className="text-8xl lg:text-12xl mt-20 font-smarkan lg:mt-10">
              anuraag
            </h1>
            <p className="text-4xl lg:text-7xl font-miso lg:-mt-10 lg:-ml-5 text-center">
              BATTLE OF BANDS
            </p>
          </div>

          <div className="flex justify-center items-center mt-48 m-10">
            <a href="https://unstop.com/events/anuraag-battle-of-bands-iconclave-indian-institute-of-information-technology-iiit-pune-794646">
              <h1 className="text-white font-miso border-2 px-5 py-3 text-4xl lg:text-5xl rounded-2xl tracking-wider ">
                REGISTER
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="text-white min-h-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.75%, #000 100%), url('./images/anuragbg.png') ",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-6xl lg:text-9xl mt-10 font-smarkan text-center ">
            about
          </h1>
          <div className="font-miso text-2xl my-1 mx-5 lg:text-4xl lg:mx-7 lg:my-3 text-justify flex flex-col gap-7">
            <p>
              Prepare for an unparalleled musical showdown as the stage comes
              alive with the thunderous beats and electrifying melodies of the{" "}
              <span className="font-bold">Inter-College Battle of Bands!</span>
            </p>
            <p>
              This exhilarating event invites talented bands from colleges far
              and wide to unleash their sonic prowess and compete for ultimate
              supremacy. It's not just a competition; it's a celebration of
              artistry and creativity, where each note strikes a chord with the
              audience's hearts. Beyond the spotlight, it's a platform for
              forging lasting connections, where musicians can collaborate,
              inspire, and learn from one another.
            </p>
            <p>
              So, whether you're a fan of rock, pop, or something in between,
              join us for an unforgettable evening of music that will leave you
              cheering, dancing and grooving along to the song beats!
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-black text-white min-h-screen flex flex-col bg-cover bg-center"
        id="guidelines"
      >
        <div className="flex flex-col">
          <h1 className="text-6xl lg:text-9xl mt-10 font-smarkan text-center">
            <span className="bg-gradient-to-r text-transparent from-[#FE1902] to-[#0042D4] bg-clip-text">
              guidelines
            </span>
          </h1>
          <div className="font-miso text-2xl my-1 mx-5 lg:text-4xl lg:mx-7 lg:my-3 text-justify flex flex-col gap-7">
            <p>
              In this competition, bands of 6-8 members, including up to 4
              accompanists, can perform. Participants can sing and play
              instruments, but they'll be counted as both vocalists and
              accompanists.
            </p>
            <p>
              Bands must attend an on-site orientation to determine their
              performance order. Each band is allowed 12 minutes, sound check
              included, with score deductions for exceeding the time limit.
              Background tracks are not allowed.
            </p>
            <p>
              Instruments are provided, but participants are encouraged to bring
              their own. Only English and Hindi songs are permitted, and
              performances must be free of obscenity. Originality in lyrics and
              instrumentation is rewarded.
            </p>
            <p>
              Valid college ID is mandatory, and bands must be from the same
              college. Judges' decisions are final, and organizers may modify
              rules. College reserves the right to revise regulations as needed.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center p-10">
          <a href="https://example.com" className="text-white">
            <h1
              className="font-miso border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider 
      hover:font-semibold hover:border-4 hover:border-white hover:ease-in-out transition-all"
            >
              RULEBOOK
            </h1>
          </a>
        </div>
      </div>
      <div className="bg-black text-white min-h-screen flex flex-col bg-cover bg-center">
        <div className="flex flex-col">
          <h1 className="text-6xl lg:text-9xl mt-10 font-smarkan text-center">
            <span className="bg-gradient-to-r text-transparent from-[#0042D4] to-[#FE1902] bg-clip-text">
              saaz
            </span>
          </h1>
          <div className="font-miso lg:text-4xl lg:mx-7 lg:my-3 text-justify flex flex-col flex-grow gap-7">
            <p></p>
          </div>
        </div>
        <Footer
          textColor="white"
          socialMediaLinks={{
            mail: "mailto:saaz_iiitp@iiitp.ac.in",
            instagram: "https://www.instagram.com/saaz_iiitp/",
          }}
        />
      </div>
    </>
  );
};

export default Anurag;
