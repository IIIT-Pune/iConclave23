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

        <div className="flex justify-center items-center mt-24 p-10">
          <a href="https://unstop.com/events/nritya-nova-iconclave-indian-institute-of-information-technology-iiit-pune-794575">
            <h1 className="text-white font-majormono border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider">
              register
            </h1>
          </a>
        </div>

        <Footer
          textColor="white"
          socialMediaLinks={{
            mail: "mailto:vanitycrew@iiitp.ac.in",
            instagram: "https://www.instagram.com/_vanity_crew/",
          }}
        />
      </div>

      {/* <div
        className="min-h-screen"
        id="about"
        style={{
          background: "linear-gradient(180deg, #141119 0%, #000 100%)",
        }}
      >
        <h1 className="font-grandstander text-5xl p-5 lg:text-10xl text-white m-0 lg:p-0 ml-10">
          ABOUT
        </h1>
        <div className=" font-miso text-2xl lg:text-4xl flex flex-col gap-5 text-white mx-5 lg:mx-20 text-justify">
          <p>
            At the beginning of the fest, a single word will be revealed for
            each team, through the chit system. This word will serve as the
            thematic core for each team’s photography journey.
          </p>
          <p>
            Using the camera or smartphone, the task is to capture a series of
            photographs throughout the fest that resonates with the chosen word.
            Every click should encapsulate the essence of the fest and the
            chosen team.
          </p>
          <p>
            Submit the series of photographs along with a cover image by
            designated deadline. Remarks: Cookie points – transform one of the
            best shots into a stunning edited version. For example, it can be
            converted to a splash photograph.
          </p>
          <p>
            Splash photography involves isolating the subject against a dynamic,
            colorful backdrop, creating a visual masterpiece.You can use this
            edited masterpiece as your cover image.
          </p>
        </div>
      </div>
      <div
        className="min-h-screen"
        id="about"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #000001 100%)",
        }}
      >
        <h1 className="font-grandstander p-5 text-5xl lg:text-10xl text-white m-0 ;g:p-0 ml-10">
          VANITY CREW
        </h1>
        <div className=" font-miso text-2xl lg:text-4xl flex flex-col gap-5 text-white mx-5 lg:mx-20 text-justify">
          <p>
            Horizon, established in January 2022 with the ideology of "capture
            imagination," continues to steadfastly pursue and expand upon this
            captivating concept. As the photography and videography club of IIIT
            Pune, Horizon has swiftly emerged as one of the institute's most
            dynamic and youthful clubs. Its ubiquitous presence is felt
            throughout campus events, where it skillfully encapsulates cherished
            memories. This proactive involvement has rightfully earned Horizon
            the designation of being IIIT Pune's dedicated media house.
          </p>
          <p>
            The scope of Horizon extends beyond mere media coverage. The club
            fervently fosters an environment of creativity and engagement. Among
            its diverse initiatives, Horizon hosts contests tailored for
            newcomers, fostering an inclusive atmosphere. With an ambitious
            vision in mind, the club is actively targeting and working towards
            organizing its flagship annual photography competition, an event
            eagerly anticipated by the IIIT Pune community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NrityaNova;
