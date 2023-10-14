/* eslint-disable react/no-unescaped-entities */
import NNNAv from "../components/NNNAV";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags
import RegisterButton from "../components/RegsiterButton";

const NrityaNova = () => {
  return (
    <div className="">
      <Helmet>
        <title>Nritya Nova - Every Step Tells a Story</title>
        <meta
          name="description"
          content="Nritya Nova by Vanity Crew is an intercollege dance competition showcasing diverse dance forms. Open song choice and judging criteria include rhythm, formation, and expression. With a 28 thousand  prize pool, it's a must see celebration of dance talent."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "DanceEvent",
              "name": "Nritya Nova by Vanity Crew is an intercollege dance competition showcasing diverse dance forms. Open song choice and judging criteria include rhythm, formation, and expression. With a 28 thousand  prize pool, it's a must see celebration of dance talent.",
              "description": "Explore the world of dance with us.",
              "url": "https://iconclave.iiitp.ac.in/nrityanova",
              "image": "https://www.example.com/images/nritya_bg.png",
              "location": {
                "@type": "Place",
                "name": "IIIT Pune",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Main Street",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411041",
                  "addressCountry": "Country"
                }
              },
              "startDate": "2023-10-26T18:00:00-07:00",
              "endDate": "2023-10-26T22:00:00-07:00",
              "performer": {
                "@type": "Organization",
                "name": "IConclave - IIIT Pune"
              }
            }
          `}
        </script>
      </Helmet>

      <div
        style={{
          background: "url(/images/nritya_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-screen text-white flex flex-col bg-cover bg-center"
      >
        <NNNAv />

        <div className="flex flex-col gap-4 sm:gap-8 items-center text-white justify-center flex-grow">
          <div className="flex flex-col">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-10xl font-fuzzybubbles">
              NRITYA NOVA
            </h1>
            <p className="text-base sm:text-xl md:text-3xl lg:text-5xl font-miso sm:-mt-2 md:-mt-4 lg:-mt-6 text-right">
              EVERY STEP TELLS A STORY!
            </p>
          </div>

          <div className="flex justify-center items-center mt-8 sm:mt-24 md:mt-24 lg:mt-20 ">
            <RegisterButton
              fonts="majormono"
              link="https://unstop.com/events/nritya-nova-iconclave-indian-institute-of-information-technology-iiit-pune-794575"
            />
          </div>
        </div>
      </div>

      <div
        className="text-white min-h-screen flex flex-col justify-center bg-cover bg-center"
        id="about"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #0C0C0C 100%)",
        }}
      >
        <h1 className="font-fuzzybubbles text-5xl sm:text-7xl lg:text-9xl mt-10 py-10 text-center text-white font-normal">
          ABOUT
        </h1>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            Get ready to witness the epitome of rhythm and grace at the
            intercollege dance competition, "Nritya Nova," hosted by Vanity
            Crew, the dance club of IIIT Pune! With teams from across colleges
            converging on our stage, this event promises to be a breathtaking
            display of talent and creativity.
          </p>
          <p>
            Performers will bring their A-game, fusing diverse dance forms into
            mesmerising performances that will leave you awestruck. From
            contemporary to hip-hop, classical to fusion, "Nritya Nova" is a
            celebration of the art of dance.
          </p>
          <p>
            Join us in this dance extravaganza that will set the stage on fire
            and leave you tapping your feet in sheer amazement!
          </p>
        </div>
      </div>

      <div
        className="bg-black text-white min-h-screen flex flex-col justify-center bg-cover bg-center"
        id="guidelines"
        style={{
          background: "linear-gradient(180deg, #0C0C0C 0%, #0C0C0C 100%)",
        }}
      >
        <h1 className="font-fuzzybubbles text-5xl sm:text-7xl lg:text-9xl mt-10 py-10 text-center text-white font-normal">
          GUIDELINES
        </h1>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <ul
            role="list"
            className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
          >
            <li>
              Each team will comprise a maximum of 12 participants and minimum 6
              participants.
            </li>
            <li>
              Choice of songs is open to the participants whether
              classical,bollywood,english,etc.
            </li>
            <li>
              The participants will be judged on the basis of their rhythm,
              formation, synchronisation, expressions, and costumes, setup and
              overall effects.
            </li>
            <li>
              College reserves the right to revise the rules and regulations of
              these competitions.
            </li>
          </ul>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              Round 1:
            </span>
            <ul
              role="list"
              className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
            >
              <li>
                First round will be conducted online whereby the submissions
                will be taken in form of video format through mail links and the
                time duration of video should be maximum 5 mins.
              </li>
              <li>
                Approximately 12 shortlisted teams will be called for the second
                round to perform in campus during iConclave'23.
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              Round 2:
            </span>
            <ul
              role="list"
              className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
            >
              <li>
                Each team will have to perform for a maximum of 10 minutes and
                minimum 6 minutes.
              </li>
              <li>
                No props will be provided by the coordinators. Participants can
                carry their own props.
              </li>
              <li>
                The song for the dance should be submitted prior as an mp3 file.
              </li>
              <li>Decision of the judges will be final and binding.</li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="min-h-full text-white"
        id="getintouch"
        style={{
          background: "linear-gradient(180deg, #0C0C0C 0%, #0C0C0C 100%)",
        }}
      >
        <div className="flex flex-col pt-16">
          <div className="flex flex-col md:flex-row gap-5 md:justify-evenly md:items-center">
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">Nisha</h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 9529858782
              </h4>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-grandstander text-center">
              <a href="https://www.instagram.com/_vanity_crew/">VANITY CREW</a>
            </h1>
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">
                Siddhesh Kale
              </h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 9420048563
              </h4>
            </div>
          </div>
          {/* <div className="font-miso lg:text-4xl lg:mx-7 lg:my-3 text-justify flex flex-col flex-grow gap-7">
            <p></p>
          </div> */}
        </div>
        <Footer
          textColor="white"
          // socialMediaLinks={{
          //   mail: "mailto:saaz_iiitp@iiitp.ac.in",
          //   instagram: "https://www.instagram.com/saaz_iiitp/",
          // }}
        />
      </div>
    </div>
  );
};

export default NrityaNova;
