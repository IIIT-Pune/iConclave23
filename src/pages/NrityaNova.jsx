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
        className="h-screen"
      >
        <NNNAv />

        <div className="flex justify-center">
          <div className="text-white pt-40 sm:pt-20 lg:pt-6 flex-col">
            <div className="flex flex-col">
              <h1 className=" font-fuzzybubbles text-5xl lg:text-10xl text-center pt-20">
                NRITYA NOVA
              </h1>
              <p className=" font-miso text-2xl lg:text-4xl -lg:mt-16 text-right ">
                EVERY STEP TELLS A STORY!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-32 sm:mt-60 lg:mt-24 m-10">
          <RegisterButton
            fonts="majormono"
            link="https://unstop.com/events/nritya-nova-iconclave-indian-institute-of-information-technology-iiit-pune-794575"
          />
        </div>
      </div>

      <div
        className="min-h-screen py-10"
        id="about"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #0C0C0C 100%)",
        }}
      >
        <h1 className="font-grandstander text-5xl p-5 lg:text-10xl text-white m-0 lg:p-0 ml-10">
          ABOUT
        </h1>
        <div className=" font-miso text-2xl lg:text-4xl flex flex-col gap-5 text-white mx-5 lg:mx-20 text-justify">
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
        className="min-h-full text-white"
        id="about"
        style={{
          background: "linear-gradient(180deg, #0C0C0C 0%, #0C0C0C 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-evenly items-center">
          <div className="font-miso flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl">Nisha</h3>
            <h4 className="text-2xl lg:text-4xl">+91 9529858782</h4>
          </div>
          <a href="https://www.instagram.com/_vanity_crew/">
            <h1 className="font-grandstander text-center text-5xl lg:text-7xl">
              VANITY CREW
            </h1>
          </a>
          <div className="font-miso flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl">Siddhesh Kale</h3>
            <h4 className="text-2xl lg:text-4xl"> +91 9420048563</h4>
          </div>
        </div>

        <Footer
          textColor="white"
          // socialMediaLinks={{
          //   mail: "mailto:vanitycrew@iiitp.ac.in",
          //   instagram: "https://www.instagram.com/_vanity_crew/",
          // }}
        />
      </div>
    </div>
  );
};

export default NrityaNova;
