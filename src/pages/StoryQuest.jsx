import Footer from "../components/Footer";
import StoryQuestNav from "../components/StoryQuestNav";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags

const StoryQuest = () => {
  return (
    <div
      style={{
        background: "url(/images/StoryQuest_bg.png), black 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col"
    >
      <Helmet>
        <title>Story Quest - Your Creativity, Our Challenge</title>
        <meta
          name="description"
          content="Story Quest - Your Creativity, Our Challenge. Explore your creative storytelling abilities in this challenge. Contact us at eclectic@iiitp.ac.in."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Story Quest - Your Creativity, Our Challenge",
              "description": "Explore your creative storytelling abilities in this challenge.",
              "url": "https://iconclave.iiitp.ac.in/storyquest",
              "image": "https://www.example.com/images/StoryQuest_bg.png",
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

      <StoryQuestNav />
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-col text-white">
          <h1 className="text-6xl text-center lg:text-12xl mt-40 font-harryp lg:mt-10">
            STORY QUEST
          </h1>
          <p className="text-3xl lg:text-7xl font-miso lg:-ml-5 text-center">
            YOUR CREATIVITY, OUR CHALLENGE!
          </p>
        </div>

        <div className="flex justify-center items-center mt-48 m-10">
          <a
            href="https://unstop.com/events/storyquest-iconclave23-indian-institute-of-information-technology-iiit-pune-794926"
            className="text-white"
          >
            <h1 className="text-white font-miso border-2 px-5 py-3 text-4xl lg:text-5xl rounded-2xl tracking-wider ">
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
      {/* <div className="bg-[url('/images/StoryQuestbg.png')] text-white min-h-screen flex flex-col bg-cover bg-center"></div> */}

    </div>
  );
};

export default StoryQuest;
