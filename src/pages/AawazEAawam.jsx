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
        className="min-h-screen "
        style={{
          background: "url(/images/aawazeaawam.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <AawamNav />
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col justify-center items-center mt-40 md:mt-32 lg:mt-10">
            <h1 className="text-white font-monoton text-3xl sm:text-7xl lg:text-8xl">
              aawaz-E-aawam
            </h1>
            <h2 className="text-white font-majormono text-2xl sm:text-4xl lg:text-6xl">
              lights street action
            </h2>
          </div>
        </div>
      </div>
      <AawamAbout />
      <AawamGuide />
      <h1 className="text-white font-monoton text-center text-2xl sm:text-6xl lg:text-7xl">
        ABHINAY
      </h1>
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
