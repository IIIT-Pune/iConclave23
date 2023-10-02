import Footer from "../components/Footer";
import StoryQuestNav from "../components/StoryQuestNav";

const StoryQuest = () => {
  return (
    <div
      style={{
        background: "url(/images/StoryQuest_bg.png), black 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col"
    >
      <StoryQuestNav />
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-col text-white">
          <h1 className="text-6xl text-center lg:text-12xl mt-40 font-harryp lg:mt-10">
            STORY QUEST
          </h1>
          <p className="text-3xl lg:text-7xl font-miso lg:-ml-5 text-center">
            YOURS CREATIVITY, OUR CHALLENGE!
          </p>
        </div>

        {/* <div className="flex justify-center items-center mt-48 m-10">
          <h1 className="text-white font-miso border-2 px-5 py-3 text-4xl lg:text-5xl rounded-2xl tracking-wider ">
            REGISTER
          </h1>
        </div> */}
      </div>
      <Footer textColor="white" />

      {/* <div className="bg-[url('/images/StoryQuestbg.png')] text-white min-h-screen flex flex-col bg-cover bg-center"></div> */}
    </div>
  );
};

export default StoryQuest;
