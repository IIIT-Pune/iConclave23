/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";


const HOFCardContent = ({ccolor, name, clg, year}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex w-3/4 font-miso gap-2 items-center">
          <SiCodechef
            color={ccolor ? ccolor : "White"}
            size={50}
            className="w-1/4"
          />
          <div className="w-2/4">
            <p className=" text-3xl text-center mb-0.5">{name}</p>
            <p className=" text-xl text-center leading-4 ">{clg}</p>
            <div className="flex gap-4 justify-center pt-1.5">
              <AiFillGithub color="black" size={25} />
              <AiFillLinkedin color="black" size={25} />
            </div>
          </div>
          <h1 className="w-1/4 text-7xl opacity-60">{year}</h1>
        </div>
      </div>
    </div>
  );
};

export default HOFCardContent;
