/* eslint-disable react/no-unescaped-entities */
import AnuragNav from "../components/AnuragNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import RegisterButton from "../components/RegsiterButton";
import RulebookButton from "../components/RulebookButton";
// import { Element } from "react-scroll";

const Anurag = () => {
  return (
    <>
      <div className="bg-[url('/images/saaz_bg.png')] text-white h-screen flex flex-col bg-cover bg-center">
        <Helmet>
          <title>Anuraag - Battle of Bands</title>
          <meta
            name="description"
            content="Anurag - Battle of Bands. Join us for an exhilarating musical showdown. Explore the world of dance with us. Contact us at saaz_iiitp@iiitp.ac.in."
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Event",
                "name": "Anurag - Battle of Bands",
                "description": "Join us for an exhilarating musical showdown.",
                "url": "https://iconclave.iiitp.ac.in/anurag",
                "image": "https://www.example.com/images/saaz_bg.png",
                "startDate": "2023-10-12T18:00:00-07:00",
                "endDate": "2023-10-12T22:00:00-07:00",
                "location": {
                  "@type": "Place",
                  "name": "IIIT Pune",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Main Street",
                    "addressLocality": "Pune",
                    "addressRegion": " Maharashtra",
                    "postalCode": "4110441",
                    "addressCountry": "India"
                  }
                },
                "performer": {
                  "@type": "Organization",
                  "name": "IConclave - IIIT Pune"
                }
              }
            `}
          </script>
        </Helmet>

        <AnuragNav />
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="flex flex-col">
            <h1 className="text-8xl sm:text-10xl md:text-11xl lg:text-13xl font-smarkan">
              anuraag
            </h1>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-miso -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 lg:-ml-5 text-center">
              BATTLE OF BANDS
            </p>
          </div>

          <div className="flex justify-center items-center mt-8 sm:mt-24 lg:mt-24 ">
            <RegisterButton link="https://unstop.com/events/anuraag-battle-of-bands-iconclave-indian-institute-of-information-technology-iiit-pune-794646" />
          </div>
        </div>
      </div>
      <div
        id="about"
        className="text-white min-h-screen flex justify-center items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.75%, #000 100%), url('/images/anuragbg.png') ",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-smarkan text-6xl sm:text-8xl lg:text-10xl mt-10 p-0 text-center text-white font-normal">
            about
          </h1>
          <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
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
          <div className="text-center text-white mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-miso">
              PRIZE POOL
            </h3>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl py-2 text-center text-white font-normal font-miso">
              INR 18K
            </h1>
          </div>
        </div>
      </div>
      <div
        className="bg-black text-white min-h-screen flex flex-col justify-center bg-cover bg-center"
        id="guidelines"
      >
        <div className="flex flex-col">
          <h1 className="font-smarkan text-6xl sm:text-8xl lg:text-10xl mt-10 p-0 text-center text-white font-normal">
            <span className="bg-gradient-to-r text-transparent from-[#FE1902] to-[#0042D4] bg-clip-text">
              guidelines
            </span>
          </h1>
          <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
            <div>
              <ul
                role="list"
                className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
              >
                <li>Band of 5-8 people.</li>
                <li>
                  All participants shall give their valid college id for
                  verification.
                </li>
                <li>
                  The bands must be present and signed in on-site for
                  orientation prior to the allotted time.
                </li>
                <li>
                  Order of performances will be decided by the coordinators and
                  time slots will be allotted to each band in the same order
                  during this time.
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
                Round 1: Audition Round
              </span>
              <ul
                role="list"
                className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
              >
                <li>
                  The teams will have to submit a video of their performance.
                  Last date for registration and video submission is 20th
                  October 2023.
                </li>
                <li>
                  The video should include all the players and instruments the
                  band desires to play in further rounds.
                </li>
                <li>
                  The video should be uploaded on drive, and the link should be
                  shared on saaz_iiitp@iiitp.ac.in or uploaded on Unstop.
                </li>
                <li>
                  You will get a confirmation response within a day for the
                  same.
                </li>
                <li>
                  The same performances can be repeated for the final round.
                  Marks of the audition round will not be carried forward.
                </li>
                <li>Results will be announced by 22nd October 2023.</li>
                <li>Selected bands will be invited to IIIT Pune.</li>
                <li>Details of reporting time and venue will be provided.</li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
                Round 2:
              </span>
              <ul
                role="list"
                className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
              >
                <li>
                  Only selected bands shall perform live, at IIIT Pune in the
                  2nd round.
                </li>
                <li>Only players in the video should perform in Round 2.</li>
                <li>
                  Bands will have to perform in accordance with the guidelines
                  mentioned in the rulebook.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <RulebookButton link="https://docs.google.com/document/d/1d0f0EAME-zPL1gQgDdW0ZJaHH0ZxQ_0L/edit" />
      </div>
      <div
        id="getintouch"
        className="bg-black text-white min-h-full flex flex-col bg-cover bg-center"
      >
        <div className="flex flex-col py-6">
          <div className="flex flex-col md:flex-row gap-5 md:justify-evenly md:items-center">
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">
                Gurdeep Singh
              </h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 9957552015
              </h4>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-10xl font-smarkan text-center">
              <a href="https://www.instagram.com/saaz_iiitp/">
                <span className="bg-gradient-to-r text-transparent from-[#0042D4] to-[#FE1902] bg-clip-text">
                  saaz
                </span>
              </a>
            </h1>
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">Vatsal Furia</h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 8850236175
              </h4>
            </div>
          </div>
          <div className="font-miso lg:text-4xl lg:mx-7 lg:my-3 text-justify flex flex-col flex-grow gap-7">
            <p></p>
          </div>
        </div>
        <Footer
          textColor="white"
          // socialMediaLinks={{
          //   mail: "mailto:saaz_iiitp@iiitp.ac.in",
          //   instagram: "https://www.instagram.com/saaz_iiitp/",
          // }}
        />
      </div>
    </>
  );
};

export default Anurag;
