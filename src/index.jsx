import "./style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Leva } from "leva";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags

// const root = ReactDOM.createRoot(document.querySelector("#root"));

const portrait = window.innerHeight > window.innerWidth;
const portraitMultiplier = portrait ? 2 : 1;

const Home = () => {
  const location = useLocation();
  const isSpecificRoute = location.pathname === "/";
  console.log(isSpecificRoute);
  if (isSpecificRoute) {
    // Get the root div and add CSS classes or styles
    const rootDiv = document.getElementById("root");
    if (rootDiv) {
      // Add your CSS classes or styles here
      rootDiv.classList.add("homeroot");
    }
  }

  
  return (
    <>
      <Helmet>
        <title>IConclave &#39; 23</title>
        <meta
          name="description"
          content="iConclave is a technical and cultural fest of IIIT Pune. Having 14+ events and prize pool worth 2.5 lakh, it is an event worth remembering. It features a cultural night khwaab, coding contests, hackathons, dance, literary, debate, photography, music and acting competitions."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "iConclave is a technical and cultural fest of IIIT Pune. Having 14+ events and prize pool worth 2.5 lakh, it is an event worth remembering. It features a cultural night khwaab, coding contests, hackathons, dance, literary, debate, photography, music and acting competitions.",
              "url": "https://iconclave.iiitp.ac.in/",
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
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [
            6 * portraitMultiplier,
            8 * portraitMultiplier,
            12 * portraitMultiplier,
          ],
        }}
      >
        <Experience />
      </Canvas>
      <div className="leva-container">
        <Leva collapsed />
      </div>
    </>
  );
};

export default Home;
