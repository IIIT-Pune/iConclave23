/* eslint-disable react/no-unescaped-entities */
import { cognitionguidelines } from "../assets/cognitionguidelines";
import Footer from "../components/Footer";
import CogNav from "../components/CogNav";
import RegisterButton from "../components/RegsiterButtoninverted";
import { Helmet } from "react-helmet";
import RulebookButton from "../components/RulebookButtoninverted";

const Cognition = () => {
  return (
    <div className="bg-cognitionbg">
      <Helmet>
        <title>Cognition - Decode, Dazzle, Dominate</title>
        <meta
          name="description"
          content="Cognition is an online trivia extravaganza brought to you by the Quiz Club Q-riocity. Delve into a diverse range of intriguing topics and join students from esteemed colleges. Compete for the coveted title of ultimate quizmaster in the grand setting of IIIT Pune"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Cognition - Decode, Dazzle, Dominate",
              "description": "Cognition is an online trivia extravaganza brought to you by the Quiz Club Q-riocity. Delve into a diverse range of intriguing topics and join students from esteemed colleges. Compete for the coveted title of ultimate quizmaster in the grand setting of IIIT Pune",
              "url": "https://www.example.com/cognition",
              "image": "https://www.example.com/images/cognition_bg.png",
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

      <div className="h-screen flex flex-col">
        <CogNav />
        <div className="flex-grow flex flex-col justify-center">
          <div className="hero flex flex-col sm:gap-16 lg:gap-0 justify-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-col z-10">
                <h1 className="font-veterantypewriter text-center text-6xl sm:text-8xl md:text-9xl lg:text-10xl">
                  COGNITION
                </h1>
                {/* <h2 className="text-l lg:text-4xl font-1942 text-right -mt-2"> */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-1942 -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 text-right">
                  decode dazzle dominate
                </h2>
              </div>
            </div>

            <div className="flex justify-center h-3/4 mt-12 md:mt-0">
              <img src="/images/cognition_bg.png" alt="bg" />
            </div>

            <div className="flex justify-center">
              <RegisterButton
                fonts="punktypewriter"
                link="https://unstop.com/quiz/cognition-decode-dazzle-dominate-iconclave-indian-institute-of-information-technology-iiit-pune-794293"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="font-veterantypewriter min-h-screen py-10 flex flex-col justify-center items-center"
        id="about"
      >
        <div>
          <div>
            <h1 className="text-center lg:text-left text-5xl lg:text-9xl sm:text-6xl md:text-7xl lg:ml-10 pb-8">
              ABOUT
            </h1>
          </div>
          <div className="text-l md:text-4xl flex flex-col mx-10 lg:mx-20 gap-10 text-justify">
            <p>
              Prepare to push the boundaries of your knowledge and embark on an
              exhilarating journey through the world of trivia with the Quiz
              Club Q-riocity's grand presentation,{" "}
              <span className="font-bold">“Cognition"</span>.
            </p>
            <p>
              This ultimate quizzing competition, featured as a part of the
              spectacular i-Conclave, extends a warm invitation to students
              hailing from diverse colleges, urging them to unveil their wit and
              wisdom in an extraordinary battle of brains.
            </p>
            <p className="pb-5 lg:pb-10">
              Cognition stands apart by not merely testing what you know, but
              how much you can effortlessly recall across a myriad of domains.
              As you journey through Cognition, the stakes soar high, and the
              rewards even higher – for the top teams shall be graced with not
              only prizes but also the grandeur of recognition and the prestige
              of being crowned the ultimate quizzing champions.
            </p>
          </div>
          <div className="text-center text-black">
            <h3 className="text-5xl font-miso">PRIZE POOL</h3>
            <h1 className="text-center text-6xl text-black lg:text-9xl font-veterantypewriter">
              INR 10K
            </h1>
          </div>
        </div>
      </div>

      <div
        className="font-veterantypewriter min-h-screen py-10 flex flex-col justify-center items-center"
        id="guidelines"
      >
        <div>
          <div>
            <h1 className="text-center lg:text-left text-5xl lg:text-9xl sm:text-6xl md:text-7xl lg:ml-10 pb-8">
              GUIDELINES
            </h1>
          </div>

          <div className="text-l md:text-4xl flex flex-col mx-10 lg:mx-20  text-justify ">
            {cognitionguidelines.map((rule, index) => {
              return (
                <div key={index} className="flex gap-5">
                  <h1>{index + 1}.</h1>
                  <p>{rule}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:mt-10">
          <RulebookButton link="https://docs.google.com/document/d/1W6yrXXWv_m00RU63rLGM3m2hTinz0Fvp/edit" />
        </div>
      </div>

      <div id="getintouch" className="pt-8 lg:pt-12 lg:mb-4">
        <div className="font-veterantypewriter min-h-full">
          <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-evenly items-center">
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">
                Brijdeep Goyal
              </h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 8946919684
              </h4>
            </div>
            <a href="https://www.instagram.com/q_riocity_/">
              <h1 className="font-veterantypewriter text-5xl text-center sm:text-6xl md:text-7xl xl:text-8xl">
                Q-RIOCITY
              </h1>
            </a>
            <div className="font-miso flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl">Shreerang M.</h3>
              <h4 className="text-xl sm:text-2xl lg:text-4xl">
                +91 8149202000
              </h4>
            </div>
          </div>
        </div>
      </div>

      <Footer
        invert="true"
        // socialMediaLinks={{
        //   mail: "mailto:q_riocity@iiitp.ac.in",
        //   instagram: "https://www.instagram.com/q_riocity_/",
        // }}
      ></Footer>
    </div>
  );
};

export default Cognition;
