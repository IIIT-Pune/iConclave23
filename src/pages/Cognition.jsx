/* eslint-disable react/no-unescaped-entities */
import { cognitionguidelines } from "../assets/cognitionguidelines";
import Footer from "../components/Footer";
import CogNav from "../components/CogNav";
import RegisterButton from "../components/RegsiterButtoninverted";
import { Helmet } from "react-helmet";

const Cognition = () => {
  return (
    <div className="bg-cognitionbg min-h-screen flex flex-col">
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

      <CogNav />
      <div className="hero mt-36 lg:mt-0">
        <div className="flex flex-col items-center ">
          <div className=" -mt-5 flex flex-col z-10 ">
            <h1 className="font-veterantypewriter text-center text-6xl lg:text-10xl">
              COGNITION
            </h1>
            {/* <h2 className="text-l lg:text-4xl font-1942 text-right -mt-2"> */}
            <h2 className="text-xl lg:text-4xl font-1942 lg:-mt-5 text-right">
              decode dazzle dominate
            </h2>
          </div>
          <img
            src="/images/cognition_bg.png"
            alt="bg"
            // className="w-[54rem]"
          />
        </div>

        <RegisterButton
          fonts="punktypewriter"
          link="https://unstop.com/quiz/cognition-decode-dazzle-dominate-iconclave-indian-institute-of-information-technology-iiit-pune-794293"
        />
      </div>

      <div className="font-veterantypewriter" id="about">
        <h1 className="text-5xl lg:text-9xl  ml-10 pt-10 pb-4">ABOUT</h1>
        <div className="text-l md:text-4xl flex flex-col mx-10 lg:mx-20 gap-10 text-justify">
          <p>
            Prepare to push the boundaries of your knowledge and embark on an
            exhilarating journey through the world of trivia with the Quiz Club
            Q-riocity's grand presentation,{" "}
            <span className="font-bold">“Cognition"</span>.
          </p>
          <p>
            This ultimate quizzing competition, featured as a part of the
            spectacular i-Conclave, extends a warm invitation to students
            hailing from diverse colleges, urging them to unveil their wit and
            wisdom in an extraordinary battle of brains.
          </p>
          <p className="pb-5 lg:pb-10">
            Cognition stands apart by not merely testing what you know, but how
            much you can effortlessly recall across a myriad of domains. As you
            journey through Cognition, the stakes soar high, and the rewards
            even higher – for the top teams shall be graced with not only prizes
            but also the grandeur of recognition and the prestige of being
            crowned the ultimate quizzing champions.
          </p>
        </div>
      </div>

      <div className="font-veterantypewriter " id="guidelines">
        <h1 className="text-5xl lg:text-9xl  ml-10 pb-4">GUIDELINES</h1>

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
      <div className="flex justify-center items-center p-10">
        <h1 className="font-punktypewriter border-2 border-black px-5 py-1 text-5xl rounded-lg tracking-wider">
          RULEBOOK
        </h1>
      </div>

      <div className="font-veterantypewriter min-h-full">
        <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-evenly items-center">
          <div className="font-miso flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl">Brijdeep Goyal</h3>
            <h4 className="text-2xl lg:text-4xl">+91 8946919684</h4>
          </div>
          <a href="https://www.instagram.com/q_riocity_/">
            <h1 className="font-veterantypewriter text-center text-5xl lg:text-7xl">
              Q-RIOCITY
            </h1>
          </a>
          <div className="font-miso flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl">Shreerang M.</h3>
            <h4 className="text-2xl lg:text-4xl">+91 8149202000</h4>
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
