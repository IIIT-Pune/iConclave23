/* eslint-disable react/prop-types */
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const Card = ({ name, designation, X, insta, linkedin }) => {
  return (
    <div className="border bg-purple-800 border-white rounded-lg h-36 w-72">
      <div className="flex justify-center flex-col items-center font-miso tracking-widest m-3 p-2">
        <h1 className="text-white text-3xl">{name}</h1>
        <h2 className="text-white text-l">{designation}</h2>
      </div>
      <div className="flex space-x-2 justify-center m-1">
        <a href={X} target="_blank" rel="noopener noreferrer">
          <div>
            <RiTwitterXFill color="white" size={27} />
          </div>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <div>
            <AiFillLinkedin color="white" size={27} />
          </div>
        </a>
        <a href={insta} target="_blank" rel="noopener noreferrer">
          <div className="m-0.5">
            <BsInstagram color="white" size={24} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
