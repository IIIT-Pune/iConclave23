/* eslint-disable react/no-unescaped-entities */
import { ffguidelines } from "../assets/ffguidelines";
import NNNAv from "../components/NNNAV";

const NrityaNova = () => {
  return (
    <div className="">
      <div
        style={{
          background: "url(/images/nritya_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-screen"
      >
        <NNNAv />

        <div className="flex justify-center">
          <div className="text-white pt-20 flex-col">
            <div className="flex flex-col">
              <h1 className=" font-fuzzybubbles text-10xl text-center pt-20">
                NRITYA NOVA
              </h1>
              <p className=" font-miso text-4xl -mt-16 text-right ">
                EVERY STEP TELLS A STORY!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-24 p-10">
          <h1 className="text-white font-majormono border-2 px-5 py-3 text-4xl rounded-2xl tracking-wider ">
            register
          </h1>
        </div>
      </div>

      <div
        className="min-h-screen"
        id="about"
        style={{
          background: "linear-gradient(180deg, #141119 0%, #000 100%)",
        }}
      >
        <h1 className="font-grandstander text-10xl text-white m-0 p-0 ml-10">
          ABOUT
        </h1>
        <div className=" font-miso text-4xl flex flex-col gap-5 text-white mx-20 text-justify">
          <p>
            At the beginning of the fest, a single word will be revealed for
            each team, through the chit system. This word will serve as the
            thematic core for each team’s photography journey.
          </p>
          <p>
            Using the camera or smartphone, the task is to capture a series of
            photographs throughout the fest that resonates with the chosen word.
            Every click should encapsulate the essence of the fest and the
            chosen team.
          </p>
          <p>
            Submit the series of photographs along with a cover image by
            designated deadline. Remarks: Cookie points – transform one of the
            best shots into a stunning edited version. For example, it can be
            converted to a splash photograph.
          </p>
          <p>
            Splash photography involves isolating the subject against a dynamic,
            colorful backdrop, creating a visual masterpiece.You can use this
            edited masterpiece as your cover image.
          </p>
        </div>
      </div>
      <div
        className="min-h-screen"
        id="about"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #000001 100%)",
        }}
      >
        <h1 className="font-grandstander text-10xl text-white m-0 p-0 ml-10">
          HORIZON
        </h1>
        <div className=" font-miso text-4xl flex flex-col gap-5 text-white mx-20 text-justify">
          <p>
            Horizon, established in January 2022 with the ideology of "capture
            imagination," continues to steadfastly pursue and expand upon this
            captivating concept. As the photography and videography club of IIIT
            Pune, Horizon has swiftly emerged as one of the institute's most
            dynamic and youthful clubs. Its ubiquitous presence is felt
            throughout campus events, where it skillfully encapsulates cherished
            memories. This proactive involvement has rightfully earned Horizon
            the designation of being IIIT Pune's dedicated media house.
          </p>
          <p>
            The scope of Horizon extends beyond mere media coverage. The club
            fervently fosters an environment of creativity and engagement. Among
            its diverse initiatives, Horizon hosts contests tailored for
            newcomers, fostering an inclusive atmosphere. With an ambitious
            vision in mind, the club is actively targeting and working towards
            organizing its flagship annual photography competition, an event
            eagerly anticipated by the IIIT Pune community.
          </p>
        </div>
      </div>
      <div
        className="min-h-screen"
        id="about"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #0C0C0C 100%)",
        }}
      >
        <h1 className="font-grandstander text-10xl text-white m-0 p-0 ml-10">
          GUIDELINES
        </h1>
        <div className="text-3xl text-white flex flex-col gap-5 mx-20 text-justify font-miso">
          {ffguidelines.map((rule, index) => {
            return (
              <div key={index} className="flex gap-5">
                <h1>{index + 1}.</h1>
                <p>{rule}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center p-10">
          <h1 className="text-white font-grandstander border-2 px-5 py-3 text-4xl rounded-2xl tracking-wider">
            RULEBOOK
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NrityaNova;
