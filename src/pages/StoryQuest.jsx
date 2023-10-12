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
          content="StoryQuest is a thrilling competition of creative and original story writing and storytelling. Alternative endings of well known story tales and using the art of improvisational storytelling. A battle of creativity and oratory."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Story Quest - Your Creativity, Our Challenge",
              "description": "StoryQuest is a thrilling competition of creative and original story writing and storytelling. Alternative endings of well known story tales and using the art of improvisational storytelling. A battle of creativity and oratory.",
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

        {/* Register button code here... */}
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

export default StoryQuest;
