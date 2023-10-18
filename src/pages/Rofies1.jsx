/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import OffRoadNav from "../components/OffRoadNav";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags
import { offroadguidelines } from "../assets/offroadguidelines";
import RegisterButton from "../components/RegsiterButton";

const Rofies1 = () => {
  return (
    <>
      <div
        style={{
          background: "url(/images/bg_off.png), #000000 50%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-screen flex flex-col"
      >
        <Helmet>
          <title>Off-Road Bandit - Navigate, Relay, Triumph</title>
          <meta
            name="description"
            content="A robotic challenge that showcases your skills as a Duo! Join our event where teams deploy carrier bots in 'The Wastelands,' navigating a terrain filled with obstacles. Experience a course filled with checkpoints, offering you the chance to recover from mishaps such as package drops or unexpected traps"
          />
          <script type="application/ld+json">
            {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Off-Road Bandit - Navigate, Relay, Triumph",
              "description": "A robotic challenge that showcases your skills as a Duo! Join our event where teams deploy carrier bots in "The Wastelands," navigating a terrain filled with obstacles. Experience a course filled with checkpoints, offering you the chance to recover from mishaps such as package drops or unexpected traps",
              "url": "https://www.example.com/rofies1",
              "image": "https://www.example.com/images/bg_off.png",
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
                "name": "Rofies - IIITP"
              }
            }
          `}
          </script>
        </Helmet>

        <div className="">
          <OffRoadNav />
        </div>
        <div className="flex justify-center items-center flex-grow">
          <div className="text-white text-center">
            <h1 className="font-silkroad text-7xl lg:text-9xl lg:block sm:text-8xl lg:text-11xl">
              OFF - ROAD BANDIT
            </h1>
            <p className="font-miso text-4xl lg:text-8xl mt-6">
              NAVIGATE, RELAY, TRIUMPH
            </p>
            <div className="flex justify-center items-center mt-8 sm:mt-24 md:mt-24 lg:mt-20 ">
              <RegisterButton
                fonts="majormono"
                link="https://unstop.com/competitions/off-road-bandits-the-mini-rover-bot-relay-race-iconclave23-indian-institute-of-information-technology-iiit--796092"
              />
            </div>
          </div>
        </div>
      </div>
      <section
        className="min-h-screen pb-10"
        id="about"
        style={{
          background: "url(/images/off-roadbgblur.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="font-silkroad text-5xl pt-5 lg:p-0 lg:text-10xl text-white ml-10 lg:pt-10 "
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          ABOUT
        </h1>

        <div className=" font-miso text-2xl lg:text-4xl flex flex-col gap-5 text-white mx-7 lg:mx-20 text-justify">
          <p>
            This event gives a golden opportunity to its participants to show
            off their skills as a Duo. The participating team will deploy their
            carrier bots in{" "}
            <span className="text-cyan-300">"The Wastelands"</span> covered with
            many obstacles and different terrains.
          </p>
          <p>
            The map is divided into two parts (
            <span className="text-red-600">Red</span> and{" "}
            <span className="text-cyan-300">Blue</span>) where each bot has to
            cross their respective course and relay "The Package" to the other
            bot on the other side of the map while dropping it on "delivery zone
            A" where the other bot also has to pick it up and cover their
            respective course and finally drop "The Package" into 'The Delivery
            Zone" as a "<span className="text-red-600">Duo</span>".
          </p>
          <p>
            The entire course will be divided into checkpoints allowing the
            participants to restart from their recent checkpoint in case they
            drop "The Package" or get stuck in some traps.
          </p>
        </div>
      </section>
      <section
        className="min-h-screen bg-yellow-600"
        id="guidelines"
        style={{
          background: "url(/images/off-roadbigbgblur.png), #000000 50%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="font-silkroad text-5xl pt-5 lg:p-0 lg:text-10xl text-white ml-10 lg:pt-10"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          GUIDELINES
        </h1>

        <p className=" font-miso text-2xl lg:text-3xl flex flex-col gap-5 text-white mx-5 lg:mx-20 text-justify">
          Teams have to build a manually controlled bot that can do simple tasks
          of gripping objects and putting them in target zones or just picking
          up a package with a scooper blade and dropping it off at the finish
          line(delivery zone), so that it can complete its respective route
          while overcoming the hurdles in its path.
          <div className="text-2xl lg:text-3xl flex flex-col gap-5 mx-5 lg:mx-20 text-justify font-miso">
            {offroadguidelines.map((rule, index) => {
              return (
                <div key={index} className="flex gap-5">
                  <h1>{index + 1}.</h1>
                  <p>{rule}</p>
                </div>
              );
            })}
          </div>
        </p>
        {/* <div className="flex justify-center items-center p-10">
          <h1 className="text-white font-newshape border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider">
            RULEBOOK
          </h1>
        </div> */}

        <div id="getintouch" className="pt-8 lg:pt-12 lg:mb-4">
          <div className="font-veterantypewriter min-h-full text-white">
            <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-evenly items-center">
              <div className="font-miso flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl">
                  Mahim Gupta
                </h3>
                <h4 className="text-xl sm:text-2xl lg:text-4xl">
                  +91 8770062687
                </h4>
              </div>
              <a href="https://www.instagram.com/rofies_iiitp/">
                <h1 className="font-silkroad text-5xl text-center sm:text-6xl md:text-7xl xl:text-8xl">
                  ROFIES
                </h1>
              </a>
              <div className="font-miso flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl">Deep Onkar</h3>
                <h4 className="text-xl sm:text-2xl lg:text-4xl">
                  +91 9766818266
                </h4>
              </div>
            </div>
          </div>
        </div>
        <Footer
          textColor="white"
          // socialMediaLinks={{
          //   instagram: "https://www.instagram.com/rofies_iiitp/",
          // }}
        />
      </section>
    </>
  );
};

export default Rofies1;
