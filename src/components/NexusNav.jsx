const NexusNav = () => {
    return (
      <div >
        <nav className="flex  justify-between">
          <a href="/">
          <img src="/images/IConclave.png" 
          className="h-24 p-4"
          alt="Iconclavebg" />
          </a>
          <div className="flex justify-center">
          <ul className="flex gap-24 text-white font-miso text-3xl  items-center">
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#">
              ABOUT
              </a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#">
              LOCALHOST
              </a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#">
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
          <a href="/nexus">
          {/* <img src="/images/lockout_logo.png" className="h-24 p-4" alt="LOCKOUTLOGO" /> */}
          <h1 className=" font-majormono text-5xl m-0 p-6 text-center text-white font-normal" id="NEXUS">
            neXus
          </h1>
          </a>
        </nav>
      </div>
    );
  };
  
  export default NexusNav;
  