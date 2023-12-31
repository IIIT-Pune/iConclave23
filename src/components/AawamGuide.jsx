import RulebookButton from "./RulebookButton";

/* eslint-disable react/no-unescaped-entities */
const AawamGuide = () => {
  return (
    <div
      className="min-h-screen py-10 flex flex-col justify-center items-center bg-black text-white font-monoton"
      id="guidelines"
    >
      <div>
        <div>
          <h1 className="text-5xl text-center lg:text-left sm:text-6xl md:text-7xl lg:text-8xl lg:pl-10 lg:pt-10">
            GUIDELINES
          </h1>
        </div>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <h1 className="text-3xl text-center lg:text-left lg:text-6xl lg:pt-10">
            PHASE 1:
          </h1>
          <div className="">
            <p className="">
              Teams will have to submit a synopsis of their play. The synopsis
              should be precise and well-written, as it will be a deciding
              factor in a team’s entry to phase 2.
            </p>
            <p className=" ">
              The team has to send the synopsis of their street play at
              abhinay@iiitp.ac.in by 20th October 2023.
            </p>
            <p>Submission Guidelines:-</p>
            <div className="m-2 lg:m-5">
              <p className="">
                {`
                1. The subject of the mail should be 'Street Play Entry | <Team Name> | <College Name>.
                  
                `}
              </p>
              <p className="">
                {`
                  2. The file containing the synopsis should be in PDF format.                  
              `}
              </p>
              <p className="">
                {`
                   3. The mail should contain the following details: Team Name, Institution Name, Number of Members, Name of the Team Leader, Contact numbers (minimum 2) and Email ID.          
              `}
              </p>
            </div>
          </div>
          <h1 className="text-3xl text-center lg:text-left lg:text-6xl">
            PHASE 2(On-Campus Round):
          </h1>
          <div className="">
            <p className="">
              The top 6-8 teams will be shortlisted and invited to IIIT Pune to
              present their play during iConclave.
              <p>The time limit for the act is 15 minutes.</p>
              <p>
                Any kind of vulgarity will lead to direct disqualification,
                indecent language is not allowed.
              </p>
              <p>Teams will be penalized for exceeding the time limit.</p>
              <p>
                The Organising committee reserves the right to change the venue
                and time.
              </p>
            </p>
          </div>
        </div>
        <RulebookButton link="https://docs.google.com/document/d/1Ms8sHHWHkuDF_ZMY0fav162YPIz4dLcP/edit?usp=drive_link&ouid=102752599690170514768&rtpof=true&sd=true" />
      </div>
    </div>
  );  
};

export default AawamGuide;
