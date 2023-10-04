import LockoutNav from "./LockoutNav";
import Footer from "./Footer";
import Card from "./LockoutCards";
import { team, headteam } from "../assets/team";

const LockoutTeam = () => {
  return (
    <div
      style={{
        background: "url(/images/lockoutbg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full overflow-y-auto flex flex-col"
    >
      <LockoutNav />
      <div className="flex-grow">
        {/* <div
          className="font-newshape flex justify-center sm:justify-center md:justify-start pt-12 md:pt-16 md:px-20"
          style={{ fontSize: "7rem" }}
        >
          <img
            src="/images/aboutimage.png"
            className="h-16 sm:h-20 md:h-24 lg:h-36"
            alt=""
          />
        </div> */}

        <h1 className="text-6xl text-white py-8 sm:7xl md:text-8xl lg:text-9xl flex justify-center font-nightcore tracking-wider">
          OUR&nbsp;TEAM
          {/* OUR&nbsp;<span className="text-black">T</span> EAM */}
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
export default LockoutTeam;
