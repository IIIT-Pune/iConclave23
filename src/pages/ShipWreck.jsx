import ShipWreckNav from "../components/ShipWreckNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags

const ShipWreck = () => {
  return (
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
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-col text-white">
          <h1 className="text-8xl lg:text-12xl mt-40 font-punishment lg:mt-10">
            ShipWreck
          </h1>
          <p className="text-4xl lg:text-7xl font-miso lg:-mt-10 lg:-ml-5 text-center">
            SPEAK UP, STAY UP
          </p>
        </div>

        <div className="flex justify-center items-center mt-48 m-10">
          <a href="https://example.com" className="text-white">
            <h1 className="font-miso border-2 px-5 py-3 text-4xl lg:text-5xl rounded-2xl tracking-wider ">
              REGISTER
            </h1>
          </a>
        </div>
      </div>
      <Footer
        textColor="white"
        socialMediaLinks={{
          mail: "mailto:eclectic@iiitp.ac.in",
          instagram: "https://www.instagram.com/eclecticiiitp/",
        }}
      />
    </div>
  );
};

export default ShipWreck;
