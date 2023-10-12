import InfinityNav from "./InfinityNav";
import { BiLinkExternal } from "react-icons/bi";
import Footer from "./Footer";
const Infinitypastevent = () => {
  return (
    <div className="bg-black h-screen overflow-y-auto flex flex-col">
      <InfinityNav />

      <div className="flex-grow">
        <h1 className="text-5xl text-white py-8 sm:6xl md:text-8xl lg:text-9xl flex justify-center font-nightcore tracking-wider">
          PAST &nbsp; E<span className="text-red-600">V</span>ENTS
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col mt-10 w-11/12 lg:w-10/12">
            <div className="border border-1 h-28 m-4 flex gap-10 items-center justify-between  px-6 lg:px-10 rounded-lg">
              <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl font-miso tracking-wider text-left">
                INFINITY 2k2<span className="text-red-600">2</span>
              </h1>
              <a
                href="https://www.codechef.com/START65?utm_source=codeforces_blog&utm_medium=organic&utm_campaign=START65"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-white text-xs sm:text-xl md:text-2xl lg:text-3xl py-1 px-2  lg:text-3xl font-miso tracking-wider lg:px-8 lg:py-3 flex gap-2 items-center bg-red-600 rounded-xl">
                  <h2>CONTEST LINK</h2>
                  <BiLinkExternal />
                </div>
              </a>
            </div>

            <div className="border border-1 h-28 m-4 gap-10 flex items-center justify-between px-6 lg:px-10 rounded-lg">
              <a
                href="https://www.codechef.com/INFI2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-red-600 text-xs sm:text-xl md:text-2xl lg:text-3xl py-1 px-2 lg:text-3xl font-miso tracking-wider lg:px-8 lg:py-3 flex lg:gap-2 items-center bg-white rounded-xl">
                  <h2>CONTEST LINK</h2>
                  <BiLinkExternal />
                </div>
              </a>
              <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl font-miso tracking-wider text-right">
                INFINITY 2k2<span className="text-red-600">1</span>
              </h1>
            </div>

            <div className="border border-1 h-28 m-4 flex gap-10 items-center justify-between  px-6 lg:px-10 rounded-lg">
              <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl font-miso tracking-wider text-left">
                INFINITY 2k2<span className="text-red-600">0</span>
              </h1>
              <a
                href="https://www.codechef.com/INFY20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-white text-xs sm:text-xl md:text-2xl lg:text-3xl py-1 px-2  lg:text-3xl font-miso tracking-wider lg:px-8 lg:py-3 flex gap-2 items-center bg-red-600 rounded-xl">
                  <h2>CONTEST LINK</h2>
                  <BiLinkExternal />
                </div>
              </a>
            </div>

            <div className="border border-1 h-28 m-4 flex gap-10 items-center justify-between  px-6 lg:px-10 rounded-lg">
              <a
                href="https://www.codechef.com/INFY2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-red-600 text-xs sm:text-xl md:text-2xl lg:text-3xl py-1 px-2  lg:text-3xl font-miso tracking-wider lg:px-8 lg:py-3 flex gap-2 items-center bg-white rounded-xl">
                  <h2>CONTEST LINK</h2>
                  <BiLinkExternal />
                </div>
              </a>
              <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl font-miso tracking-wider text-right">
                INFINITY 2k1<span className="text-red-600">9</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer textColor="white" />
    </div>
  );
};

export default Infinitypastevent;
