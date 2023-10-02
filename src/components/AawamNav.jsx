const AawamNav = () => {
    return (
      <div className="">
        <nav className="flex  justify-between">
          <a href="/">
          <img src="/images/IConclave.png" 
          className="h-24"
          alt="Iconclavebg" />
          </a>
          <div className="flex justify-center mr-3">
          <ul className="flex gap-24 text-white font-miso text-3xl  items-center">
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#about">
              ABOUT
              </a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#">
                ABHINAY
              </a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#guide">
              GUIDELINES
              </a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#">
              TEAM
              </a>
            </li>
          </ul>
          </div>
          <a href="/aawazeaawam">
        <h1 className="text-white font-monoton text-2xl p-6">Aawaz-E-Aawam</h1>
        {/* <img src="./images/aawazeaawam.png" alt="aawazeaawam" className="h-28 -mt-4 p-2" /> */}
          </a>
        </nav>
      </div>
    );
  };
  
  export default AawamNav;
  