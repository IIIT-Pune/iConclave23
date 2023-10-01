const LockoutNav = () => {
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
            <a href="/lockout/about">
            ABOUT
            </a>
          </li>
          <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
            <a href="/infinity/bitlegion">
            BIT LEGION
            </a>
          </li>
          <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
            <a href="/lockout/guide">
            GUIDELINES
            </a>
          </li>
          <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-white">
            <a href="/lockout/team">
            TEAM
            </a>
          </li>
        </ul>
        </div>
        <a href="/lockout">
        <img src="/images/lockout_logo.png" className="h-24 p-4" alt="LOCKOUTLOGO" />
        </a>
      </nav>
    </div>
  );
};

export default LockoutNav;
