const AawamGuide = () => {
  return (
    <div className="bg-black text-white font-monoton mt-10 lg:mt-0" id="guidelines">
      <h1 className="text-5xl text-center lg:text-left lg:text-8xl lg:pl-10 lg:pt-10">
        GUILDLINES
      </h1>
      <div className="py-3 px-3 lg:py-5 lg:px-7 text-justify flex flex-col gap-5 lg:gap-10 text-2xl lg:text-5xl font-miso">
        {" "}
        <h1 className="text-3xl text-center lg:text-left lg:text-6xl lg:pl-10 lg:pt-10">
          PHASE 1:
        </h1>
        <div className="px-5 text-2xl lg:px-16 lg:text-4xl ">
          <p className="">
            Teams will have to submit a synopsis of their play. The synopsis
            should be precise and well-written, as it will be a deciding factor
            in a team’s entry to phase 2.
          </p>
          <p className=" ">
            The team has to send the synopsis of their street play at
            abhinay@iiitp.ac.in by 5th October 2023. Submission Guidelines:-
          </p>
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
        <h1 className="text-3xl text-center lg:text-left lg:text-6xl lg:pl-10">
          PHASE 2:
        </h1>
        <div className="px-5 lg:px-16 lg:text-4xl ">
          <p className="">
            Teams will have to submit a synopsis of their play. The synopsis
            should be precise and well-written, as it will be a deciding factor
            in a team's entry to phase 2.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AawamGuide;
