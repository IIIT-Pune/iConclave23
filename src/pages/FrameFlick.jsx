/* eslint-disable react/no-unescaped-entities */
import FFNav from "../components/FFNav";
import Footer from "../components/Footer";
import { ffguidelines } from "../assets/ffguidelines";
import { Helmet } from "react-helmet";
import RulebookButton from "../components/RulebookButton";

const FrameFlick = () => {
  return (
    <div className="">
      <Helmet>
        <title>Frame Flicks - Your Fest, Your Frame</title>
        <meta
          name="description"
          content="FrameFlicks: Inter-College Photography Competition by Horizon. Capture the festival's essence with your camera or smartphone, submit"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Frame Flicks - Your Fest, Your Frame",
              "description": "FrameFlicks: Inter-College Photography Competition by Horizon. Capture the festival's essence with your camera or smartphone, submit ",
              "url": "https://iconclave.iiitp.ac.in/frameflick",
              "image": "https://www.example.com/images/frameflick_bg.png",
              "startDate": "2023-10-12T18:00:00-07:00",
              "endDate": "2023-10-12T22:00:00-07:00",
              "location": {
                "@type": "Place",
                "name": "IIIT Pune",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ambegoan bk",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411041",
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
          background: "url(/images/frameflick_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-screen text-white flex flex-col bg-cover bg-center"
      >
        <FFNav />

        <div className="flex flex-col gap-12 sm:gap-18 md:gap-24 lg:gap-32 items-center text-white justify-center flex-grow">
          <div className="text-white flex-col ">
            <h1 className="font-grandstander text-7xl sm:text-8xl lg:text-10xl text-center">
              FRAME FLICKS
            </h1>
            <p className=" text-center font-kodchasan text-2xl sm:text-4xl lg:text-5xl lg:-mt-6 lg:text-right ">
              your fest your frame
            </p>
          </div>
          <a
            href="https://unstop.com/events/frameflicks-iconclave23-indian-institute-of-information-technology-iiit-pune-794971"
            className="text-white"
            target="blank"
          >
            <h1
              className="font-majormono border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider 
      transition-transform transform hover:scale-105 hover:font-semibold hover:border-4 hover:border-white hover:ease-in-out"
            >
              register
            </h1>
          </a>
        </div>
      </div>

      <div
        className="min-h-screen py-10 flex flex-col justify-center items-center"
        id="about"
        style={{
          background: "linear-gradient(180deg, #141119 0%, #000 100%)",
        }}
      >
        <div>
          <div>
            <h1 className="text-6xl sm:text-8xl lg:text-10xl font-grandstander text-white text-center lg:text-left mt-5 lg:mx-20">
              ABOUT
            </h1>
          </div>

          <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
            <p>
              At the beginning of the fest, a single word will be revealed for
              each team, through the chit system. This word will serve as the
              thematic core for each team’s photography journey.
            </p>
            <p>
              Using the camera or smartphone, the task is to capture a series of
              photographs throughout the fest that resonates with the chosen
              word. Every click should encapsulate the essence of the fest and
              the chosen team.
            </p>
            <p>
              Submit the series of photographs along with a cover image by
              designated deadline. Remarks: Cookie points – transform one of the
              best shots into a stunning edited version. For example, it can be
              converted to a splash photograph.
            </p>
            <p>
              Splash photography involves isolating the subject against a
              dynamic, colorful backdrop, creating a visual masterpiece.You can
              use this edited masterpiece as your cover image.
            </p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-5xl font-miso">PRIZE POOL</h3>
            <h1 className="text-center text-6xl text-white lg:text-9xl font-grandstander">
              INR 10K
            </h1>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen pt-10 flex flex-col justify-center items-center"
        id="guidelines"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #000001 100%)",
        }}
      >
        <div>
          <div>
            <h1 className="text-6xl sm:text-8xl lg:text-10xl font-grandstander text-white text-center lg:text-left mt-5 lg:mx-20">
              GUIDELINES
            </h1>
          </div>
          <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
            {ffguidelines.map((rule, index) => {
              return (
                <div key={index} className="flex gap-5">
                  <h1>{index + 1}.</h1>
                  <p>{rule}</p>
                </div>
              );
            })}
          </div>
          <RulebookButton link="https://docs.google.com/document/d/1EKYHWB2ZWv9Xej7PrPpSSqm3pNO_udWe/edit" />
        </div>
      </div>
      <div
        className="min-h-full flex flex-col"
        id="getintouch"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #000001 100%)",
        }}
      >
        {/* <h1 className="text-5xl p-5 font-grandstander lg:text-8xl text-white m-0 lg:p-0 lg:ml-10 text-center ">
            HORIZON
          </h1> */}
        {/* <div className="text-2xl font-miso lg:text-4xl flex flex-col gap-5 text-white mx-7 lg:mx-20 text-justify flex-grow">
            <p>
              Horizon, established in January 2022 with the ideology of "capture
              imagination," continues to steadfastly pursue and expand upon this
              captivating concept. As the photography and videography club of
              IIIT Pune, Horizon has swiftly emerged as one of the institute's
              most dynamic and youthful clubs. Its ubiquitous presence is felt
              throughout campus events, where it skillfully encapsulates
              cherished memories. This proactive involvement has rightfully
              earned Horizon the designation of being IIIT Pune's dedicated
              media house.
            </p>
            <p>
              The scope of Horizon extends beyond mere media coverage. The club
              fervently fosters an environment of creativity and engagement.
              Among its diverse initiatives, Horizon hosts contests tailored for
              newcomers, fostering an inclusive atmosphere. With an ambitious
              vision in mind, the club is actively targeting and working towards
              organizing its flagship annual photography competition, an event
              eagerly anticipated by the IIIT Pune community.
            </p>
          </div> */}
        <div className="flex pt-8 lg:pt-12 lg:mb-4 flex-col text-white lg:flex-row gap-5 lg:ml-32 justify-center lg:justify-evenly items-center">
          <div className="font-miso flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl">
              Ishan Upadhyaya
            </h3>
            <h4 className="text-xl sm:text-2xl lg:text-4xl">+91 8009904204</h4>
          </div>
          <div>
            <a href="https://www.instagram.com/horizon_iiitp/">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-grandstander text-center">
                HORIZON
              </h1>
            </a>
          </div>
        </div>
        <Footer
          textColor="white"
          // socialMediaLinks={{
          //   mail: "mailto:horizon@iiitp.ac.in",
          //   instagram: "https://www.instagram.com/horizon_iiitp/",
          // }}
        />
      </div>
    </div>
  );
};

export default FrameFlick;
