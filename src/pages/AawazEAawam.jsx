import AawamNav from "../components/AawamNav";
import Footer from "../components/Footer";
import AawamAbout from "../components/AawamAbout";
import AawamGuide from "../components/AawamGuide";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags

const AawazEAawam = () => {
  return (
    <div className="bg-black">
      <Helmet>
        <title>Aawaz-E-Aawam - Lights Street Action</title>
        <meta
          name="description"
          content="Aawaz-E-Aawam - Lights Street Action."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "Aawaz-E-Aawam - Lights Street Action",
              "description": "Learn more about our mission and guide to take action.",
              "url": "https://iconclave.iiitp.ac.in/aawazeaawam",
              "image": "https://www.example.com/images/aawazeaawam.png",
              "author": {
                "@type": "Organisation",
                "name": "IConclave - IIIT Pune"
              }
            }
          `}
        </script>
      </Helmet>

      <div
        className="min-h-screen "
        style={{
          background: "url(/images/aawazeaawam.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <AawamNav />

        <div className="flex flex-col gap-10 flex-grow">
          <div className="flex flex-col justify-center text-center gap-5 items-center mt-40 md:mt-32 lg:mt-10">
            <div className="flex flex-col gap-2 lg:flex-row">
              <h1 className="text-white font-monoton text-5xl sm:text-7xl lg:text-8xl">
                aawaz
              </h1>
              <h1 className="text-white font-monoton text-5xl sm:text-7xl lg:text-8xl">
                -E-
              </h1>
              <h1 className="text-white font-monoton text-5xl sm:text-7xl lg:text-8xl">
                aawam
              </h1>
            </div>
            <p className="text-white font-majormono text-2xl sm:text-4xl lg:text-6xl">
              lights street action
            </h2>
          </div>

          {/* <div className="flex justify-center items-center -mt-20"> */}
          <div className="flex justify-center items-center">
            <a href="https://unstop.com/events/aawaz-e-aawam-lights-street-action-iconclave-indian-institute-of-information-technology-iiit-pune-794605">
              <h1 className="font-majormono text-white border-2 border-white px-5 py-1 text-4xl rounded-lg">
                register
              </h1>
            </a>
          </div>

        </div>
      </div>
      <AawamAbout />
      <AawamGuide />

//       <h1 className="text-white font-monoton text-center text-2xl sm:text-6xl lg:text-7xl">
//         ABHINAY
//       </h1>

      <Footer
        textColor="white"
        socialMediaLinks={{
          mail: "mailto:abhinay@iiitp.ac.in",
          instagram: "https://www.instagram.com/abhinay.iiitp/",
        }}
      />
    </div>
  );
};

export default AawazEAawam;
