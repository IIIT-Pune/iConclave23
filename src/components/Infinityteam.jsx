/* eslint-disable react/jsx-key */
import InfinityNav from "./InfinityNav";
import Card from "./InfinityCards";
import { team, headteam } from "../assets/team";
import Footer from "./Footer";
const Infinityteam = () => {
  return (
    <div className="bg-black h-full flex flex-col">
      <InfinityNav />
      <div className="flex-grow">
        <h1 className="text-6xl text-white py-8 sm:7xl md:text-8xl lg:text-9xl flex justify-center font-nightcore tracking-wider">
          OUR T <span className="text-red-600">E</span>AM
        </h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-14 py-10 pb-4 lg:pt-16 lg:pb-0">
            {headteam.map((member) => {
              return (
                <Card
                  key={member.name}
                  name={member.name.toUpperCase()}
                  designation={member.designation.toUpperCase()}
                  github={member.github}
                  linkedin={member.linkedin}
                  insta={member.insta}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-14 py-10 lg:py-16">
            {team.map((member) => {
              // console.log(member);
              return (
                <Card
                  key={member.name}
                  name={member.name.toUpperCase()}
                  designation={member.designation.toUpperCase()}
                  github={member.github}
                  linkedin={member.linkedin}
                  insta={member.insta}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer textColor="white"></Footer>
    </div>
  );
};

export default Infinityteam;
