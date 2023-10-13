/* eslint-disable react/no-unescaped-entities */

import InfinityNav from "../components/InfinityNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line no-shadow-restricted-names
const Infinity = () => {
  return (

    <div className="">
      <div className="bg-black h-screen flex flex-col">
        <InfinityNav />
        <div className="flex justify-center pt-24 pb-14 mx-3 lg:mx-0 lg:p-8 items-center ">

          <img
            src="/images/Infinity_logo.png"
            alt="Infinity Logo"
            width={800}
          />
        </div>
        <div className="text-white flex flex-col items-center -p-10 lg:flex-row justify-center text-2xl lg:text-3xl font-miso">

          <span className="-m-3 lg:m-0 lg:-mt-4">HOSTED ON</span> &nbsp; 
          <span className="-m-5 lg:m-0 lg:-mt-4">

            <span className="font-nightcore">
              <a
                target="_blank"
                href="https://www.codechef.com/"
                rel="noopener"
              >
                CODE <span className="text-red-600">CHEF</span>
              </a>
            </span>{" "}
            &nbsp;
            <a
              target="_blank"
              href="https://www.codechef.com/START105"
              rel="noopener"
            >
              ( AS STARTERS 105 )
            </a>
          </span>
        </div>

        <div className="text-white flex justify-center text-2xl lg:text-3xl font-miso m-3">
          <div className="flex flex-col lg:flex-row m-5">
            <div className="flex items-center -mb-3 lg:-mt-8">
              <div className="flex items-center justify-center h-10 ">
                <img src="/images/Calendar25.png" alt="25 Oct" width={50} />
              </div>
              OCT 25’ 2023
            </div>
            &nbsp;
            <div className="flex items-center -mt-3 lg:-mt-5">
              <img src="/images/Alarm.png" alt="25 Oct" width={50} />
              20:00 - 22:00
            </div>
          </div>
        </div>

        <div className="text-white flex justify-center pt-5 lg:pt-0 lg:-mt-4">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScAr32xvlkGK7EZxsp3RU0Ix-r2RgiDjX8sWcrX4JoWJ5VYlw/viewform"
            target="_blank"
            rel="noopener"
          >
            <h1 className="border border-1 border-white px-5 lg:px-14 py-2 lg:py-5 rounded-2xl text-4xl lg:text-4xl font-nightcore">
              Register &nbsp; <span className="text-red-600">Now</span>
            </h1>
          </a>
        </div>
      </div>

      <div className="h-full text-white py-8" id="about">
        <h1 className="flex justify-center font-nightcore text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest py-4 sm:py-8 md:py-12 lg:py-16">
          ABOUT THE CO<span className="text-red-600">N</span>TEST
        </h1>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6  text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p className="font-miso text-xl lg:text-3xl text-justify">
            Welcome to InfInITy 2k23, the{" "}
            <span className="text-red-600">sixth installment</span> of IIIT
            Pune's flagship annual coding contest! If you have a passion for
            coding and a competitive spirit, this event is tailor-made for you.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            InfInITy made its debut in 2017 and has since evolved into a
            thrilling coding contest that attracts participants from all over.
            Initially limited to IIIT Pune, it has now become a prestigious
            event open to coding enthusiasts everywhere.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            InfInITy is a <span className="text-red-600">2-hour coding</span>{" "}
            challenge thatpromises to keep you on the edge of your seat. Whether
            you're a beginner taking your first steps in the world of coding or
            an experienced coder looking for a new challenge, we have problems
            designed to test and elevate your coding skills.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            Whether you're a student, a professional, or simply someone who
            loves to solve problems through code, you're welcome to join us for
            InfInITy 2k23.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            Mark your calendars and get ready for an adrenaline-pumping coding
            experience at <span className="text-red-600">InfInITy 2k23!</span>
          </p>
        </div>
      </div>

      <div className="bg-black">
        <Footer textColor="white" socialMediaLinks={{  mail: 'mailto:bitlegion@iiitp.ac.in',
    instagram: 'https://www.instagram.com/bit.iiitp/',
    linkedin: 'https://www.linkedin.com/company/bitlegion/',
    twitter: 'https://twitter.com/bit_iiitp'}} ></Footer>
      </div>
    </div>
  );
};

export default Infinity;
