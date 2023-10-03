import { useState } from "react";
import { Link } from "react-router-dom";

const LockoutNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <section className="MOBILE-MENU flex md:hidden items-center justify-between">
        <a href="/">
          <img src="/images/IConclave.png" className="h-16" alt="Iconclavebg" />
        </a>
        <div
          className="HAMBURGER-ICON space-y-2 mr-8"
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
          <ul className="flex flex-col items-center justify-between min-h-[250px] text-white-600">
            <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
              <a href="/lockout/about">ABOUT</a>
            </li>
            <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
              <a href="/infinity/bitlegion">BIT LEGION</a>
            </li>
            <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
              <a href="/lockout/guidelines">GUIDELINES</a>
            </li>
            <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
              <a href="/lockout/team">TEAM</a>
            </li>
          </ul>
        </div>
      </section>
      <nav className="DESKTOP-MENU hidden flex justify-between md:flex">
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
              <a href="/lockout/about">ABOUT</a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/infinity/bitlegion">BIT LEGION</a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/lockout/guidelines">GUIDELINES</a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="/lockout/team">TEAM</a>
            </li>
          </ul>
        </div>
        <a href="/lockout" className="hidden sm:block">
          <img
            src="/images/lockout_logo.png"
            className="px-8 py-4 h-20 md:h-24 lg:h-28"
            alt="LOCKOUTLOGO"
          />
        </a>
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
