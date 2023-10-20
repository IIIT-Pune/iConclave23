import Footer from "../components/Footer";
import StoryQuestNav from "../components/StoryQuestNav";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags
import RegisterButton from "../components/RegsiterButton";
import RulebookButton from "../components/RulebookButton";

const StoryQuest = () => {
  return (
    <div>
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

      <div
        style={{
          background: "url(/images/StoryQuest_bg.png), black 50%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen flex flex-col"
      >
        <StoryQuestNav />
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="flex flex-col text-white">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-11xl  text-center font-harryp">
              STORY QUEST
            </h1>
            <p className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-miso lg:-ml-5 text-center">
              YOUR CREATIVITY, OUR CHALLENGE!
            </p>
            <div className="flex justify-center items-center mt-10 sm:mt-32">
              <RegisterButton link="https://unstop.com/events/storyquest-iconclave23-indian-institute-of-information-technology-iiit-pune-794926" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white min-h-screen flex flex-col gap-4 md:gap-10 justify-center bg-cover bg-center"
        id="about"
        style={{
          background: "linear-gradient(138deg, #0A2404 7.82%, #000 68.43%)",
        }}
      >
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <h1 className="font-harryp text-6xl sm:text-8xl lg:text-10xl p-0 text-center text-white font-normal sm:mb-12">
            ABOUT
          </h1>

          <p>
            Welcome to an enchanting celebration of storytelling, where words
            come to life and imagination knows no bounds. Our storytelling
            event, unlike any other, features not one, but two captivating
            rounds of tales spun with finesse and passion.
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              Round 1: Twist-a-Tale
            </span>
            <ul
              role="list"
              className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
            >
              <li>
                Unleash your creative thinking as you craft delightfully twisted
                endings to beloved fairy tales, transforming the familiar into
                captivating tales of surprise and wonder. <br></br> For example,
                What if the shoe didn’t fit Cinderella?
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              Round 2: Snapshot Saga
            </span>
            <ul
              role="list"
              className="marker:text-white-400 list-disc pl-2 sm:pl-4 md:pl-6 lg:pl-8"
            >
              <li>
                Engage in an enchanting storytelling challenge where
                participants must craft 1-2 sentence narratives inspired by a
                series of intriguing pictures. The story evolves as they pass it
                on to others with each changing slide. This dynamic and creative
                relay unfolds over 4 captivating minutes, celebrating the art of
                storytelling and imagination.
              </li>
            </ul>
          </p>
          <div className="py-8">
            <RulebookButton link="https://docs.google.com/document/d/1g5Oc8PzSz18F0fYkNT7gFiBugGORE9SB/edit" />
          </div>
        </div>

        <div className="flex flex-col justify-center my-10 items-center lg:mb-12">
          <p className="font-miso uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Prizes worth
          </p>
          <p className="font-harryp uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            INR 6k
          </p>
        </div>
        <div
          id="getintouch"
          className=" text-white h-full flex flex-col bg-cover bg-center"
          // style={{
          //   background: "linear-gradient(138deg, #000 68.43%, #000 68.43%)",
          // }}
        >
          <div className="flex flex-col py-6">
            <div className="flex flex-col md:flex-row gap-5 md:justify-evenly md:items-center">
              <div className="font-miso flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl">
                  Manan Mangal
                </h3>
                <h4 className="text-xl sm:text-2xl lg:text-4xl">
                  +91 6376895822
                </h4>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-10xl font-punishment text-center">
                <a
                  href="https://www.instagram.com/eclecticiiitp/"
                  target="_blank"
                >
                  ECLECTIC
                </a>
              </h1>
              <div className="font-miso flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl">Ritu Singh</h3>
                <h4 className="text-xl sm:text-2xl lg:text-4xl">
                  +91 8668449378
                </h4>
              </div>
            </div>
            <div className="font-miso lg:text-4xl lg:mx-7 lg:my-3 text-justify flex flex-col flex-grow gap-7">
              <p></p>
            </div>
          </div>
          <Footer
            textColor="white"
            // socialMediaLinks={{
            //   mail: "mailto:eclectic@iiitp.ac.in",
            //   instagram: "https://www.instagram.com/eclecticiiitp/",
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryQuest;
