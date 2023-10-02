/* eslint-disable react/no-unescaped-entities */
import { offroadguidelines } from "../assets/offroadguidelines";
import OffRoadNav from "../components/OffRoadNav";

const Rofies1 = () => {
  return (
    <div
      style={{
        background: "url(/images/bg_off.png), #000000 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <OffRoadNav />
      <div className="flex justify-center">
        <div className="text-white pt-1 lg:pt-16 flex flex-col gap-1">
          <h1 className=" font-silkroad text-7xl lg:block sm:text-8xl lg:text-10xl  text-center">
            OFF - ROAD BANDIT
          </h1>
          <p className=" font-miso text-4xl lg:text-8xl text-center lg:-mt-6">
            NAVIGATE, RELAY, TRIUMPH
          </p>

          <div className="flex justify-center items-center mt-36 m-10">
            <h1 className="text-white font-newshape border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider ">
              REGISTER
            </h1>
          </div>
        </div>
      </div>

      <section
        className="min-h-screen bg-yellow-600"
        id="about"
        style={{
          background: "url(/images/off-roadbgblur.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="font-silkroad text-5xl pt-5 lg:p-0 lg:text-10xl text-white ml-10 lg:mt-12"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          ABOUT
        </h1>

        <div className=" font-miso text-2xl lg:text-4xl flex flex-col gap-5 text-white mx-5 lg:mx-20 text-justify">
          <p>
            This event gives a golden opportunity to its participants to show
            off their skills as a Duo. The participating team will deploy their
            carrier bots in{" "}
            <span className="text-cyan-300">"The Wastelands"</span> covered with
            many obstacles and different terrains.
          </p>
          <p>
            The map is divided into two parts (
            <span className="text-red-600">Red</span> and{" "}
            <span className="text-cyan-300">Blue</span>) where each bot has to
            cross their respective course and relay "The Package" to the other
            bot on the other side of the map while dropping it on "delivery zone
            A" where the other bot also has to pick it up and cover their
            respective course and finally drop "The Package" into 'The Delivery
            Zone" as a "<span className="text-red-600">Duo</span>".
          </p>
          <p>
            The entire course will be divided into checkpoints allowing the
            participants to restart from their recent checkpoint in case they
            drop "The Package" or get stuck in some traps.
          </p>
        </div>
      </section>
      <section
        className="min-h-screen bg-yellow-600"
        id="guidelines"
        style={{
          background: "url(/images/off-roadbigbgblur.png), #000000 50%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="font-silkroad text-5xl pt-5 lg:p-0 lg:text-10xl text-white ml-10 lgmt-12"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          GUIDELINES
        </h1>

        <p className=" font-miso text-2xl lg:text-3xl flex flex-col gap-5 text-white mx-5 lg:mx-20 text-justify">
          Teams have to build a manually controlled bot that can do simple tasks
          of gripping objects and putting them in target zones or just picking
          up a package with a scooper blade and dropping it off at the finish
          line(delivery zone), so that it can complete its respective route
          while overcoming the hurdles in its path.
          <div className="text-2xl lg:text-3xl flex flex-col gap-5 mx-5 lg:mx-20 text-justify font-miso">
            {offroadguidelines.map((rule, index) => {
              return (
                <div key={index} className="flex gap-5">
                  <h1>{index + 1}.</h1>
                  <p>{rule}</p>
                </div>
              );
            })}
          </div>
        </p>
        <div className="flex justify-center items-center p-10">
          <h1 className="text-white font-newshape border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider">
            RULEBOOK
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Rofies1;
