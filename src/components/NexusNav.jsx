import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-scroll";

const NexusNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between relative">
        <a href="/">
          <img src="/images/IConclave.png" className="h-24" alt="Iconclavebg" />
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <div className="flex">
            <nav className="flex  justify-between items-center">
              <div className="flex justify-center items-center">
                <ul className="flex gap-20 text-white font-miso text-2xl justify-center items-center">
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link to="aboutsection" smooth={true} duration={500}>
                      <li className="hover:border-b-2 pb-1 ">ABOUT</li>
                    </Link>
                  </li>


//                   <li>
//                     {" "}
//                     <a
//                       href="https://www.instagram.com/localhost_iiitp/"
//                       onClick={closeMobileMenu}
//                     >
//                       LOCALHOST
//                     </a>

                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link to="schedule" smooth={true} duration={500}>
                      <li className="hover:border-b-2 pb-1 ">SCHEDULE</li>
                    </Link>
                  </li>
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link to="topics" smooth={true} duration={500}>
                      <li className="hover:border-b-2 pb-1 ">TOPICS</li>
                    </Link>
                  </li>
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link to="FAQs" smooth={true} duration={500}>
                      <li className="hover:border-b-2 pb-1 ">FAQs</li>
                    </Link>

                  </li>

                  {/* <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <a href="#guidelines">GUIDELINES</a>
                  </li> */}
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link to="getintouch" smooth={true} duration={500}>
                      <li className="hover:border-b-2 pb-1 ">GET IN TOUCH</li>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="lg:hidden flex items-center p-4">
          {/* Mobile menu button */}
          <button className="p-4 focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <div></div>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex">
          {/* Show the second logo only in the desktop version */}
          <a href="/tech">
            <h1
              className=" font-majormono text-2xl m-0 p-6 text-center text-white font-normal"
              id="NEXUS"
            >
              technical events
            </h1>
          </a>
        </div>
      </nav>
      {/* Black overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black z-50 flex flex-col items-center justify-center">
          {/* Cross button to close the mobile menu */}
          <div>
            <button
              className="absolute top-4 right-4 p-4 text-white"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="text-white flex-grow justify-center flex flex-col text-xl">
            <div className="flex items-center justify-center">
              
              <ul className="flex flex-col items-center justify-between gap-8 text-xl sm:text-2xl md:text-3xl text-white-600">

                <Link
                  to="aboutsection"
                  onClick={closeMobileMenu}
                  smooth={true}
                  duration={500}
                >
                  <li className="hover:border-b-2 pb-1 ">ABOUT</li>
                </Link>
                <a
                  href="https://www.instagram.com/localhost_iiitp/"
                  onClick={closeMobileMenu}
                >
                  <li>LOCALHOST</li>
                </a>
                <a href="#guidelines" onClick={closeMobileMenu}>
                  <li>GUIDELINES</li>
                </a>
                <a href="#getintouch" onClick={closeMobileMenu}>
                  <li>GET IN TOUCH</li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <Footer textColor={"white"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NexusNav;
