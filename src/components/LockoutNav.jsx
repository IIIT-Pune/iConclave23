import { useState } from "react";
import Footer from "./Footer";
// import { Link } from "react-router-dom";

const LockoutNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <section className="MOBILE-MENU flex lg:hidden items-center justify-between">
        <a href="/">
          <img src="/images/IConclave.png" className="h-16" alt="Iconclavebg" />
        </a>
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
              className="h-8 w-8 text-white"
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
            <ul className="flex flex-col items-center justify-between gap-8 text-xl sm:text-2xl md:text-3xl text-white-600">
              <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                <a href="/tech/lockout">HOME</a>
              </li>
              <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                <a href="/tech/lockout/about">ABOUT</a>
              </li>
              <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                <a href="/tech/lockout/guidelines">GUIDELINES</a>
              </li>
              <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
                <a href="/tech/lockout/team">TEAM</a>
              </li>
            </ul>
          </div>
          <div>
            <Footer textColor={"white"} />
          </div>
        </div>
      </section>
      <nav className="DESKTOP-MENU hidden justify-between lg:flex">
        <a href="/">
          <img
            src="/images/IConclave.png"
            className="p-4 h-16 sm:h-20 md:h-24 lg:h-28"
            alt="Iconclavebg"
          />
        </a>
        <div className="flex justify-center pr-4 md:pr-0">
          <ul className="flex text-white font-miso items-center gap-4 text-xs sm:text-base md:text-xl lg:text-3xl md:gap-8 lg:gap-12">
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/tech/lockout">HOME</a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/tech/lockout/about">ABOUT</a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/tech/lockout/guidelines">GUIDELINES</a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/tech/lockout/team">TEAM</a>
            </li>
          </ul>
        </div>
//         <div className="flex items-center justify-center">
//           <h1 className="font-silkroad text-2xl m-0 p-6 text-center text-white font-normal">
//             <a href="/tech">TECHNICAL EVENTS</a>

        <a href="/tech" className="hidden sm:block">
          <h1 className="font-silkroad text-2xl m-0 p-6 text-center text-white font-normal">
            TECHNICAL EVENTS

          </h1>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        color: white;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: url('/images/lockoutbg.png');
        background-position: top top;
        background-repeat: no-repeat; 
        background-size: cover;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default LockoutNav;
