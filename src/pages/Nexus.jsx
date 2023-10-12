import { useEffect } from "react";
import NexusNav from "../components/NexusNav";
import NexusAbout from "./NexusAbout";
import { Helmet } from "react-helmet";

const Nexus = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Nexus - 36 Hour Hackathon</title>
        <meta
          name="description"
          content="An exhilarating 36-hour offline hackathon, one designed to ignite your creative genius and technical skills. Problem statements include healthtech, edtech, web 3.0/blockchain and AI/ML. Craft innovative solutions with the potential to revolutionize the world."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "neXus - 36 Hour Hackathon",
              "description": "An exhilarating 36-hour offline hackathon, one designed to ignite your creative genius and technical skills. Problem statements include healthtech, edtech, web 3.0/blockchain and AI/ML. Craft innovative solutions with the potential to revolutionize the world.",
              "startDate": "2023-11-01T00:00:00Z",
              "endDate": "2023-11-02T23:59:59Z",
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
        style={{
          background: "url(/images/nexus_bg.png)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        className="h-screen flex flex-col"
      >
        <NexusNav />
        <div className="flex justify-center flex-grow">
          <div className="text-white pt-32 sm:pt-12 lg:pt-5 flex-col items-center">
            <h1 className="font-miso text-3xl -mb-5 sm:text-4xl sm:-mb-5  lg:text-5xl lg:-mb-10 ">
              36 hour hackathon
            </h1>
            <h1
              className=" font-majormono text-8xl sm:text-10xl lg:text-12xl m-0 p-0 text-center text-white font-normal animate__animated animate__zoomIn"
              id="NEXUS"
            >
              neXus
            </h1>
            <p className=" font-miso text-3xl sm:text-5xl sm:- lg:text-7xl lg:-mt-5 text-center ">
              CODE, CREATE, CONNECT
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-10 sm:mb-10 2xl:mb-20">
          <div
            className="apply-button"
            data-hackathon-slug="nexus"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
      <NexusAbout />
    </>
  );
};

export default Nexus;
