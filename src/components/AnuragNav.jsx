const AnuragNav = () => {
    return (
      <div >
        <nav className="flex  justify-between">
          <a href="/">
          <img src="/images/IConclave.png" 
          className="h-24"
          alt="Iconclavebg" />
          </a>
          <div className="flex justify-center">
          <ul className="flex gap-24 text-white font-miso text-3xl  items-center">
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#about">
              ABOUT
              </a>
            </li>
            <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <a href="#">
              SAAZ
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
          <h1 className="text-4xl font-smarkan p-4 mr-4">anurag</h1>
          
          </a>
        </nav>
      </div>
    );
  };
  
  export default AnuragNav;
  