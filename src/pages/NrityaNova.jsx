/* eslint-disable react/no-unescaped-entities */
import NNNAv from "../components/NNNAV";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet'; // Import Helmet for managing SEO tags

const NrityaNova = () => {
  return (
    <div className="">
      <Helmet>
        <title>Nritya Nova - Every Step Tells a Story</title>
        <meta
          name="description"
          content="Nritya Nova - Every Step Tells a Story. Explore the world of dance with us. Contact us at vanitycrew@iiitp.ac.in."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "DanceEvent",
              "name": "Nritya Nova - Every Step Tells a Story",
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
        className="h-screen flex flex-col"
      >
        <NNNAv />

        <div className="flex justify-center flex-grow">
          <div className="text-white pt-32 flex-col">
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

        <Footer
          textColor="white"
          socialMediaLinks={{
            mail: "mailto:vanitycrew@iiitp.ac.in",
            instagram: "https://www.instagram.com/_vanity_crew/",
          }}
        />
      </div>
    </div>
  );
};

export default NrityaNova;
