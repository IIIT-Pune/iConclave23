/* eslint-disable react/no-unescaped-entities */
import InfinityNav from "./InfinityNav";
import Footer from "./Footer";
const Bitlegion = () => {
  return (
    <div>
      <div className="bg-black h-screen flex flex-col">
        <InfinityNav />

        <h1 className="text-white py-6 md:py-12 lg:py-18 text-5xl sm:text-7xl md:text-8xl lg:text-9xl flex justify-center font-nightcore tracking-wider">
          BIT LE <span className="text-red-600">G</span>ION
        </h1>

        <div className="text-white flex-grow text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6  text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p className="text-center font-mono mb-12 mt-2 font-bold">
            printf("There are only 10 types of people in this world, those who
            know Binary and those who don't");
          </p>
          <p>
            Welcome to Bit Legion, IIIT Pune's coding hub. We're a passionate
            student community dedicated to the world of programming. Whether
            you're into competitive coding, software development, or tech
            interviews, Bit Legion has your back.
          </p>
          <p>
            As we celebrate our 3rd anniversary, Bit Legion continues to foster
            a vibrant coding culture on campus. We believe in giving everyone a
            smooth start on their coding journey. That's why we organize
            webinars, coding sessions, tech talks, team-building events, and fun
            activities.
          </p>
          <p>
            Our club members actively participate in major coding contests like
            ICPC consistently making IIIT Pune proud with top rankings in both
            ICPC Regionals and Asia West Continentals.
          </p>
          <p>
            Internationally recognized for hosting "InfInITy," our flagship
            coding contest, Bit Legion attracts thousands of participants from
            around the globe. Last year's event, InfInITy 2k22, was a massive
            success, drawing over 128k+ submissions and 25k+ participants from
            competitive programmers worldwide.
          </p>
          <p>
            In conclusion, Bit Legion has been an integral part of the IIIT Pune
            community for three years, inspiring students to pursue their coding
            and technology passions. With our focus on innovation,
            collaboration, and skill development, Bit Legion is the ultimate
            destination for coding enthusiasts at IIIT Pune. Join us on this
            exciting coding journey!
          </p>
        </div>
        <Footer textColor="white"></Footer>
      </div>
    </div>
  );
};

export default Bitlegion;
