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
          <div className="text-2xl lg:text-4xl ">
            <p className="">
              Teams will have to submit a synopsis of their play. The synopsis
              should be precise and well-written, as it will be a deciding
              factor in a team’s entry to phase 2.
            </p>
            <p className=" ">
              The team has to send the synopsis of their street play at
              abhinay@iiitp.ac.in by 5th October 2023.
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
          <div className="lg:text-4xl">
            <p className="">
              Top few teams will be shortlisted and notified and will be invited
              to IIIT Pune to present their play during I-Conclave.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AawamGuide;
