import AnuraagNav from "../components/AnuraagNav";
import Footer from "./Footer";

const AnuraagRulebook = () => {
  return (
    <div className="bg-black h-screen w-full overflow-y-auto flex flex-col">
      <AnuraagNav />
      <h1 className="text-6xl lg:text-9xl mt-10 font-smarkan text-center">
        <span className="bg-gradient-to-r text-transparent from-[#FE1902] to-[#0042D4] bg-clip-text">
          Rulebook
        </span>
      </h1>

      <div className="flex-grow">
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <ul
            role="list"
            className="marker:text-white-400 list-disc pl-4 sm:pl-6 md:pl-8 lg:pl-10"
          >
            <li className="py-2">
              A band member can sing and play an instrument as well. However,
              such a person would be counted as both vocalist and accompanist.
            </li>
            <li className="py-2">
              Time limit of 12 minutes including sound check is provided. If the
              team exceeds this time limit, then the score of their performance
              shall be deducted.
            </li>
            <li className="py-2">
              Use of any kind of background-track is prohibited.
            </li>
            <li className="py-2">
              Instruments provided by IIIT Pune: Tabla, Drum Kit, Acoustic
              Guitar, Keyboard, Electric Guitar, Bass Guitar.
            </li>
            <li className="py-2">
              Participants are encouraged to bring their own instruments, amps,
              cables electronics, for smooth operation of the event.
            </li>
            <li className="py-2">
              A team may sing more than one song within the time limit.
            </li>
            <li className="py-2">Only English and Hindi songs are allowed.</li>
            <li className="py-2">
              Performances shouldn’t include any obscenity, or indecent
              gestures.{" "}
            </li>
            <li className="py-2">
              Bands may showcase originality in both lyrical and instrumental
              performance to impress the panel. Even in the case of cover songs,
              improvisation will be rewarded.
            </li>
            <li className="py-2">
              The decision of the judges shall be final and binding in all
              cases.
            </li>
            <li className="py-2">
              College reserves the right to revise the rules and regulations of
              these competitions.
            </li>
          </ul>
        </div>
        <a href="https://www.instagram.com/saaz_iiitp/">
          <h1 className="text-6xl lg:text-9xl mt-10 font-smarkan text-center">
            <span className="bg-gradient-to-r text-transparent from-[#0042D4] to-[#FE1902] bg-clip-text">
              saaz
            </span>
          </h1>
        </a>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default AnuraagRulebook;
