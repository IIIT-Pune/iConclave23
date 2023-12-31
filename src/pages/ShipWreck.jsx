import ShipWreckNav from "../components/ShipWreckNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags
import RegisterButton from "../components/RegsiterButton";
import RulebookButton from "../components/RulebookButton";

const ShipWreck = () => {
  return (
    <>
      <div
        style={{
          background: "url(/images/ShipWreck_bg.png), black 50%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen flex flex-col"
      >
        <Helmet>
          <title>ShipWreck - Speak Up, Stay Up</title>
          <meta
            name="description"
            content="Shipwreck offers a platform of arguments and counter arguments. Persuade the jury on why their character should be saved on a sinking ship. Participants must showcase their powers of persuasion. A challenge of communication and convincing skills."
          />
          <script type="application/ld+json">
            {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "ShipWreck - Speak Up, Stay Up",
              "description": "Shipwreck offers a platform of arguments and counter arguments. Persuade the jury on why their character should be saved on a sinking ship. Participants must showcase their powers of persuasion. A challenge of communication and convincing skills.",
              "url": "https://iconclave.iiitp.ac.in/shipwreck",
              "image": "https://www.example.com/images/ShipWreck_bg.png",
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

        <ShipWreckNav />
        <div className="flex flex-col justify-center flex-grow">
          <div className="flex flex-col text-white">
            <h1 className="text-8xl sm:text-9xl md:text-10xl lg:text-12xl text-center font-punishment">
              ShipWreck
            </h1>
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-miso -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 lg:-ml-5 text-center">
              SPEAK UP, STAY UP
            </p>
          </div>

          <div className="flex justify-center items-center mt-8 sm:mt-24 md:mt-24 lg:mt-20">
            <RegisterButton link="https://unstop.com/events/shipwreck-iconclave-indian-institute-of-information-technology-iiit-pune-794853" />
          </div>
        </div>
      </div>

      <section
        className="min-h-screen py-10 flex flex-col justify-center items-center"
        id="about"
        style={{
          background: "linear-gradient(180deg, #020E1D 0%, #000 100%)",
        }}
      >
        <div className="flex flex-col">
          <h1 className="p-0 text-center lg:text-left lg:pl-16 text-6xl sm:text-8xl lg:text-10xl text-white font-punishment">
            about
          </h1>
          <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-5 font-miso">
            <p>
              Immerse yourselves in a thrilling hypothetical scenario where
              participants find themselves aboard a sinking ship, facing a
              critical decision.
            </p>
            <p>
              In each batch, five characters will take the stage, and the task
              at hand is to convince the jury why their character, among the
              five, deserves to be saved.
            </p>
            <p>
              With rising waters and dramatic tension, participants will put
              their powers of persuasion to the test in this life-or-death
              debate scenario.
            </p>
          </div>
          <div className="text-center my-10 text-white">
            <h3 className="text-5xl font-miso">PRIZE POOL</h3>
            <h1 className="text-center text-6xl text-white lg:text-9xl font-punishment">
              INR 6K
            </h1>
          </div>
        </div>
      </section>

      <section
        className="bg-black pt-10 text-white min-h-screen flex flex-col justify-center bg-cover bg-center"
        id="guidelines"
        style={{
          background: "linear-gradient(180deg, #000 0%, #000 100%)",
        }}
      >
        <h1 className="p-0 text-center lg:text-left lg:pl-16 text-6xl sm:text-8xl lg:text-10xl text-white font-punishment">
          GUIDELINES
        </h1>

        <ul className="list-disc text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-5 font-miso">
          <li>
            Each batch of 5 participants will be given a maximum of 15 minutes
          </li>
          <li>The participants will receive their character by chit system</li>
          <li>
            No access to mobile phones, laptops, or the internet shall be
            allowed
          </li>
          <li>
            Participants in each batch shall be judged on their individual
            performance
          </li>
          <li>
            The college reserves the right to revise the rules and regulations
            of these competition
          </li>
        </ul>
        <div className="pb-8 -mt-10 md:mt-0 md:py-12">
          <RulebookButton link="https://docs.google.com/document/d/1wfciLsfbLV8AgvN2n_riWwA9WuOCMT6r/edit" />
        </div>
      </section>
      <section
        id="getintouch"
        className="min-h-full text-white flex flex-col"
        style={{
          background: "linear-gradient(180deg, #000 0%, #000 100%)",
        }}
      >
        <div className="flex flex-col pt-16">
          <div className="flex flex-col md:flex-row gap-5 md:justify-evenly md:items-center">
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">Manan Mangal</h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 6376895822
              </h4>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-10xl font-punishment text-center">
              <a
                href="https://www.instagram.com/eclecticiiitp/"
                target="_blank"
              >
                ECLECTIC
              </a>
            </h1>
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">Ritu Singh</h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 8668449378
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
          //   mail: "mailto:eclectic@iiitp.ac.in",
          //   instagram: "https://www.instagram.com/eclecticiiitp/",
          // }}
        />
      </section>
    </>
  );
};

export default ShipWreck;
