/* eslint-disable react/no-unescaped-entities */
import InfinityNav from "./InfinityNav";

const Bitlegion = () => {
  return (
    <div>
      <div className="bg-black h-full">
        <InfinityNav />

        <h1 className="text-5xl text-white pt-4 lg:text-9xl flex justify-center font-nightcore tracking-wider">
          BIT LE <span className="text-red-600">G</span>ION
        </h1>

        <div className="text-white font-miso text-xl lg:text-3xl px-5 lg:px-32 text-justify py-10 flex flex-col gap-6">
          <p className="text-center mb-9 mt-2 text-3xl font-bold">
            printf("There are only 10 types of people in this world, those who
            know Binary and those who don't);
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
      </div>
    </div>
  );
};

export default Bitlegion;
