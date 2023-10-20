import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-scroll";

const FFNav = () => {
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
      <nav className="flex justify-between backdrop-blur-4 h-28">
        <a href="/">
          {/* Show the first logo in both desktop and mobile versions */}
          <img
            src="/images/IConclave.png"
            className="h-32 p-4"
            alt="Iconclavebg"
          />
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex pl-40 font-miso px-6">
          <div className="text-white text-2xl flex items-center">
            <ul className="flex gap-10 z-10">
              <Link to="about" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1">ABOUT</li>
              </Link>
              <Link to="getintouch" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">KHWAAB</li>
              </Link>
              <Link to="getintouch" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">SPONSORS</li>
              </Link>
              <Link to="getintouch" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">SCHEDULE</li>
              </Link>
              <Link to="getintouch" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">CONTACT US</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-4 justify-center lg:hidden">
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
      </nav>
      {/* Black overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black z-50 flex flex-col items-center justify-center">
          {/* Cross button to close the mobile menu */}
          <button
            className="absolute top-2 right-2 p-2 text-white"
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

          <div className="flex-grow text-white flex items-center justify-center">
            <ul className="flex flex-col items-center justify-between gap-4 text-xl sm:text-2xl md:text-3xl text-white-600">
              <Link
                to="about"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
              >
                <li className="hover:border-b-2 pb-1 ">ABOUT</li>
              </Link>
              <Link
                to="getintouch"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
              >
                <li className="hover:border-b-2 pb-1 ">KHWAAB</li>
              </Link>
              <Link
                to="getintouch"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
              >
                <li className="hover:border-b-2 pb-1 ">SPONSORS</li>
              </Link>
              <Link
                to="getintouch"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
              >
                <li className="hover:border-b-2 pb-1 ">SCHEDULE</li>
              </Link>
              <Link
                to="getintouch"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
              >
                <li className="hover:border-b-2 pb-1 ">CONTACT US</li>
              </Link>
            </ul>
          </div>
          <div>
            <Footer textColor={"white"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FFNav;
