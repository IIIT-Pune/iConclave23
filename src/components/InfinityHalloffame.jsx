import { iiitp, india, world } from "../assets/Halloffame";
import HOFCard from "./HOFCard";
import InfinityNav from "./InfinityNav";

const InfinityHalloffame = () => {
  return (
    <div>
      <div className="bg-black h-full">
        <InfinityNav/>

        <h1 className="text-5xl text-white pt-8 lg:text-9xl flex justify-center font-nightcore tracking-wider">
          HAll of &nbsp; <span className="text-red-600">F</span>Ame
        </h1>
        <div className="flex flex-col gap-5 items-center lg:gap-4 lg:mt-20 lg:relative">
          <div className="lg:flex lg:justify-center lg:gap-72 ">
            <HOFCard title="INDIA #1" bgcolor="white" ccolor="black" data={india}/>
            <div className="lg:absolute lg:-top-12 z-1">
              <HOFCard title="WORLD #1" bgcolor="red-600" ccolor="white" transy={true} data={world}/>
            </div>
            <HOFCard title="IIIT Pune #1" bgcolor="white" ccolor="black" data={iiitp}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinityHalloffame;
