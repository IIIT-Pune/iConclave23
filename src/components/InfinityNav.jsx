import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const InfinityNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-black text-white">
      <a href="/">
        <img
          src="/images/IConclave.png"
          className="h-24 p-4"
          alt="Iconclavebg"
        />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mx-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                  <a href="/tech/infinity">HOME</a>
                </li>
                <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                  <Link to="/tech/infinity/bitlegion">BIT LEGION</Link>
                </li>
                <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                  <Link to="/tech/infinity/team">TEAM</Link>
                </li>
                <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                  <Link to="/tech/infinity/pastevents">PAST EVENTS</Link>
                </li>
                <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                  <Link to="/tech/infinity/halloffame">HALL OF FAME</Link>
                </li>
              </ul>
            </div>
            <Footer textColor={"white"} />
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <a href="/tech/infinity">HOME</a>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/tech/infinity/bitlegion">BIT LEGION</Link>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/tech/infinity/team">TEAM</Link>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/tech/infinity/pastevents">PAST EVENTS</Link>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/tech/infinity/halloffame">HALL OF FAME</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>

      <a href="/tech" className="hidden lg:block">
        <h1
          className="font-nightcore text-2xl m-0 text-center tracking-widest text-white font-normal"
          id="OFFRoadBandit"
        >
          TECHNICAL &nbsp; <span className="text-red-600">EVENTS</span>
        </h1>
      </a>
    </div>
  );
};

export default InfinityNav;
