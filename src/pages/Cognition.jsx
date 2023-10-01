/* eslint-disable react/no-unescaped-entities */
import GNavBar from "../components/GNavBar";

const Cognition = () => {
  return (
    <div className="bg-cognitionbg h-full">
      <GNavBar
        club="Q-RIOCITY"
        color="black"
        hcolor="black"
        className="fixed"
      />
      <div className="hero h-screen">
        <div className="flex flex-col items-center">
          <div className=" -mt-5 flex flex-col z-10">
            <h1 className="text-10xl font-veterantypewriter text-center ">
              COGNITION
            </h1>
            <h2 className="text-4xl font-1942 text-right -mt-16">
              decode dazzle dominate
            </h2>
          </div>
          <img
            src="./images/cognition_bg.png"
            alt="bg"
            className="w-[54rem] -mt-10"
          />
        </div>

        <div className="flex justify-center items-center">
          <h1 className="font-punktypewriter border-2 border-black px-5 py-1 text-5xl rounded-lg tracking-wider">
            REGISTER
          </h1>
        </div>
      </div>

      <div className="font-veterantypewriter h-screen" id="about">
        <h1 className="text-9xl  ml-10">ABOUT</h1>
        <div className="text-4xl flex flex-col mx-20 gap-10 text-justify">
          <p>
            Prepare to push the boundaries of your knowledge and embark on an
            exhilarating journey through the world of trivia with the Quiz Club
            Q-riocity's grand presentation,{" "}
            <span className="font-bold">“Cognition"</span>.
          </p>
          <p>
            This ultimate quizzing competition, featured as a part of the
            spectacular i-Conclave, extends a warm invitation to students
            hailing from diverse colleges, urging them to unveil their wit and
            wisdom in an extraordinary battle of brains.
          </p>
          <p>
            Cognition stands apart by not merely testing what you know, but how
            much you can effortlessly recall across a myriad of domains. As you
            journey through Cognition, the stakes soar high, and the rewards
            even higher – for the top teams shall be graced with not only prizes
            but also the grandeur of recognition and the prestige of being
            crowned the ultimate quizzing champions.
          </p>
        </div>
      </div>
      <div className="font-veterantypewriter h-screen" id="club">
        <h1 className="text-9xl  ml-10">Q-RIOCITY</h1>
        <div className="text-3xl flex flex-col mx-20 gap-10 text-justify">
          <p>
            Q-riocity is IIIT Pune's quizzing society, like the{" "}
            <span className="font-bold">
              dead poet's society, minus the poets.
            </span>
          </p>
          <p>
            Q-riocity, also widely known as QRC, is where you interact with your
            seniors, conduct and attend quizzes on topics such as commercial
            aviation to the Mahabharata, discuss the latest geopolitical events
            and analyse them, debate Snape's character arch—whew, all under ONE
            ROOF!!
          </p>
          <p>
            Joining QRC in the first year is relatively simple; you just have to
            show up, but the real achievement lies in maintaining this
            membership past the first year, for which you have to do the
            herculean task of, (any guesses), showing up.
          </p>
          <p>
            In our free time, we're also the exclusive quizmasters of IIIT Pune,
            like the Warden of the Quizzes. We tried calling our club leads
            that, but it didn't stick.
          </p>
          <p>
            We wholeheartedly agree with Stalin's words, "Quantity has a Quality
            of its Own", but he went out of fashion ages ago, and SFs around the
            world have limited membership. So we at QRC follow the same
            principle until it remains in vogue. We may not have as many members
            to form our very own PLA, but those that we do have are surely worth
            more than a pineapple in the 17th century.
          </p>
          <p>
            We may be geeky, nerdy, introverted, uptight, not funny, or grumpy
            when our quiz time slot is usurped, but we shall never be boring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cognition;
