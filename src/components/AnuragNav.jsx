import { useState } from "react";

const AnuragNav = () => {
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
          {/* Show the first logo in both desktop and mobile versions */}
          <img
            src="/images/IConclave.png"
            className="h-24 p-4"
            alt="Iconclavebg"
          />
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <div className="text-white text-2xl flex items-center">
            <ul className="flex gap-24 ">
              <a href="#about" className="hover:border-b-2 pb-1 ">
                <li>ABOUT</li>
              </a>
              <a
                href="#horizon"
                className="hover:border-b-2 pb-1 "
              >
                <li>SAAZ</li>
              </a>
              <a
                href="#guidelines"
                className="hover:border-b-2 pb-1 "
              >
                <li>GUIDELINES</li>
              </a>
              <a
                href="#getintouch"
                className="hover:border-b-2 pb-1 "
              >
                <li>GET IN TOUCH</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="lg:hidden">
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
          <a href="/rofies1">
            <h1
              className="font-smarkan text-4xl m-0 p-6 text-center text-white font-normal"
              id="OFFRoadBandit"
            >
              ANURAG
            </h1>
          </a>
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

          <div className="text-white text-2xl">
            <ul className="flex flex-col gap-5">
              <a href="#about" onClick={closeMobileMenu}>
                <li>ABOUT</li>
              </a>
              <a href="#horizon" onClick={closeMobileMenu}>
                <li>ANURAG</li>
              </a>
              <a href="#guidelines" onClick={closeMobileMenu}>
                <li>GUIDELINES</li>
              </a>
              <a href="#guidelines" onClick={closeMobileMenu}>
                <li>GET IN TOUCH</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnuragNav;
