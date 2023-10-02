/* eslint-disable react/no-unescaped-entities */
import { ffguidelines } from "../assets/ffguidelines";
import FFNav from "../components/FFNav";
import Footer from "../components/Footer";


const FrameFlick = () => {
  return (
    <div className="">
      <div
        style={{
          background: "url(/images/frameflick_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-screen"
      >
        <FFNav />

        <div className="flex justify-center">
          <div className="text-white pt-20 flex-col">
            <h1 className="text-7xl font-grandstander lg:text-10xl text-center pt-20">
              FRAME FLICKS
            </h1>
            <p className=" text-center font-kodchasan lg:text-5xl lg:-mt-12 lg:text-right ">
              your fest your frame
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-32 lg:mt-40 p-10">
  <a href="https://example.com" className="text-white">
    <h1 className="font-majormono border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider 
      transition-transform transform hover:scale-105 hover:font-semibold hover:border-4 hover:border-white hover:ease-in-out">
      register
    </h1>
  </a>
</div>






      </div>

      <div
        className="min-h-screen"
        id="about"
        style={{
          background: "linear-gradient(180deg, #141119 0%, #000 100%)",
        }}
      >
        <h1 className="text-5xl p-5 font-grandstander lg:text-10xl text-white m-0 lg:p-0 lg:ml-10 text-center lg:text-left">
          ABOUT
        </h1>
        <div className="text-2xl font-miso lg:text-4xl flex flex-col gap-5 text-white mx-7 lg:mx-20 text-justify">
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
        id="guidelines"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #0C0C0C 100%)",
        }}
      >
         <h1 className="text-5xl p-5 font-grandstander lg:text-10xl text-white m-0 lg:p-0 lg:ml-10 text-center lg:text-left">
          GUIDELINES
        </h1>
        <div className="text-2xl lg:text-3xl text-white flex flex-col gap-5 mx-7 lg:mx-20 text-justify font-miso">
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
  <a href="https://example.com" className="text-white">
    <h1 className="font-grandstander border-2 px-5 py-3 text-2xl lg:text-4xl rounded-2xl tracking-wider 
      hover:font-semibold hover:border-4 hover:border-white hover:ease-in-out transition-all">
      RULEBOOK
    </h1>
  </a>
</div>
<div
        className="min-h-screen"
        id="horizon"
        style={{
          background: "linear-gradient(180deg, #000001 0%, #000001 100%)",
        }}
      >
         <h1 className="text-5xl p-5 font-grandstander lg:text-10xl text-white m-0 lg:p-0 lg:ml-10 text-center lg:text-left">
          HORIZON
        </h1>
        <div className="text-2xl font-miso lg:text-4xl flex flex-col gap-5 text-white mx-7 lg:mx-20 text-justify">
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
      </div>
      <div style={{
          background: "#000000",
        }}>
      <Footer textColor="white"></Footer>
      </div>
    </div>
  );
};

export default FrameFlick;
