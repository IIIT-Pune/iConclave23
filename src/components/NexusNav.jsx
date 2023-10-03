import { useState } from "react";

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
                <ul className="flex gap-24 text-white font-miso text-3xl justify-center items-center">
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <a href="#about">ABOUT</a>
                  </li>
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <a href="#guidelines">GUIDELINES</a>
                  </li>
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <a href="https://www.instagram.com/localhost_iiitp/">LOCALHOST</a>
                  </li>
                  <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <a href="#team">GET IN TOUCH</a>
                  </li>
                </ul>
              </div>
            </nav>
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
          <a href="/nexus">
            <h1
              className=" font-majormono text-5xl m-0 p-6 text-center text-white font-normal"
              id="NEXUS"
            >
              neXus
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
              <a href="https://www.instagram.com/localhost_iiitp/" onClick={closeMobileMenu}>
                <li>LOCALHOST</li>
              </a>
              <a href="#guidelines" onClick={closeMobileMenu}>
                <li>GUIDELINES</li>
              </a>
              <a href="team" onClick={closeMobileMenu}>
                <li>GET IN TOUCH</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NexusNav;
