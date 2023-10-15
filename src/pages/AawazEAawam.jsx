import AawamNav from "../components/AawamNav";
import Footer from "../components/Footer";
import AawamAbout from "../components/AawamAbout";
import AawamGuide from "../components/AawamGuide";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags
import RegisterButton from "../components/RegsiterButton";

const AawazEAawam = () => {
  return (
    <div className="bg-black">
      <Helmet>
        <title>Aawaz-E-Aawam - Lights Street Action</title>
        <meta
          name="description"
          content="Awaz-e-Awam by Abhinay presents an on-campus street play/theater competition during I-Conclave at IIIT Pune. Transform impactful social messages into performances and compete for a substantial prize pool of 38k."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "Awaz-e-Awam by Abhinay presents an on-campus street play/theater competition during I-Conclave at IIIT Pune. Transform impactful social messages into performances and compete for a substantial prize pool of 38k. ",
              "description": "Learn more about our mission and guide to take action.",
              "url": "https://iconclave.iiitp.ac.in/aawazeaawam",
              "image": "https://www.example.com/images/aawazeaawam.png",
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
      <div
        className="h-screen flex flex-col"
        style={{
          background: "url(/images/aawazeaawam.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <AawamNav />

        <div className="flex flex-col gap-20 flex-grow items-center text-white justify-center">
          <div className="flex flex-col justify-center text-center gap-5 items-center">
            <div className="flex flex-col gap-2 lg:flex-row">
              <h1 className="text-white font-monoton text-5xl sm:text-7xl lg:text-7xl">
                aawaz
              </h1>
              <h1 className="text-white font-monoton text-5xl sm:text-7xl lg:text-7xl">
                -E-
              </h1>
              <h1 className="text-white font-monoton text-5xl sm:text-7xl lg:text-7xl">
                aawam
              </h1>
            </div>
            <h2 className="text-white font-majormono text-xl sm:text-4xl md:text-4xl lg:text-5xl">
              lights street action
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <RegisterButton link="https://unstop.com/events/aawaz-e-aawam-lights-street-action-iconclave-indian-institute-of-information-technology-iiit-pune-794605" />
          </div>
        </div>
      </div>
      <AawamAbout />
      <AawamGuide />

      <div
        id="getintouch"
        className="flex pt-8 lg:pt-12 lg:mb-4 flex-col text-white lg:flex-row gap-6 lg:justify-evenly lg:items-center"
      >
        <div className="font-miso flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl">Priyansh</h3>
          <h4 className="text-xl sm:text-2xl lg:text-4xl">+91 7050943292</h4>
        </div>
        <a href="https://www.instagram.com/abhinay.iiitp/">
          <h1 className="font-monoton text-5xl text-center sm:text-6xl md:text-7xl xl:text-8xl">
            ABHINAY
          </h1>
        </a>
        <div className="font-miso flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl">Svayam Kapadia</h3>
          <h4 className="text-xl sm:text-2xl lg:text-4xl">+91 8320094646</h4>
        </div>
      </div>

      <Footer
        textColor="white"
        // socialMediaLinks={{
        //   mail: "mailto:abhinay@iiitp.ac.in",
        //   instagram: "https://www.instagram.com/abhinay.iiitp/",
        // }}
      />
    </div>
  );
};

export default AawazEAawam;
