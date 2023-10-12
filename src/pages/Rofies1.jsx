import Footer from "../components/Footer";
import OffRoadNav from "../components/OffRoadNav";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags

const Rofies1 = () => {
  return (
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
          content="Off-Road Bandit - Navigate, Relay, Triumph. Join the adventure and show your off-road skills. Visit our Instagram page for more information."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Off-Road Bandit - Navigate, Relay, Triumph",
              "description": "Join the adventure and show your off-road skills.",
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
        </div>
      </div>
      <Footer
        textColor="white"
        socialMediaLinks={{
          instagram: "https://www.instagram.com/rofies_iiitp/",
        }}
      />
    </div>
  );
};

export default Rofies1;
